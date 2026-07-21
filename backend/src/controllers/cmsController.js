import { PageContent } from '../models/PageContent.js';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

const getFallbackPath = () => path.join(process.cwd(), 'cms_fallback.json');

const readFallbackData = (pageKey) => {
  try {
    const filePath = getFallbackPath();
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      const json = JSON.parse(fileData);
      return json[pageKey] || null;
    }
  } catch (error) {
    console.error('[CMS Fallback Read Error]:', error);
  }
  return null;
};

const writeFallbackData = (pageKey, data) => {
  try {
    const filePath = getFallbackPath();
    let json = {};
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      json = JSON.parse(fileData);
    }
    json[pageKey] = data;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('[CMS Fallback Write Error]:', error);
    return false;
  }
};

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
        console.warn('[MongoDB Get Error, falling back to JSON]:', dbError.message);
      }
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
    const { title, hero, sections, cards, settings } = req.body;
    const payload = { pageKey, title, hero, sections, cards, settings };

    let updatedContent = null;
    let savedToDB = false;

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
        console.warn('[MongoDB Update Error, falling back to JSON]:', dbError.message);
      }
    }

    // Always update/save fallback JSON file for local robustness
    writeFallbackData(pageKey, payload);

    if (!updatedContent) {
      updatedContent = payload;
    }

    return res.status(200).json({
      success: true,
      message: savedToDB 
        ? `Page content for '${pageKey}' updated successfully (DB).`
        : `Page content for '${pageKey}' updated successfully (Local JSON Fallback).`,
      data: updatedContent
    });
  } catch (error) {
    console.error('[Update Page Content Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to update page content.' });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (password === adminPassword) {
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
