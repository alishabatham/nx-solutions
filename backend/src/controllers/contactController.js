import { Contact } from '../models/Contact.js';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

const getFallbackPath = () => path.join(process.cwd(), 'contacts_fallback.json');

const readFallbackData = () => {
  try {
    const filePath = getFallbackPath();
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error('[Contacts Fallback Read Error]:', error);
  }
  return [];
};

const writeFallbackData = (data) => {
  try {
    const filePath = getFallbackPath();
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('[Contacts Fallback Write Error]:', error);
    return false;
  }
};

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, company, inquiry, inquiryType, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
    }

    const payload = {
      _id: `fallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      phone: phone || '',
      company: company || '',
      inquiryType: inquiryType || inquiry || 'General Inquiry',
      message,
      createdAt: new Date().toISOString()
    };

    let newContact = null;
    let savedToDB = false;

    if (mongoose.connection.readyState === 1) {
      try {
        newContact = await Contact.create({
          name,
          email,
          phone: phone || '',
          company: company || '',
          inquiryType: inquiryType || inquiry || 'General Inquiry',
          message
        });
        savedToDB = true;
      } catch (dbError) {
        console.warn('[MongoDB Create Contact Error, falling back to JSON]:', dbError.message);
      }
    }

    // Save/append to local JSON fallback
    const localData = readFallbackData();
    localData.unshift(newContact ? newContact.toObject() : payload);
    writeFallbackData(localData);

    return res.status(201).json({
      success: true,
      message: savedToDB 
        ? 'Contact submission recorded successfully (DB).'
        : 'Contact submission recorded successfully (Local JSON Fallback).',
      data: newContact || payload
    });
  } catch (error) {
    console.error('[Create Contact Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to record contact submission.' });
  }
};

export const getContacts = async (_req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        return res.status(200).json({ success: true, count: contacts.length, data: contacts });
      } catch (dbError) {
        console.warn('[MongoDB Get Contacts Error, falling back to JSON]:', dbError.message);
      }
    }

    // Fallback to JSON
    const contacts = readFallbackData();
    return res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    console.error('[Get Contacts Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to fetch contact submissions.' });
  }
};
