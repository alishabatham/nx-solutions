import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import healthRoutes from './routes/healthRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import cmsRoutes from './routes/cmsRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/cms', cmsRoutes);

// Root route
app.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to NX Solutions API (JavaScript)',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact',
      inquiries: '/api/inquiries',
      cms: '/api/cms/:pageKey'
    }
  });
});

app.listen(PORT, () => {
  console.log(`[Server] Express server running on port ${PORT}`);
});
