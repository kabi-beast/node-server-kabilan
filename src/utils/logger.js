// src/utils/logger.js - Custom logging utility
const fs = require('fs');
const path = require('path');

// Ensure logs directory exists
const logsDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const logger = {
  info: (message, meta = {}) => {
    const logEntry = {
      level: 'INFO',
      timestamp: new Date().toISOString(),
      message,
      meta
    };
    console.log(`[INFO] ${logEntry.timestamp}: ${message}`, meta);
    writeToFile('info.log', logEntry);
  },

  error: (message, error = {}) => {
    const logEntry = {
      level: 'ERROR',
      timestamp: new Date().toISOString(),
      message,
      error: error.stack || error
    };
    console.error(`[ERROR] ${logEntry.timestamp}: ${message}`, error);
    writeToFile('error.log', logEntry);
  },

  warn: (message, meta = {}) => {
    const logEntry = {
      level: 'WARN',
      timestamp: new Date().toISOString(),
      message,
      meta
    };
    console.warn(`[WARN] ${logEntry.timestamp}: ${message}`, meta);
    writeToFile('warn.log', logEntry);
  },

  debug: (message, meta = {}) => {
    if (process.env.NODE_ENV === 'development') {
      const logEntry = {
        level: 'DEBUG',
        timestamp: new Date().toISOString(),
        message,
        meta
      };
      console.log(`[DEBUG] ${logEntry.timestamp}: ${message}`, meta);
      writeToFile('debug.log', logEntry);
    }
  }
};

const writeToFile = (filename, logEntry) => {
  const logPath = path.join(logsDir, filename);
  const logLine = JSON.stringify(logEntry) + '\n';
  
  fs.appendFile(logPath, logLine, (err) => {
    if (err) {
      console.error('Failed to write to log file:', err);
    }
  });
};

module.exports = logger;