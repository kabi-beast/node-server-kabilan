// src/controllers/userController.js - User controller functions
const asyncHandler = require('../utils/asyncHandler');

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Public
const getUserProfile = asyncHandler(async (req, res) => {
  const profile = {
    name: 'Kabilan Thennarasu',
    role: 'Software Developer',
    linkedin: 'https://www.linkedin.com/in/kabilan-thennarasu-98881a56/',
    github: 'https://github.com/kabi-beast',
    youtube: 'https://www.youtube.com/@kabiplayz',
    bio: 'Passionate software developer with expertise in Node.js and web technologies',
    skills: ['Node.js', 'JavaScript', 'Express.js', 'API Development', 'React', 'MongoDB'],
    location: 'Canada',
    experience: 'Full-stack development with modern web technologies',
    interests: ['Web Development', 'API Design', 'Cloud Computing', 'Open Source', 'Content Creation']
  };

  res.status(200).json({
    success: true,
    data: profile
  });
});

// @desc    Get LinkedIn profile
// @route   GET /api/user/linkedin
// @access  Public
const getLinkedInProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      url: 'https://www.linkedin.com/in/kabilan-thennarasu-98881a56/',
      platform: 'LinkedIn',
      profile: 'Kabilan Thennarasu'
    }
  });
});

// @desc    Get YouTube channel
// @route   GET /api/user/youtube
// @access  Public
const getYouTubeChannel = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      url: 'https://www.youtube.com/@kabiplayz',
      platform: 'YouTube',
      channel: 'KabiPlayz',
      handle: '@kabiplayz',
      description: 'Gaming and tech content creator'
    }
  });
});

// @desc    Get contact information
// @route   GET /api/user/contact
// @access  Public
const getContactInfo = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      linkedin: 'https://www.linkedin.com/in/kabilan-thennarasu-98881a56/',
      github: 'https://github.com/kabi-beast',
      youtube: 'https://www.youtube.com/@kabiplayz',
      email: 'Contact via LinkedIn',
      availability: 'Open to opportunities',
      preferredContact: 'LinkedIn'
    }
  });
});

module.exports = {
  getUserProfile,
  getLinkedInProfile,
  getYouTubeChannel,
  getContactInfo
};