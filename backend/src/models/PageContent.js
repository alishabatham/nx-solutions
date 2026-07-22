import mongoose from 'mongoose';

const pageContentSchema = new mongoose.Schema(
  {
    pageKey: { type: String, required: true, unique: true, index: true },
    title: { type: String, default: '' },
    hero: { type: mongoose.Schema.Types.Mixed, default: {} },
    about: { type: mongoose.Schema.Types.Mixed, default: {} },
    challenges: { type: mongoose.Schema.Types.Mixed, default: {} },
    sections: { type: mongoose.Schema.Types.Mixed, default: {} },
    cards: { type: Array, default: [] },
    solutions: { type: Array, default: [] },
    projects: { type: Array, default: [] },
    testimonials: { type: Array, default: [] },
    settings: { type: mongoose.Schema.Types.Mixed, default: {} }
  },
  {
    timestamps: true,
    strict: false
  }
);

export const PageContent = mongoose.model('PageContent', pageContentSchema);
