"use client";
import Image from "next/image";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/Blog/BlogCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchBlogBySlug,
  fetchPublishedBlogs,
  type BlogItem,
} from "../store/slices/blogSlice";
import { getBlogTranslations } from "../data/blogTranslations";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Tag,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Table as TableIcon,
  BarChart3,
  Layers,
  ChevronRight,
  BookOpen,
  Loader2,
} from "lucide-react";

interface BlogDetailsProps {
  slug?: string;
  initialBlog?: BlogItem | null;
  onNavigateBack?: () => void;
}


export const BlogDetails: React.FC<BlogDetailsProps> = ({
  slug,
  initialBlog,
  onNavigateBack,
}) => {

  const dispatch = useAppDispatch();
  const { currentBlog, blogs, loading } = useAppSelector(
    (state) => state.blog
  );
  const selectedLanguage = useAppSelector(
    (state) => state.language.selectedLanguage
  );
  const t = getBlogTranslations(selectedLanguage);

  // Determine current slug from props, URL hash, or pathname
  const getCurrentSlug = (): string => {
    if (slug) return slug;
    if (typeof window === "undefined") return "";
    if (window.location.hash) {
      const clean = window.location.hash.replace(/^#\/?/, "");
      if (clean && clean !== "blog" && clean !== "blogs") return clean;
    }
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    if (pathParts.length >= 2 && pathParts[0] === "blog") {
      return pathParts[1];
    }
    return "";
  };

  const currentSlug = getCurrentSlug();

  // Load from Redux API on mount, slug change, or language change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (currentSlug) {
      dispatch(
        fetchBlogBySlug({ identifier: currentSlug, lang: selectedLanguage })
      );
    }
    dispatch(fetchPublishedBlogs({ lang: selectedLanguage }));
  }, [currentSlug, dispatch, selectedLanguage]);

  // Active post only from real backend data (no mock/fake fallback)
  const post =
    (currentBlog && currentBlog.slug === currentSlug ? currentBlog : null) ||
    (initialBlog && initialBlog.slug === currentSlug ? initialBlog : null);

  // Related posts from real backend blogs only
  const relatedPosts = (blogs || [])
    .filter(
      (b) =>
        b.slug !== currentSlug &&
        (post?.category ? b.category === post.category : true)
    )
    .slice(0, 3)
    .map((b) => ({
      id: (b._id || b.id || b.slug) as string,
      slug: b.slug,
      title: b.title,
      excerpt: b.excerpt,
      category: b.category,
      readTime: b.readTime,
      date: b.date,
      author: b.author,
      authorRole: b.authorRole,
      imageUrl: b.imageUrl,
      featured: b.featured,
    }));

  const handleShare = () => {
    if (!post) return;
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert(t.linkCopied);
    }
  };

  // 1. Loading State
  if (loading && !post) {
    return (
      <div className="min-h-screen bg-[#EEF2EB] text-slate-900 flex flex-col font-sans">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-3">
          <Loader2 className="w-8 h-8 text-[#83184d] animate-spin" />
          <p className="text-sm font-semibold text-slate-600">
            {t.loadingDetail}
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  // 2. Empty / Not Found State (when there is no blog in backend)
  if (!post) {
    return (
      <div className="min-h-screen bg-[#EEF2EB] text-slate-900 flex flex-col font-sans">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 text-center space-y-4 max-w-xl mx-auto my-auto">
          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#83184d] shadow-sm">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.articleNotFound}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            {t.articleNotFoundDesc}
          </p>
          <div className="pt-2">
            <Link href="/blog" onClick={(e) => { if (onNavigateBack) { e.preventDefault(); onNavigateBack(); } }} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#83184d] hover:bg-[#6c143f] text-white text-xs sm:text-sm font-semibold transition shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backToArticles}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // 3. Render Real Article Details
  return (
    <div className="min-h-screen bg-[#EEF2EB] text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Top Breadcrumb & Back Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-30 px-3 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto py-3.5 flex items-center justify-between">
          <Link href="/blog" onClick={(e) => { if (onNavigateBack) { e.preventDefault(); onNavigateBack(); } }} className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToArticles}
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF2EB] text-slate-700 border border-slate-200">
              {post.category}
            </span>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition cursor-pointer"
              title="Share article"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.share}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Hero Header Section - max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 */}
      <header className="w-full bg-[#EEF2EB] pt-6 sm:pt-10 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
          {/* Category & Read Time */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#83184d]/10 text-[#83184d] border border-[#83184d]/20">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>

            <span>•</span>

            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readTime}
            </span>

            <span>•</span>

            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {post.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-semibold text-[#102038] tracking-tight leading-[1.15] max-w-5xl">
            {post.title}
          </h1>

          {/* Excerpt / Lead */}
          <p className="text-[15px] sm:text-[17px] text-[#4e5e70] leading-relaxed max-w-4xl">
            {post.excerpt}
          </p>

          {/* Author Block */}
          <div className="pt-2 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md">
              {post.author ? post.author.charAt(0) : "I"}
            </div>

            <div>
              <div className="text-sm font-bold text-slate-900">
                {post.author}
              </div>

              <div className="text-xs text-slate-500">{post.authorRole}</div>
            </div>
          </div>
        </div>
      </header>

      {/* 4. Article Main Content - max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 */}
      <main className="w-full py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto space-y-8 sm:space-y-12">
          {/* Featured Hero Image */}
          <div className="w-full aspect-21/9 max-h-[520px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-100 relative">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              unoptimized={!post.imageUrl.startsWith('/') && !post.imageUrl.includes('inetglobalservices.com') && !post.imageUrl.includes('unsplash.com')}
            />
          </div>

          {/* Content Sections Card */}
          <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 space-y-10 sm:space-y-14 text-slate-700 leading-relaxed">
            {post.sections &&
              post.sections.map((section, idx) => (
                <section key={idx} className="space-y-6">
                  {/* Section Heading */}
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#83184d] shrink-0" />
                    {section.heading}
                  </h2>

                  {/* Paragraphs */}
                  {section.paragraphs &&
                    section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-base sm:text-lg leading-relaxed text-slate-600"
                      >
                        {p}
                      </p>
                    ))}

                  {/* In-Between Image Uploaded to Cloudinary */}
                  {section.sectionImage?.url && (
                    <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
                      <Image
                        src={section.sectionImage.url}
                        alt={
                          section.sectionImage.alt ||
                          section.sectionImage.caption ||
                          section.heading
                        }
                        width={1200}
                        height={600}
                        className="w-full max-h-[460px] object-cover"
                        unoptimized
                      />
                      {section.sectionImage.caption && (
                        <div className="p-3 bg-slate-100 text-center text-xs font-medium text-slate-500 border-t border-slate-200">
                          {section.sectionImage.caption}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bullet Content Points */}
                  {section.contentPoints && section.contentPoints.length > 0 && (
                    <div className="my-6 p-6 rounded-2xl bg-[#EEF2EB]/60 border border-slate-200/90 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#83184d] flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        {t.keyHighlights}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {section.contentPoints.map((point, ptIdx) => (
                          <div
                            key={ptIdx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 shadow-xs"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Embedded Table Data */}
                  {section.tableData &&
                    section.tableData.headers &&
                    section.tableData.headers.length > 0 && (
                      <div className="my-8 space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                          <TableIcon className="w-4 h-4 text-[#83184d]" />
                          {t.comparisonTable}
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                          <table className="w-full text-left text-sm border-collapse">
                            <thead>
                              <tr className="bg-slate-900 text-white font-semibold">
                                {section.tableData.headers.map((h, hI) => (
                                  <th
                                    key={hI}
                                    className="p-3.5 border-b border-slate-800 tracking-wider text-xs uppercase"
                                  >
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                              {section.tableData.rows.map((row, rI) => (
                                <tr
                                  key={rI}
                                  className={
                                    rI % 2 === 0 ? "bg-white" : "bg-[#EEF2EB]/30"
                                  }
                                >
                                  {row.map((cell, cI) => (
                                    <td
                                      key={cI}
                                      className="p-3.5 text-slate-700 font-normal"
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                  {/* Embedded Graph / Analytics Chart */}
                  {section.graphData &&
                    section.graphData.data &&
                    section.graphData.data.length > 0 && (
                      <div className="my-8 p-6 rounded-2xl bg-slate-900 text-white shadow-lg space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <div className="flex items-center gap-2 text-sm font-bold">
                            <BarChart3 className="w-4 h-4 text-pink-400" />
                            {section.graphData.title || t.performanceMetrics}
                          </div>
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                            {section.graphData.type || "Stats"}
                          </span>
                        </div>

                        {/* Visual Bar representation */}
                        <div className="space-y-3 pt-2">
                          {section.graphData.data.map((item, gIdx) => {
                            const maxValue = Math.max(
                              ...section.graphData!.data.map((d) => d.value),
                              100
                            );
                            const percent = Math.min(
                              100,
                              Math.round((item.value / maxValue) * 100)
                            );

                            return (
                              <div key={gIdx} className="space-y-1">
                                <div className="flex justify-between text-xs text-slate-300 font-medium">
                                  <span>{item.label}</span>
                                  <span className="font-mono font-bold text-white">
                                    {item.value}%
                                  </span>
                                </div>
                                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                                  <div
                                    className="h-full rounded-full transition-all duration-700"
                                    style={{
                                      width: `${percent}%`,
                                      backgroundColor:
                                        item.color ||
                                        (gIdx % 2 === 0 ? "#ec4899" : "#10b981"),
                                    }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                  {/* Embedded Links */}
                  {section.links && section.links.length > 0 && (
                    <div className="my-6 flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold uppercase text-slate-400">
                        {t.relatedResources}
                      </span>
                      {section.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EEF2EB] hover:bg-[#83184d] hover:text-white text-slate-800 text-xs font-semibold border border-slate-200 transition shadow-xs cursor-pointer"
                        >
                          <span>{link.text}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Quote Callout */}
                  {section.quote && (
                    <blockquote className="my-6 p-6 sm:p-8 rounded-2xl bg-[#EEF2EB] border-l-4 border-[#83184d] text-slate-800 font-medium italic text-base sm:text-lg leading-relaxed shadow-xs">
                      &ldquo;{section.quote}&rdquo;
                    </blockquote>
                  )}

                  {/* Key Takeaways */}
                  {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                    <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#83184d]" />
                        {t.keyInsights}
                      </div>

                      <ul className="space-y-2.5">
                        {section.keyTakeaways.map((item, tIdx) => (
                          <li
                            key={tIdx}
                            className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700"
                          >
                            <ChevronRight className="w-4 h-4 text-[#83184d] shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}

            {/* Tags Bar */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase text-slate-400 mr-2">
                  {t.tagsLabel}
                </span>

                {post.tags.map((tagItem) => (
                  <span
                    key={tagItem}
                    className="px-3 py-1 rounded-full bg-[#EEF2EB] text-slate-700 text-xs font-semibold border border-slate-200"
                  >
                    #{tagItem}
                  </span>
                ))}
              </div>
            )}

            {/* Author Bio Card */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#83184d] to-pink-500 flex items-center justify-center font-bold text-2xl shrink-0 shadow-md">
                {post.author ? post.author.charAt(0) : "I"}
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <div className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                  {post.author}

                  {post.authorRole && (
                    <span className="text-xs font-normal text-slate-400">
                      ({post.authorRole})
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {post.authorBio || "iNet Global Communications Team"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 5. Related Articles Section (only if real related posts exist) */}
      {relatedPosts.length > 0 && (
        <section className="w-full py-12 sm:py-16 bg-white border-t border-slate-200 px-3 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#83184d]">
                  {t.keepReading}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {t.relatedInsights}
                </h3>
              </div>

              <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-[#83184d] hover:text-[#5f1037]"
              >
                {t.viewAllArticles}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.id} post={rPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Global Footer */}
      <Footer />
    </div>
  );
};

export default BlogDetails;
