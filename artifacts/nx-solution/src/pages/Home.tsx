import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, BrainCircuit, BarChart3, Zap, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Industries Served' },
  { value: '200+', label: 'AI Solutions' },
  { value: '500+', label: 'Happy Clients' },
  { value: '99.9%', label: 'System Reliability' },
];

const features = [
  {
    icon: BrainCircuit,
    title: 'Intelligent Automation',
    description: 'Replace repetitive manual processes with AI workflows that learn and adapt to your operations.',
  },
  {
    icon: ShieldCheck,
    title: 'AI-Powered Security',
    description: 'Facial recognition, behavioral analytics, and real-time threat detection across all access points.',
  },
  {
    icon: BarChart3,
    title: 'Live Analytics',
    description: 'Unified dashboards with real-time occupancy data, anomaly alerts, and compliance reporting.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'From consultation to live system in weeks — our plug-and-play hardware integrates seamlessly.',
  },
];

const benefits = [
  'Zero physical contact authentication',
  '100% accurate digital audit trails',
  'Real-time zone occupancy tracking',
  'ERP & HRMS integration ready',
  '24/7 monitoring and alerting',
  'Multi-site centralized control',
];

export default function Home() {
  return (
    <main className="w-full bg-white text-slate-900 overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-24">
        {/* Subtle dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

        {/* Top blue accent gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-80 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Next-Generation Enterprise AI Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.6rem,7vw,5.5rem)] font-black tracking-tight leading-[1.07] mb-7 text-slate-900"
          >
            AI Powered Solutions
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)' }}>
              For Every Industry
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-12 font-light"
          >
            Nx Solution delivers AI-driven automation and intelligent security systems to transform your operations and accelerate growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Link
              href="/industries"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm transition-all duration-150 shadow-sm hover:shadow-md"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/solution"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all duration-150"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-slate-200 to-transparent" />
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-y border-slate-100 bg-slate-50"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`py-10 text-center flex flex-col items-center gap-1.5 ${
                  i < stats.length - 1 ? 'border-r border-slate-100' : ''
                }`}
              >
                <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Features ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-5">
              Platform Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
              Built for enterprise scale
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Every module is designed to integrate seamlessly with your existing infrastructure and deliver measurable ROI within months.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits / Why NX ── */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-6">
                Why NX Solution
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                The intelligent layer your facility needs
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Nx Solution bridges the gap between traditional security and modern AI — giving you complete operational visibility, control, and compliance without disrupting existing workflows.
              </p>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md"
              >
                Browse Industries
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 gap-3"
            >
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl bg-blue-600 px-10 py-16 text-center overflow-hidden"
          >
            {/* Subtle background shape */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full opacity-40" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-blue-700 rounded-full opacity-40" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5">
                Ready to transform your operations?
              </h2>
              <p className="text-blue-100 text-lg max-w-xl mx-auto leading-relaxed mb-10">
                Talk to our solution architects and get a bespoke AI deployment plan — built for your industry, your scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-blue-700 font-bold text-sm transition-all shadow-sm hover:shadow-md"
                >
                  Book a Live Demo
                </Link>
                <Link
                  href="/industries"
                  className="px-8 py-3.5 rounded-lg border border-blue-400 hover:border-white text-white font-bold text-sm transition-all hover:bg-blue-500"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
