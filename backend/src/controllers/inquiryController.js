import { Inquiry } from '../models/Inquiry.js';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

const getFallbackPath = () => path.join(process.cwd(), 'inquiries_fallback.json');

const readFallbackData = () => {
  try {
    const filePath = getFallbackPath();
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error('[Inquiries Fallback Read Error]:', error);
  }
  return [];
};

const writeFallbackData = (data) => {
  try {
    const filePath = getFallbackPath();
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('[Inquiries Fallback Write Error]:', error);
    return false;
  }
};

export const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, company, industry, domain, area, module, problem, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Name and email are required.' });
    }

    const payload = {
      _id: `fallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      phone: phone || '',
      company: company || '',
      industry: industry || '',
      domain: domain || '',
      area: area || '',
      module: module || '',
      problem: problem || '',
      message: message || '',
      createdAt: new Date().toISOString()
    };

    let newInquiry = null;
    let savedToDB = false;

    if (mongoose.connection.readyState === 1) {
      try {
        newInquiry = await Inquiry.create({
          name,
          email,
          phone: phone || '',
          company: company || '',
          industry: industry || '',
          domain: domain || '',
          area: area || '',
          module: module || '',
          problem: problem || '',
          message: message || ''
        });
        savedToDB = true;
      } catch (dbError) {
        console.warn('[MongoDB Create Inquiry Error, falling back to JSON]:', dbError.message);
      }
    }

    // Save/append to local JSON fallback
    const localData = readFallbackData();
    localData.unshift(newInquiry ? newInquiry.toObject() : payload);
    writeFallbackData(localData);

    return res.status(201).json({
      success: true,
      message: savedToDB 
        ? 'Solution inquiry recorded successfully (DB).'
        : 'Solution inquiry recorded successfully (Local JSON Fallback).',
      data: newInquiry || payload
    });
  } catch (error) {
    console.error('[Create Inquiry Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to record solution inquiry.' });
  }
};

export const getInquiries = async (_req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        return res.status(200).json({ success: true, count: inquiries.length, data: inquiries });
      } catch (dbError) {
        console.warn('[MongoDB Get Inquiries Error, falling back to JSON]:', dbError.message);
      }
    }

    // Fallback to JSON
    const inquiries = readFallbackData();
    return res.status(200).json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    console.error('[Get Inquiries Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to fetch solution inquiries.' });
  }
};
