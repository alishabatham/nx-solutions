import { PageContent } from '../models/PageContent.js';

export const getPageContent = async (req, res) => {
  try {
    const { pageKey } = req.params;
    let content = await PageContent.findOne({ pageKey });
    
    if (!content) {
      return res.status(200).json({ success: true, data: null, message: 'No custom content configured yet.' });
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

    const updatedContent = await PageContent.findOneAndUpdate(
      { pageKey },
      { pageKey, title, hero, sections, cards, settings },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      success: true,
      message: `Page content for '${pageKey}' updated successfully.`,
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
