import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@nxsolution.ai',
    sub: 'We reply within 24 hours',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+92 300 000 0000',
    sub: 'Mon – Sat, 9am – 6pm PKT',
    color: 'from-cyan-500/20 to-cyan-600/10',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Karachi, Pakistan',
    sub: 'DHA Phase 6, Main Blvd',
    color: 'from-indigo-500/20 to-indigo-600/10',
    border: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: '9:00 AM – 6:00 PM',
    sub: 'Monday to Saturday',
    color: 'from-violet-500/20 to-violet-600/10',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-400',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <main className="w-full bg-[#060c22] min-h-screen text-white overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 px-6 text-center">
        {/* Glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/12 rounded-full blur-[130px]" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[90px]" />
        </div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 text-blue-300 text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.2rem,6vw,4.5rem)] font-black tracking-tight leading-[1.1] mb-5"
          >
            We'd Love To{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 50%, #34d399 100%)' }}
            >
              Hear From You
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-light"
          >
            Whether you're exploring our AI solutions, need a demo, or have a question — our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`relative rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} backdrop-blur-sm p-6 flex flex-col gap-3`}
            >
              <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${item.iconColor}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                <p className="text-white font-bold text-base leading-tight">{item.value}</p>
                <p className="text-slate-400 text-xs mt-1">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Form + Side ── */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-8 md:p-10"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-5">
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', inquiry: '', message: '' }); }}
                  className="mt-2 px-6 py-2.5 rounded-full border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-1">Send Us a Message</h2>
                <p className="text-slate-400 text-sm mb-8">Fill in the form below and we'll get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92 300 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Company</label>
                      <input
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Inquiry Type</label>
                    <select
                      name="inquiry"
                      value={form.inquiry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all appearance-none"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" className="bg-[#0a0e27]">Select inquiry type</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#0a0e27]">{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-70 text-white font-semibold text-base transition-all duration-200 shadow-[0_0_30px_rgba(37,99,235,0.35)] hover:shadow-[0_0_45px_rgba(37,99,235,0.55)]"
                  >
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
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

          {/* Right — sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Why choose us */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7">
              <h3 className="text-lg font-bold text-white mb-5">Why Work With Us?</h3>
              <ul className="space-y-4">
                {[
                  { title: 'AI-First Approach', desc: 'Every solution built around intelligent automation.' },
                  { title: 'Industry Expertise', desc: '50+ verticals covered with deep domain knowledge.' },
                  { title: 'Rapid Deployment', desc: 'From consultation to live system in weeks, not months.' },
                  { title: '24/7 Support', desc: 'Dedicated team ensuring your systems never go down.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7">
              <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {['LinkedIn', 'Twitter / X', 'YouTube', 'Instagram'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-xs font-medium hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-500/10 transition-all"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick response promise */}
            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-7 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1">Quick Response Guaranteed</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  We acknowledge every inquiry within 4 business hours and provide a full response within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
