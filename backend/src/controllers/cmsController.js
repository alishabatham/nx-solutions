import { PageContent } from '../models/PageContent.js';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFallbackPaths = () => [
  path.join(process.cwd(), 'cms_fallback.json'),
  path.join(process.cwd(), 'backend', 'cms_fallback.json'),
  path.resolve(__dirname, '../../cms_fallback.json'),
  path.resolve(__dirname, '../cms_fallback.json')
];

const readFallbackData = (pageKey) => {
  for (const filePath of getFallbackPaths()) {
    try {
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const json = JSON.parse(fileData);
        if (json && json[pageKey]) {
          return json[pageKey];
        }
      }
    } catch (error) {
      console.error('[CMS Fallback Read Error]:', error);
    }
  }
  return null;
};

const writeFallbackData = (pageKey, data) => {
  for (const filePath of getFallbackPaths()) {
    try {
      let json = {};
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, 'utf8');
        json = JSON.parse(fileData);
      }
      json[pageKey] = data;
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
      return true;
    } catch (error) {
      console.warn('[CMS Fallback Write Warning]:', error.message);
    }
  }
  return false;
};

// Global in-memory cache for serverless & local fallback persistence
const memoryStore = {};

export const getPageContent = async (req, res) => {
  try {
    const { pageKey } = req.params;
    
    // Check if MongoDB is connected
    if (mongoose.connection.readyState === 1) {
      try {
        const content = await PageContent.findOne({ pageKey });
        if (content) {
          return res.status(200).json({ success: true, data: content });
        }
      } catch (dbError) {
        console.warn('[MongoDB Get Error, falling back to Memory/JSON]:', dbError.message);
      }
    }

    // Return from in-memory cache if available
    if (memoryStore[pageKey]) {
      return res.status(200).json({ success: true, data: memoryStore[pageKey] });
    }
    
    // Fallback to JSON
    const content = readFallbackData(pageKey);
    if (!content) {
      return res.status(200).json({ success: true, data: null, message: 'No custom content configured yet.' });
    }

    // Auto-sync fallback JSON to MongoDB if database is active but empty
    if (mongoose.connection.readyState === 1) {
      try {
        await PageContent.findOneAndUpdate(
          { pageKey },
          content,
          { new: true, upsert: true }
        );
        console.log(`[MongoDB Sync] Successfully sync'ed offline changes for '${pageKey}' to Atlas.`);
      } catch (syncError) {
        console.warn('[MongoDB Sync Warning]:', syncError.message);
      }
    }

    return res.status(200).json({ success: true, data: content });
  } catch (error) {
    console.error('[Get Page Content Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to fetch page content.' });
  }
};

export const updatePageContent = async (req, res) => {
  try {
    const { pageKey } = req.params;
    const payload = { pageKey, ...req.body };

    let updatedContent = null;
    let savedToDB = false;

    // Always update in-memory cache first
    memoryStore[pageKey] = payload;

    // Check if MongoDB is connected
    if (mongoose.connection.readyState === 1) {
      try {
        updatedContent = await PageContent.findOneAndUpdate(
          { pageKey },
          payload,
          { new: true, upsert: true }
        );
        savedToDB = true;
      } catch (dbError) {
        console.warn('[MongoDB Update Error, falling back to Memory]:', dbError.message);
      }
    }

    // Always attempt to update/save fallback JSON file for local robustness
    writeFallbackData(pageKey, payload);

    if (!updatedContent) {
      updatedContent = payload;
    }

    return res.status(200).json({
      success: true,
      message: savedToDB 
        ? `Page content for '${pageKey}' updated successfully (DB).`
        : `Page content for '${pageKey}' updated successfully (Memory/Fallback).`,
      data: updatedContent
    });
  } catch (error) {
    console.error('[Update Page Content Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to update page content.' });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { password } = req.body || {};
    const inputPassword = (password || '').trim();
    const adminPassword = (process.env.ADMIN_PASSWORD || 'admin123').trim();

    if (inputPassword && inputPassword === adminPassword) {
      return res.status(200).json({
        success: true,
        token: 'nx_admin_secret_token_valid',
        message: 'Admin authentication successful.'
      });
    }

    return res.status(401).json({ success: false, error: 'Invalid admin password.' });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Authentication failed.' });
  }
};
