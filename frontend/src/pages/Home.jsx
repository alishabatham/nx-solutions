import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

const features = [
  {
    iconGradient: 'from-blue-600 to-indigo-600',
    iconShape: (
      <svg className="w-12 h-12 text-blue-600" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="url(#grad1)" strokeWidth="4" strokeDasharray="90 30" />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'AI-Powered diagnostics',
    description: 'Our tools analyze vast streams of operational data to identify potential security risks early.',
  },
  {
    iconGradient: 'from-sky-500 to-blue-600',
    iconShape: (
      <div className="flex items-end gap-1.5 h-12 w-12 justify-center pb-1">
        <div className="w-2.5 h-6 bg-slate-200 rounded-full" />
        <div className="w-2.5 h-10 bg-slate-300 rounded-full" />
        <div className="w-2.5 h-7 bg-slate-200 rounded-full" />
      </div>
    ),
    title: 'Personalized access plans',
    description: 'Individual risk profiles, ensuring the most effective and personalized security protocols for everyone.',
  },
  {
    iconGradient: 'from-purple-500 to-indigo-600',
    iconShape: (
      <svg className="w-12 h-12 text-slate-300" viewBox="0 0 48 48" fill="none">
        <path d="M24 8 C15 8 8 15 8 24 C8 33 15 40 24 40 C33 40 40 33 40 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 16 C19 16 16 19 16 24" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: 'Cutting-edge automation',
    description: 'We utilize cutting-edge AI technology to develop innovative security solutions that transform physical safety.',
  },
  {
    iconGradient: 'from-amber-400 to-orange-500',
    iconShape: (
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-300">
        <Sparkles className="w-6 h-6 text-slate-300" />
      </div>
    ),
    title: 'Real-time spatial insights',
    description: 'Deep analysis of facility logs to uncover critical operational patterns and Mustering counts.',
  },
];

export default function Home() {
  return (
    <main className="w-full bg-[#f7f8fa] text-slate-900 overflow-hidden min-h-screen">
      {/* ── Hero Section (Ultra Clean & Minimal) ── */}
      <section className="pt-36 pb-14 px-6 text-center flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Main Headline with Dark Pill Badge - Lighter Font Weight */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(2.4rem,5vw,4.5rem)] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6"
          >
            Revolutionizing{' '}
            <span className="pill-badge-dark font-normal tracking-normal align-middle my-1">
              enterprise security
            </span>{' '}
            with ai and automation
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed mb-10"
          >
            Empowering organizations and security teams with advanced diagnostic tools, real-time vision, and automated access control.
          </motion.p>
        </div>
      </section>

      {/* ── Feature Cards Grid ── */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-[32px] p-8 md:p-9 soft-card-shadow soft-card-hover border border-slate-100/80 flex flex-col items-center text-center justify-between min-h-[320px]"
              >
                {/* Top Icon Visual */}
                <div className="my-3 flex items-center justify-center">
                  {item.iconShape}
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
