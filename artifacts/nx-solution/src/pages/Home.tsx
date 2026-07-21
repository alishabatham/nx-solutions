import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Industries Served' },
  { value: '200+', label: 'AI Solutions' },
  { value: '500+', label: 'Happy Clients' },
  { value: '99.9%', label: 'System Reliability' },
];

export default function Home() {
  return (
    <main className="w-full bg-[#060c22] min-h-screen text-white overflow-hidden flex flex-col">
      {/* ── Hero ── */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-28">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[90px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyan-600/8 rounded-full blur-[80px]" />
        </div>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 text-blue-300 text-xs font-semibold tracking-widest uppercase mb-10 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Next-Generation Enterprise AI Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[clamp(2.8rem,8vw,6rem)] font-black tracking-tight leading-[1.08] mb-7"
          >
            AI Powered Solutions
            <br />
            For{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 50%, #34d399 100%)',
              }}
            >
              Every Industry
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-light"
          >
            Nx Solution delivers AI-driven automation and intelligent security
            systems to transform your operations and drive growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/industries"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 shadow-[0_0_30px_rgba(37,99,235,0.35)] hover:shadow-[0_0_45px_rgba(37,99,235,0.55)]"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/solution"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/12 hover:border-white/25 hover:bg-white/5 text-white/80 hover:text-white font-medium text-base transition-all duration-200"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="border-t border-white/[0.06] bg-[#040919]/70 backdrop-blur-md"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`py-9 text-center flex flex-col items-center gap-1.5 ${
                  i < stats.length - 1 ? 'border-r border-white/[0.06]' : ''
                }`}
              >
                <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-blue-400/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
