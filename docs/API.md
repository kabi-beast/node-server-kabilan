# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### Health Check

#### GET /health/ping
Returns a simple pong response to check if the server is running.

**Response:**
```json
{
  "message": "pong",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### GET /health/status
Returns detailed health information about the server.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456,
  "memory": {
    "rss": 12345678,
    "heapTotal": 8765432,
    "heapUsed": 5432109,
    "external": 987654
  },
  "environment": "development",
  "version": "v18.17.0"
}
```

### User Information

#### GET /user/profile
Returns comprehensive profile information about Kabilan.

**Response:**
```json
{
  "success": true,
  "data": {
    "name": "Kabilan Thennarasu",
    "role": "Software Developer",
    "linkedin": "https://www.linkedin.com/in/kabilan-thennarasu-98881a56/",
    "github": "https://github.com/kabi-beast",
    "bio": "Passionate software developer with expertise in Node.js and web technologies",
    "skills": ["Node.js", "JavaScript", "Express.js", "API Development", "React", "MongoDB"],
    "location": "Canada",
    "experience": "Full-stack development with modern web technologies",
    "interests": ["Web Development", "API Design", "Cloud Computing", "Open Source"]
  }
}
```

#### GET /user/linkedin
Returns LinkedIn profile information.

**Response:**
```json
{
  "success": true,
  "data": {
    "url": "https://www.linkedin.com/in/kabilan-thennarasu-98881a56/",
    "platform": "LinkedIn",
    "profile": "Kabilan Thennarasu"
  }
}
```

#### GET /user/youtube
Returns YouTube channel information.

**Response:**
```json
{
  "success": true,
  "data": {
    "url": "https://www.youtube.com/@kabiplayz",
    "platform": "YouTube",
    "channel": "KabiPlayz",
    "handle": "@kabiplayz",
    "description": "Gaming and tech content creator"
  }
}
```

#### GET /user/contact
Returns contact information.

**Response:**
```json
{
  "success": true,
  "data": {
    "linkedin": "https://www.linkedin.com/in/kabilan-thennarasu-98881a56/",
    "github": "https://github.com/kabi-beast",
    "youtube": "https://www.youtube.com/@kabiplayz",
    "email": "Contact via LinkedIn",
    "availability": "Open to opportunities",
    "preferredContact": "LinkedIn"
  }
}
```

## Error Responses

All endpoints may return error responses in the following format:

```json
{
  "success": false,
  "error": "Error message description"
}
```

### Common HTTP Status Codes
- `200` - Success
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting
- 100 requests per 15-minute window per IP address
- Rate limit headers are included in responses

## CORS
- CORS is enabled for all origins in development
- Configure specific origins in production via environment variables