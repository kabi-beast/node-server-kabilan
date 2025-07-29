// tests/setup.js - Test setup configuration
const { beforeAll, afterAll } = require('@jest/globals');

// Global test setup
beforeAll(() => {
  // Set test environment variables
  process.env.NODE_ENV = 'test';
  process.env.PORT = '0'; // Use random available port for tests
});

afterAll(() => {
  // Cleanup after all tests
});

// Global test timeout
jest.setTimeout(10000);