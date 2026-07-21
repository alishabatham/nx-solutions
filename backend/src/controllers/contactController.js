import { Contact } from '../models/Contact.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, company, inquiry, inquiryType, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
    }

    const newContact = await Contact.create({
      name,
      email,
      phone: phone || '',
      company: company || '',
      inquiryType: inquiryType || inquiry || 'General Inquiry',
      message
    });

    return res.status(201).json({
      success: true,
      message: 'Contact submission recorded successfully.',
      data: newContact
    });
  } catch (error) {
    console.error('[Create Contact Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to record contact submission.' });
  }
};

export const getContacts = async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    console.error('[Get Contacts Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to fetch contact submissions.' });
  }
};
