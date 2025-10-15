const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample inbox data - this is what the /inbox endpoint will return
const sampleInbox = [
  {
    from: "alice@example.com",
    subject: "Welcome to the emailer!",
    date: "2025-10-15T10:30:00Z",
    body: "Hi there! Welcome to our amazing emailer service. We're excited to have you on board!"
  },
  {
    from: "bob@company.com",
    subject: "Meeting reminder",
    date: "2025-10-15T09:15:00Z",
    body: "Don't forget about our team meeting tomorrow at 2 PM. See you there!"
  },
  {
    from: "notifications@service.com",
    subject: "Your weekly digest",
    date: "2025-10-14T08:00:00Z",
    body: "Here's your weekly summary of activity. You have 3 new messages and 5 updates."
  },
  {
    from: "support@help.com",
    subject: "Re: Question about features",
    date: "2025-10-13T16:45:00Z",
    body: "Thanks for reaching out! We'd be happy to answer your questions about our features."
  },
  {
    from: "news@updates.com",
    subject: "Latest updates and announcements",
    date: "2025-10-12T12:00:00Z",
    body: "Check out our latest features and improvements. We've added several new capabilities!"
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Emailer Backend API',
    version: '1.0.0',
    endpoints: {
      inbox: '/inbox - Get all inbox messages'
    }
  });
});

app.get('/inbox', (req, res) => {
  res.json({
    success: true,
    count: sampleInbox.length,
    messages: sampleInbox
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} for API info`);
  console.log(`Inbox endpoint: http://localhost:${PORT}/inbox`);
});
