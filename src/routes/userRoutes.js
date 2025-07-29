// src/routes/userRoutes.js - User-related routes
const express = require('express');
const router = express.Router();
const {
  getUserProfile,
  getLinkedInProfile,
  getYouTubeChannel,
  getContactInfo
} = require('../controllers/userController');

// User routes
router.get('/profile', getUserProfile);
router.get('/linkedin', getLinkedInProfile);
router.get('/youtube', getYouTubeChannel);
router.get('/contact', getContactInfo);

module.exports = router;