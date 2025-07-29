// tests/unit/userController.test.js - Unit tests for user controller
const request = require('supertest');
const app = require('../../src/app');

describe('User Controller', () => {
  describe('GET /api/user/profile', () => {
    it('should return user profile information', async () => {
      const res = await request(app)
        .get('/api/user/profile')
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('name');
      expect(res.body.data).toHaveProperty('role');
      expect(res.body.data).toHaveProperty('linkedin');
      expect(res.body.data.name).toBe('Kabilan Thennarasu');
    });
  });

  describe('GET /api/user/linkedin', () => {
    it('should return LinkedIn profile URL', async () => {
      const res = await request(app)
        .get('/api/user/linkedin')
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('url');
      expect(res.body.data.url).toContain('linkedin.com');
    });
  });

  describe('GET /api/user/youtube', () => {
    it('should return YouTube channel information', async () => {
      const res = await request(app)
        .get('/api/user/youtube')
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('url');
      expect(res.body.data.url).toContain('youtube.com');
      expect(res.body.data.handle).toBe('@kabiplayz');
    });
  });

  describe('GET /api/user/contact', () => {
    it('should return contact information', async () => {
      const res = await request(app)
        .get('/api/user/contact')
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('linkedin');
      expect(res.body.data).toHaveProperty('github');
      expect(res.body.data).toHaveProperty('youtube');
    });
  });
});