import mongoose from 'mongoose';

const pageContentSchema = new mongoose.Schema(
  {
    pageKey: { type: String, required: true, unique: true, index: true },
    title: { type: String, default: '' },
    hero: {
      headline: { type: String, default: '' },
      pillBadge: { type: String, default: '' },
      subtitle: { type: String, default: '' }
    },
    sections: { type: mongoose.Schema.Types.Mixed, default: {} },
    cards: { type: Array, default: [] },
    settings: { type: mongoose.Schema.Types.Mixed, default: {} }
  },
  {
    timestamps: true
  }
);

export const PageContent = mongoose.model('PageContent', pageContentSchema);
