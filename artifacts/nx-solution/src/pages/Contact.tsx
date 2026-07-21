import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import { PageTransition } from '@/components/ui/ExplorerCard';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@nxsolution.ai',
    sub: 'We reply within 24 hours',
    color: 'bg-blue-50',
    border: 'border-blue-100',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+92 300 000 0000',
    sub: 'Mon – Sat, 9am – 6pm PKT',
    color: 'bg-sky-50',
    border: 'border-sky-100',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Karachi, Pakistan',
    sub: 'DHA Phase 6, Main Blvd',
    color: 'bg-indigo-50',
    border: 'border-indigo-100',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: '9:00 AM – 6:00 PM',
    sub: 'Monday to Saturday',
    color: 'bg-violet-50',
    border: 'border-violet-100',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
  },
];

const inquiryTypes = [
  'General Inquiry',
  'Product Demo',
  'Sales & Pricing',
  'Technical Support',
  'Partnership',
  'Careers',
];

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <motion.main
      className="w-full bg-white min-h-screen text-slate-900"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      {/* ── Page Header ── */}
      <section className="relative pt-32 pb-16 px-6 text-center bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-50 rounded-full blur-[80px] opacity-70 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight leading-tight mb-4 text-slate-900"
          >
            We'd Love To{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)' }}
            >
              Hear From You
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            Whether you're exploring AI solutions, need a demo, or have a question — our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.07 * i }}
              className={`rounded-2xl border ${item.border} ${item.color} p-6 flex flex-col gap-3`}
            >
              <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center ${item.iconColor}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                <p className="text-slate-900 font-bold text-sm leading-snug">{item.value}</p>
                <p className="text-slate-500 text-xs mt-0.5">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-5">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', phone: '', company: '', inquiry: '', message: '' });
                  }}
                  className="mt-2 px-6 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 text-sm font-medium transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-slate-900 mb-1">Send Us a Message</h2>
                <p className="text-slate-500 text-sm mb-8">Fill in the form below and we'll get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Full Name *</label>
                      <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+92 300 000 0000" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Company</label>
                      <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your Company" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Inquiry Type</label>
                    <select
                      name="inquiry"
                      value={form.inquiry}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements or questions..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 text-white font-semibold text-sm transition-all duration-150 shadow-sm hover:shadow-md"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Why choose us */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-5">Why Work With Us?</h3>
              <ul className="space-y-4">
                {[
                  { title: 'AI-First Approach', desc: 'Every solution built around intelligent automation.' },
                  { title: 'Industry Expertise', desc: '50+ verticals covered with deep domain knowledge.' },
                  { title: 'Rapid Deployment', desc: 'From consultation to live system in weeks, not months.' },
                  { title: '24/7 Support', desc: 'Dedicated team ensuring your systems never go down.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold text-sm">{item.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-2.5">
                {['LinkedIn', 'Twitter / X', 'YouTube', 'Instagram'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 text-xs font-medium hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick response */}
            <div className="rounded-2xl border border-green-200 bg-green-50 p-7 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm mb-1">Quick Response Guaranteed</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  We acknowledge every inquiry within 4 business hours and provide a full response within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
