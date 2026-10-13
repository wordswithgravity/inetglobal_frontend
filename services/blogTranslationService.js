/**
 * Blog Translation Service
 * Handles field-level translation extraction, reassembly, and MongoDB caching
 */

const crypto = require('crypto');
const BlogTranslation = require('../models/BlogTranslation');
const translationService = require('./translationService');

/**
 * Generate a deterministic content version hash based on translatable fields
 */
const getContentVersion = (blog) => {
  const contentString = JSON.stringify({
    title: blog.title || '',
    excerpt: blog.excerpt || '',
    sections: blog.sections || [],
    authorRole: blog.authorRole || '',
    authorBio: blog.authorBio || '',
  });
  return crypto.createHash('md5').update(contentString).digest('hex');
};

/**
 * Invalidate cached translations for a specific blog when updated or deleted
 */
const invalidateBlogTranslations = async (blogId) => {
  try {
    if (!blogId) return;
    await BlogTranslation.deleteMany({ blogId });
    console.log(`[blogTranslationService] Invalidated cache for blog: ${blogId}`);
  } catch (error) {
    console.error(`[blogTranslationService] Cache invalidation error for ${blogId}:`, error.message);
  }
};

/**
 * Translate a complete single blog post with MongoDB caching
 */
const translateBlogDocument = async (blogDoc, targetLang, sourceLang = 'en') => {
  if (!blogDoc) return null;

  const target = translationService.normalizeLanguageCode(targetLang);
  const source = translationService.normalizeLanguageCode(sourceLang || 'en');

  // Convert Mongoose document to plain JavaScript object
  const blog = typeof blogDoc.toObject === 'function' ? blogDoc.toObject() : { ...blogDoc };

  // If target language is same as source, return original
  if (!target || target === source) {
    return {
      ...blog,
      language: source,
      isTranslated: false,
    };
  }

  const contentVersion = getContentVersion(blog);

  // 1. Check MongoDB cache first
  try {
    const cached = await BlogTranslation.findOne({
      blogId: blog._id,
      language: target,
    });

    if (cached && cached.contentVersion === contentVersion) {
      return {
        ...blog,
        title: cached.title,
        excerpt: cached.excerpt,
        sections: cached.sections || blog.sections,
        authorRole: cached.authorRole || blog.authorRole,
        authorBio: cached.authorBio || blog.authorBio,
        language: target,
        isTranslated: true,
        cached: true,
      };
    }
  } catch (cacheErr) {
    console.warn('[blogTranslationService] Cache read error, continuing translation:', cacheErr.message);
  }

  // 2. Collect all translatable text items into a flat queue for batch translation
  const textQueue = [];
  const addText = (text, assignCallback, isHtml = false) => {
    if (typeof text === 'string' && text.trim()) {
      textQueue.push({ text, assign: assignCallback, isHtml });
    }
  };

  let translatedTitle = blog.title;
  addText(blog.title, (val) => {
    translatedTitle = val;
  });

  let translatedExcerpt = blog.excerpt;
  addText(blog.excerpt, (val) => {
    translatedExcerpt = val;
  });

  let translatedAuthorRole = blog.authorRole || '';
  if (blog.authorRole) {
    addText(blog.authorRole, (val) => {
      translatedAuthorRole = val;
    });
  }

  let translatedAuthorBio = blog.authorBio || '';
  if (blog.authorBio) {
    addText(blog.authorBio, (val) => {
      translatedAuthorBio = val;
    });
  }

  // Deep clone sections for safe in-place assignment
  const translatedSections = (blog.sections || []).map((sec) => {
    const secClone = JSON.parse(JSON.stringify(sec));

    // Section heading
    if (secClone.heading) {
      addText(secClone.heading, (val) => {
        secClone.heading = val;
      });
    }

    // Section HTML content (preserve markup)
    if (secClone.contentHtml) {
      addText(
        secClone.contentHtml,
        (val) => {
          secClone.contentHtml = val;
        },
        true // isHtml
      );
    }

    // Paragraphs
    if (Array.isArray(secClone.paragraphs)) {
      secClone.paragraphs.forEach((p, pIdx) => {
        addText(p, (val) => {
          secClone.paragraphs[pIdx] = val;
        });
      });
    }

    // Content points / bullets
    if (Array.isArray(secClone.contentPoints)) {
      secClone.contentPoints.forEach((cp, cpIdx) => {
        addText(cp, (val) => {
          secClone.contentPoints[cpIdx] = val;
        });
      });
    }

    // Quote
    if (secClone.quote) {
      addText(secClone.quote, (val) => {
        secClone.quote = val;
      });
    }

    // Key takeaways
    if (Array.isArray(secClone.keyTakeaways)) {
      secClone.keyTakeaways.forEach((kt, ktIdx) => {
        addText(kt, (val) => {
          secClone.keyTakeaways[ktIdx] = val;
        });
      });
    }

    // Table data headers & rows
    if (secClone.tableData) {
      if (Array.isArray(secClone.tableData.headers)) {
        secClone.tableData.headers.forEach((h, hIdx) => {
          addText(h, (val) => {
            secClone.tableData.headers[hIdx] = val;
          });
        });
      }
      if (Array.isArray(secClone.tableData.rows)) {
        secClone.tableData.rows.forEach((row, rIdx) => {
          if (Array.isArray(row)) {
            row.forEach((cell, cIdx) => {
              addText(cell, (val) => {
                secClone.tableData.rows[rIdx][cIdx] = val;
              });
            });
          }
        });
      }
    }

    // Section image caption / alt
    if (secClone.sectionImage) {
      if (secClone.sectionImage.caption) {
        addText(secClone.sectionImage.caption, (val) => {
          secClone.sectionImage.caption = val;
        });
      }
      if (secClone.sectionImage.alt) {
        addText(secClone.sectionImage.alt, (val) => {
          secClone.sectionImage.alt = val;
        });
      }
    }

    return secClone;
  });

  // 3. Separate plain text and HTML items for optimal LibreTranslate processing
  const plainTextItems = textQueue.filter((item) => !item.isHtml);
  const htmlItems = textQueue.filter((item) => item.isHtml);

  // Batch translate plain text
  if (plainTextItems.length > 0) {
    const rawTexts = plainTextItems.map((item) => item.text);
    const results = await translationService.translateBatch(
      rawTexts,
      target,
      source,
      'text'
    );
    results.forEach((translatedStr, idx) => {
      plainTextItems[idx].assign(translatedStr);
    });
  }

  // Translate HTML items individually with format: 'html'
  for (const item of htmlItems) {
    try {
      const translatedHtml = await translationService.translateText(
        item.text,
        target,
        source,
        'html'
      );
      item.assign(translatedHtml);
    } catch (err) {
      console.warn('[blogTranslationService] Failed to translate HTML node, keeping original:', err.message);
    }
  }

  // 4. Save into MongoDB BlogTranslation cache
  try {
    await BlogTranslation.findOneAndUpdate(
      { blogId: blog._id, language: target },
      {
        blogId: blog._id,
        language: target,
        contentVersion,
        title: translatedTitle,
        excerpt: translatedExcerpt,
        sections: translatedSections,
        authorRole: translatedAuthorRole,
        authorBio: translatedAuthorBio,
      },
      { upsert: true, new: true }
    );
  } catch (saveErr) {
    console.error('[blogTranslationService] Error saving translation to database cache:', saveErr.message);
  }

  // 5. Return assembled translated blog response
  return {
    ...blog,
    title: translatedTitle,
    excerpt: translatedExcerpt,
    sections: translatedSections,
    authorRole: translatedAuthorRole,
    authorBio: translatedAuthorBio,
    language: target,
    isTranslated: true,
    cached: false,
  };
};

/**
 * Translate a list of blogs (titles and excerpts) with cache support
 */
const translateBlogList = async (blogs, targetLang, sourceLang = 'en') => {
  if (!Array.isArray(blogs) || blogs.length === 0) return [];

  const target = translationService.normalizeLanguageCode(targetLang);
  const source = translationService.normalizeLanguageCode(sourceLang || 'en');

  if (!target || target === source) {
    return blogs;
  }

  return Promise.all(
    blogs.map(async (blogDoc) => {
      const blog = typeof blogDoc.toObject === 'function' ? blogDoc.toObject() : { ...blogDoc };
      const contentVersion = getContentVersion(blog);

      // Check if full or partial translation exists in DB
      try {
        const cached = await BlogTranslation.findOne({
          blogId: blog._id,
          language: target,
        });

        if (cached && cached.contentVersion === contentVersion) {
          return {
            ...blog,
            title: cached.title,
            excerpt: cached.excerpt,
            language: target,
            isTranslated: true,
          };
        }
      } catch (err) {
        // Continue to on-demand translation
      }

      // If not cached, translate title and excerpt
      try {
        const [translatedTitle, translatedExcerpt] = await translationService.translateBatch(
          [blog.title, blog.excerpt],
          target,
          source,
          'text'
        );

        return {
          ...blog,
          title: translatedTitle || blog.title,
          excerpt: translatedExcerpt || blog.excerpt,
          language: target,
          isTranslated: true,
        };
      } catch (err) {
        return blog;
      }
    })
  );
};

module.exports = {
  translateBlogDocument,
  translateBlogList,
  invalidateBlogTranslations,
};
