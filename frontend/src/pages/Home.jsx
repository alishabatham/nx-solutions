import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { fetchPageCMS } from '@/services/api';

const defaultFeatures = [
  {
    title: 'AI-Powered diagnostics',
    description: 'Our tools analyze vast streams of operational data to identify potential security risks early.',
  },
  {
    title: 'Personalized access plans',
    description: 'Individual risk profiles, ensuring the most effective and personalized security protocols for everyone.',
  },
  {
    title: 'Cutting-edge automation',
    description: 'We utilize cutting-edge AI technology to develop innovative security solutions that transform physical safety.',
  },
  {
    title: 'Real-time spatial insights',
    description: 'Deep analysis of facility logs to uncover critical operational patterns and Mustering counts.',
  },
];

export default function Home() {
  const [heroContent, setHeroContent] = useState({
    headline: 'Revolutionizing enterprise security with ai and automation',
    pillBadge: 'enterprise security',
    subtitle: 'Empowering organizations and security teams with advanced diagnostic tools, real-time vision, and automated access control.',
  });

  const [features, setFeatures] = useState(defaultFeatures);

  useEffect(() => {
    async function loadCMS() {
      const cms = await fetchPageCMS('home');
      if (cms) {
        if (cms.hero) setHeroContent(cms.hero);
        if (cms.cards && cms.cards.length > 0) setFeatures(cms.cards);
      }
    }
    loadCMS();
  }, []);

  return (
    <main className="w-full bg-[#f7f8fa] text-slate-900 overflow-hidden min-h-screen">
      {/* ── Hero Section ── */}
      <section className="pt-36 pb-14 px-6 text-center flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Main Headline with Dynamic Dark Pill Badge */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(2.4rem,5vw,4.5rem)] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6"
          >
            {heroContent.headline.includes(heroContent.pillBadge) ? (
              <>
                {heroContent.headline.split(heroContent.pillBadge)[0]}
                <span className="pill-badge-dark font-normal tracking-normal align-middle my-1">
                  {heroContent.pillBadge}
                </span>
                {heroContent.headline.split(heroContent.pillBadge)[1]}
              </>
            ) : (
              heroContent.headline
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed mb-10"
          >
            {heroContent.subtitle}
          </motion.p>
        </div>
      </section>

      {/* ── Feature Cards Grid ── */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((item, index) => (
              <motion.div
                key={item.title || index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-[32px] p-8 md:p-9 soft-card-shadow soft-card-hover border border-slate-100/80 flex flex-col items-center text-center justify-between min-h-[320px]"
              >
                {/* Visual Icon Badge */}
                <div className="my-3 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#eef2ff] flex items-center justify-center text-blue-600">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Pill Schedule Consultation Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#eef2ff] hover:bg-blue-600 text-blue-700 hover:text-white font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
            >
              Schedule a consultation
              <Calendar className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Industry Showcase Banner ── */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 block">
            End-to-End Enterprise Protection
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
            Tailored solutions across 50+ vertical industries
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            From smart education campuses and hospitals to heavy manufacturing plants and smart logistics — our platform adapts to your workflow seamlessly.
          </p>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-medium text-sm transition-all shadow-md"
          >
            Browse All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
