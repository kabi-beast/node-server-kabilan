# Kabilan's Node.js Server

A professional Node.js REST API server built with Express.js that provides information about Kabilan Thennarasu. This server follows industry best practices with a well-organized folder structure, comprehensive error handling, testing, and documentation.

## 🚀 Features

- **RESTful API** - Clean and intuitive API endpoints
- **Professional Structure** - Well-organized folder structure following Node.js best practices
- **Error Handling** - Comprehensive error handling and logging
- **Testing** - Unit tests with Jest and Supertest
- **Code Quality** - ESLint configuration for consistent code style
- **Documentation** - Complete API documentation and deployment guide
- **Environment Configuration** - Flexible environment-based configuration
- **Security** - Security middleware with Helmet and CORS
- **Logging** - Custom logging utility with file output
- **Health Checks** - Built-in health check endpoints

## 📁 Project Structure

```
node-server-kabilan/
├── src/
│   ├── app.js                 # Express app configuration
│   ├── server.js              # Server entry point
│   ├── config/
│   │   └── index.js           # Configuration management
│   ├── controllers/
│   │   └── userController.js  # Business logic controllers
│   ├── routes/
│   │   ├── index.js           # Main routes
│   │   ├── userRoutes.js      # User-related routes
│   │   └── healthRoutes.js    # Health check routes
│   ├── middleware/
│   │   ├── errorHandler.js    # Global error handling
│   │   └── notFound.js        # 404 handler
│   └── utils/
│       ├── asyncHandler.js    # Async error wrapper
│       └── logger.js          # Custom logging utility
├── tests/
│   ├── setup.js               # Test configuration
│   └── unit/
│       └── userController.test.js  # Unit tests
├── docs/
│   ├── API.md                 # API documentation
│   └── DEPLOYMENT.md          # Deployment guide
├── logs/                      # Application logs (auto-generated)
├── .env.example               # Environment variables template
├── .eslintrc.js              # ESLint configuration
├── .nodemonrc.json           # Nodemon configuration
├── jest.config.js            # Jest testing configuration
└── index.js.backup           # Original index.js (backup)
```

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kabi-beast/node-server-kabilan.git
   cd node-server-kabilan
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

## 🚀 Usage

### Development Mode
```bash
npm run dev
```
Starts the server with nodemon for automatic restarts on file changes.

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

## 📚 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message and available endpoints |
| GET | `/health/ping` | Simple ping endpoint |
| GET | `/health/status` | Detailed health information |
| GET | `/user/profile` | Complete user profile |
| GET | `/user/linkedin` | LinkedIn profile information |
| GET | `/user/youtube` | YouTube channel information |
| GET | `/user/contact` | Contact information |

### Example Response
```json
{
  "success": true,
  "data": {
    "name": "Kabilan Thennarasu",
    "role": "Software Developer",
    "linkedin": "https://www.linkedin.com/in/kabilan-thennarasu-98881a56/",
    "youtube": "https://www.youtube.com/@kabiplayz",
    "skills": ["Node.js", "JavaScript", "Express.js", "API Development"]
  }
}
```

## 📖 Documentation

- **[API Documentation](docs/API.md)** - Complete API reference
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Production deployment instructions

## 🧪 Testing

The project includes comprehensive unit tests using Jest and Supertest:

```bash
npm test
```

Tests are located in the `tests/` directory and cover:
- API endpoint functionality
- Error handling
- Response formats

## 🔧 Configuration

The application uses environment variables for configuration. See `.env.example` for all available options:

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `JWT_SECRET` - JWT secret for authentication (future use)
- Database configuration (for future expansion)

## 🛡️ Security

- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - Request rate limiting (configurable)
- **Input Validation** - Request validation and sanitization

## 📝 Logging

The application includes a custom logging utility that:
- Logs to console and files
- Separates log levels (info, error, warn, debug)
- Stores logs in the `logs/` directory
- Includes timestamps and metadata

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kabilan Thennarasu**
- LinkedIn: [kabilan-thennarasu-98881a56](https://www.linkedin.com/in/kabilan-thennarasu-98881a56/)
- GitHub: [kabi-beast](https://github.com/kabi-beast)

## 🙏 Acknowledgments

- Express.js community for the excellent framework
- Node.js community for the robust runtime environment
- All contributors and supporters of this project
