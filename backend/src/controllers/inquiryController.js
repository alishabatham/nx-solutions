import { Inquiry } from '../models/Inquiry.js';

export const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, company, industry, domain, area, module, problem, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Name and email are required.' });
    }

    const newInquiry = await Inquiry.create({
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

    return res.status(201).json({
      success: true,
      message: 'Solution inquiry recorded successfully.',
      data: newInquiry
    });
  } catch (error) {
    console.error('[Create Inquiry Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to record solution inquiry.' });
  }
};

export const getInquiries = async (_req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    console.error('[Get Inquiries Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to fetch solution inquiries.' });
  }
};
