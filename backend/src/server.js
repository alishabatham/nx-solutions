import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import healthRoutes from './routes/healthRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Root route
app.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to NX Solutions API (JavaScript)',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact',
      inquiries: '/api/inquiries'
    }
  });
});

app.listen(PORT, () => {
  console.log(`[Server] Express server running on port ${PORT}`);
});
