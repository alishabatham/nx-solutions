import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: '' },
    company: { type: String, trim: true, default: '' },
    industry: { type: String, trim: true, default: '' },
    domain: { type: String, trim: true, default: '' },
    area: { type: String, trim: true, default: '' },
    module: { type: String, trim: true, default: '' },
    problem: { type: String, trim: true, default: '' },
    message: { type: String, trim: true, default: '' },
    status: { type: String, enum: ['pending', 'reviewed', 'completed'], default: 'pending' }
  },
  {
    timestamps: true
  }
);

export const Inquiry = mongoose.model('Inquiry', inquirySchema);
