# Frame Digital Solutions - Backend API

This is the backend API for the Frame Digital Solutions website, built with Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- Contact form submission
- Feedback system with admin approval
- RESTful API endpoints
- API documentation with Swagger
- Error handling
- Security best practices

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd frame-website/backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/frame-digital
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

   The API will be available at `http://localhost:5000`

## API Documentation

Once the server is running, you can access the API documentation at:
- Swagger UI: `http://localhost:5000/api-docs`
- JSON Spec: `http://localhost:5000/api-docs.json`

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests

## Environment Variables

| Variable     | Description                     | Default Value                 |
|--------------|---------------------------------|-------------------------------|
| PORT         | Port to run the server on       | 5000                          |
| MONGO_URI    | MongoDB connection string       | mongodb://localhost:27017/frame-digital |
| JWT_SECRET   | Secret for JWT token generation | (required)                    |
| NODE_ENV     | Application environment        | development                   |

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile

### Contact
- `POST /api/contact` - Submit a contact form
- `GET /api/contact` - Get all contact submissions (admin only)
- `PUT /api/contact/:id` - Update contact status (admin only)
- `DELETE /api/contact/:id` - Delete a contact submission (admin only)

### Feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Get all feedback (public, shows only approved)
- `PUT /api/feedback/:id/approve` - Approve/Reject feedback (admin only)
- `DELETE /api/feedback/:id` - Delete feedback (admin only)

## Error Handling

The API returns appropriate HTTP status codes and JSON response with error details:

```json
{
  "success": false,
  "error": "Error message here"
}
```

## Security

- Helmet for setting various HTTP headers
- CORS enabled
- Rate limiting
- Data sanitization
- XSS protection
- JWT Authentication

## Deployment

1. Set `NODE_ENV=production` in your environment variables
2. Make sure to use a secure `JWT_SECRET`
3. Update CORS settings if needed
4. Use a process manager like PM2 for production

## License

MIT
