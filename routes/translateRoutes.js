const express = require('express');
const router = express.Router();
const translationService = require('../services/translationService');

// In-memory rate limiting map: ip -> { count, resetTime }
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 120; // 120 requests per minute

const translationRateLimiter = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  const now = Date.now();

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return next();
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      message: 'Too many translation requests. Please try again in a minute.',
    });
  }

  record.count += 1;
  next();
};

/**
 * @route   GET /api/translate/languages
 * @desc    Get list of supported languages from LibreTranslate
 * @access  Public
 */
router.get('/languages', async (req, res) => {
  try {
    const languages = await translationService.getSupportedLanguages();
    return res.status(200).json({
      success: true,
      count: languages.length,
      languages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve supported languages',
      error: error.message,
    });
  }
});

/**
 * @route   POST /api/translate
 * @desc    Translate text or array of texts
 * @access  Public
 */
router.post('/', translationRateLimiter, async (req, res) => {
  try {
    const { text, q, target, source = 'en', format = 'text' } = req.body;
    const inputContent = text !== undefined ? text : q;

    if (inputContent === undefined || inputContent === null) {
      return res.status(400).json({
        success: false,
        message: 'Field "text" or "q" is required',
      });
    }

    if (!target) {
      return res.status(400).json({
        success: false,
        message: 'Target language "target" is required (e.g. "hi", "es", "fr")',
      });
    }

    // Single string translation
    if (typeof inputContent === 'string') {
      if (inputContent.length > 25000) {
        return res.status(400).json({
          success: false,
          message: 'Text exceeds maximum length of 25,000 characters',
        });
      }

      const translatedText = await translationService.translateText(
        inputContent,
        target,
        source,
        format
      );

      return res.status(200).json({
        success: true,
        translatedText,
        source,
        target,
        format,
      });
    }

    // Array batch translation
    if (Array.isArray(inputContent)) {
      if (inputContent.length > 100) {
        return res.status(400).json({
          success: false,
          message: 'Maximum batch size is 100 items per request',
        });
      }

      const translatedBatch = await translationService.translateBatch(
        inputContent,
        target,
        source,
        format
      );

      return res.status(200).json({
        success: true,
        translatedText: translatedBatch,
        source,
        target,
        format,
      });
    }

    return res.status(400).json({
      success: false,
      message: 'Input "text" must be a string or an array of strings',
    });
  } catch (error) {
    console.error('[translateRoutes] Translation error:', error.message);
    return res.status(502).json({
      success: false,
      message: 'Translation service unavailable or request failed',
      error: error.message,
    });
  }
});

module.exports = router;
