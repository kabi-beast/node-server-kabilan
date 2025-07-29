// src/routes/healthRoutes.js - Health check routes
const express = require('express');
const router = express.Router();

// Ping endpoint
router.get('/ping', (req, res) => {
  res.status(200).json({ 
    message: 'pong',
    timestamp: new Date().toISOString()
  });
});

// Detailed health check
router.get('/status', (req, res) => {
  const healthCheck = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development',
    version: process.version
  };
  
  res.status(200).json(healthCheck);
});

module.exports = router;