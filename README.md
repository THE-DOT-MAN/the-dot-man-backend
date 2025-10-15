# The Dot Man Backend

Backend service for the emailer inbox application - Node.js + Express API

## Overview

This is a simple REST API backend that provides an `/inbox` endpoint returning sample email messages in JSON format. Perfect for testing email clients and frontend applications.

## Features

- ✅ Express.js REST API
- ✅ CORS enabled for cross-origin requests
- ✅ `/inbox` endpoint with sample email data
- ✅ Health check endpoint
- ✅ Ready for Render deployment

## API Endpoints

### GET /
Returns API information and available endpoints.

**Response:**
```json
{
  "message": "Emailer Backend API",
  "version": "1.0.0",
  "endpoints": {
    "inbox": "/inbox - Get all inbox messages"
  }
}
```

### GET /inbox
Returns a list of sample inbox messages.

**Response:**
```json
{
  "success": true,
  "count": 5,
  "messages": [
    {
      "from": "alice@example.com",
      "subject": "Welcome to the emailer!",
      "date": "2025-10-15T10:30:00Z",
      "body": "Hi there! Welcome to our amazing emailer service..."
    }
    // ... more messages
  ]
}
```

### GET /health
Health check endpoint for monitoring.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-10-15T10:30:00.000Z"
}
```

## Local Development

### Prerequisites
- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/THE-DOT-MAN/the-dot-man-backend.git
cd the-dot-man-backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

4. The server will start on port 3000 (or the PORT environment variable if set):
```
Server is running on port 3000
Visit http://localhost:3000 for API info
Inbox endpoint: http://localhost:3000/inbox
```

## Deploying to Render

Follow these steps to deploy your backend to Render and get it live:

### Step 1: Create a Render Account
1. Go to [render.com](https://render.com)
2. Sign up for a free account (or sign in if you already have one)
3. You can sign up with GitHub for easier integration

### Step 2: Create a New Web Service
1. From your Render dashboard, click **"New +"** button
2. Select **"Web Service"**
3. Connect your GitHub account if you haven't already
4. Find and select the `the-dot-man-backend` repository
5. Click **"Connect"**

### Step 3: Configure Your Web Service

Render will auto-detect that this is a Node.js app. Configure the following settings:

- **Name**: `the-dot-man-backend` (or any name you prefer)
- **Region**: Choose the region closest to you or your users
- **Branch**: `main`
- **Root Directory**: Leave blank (or `.` if needed)
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: Select **"Free"** (perfect for testing and development)

### Step 4: Environment Variables (Optional)

You can set environment variables if needed:
- Click **"Advanced"** to expand options
- Add environment variables if you need any (none required for basic setup)
- The `PORT` environment variable is automatically set by Render

### Step 5: Deploy!

1. Click **"Create Web Service"**
2. Render will start building and deploying your app
3. Wait for the deployment to complete (usually 2-5 minutes)
4. You'll see the build logs in real-time

### Step 6: Get Your Live URL

Once deployment is complete:
1. Your app will be available at: `https://the-dot-man-backend.onrender.com` (or your custom name)
2. Test your endpoints:
   - Root: `https://your-app-name.onrender.com/`
   - Inbox: `https://your-app-name.onrender.com/inbox`
   - Health: `https://your-app-name.onrender.com/health`

### Important Notes for Render

- ⚠️ **Free tier apps spin down after 15 minutes of inactivity**. The first request after inactivity may take 30-60 seconds to respond.
- ✅ Render automatically runs `npm install` and `npm start`
- ✅ Your app will auto-deploy when you push changes to the `main` branch
- ✅ HTTPS is provided automatically
- ✅ Environment variables can be updated in the Render dashboard without redeploying

### Troubleshooting

If your deployment fails:
1. Check the build logs in the Render dashboard
2. Ensure `package.json` is in the root directory
3. Verify that the start script is correctly defined
4. Make sure all dependencies are listed in `package.json`

## Testing Your Deployed API

Once deployed, test your API with curl:

```bash
# Test root endpoint
curl https://your-app-name.onrender.com/

# Test inbox endpoint
curl https://your-app-name.onrender.com/inbox

# Test health endpoint
curl https://your-app-name.onrender.com/health
```

Or visit the URLs directly in your browser!

## Technology Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing

## Project Structure

```
the-dot-man-backend/
├── server.js          # Main application file
├── package.json       # Project dependencies and scripts
└── README.md          # This file
```

## License

MIT License - feel free to use this project for your own purposes!

## Next Steps

- Add more endpoints (send email, delete email, etc.)
- Connect to a real database (MongoDB, PostgreSQL)
- Add authentication/authorization
- Implement email sending functionality
- Add request validation and error handling

---

**Ready to deploy?** Follow the "Deploying to Render" section above and get your backend live in minutes! 🚀
