# Deployment Guide

## Prerequisites
- Node.js 16.0.0 or higher
- npm or yarn package manager

## Environment Setup

1. Copy the environment template:
```bash
cp .env.example .env
```

2. Update the `.env` file with your specific configuration:
```env
NODE_ENV=production
PORT=3000
# Add other environment-specific variables
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. For development with auto-reload:
```bash
npm install --include=dev
```

## Running the Application

### Development Mode
```bash
npm run dev
```
This starts the server with nodemon for automatic restarts on file changes.

### Production Mode
```bash
npm start
```

### Testing
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Code Quality
```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## Docker Deployment (Optional)

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY src/ ./src/
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t kabilan-server .
docker run -p 3000:3000 kabilan-server
```

## Production Considerations

1. **Environment Variables**: Ensure all sensitive data is in environment variables
2. **Process Management**: Use PM2 or similar for process management
3. **Reverse Proxy**: Use nginx or similar for reverse proxy
4. **SSL/TLS**: Configure HTTPS in production
5. **Monitoring**: Set up logging and monitoring
6. **Database**: Configure production database if needed

## Health Checks

The application provides health check endpoints:
- `/health` - Basic health check
- `/api/health/ping` - Simple ping endpoint
- `/api/health/status` - Detailed status information

## Troubleshooting

### Common Issues
1. **Port already in use**: Change the PORT environment variable
2. **Module not found**: Run `npm install` to install dependencies
3. **Permission errors**: Check file permissions and user privileges

### Logs
Application logs are stored in the `logs/` directory:
- `info.log` - General application logs
- `error.log` - Error logs
- `warn.log` - Warning logs
- `debug.log` - Debug logs (development only)