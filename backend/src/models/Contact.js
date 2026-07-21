import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: '' },
    company: { type: String, trim: true, default: '' },
    inquiryType: { type: String, trim: true, default: 'General Inquiry' },
    message: { type: String, required: true },
    status: { type: String, enum: ['new', 'in-progress', 'resolved'], default: 'new' }
  },
  {
    timestamps: true
  }
);

export const Contact = mongoose.model('Contact', contactSchema);
