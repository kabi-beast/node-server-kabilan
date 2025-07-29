// src/routes/index.js - Main routes file
const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const healthRoutes = require('./healthRoutes');

// Welcome route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Kabilan\'s Node.js API!',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      user: '/api/user',
      userProfile: '/api/user/profile',
      linkedin: '/api/user/linkedin',
      youtube: '/api/user/youtube',
      contact: '/api/user/contact',
      ping: '/api/health/ping'
    }
  });
});

// Route modules
router.use('/health', healthRoutes);
router.use('/user', userRoutes);

module.exports = router;