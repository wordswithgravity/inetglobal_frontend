const Blog = require('../models/Blog');

/**
 * Checks for any blogs that have status='scheduled' and scheduledAt <= current time,
 * and automatically publishes them.
 */
const publishDueScheduledBlogs = async () => {
  try {
    const now = new Date();
    const result = await Blog.updateMany(
      {
        status: 'scheduled',
        scheduledAt: { $ne: null, $lte: now },
      },
      {
        $set: {
          status: 'published',
          date: now.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
          }),
        },
      }
    );

    if (result.modifiedCount > 0) {
      console.log(`[Scheduler] Automatically published ${result.modifiedCount} scheduled blog(s) at ${now.toISOString()}`);
    }
  } catch (error) {
    console.error('[Scheduler] Error publishing scheduled blogs:', error.message);
  }
};

/**
 * Starts a background interval to check for scheduled blogs every 30 seconds.
 */
const startBlogScheduler = (intervalMs = 30000) => {
  // Run once immediately on server startup
  publishDueScheduledBlogs();

  // Run on repeated interval
  const timer = setInterval(publishDueScheduledBlogs, intervalMs);

  console.log(`[Scheduler] Blog auto-posting background scheduler initialized (interval: ${intervalMs / 1000}s)`);
  return timer;
};

module.exports = {
  publishDueScheduledBlogs,
  startBlogScheduler,
};
