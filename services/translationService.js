/**
 * Translation Service for iNetGlobal Backend
 * Communicates with locally hosted LibreTranslate instance
 */

const LIBRETRANSLATE_URL =
  process.env.LIBRETRANSLATE_URL || 'http://127.0.0.1:5000';
const LIBRETRANSLATE_API_KEY = process.env.LIBRETRANSLATE_API_KEY || '';
const TRANSLATION_TIMEOUT_MS = parseInt(
  process.env.TRANSLATION_TIMEOUT_MS || '15000',
  10
);

// In-memory cache for supported languages
let cachedLanguages = null;
let lastLanguageFetchTime = 0;
const LANGUAGE_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

// Simple in-memory translation cache for small repeated strings
const textTranslationCache = new Map();
const MAX_TEXT_CACHE_SIZE = 1000;

/**
 * Fetch supported languages from LibreTranslate /languages endpoint
 */
const getSupportedLanguages = async () => {
  const now = Date.now();
  if (cachedLanguages && now - lastLanguageFetchTime < LANGUAGE_CACHE_TTL_MS) {
    return cachedLanguages;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TRANSLATION_TIMEOUT_MS);

    const response = await fetch(`${LIBRETRANSLATE_URL}/languages`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`LibreTranslate /languages returned HTTP ${response.status}`);
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      cachedLanguages = data.map((lang) => ({
        code: lang.code,
        name: lang.name,
        targets: Array.isArray(lang.targets) ? lang.targets : [],
      }));
      lastLanguageFetchTime = now;
      return cachedLanguages;
    }

    return cachedLanguages || [];
  } catch (error) {
    console.warn(`[translationService] Could not fetch languages from ${LIBRETRANSLATE_URL}:`, error.message);
    return cachedLanguages || [
      { code: 'en', name: 'English' },
      { code: 'hi', name: 'Hindi' },
      { code: 'es', name: 'Spanish' },
      { code: 'fr', name: 'French' },
      { code: 'de', name: 'German' },
      { code: 'ar', name: 'Arabic' },
    ];
  }
};

/**
 * Normalize and resolve language code (e.g., 'zh' -> 'zh-Hans')
 */
const normalizeLanguageCode = (code) => {
  if (!code || typeof code !== 'string') return 'en';
  const clean = code.trim().toLowerCase();
  if (clean === 'zh' || clean === 'zh-cn') return 'zh-Hans';
  if (clean === 'zh-tw') return 'zh-Hant';
  if (clean === 'pt-br') return 'pt-BR';
  return clean;
};

/**
 * Check if a language is supported by the LibreTranslate instance
 */
const isLanguageSupported = async (code) => {
  if (!code) return false;
  const normalized = normalizeLanguageCode(code);
  const languages = await getSupportedLanguages();
  return languages.some(
    (l) => l.code === normalized || l.code.toLowerCase() === normalized
  );
};

/**
 * Low-level call to LibreTranslate /translate endpoint
 */
const callLibreTranslate = async (q, target, source = 'en', format = 'text') => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TRANSLATION_TIMEOUT_MS);

  const payload = {
    q,
    source,
    target,
    format,
  };

  if (LIBRETRANSLATE_API_KEY) {
    payload.api_key = LIBRETRANSLATE_API_KEY;
  }

  try {
    const response = await fetch(`${LIBRETRANSLATE_URL}/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errBody = await response.text().catch(() => '');
      throw new Error(
        `LibreTranslate returned HTTP ${response.status}: ${errBody || response.statusText}`
      );
    }

    const data = await response.json();
    return data.translatedText;
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
};

/**
 * Translate a single string
 */
const translateText = async (text, targetLang, sourceLang = 'en', format = 'text') => {
  if (!text || typeof text !== 'string' || !text.trim()) {
    return text;
  }

  const src = normalizeLanguageCode(sourceLang);
  const tgt = normalizeLanguageCode(targetLang);

  if (src === tgt) {
    return text;
  }

  // Check in-memory cache
  const cacheKey = `${src}:${tgt}:${format}:${text}`;
  if (textTranslationCache.has(cacheKey)) {
    return textTranslationCache.get(cacheKey);
  }

  try {
    const translated = await callLibreTranslate(text, tgt, src, format);
    if (typeof translated === 'string' && translated.trim()) {
      if (textTranslationCache.size > MAX_TEXT_CACHE_SIZE) {
        textTranslationCache.clear();
      }
      textTranslationCache.set(cacheKey, translated);
      return translated;
    }
    return text;
  } catch (error) {
    console.error(`[translationService] Translation error (${src} -> ${tgt}):`, error.message);
    throw error;
  }
};

/**
 * Translate multiple texts in a single batch request
 */
const translateBatch = async (texts, targetLang, sourceLang = 'en', format = 'text') => {
  if (!Array.isArray(texts) || texts.length === 0) {
    return [];
  }

  const src = normalizeLanguageCode(sourceLang);
  const tgt = normalizeLanguageCode(targetLang);

  if (src === tgt) {
    return texts;
  }

  // Identify non-empty items to translate
  const indicesToTranslate = [];
  const queryArray = [];

  texts.forEach((text, idx) => {
    if (typeof text === 'string' && text.trim()) {
      indicesToTranslate.push(idx);
      queryArray.push(text);
    }
  });

  if (queryArray.length === 0) {
    return [...texts];
  }

  try {
    const result = await callLibreTranslate(queryArray, tgt, src, format);
    const output = [...texts];

    if (Array.isArray(result)) {
      indicesToTranslate.forEach((originalIdx, i) => {
        output[originalIdx] = result[i] || texts[originalIdx];
      });
    } else if (typeof result === 'string' && indicesToTranslate.length === 1) {
      output[indicesToTranslate[0]] = result;
    }

    return output;
  } catch (error) {
    console.error(`[translationService] Batch translation failed (${src} -> ${tgt}):`, error.message);
    // Return original texts as safe fallback on network failure
    return [...texts];
  }
};

module.exports = {
  LIBRETRANSLATE_URL,
  getSupportedLanguages,
  normalizeLanguageCode,
  isLanguageSupported,
  translateText,
  translateBatch,
};
