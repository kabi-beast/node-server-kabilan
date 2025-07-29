// src/middleware/notFound.js - 404 Not Found middleware
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
    availableEndpoints: {
      api: '/api',
      health: '/health',
      userProfile: '/api/user/profile',
      linkedin: '/api/user/linkedin',
      youtube: '/api/user/youtube',
      contact: '/api/user/contact',
      ping: '/api/health/ping'
    }
  });
};

module.exports = { notFound };