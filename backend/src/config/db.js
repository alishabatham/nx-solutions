import mongoose from 'mongoose';
import dns from 'dns';

// Force Node to use Google and Cloudflare DNS to bypass local network/ISP DNS blocking
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (dnsError) {
  console.warn('[DNS Override Warning] Could not set public DNS servers:', dnsError.message);
}

export const connectDB = async () => {
  const connStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nx-solutions';
  try {
    const conn = await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[MongoDB] Connected successfully to: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error('[MongoDB Connection Error details]:', error);
    console.warn(`[MongoDB Warning] Could not connect to database (${connStr}). Please start MongoDB locally or update MONGODB_URI in backend/.env.`);
  }
};
