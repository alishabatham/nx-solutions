import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { PageTransition } from '@/components/ui/ExplorerCard';
import { submitContactForm } from '@/services/api';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@nxsolution.ai',
    sub: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+92 300 000 0000',
    sub: 'Mon – Sat, 9am – 6pm PKT',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Karachi, Pakistan',
    sub: 'DHA Phase 6, Main Blvd',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: '9:00 AM – 6:00 PM',
    sub: 'Monday to Saturday',
  },
];

const inquiryTypes = [
  'General Inquiry',
  'Product Demo',
  'Sales & Pricing',
  'Technical Support',
  'Partnership',
];

const inputClass =
  'w-full px-4 py-3 rounded-2xl bg-[#f7f8fa] border border-slate-200/80 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all';

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
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitContactForm({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        inquiryType: form.inquiry,
        message: form.message,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.main
      className="w-full bg-[#f7f8fa] min-h-screen text-slate-900 pt-32 pb-24"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      {/* ── Page Header ── */}
      <section className="px-6 text-center mb-12">
        <div className="max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium uppercase tracking-wider mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </span>

          <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-4">
            We'd Love To Hear From You
          </h1>

          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed font-normal">
            Whether you're exploring AI solutions, need a live demo, or have a question — our team is ready to assist.
          </p>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="bg-white rounded-[28px] p-7 soft-card-shadow border border-slate-100/80 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#eef2ff] flex items-center justify-center text-blue-600">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-slate-400 mb-1">{item.label}</p>
                <p className="text-slate-900 font-semibold text-sm leading-snug">{item.value}</p>
                <p className="text-slate-500 text-xs mt-0.5 font-normal">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[32px] p-8 md:p-12 soft-card-shadow border border-slate-100/80"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">Message Sent</h3>
                  <p className="text-slate-500 max-w-sm text-sm leading-relaxed font-normal">
                    Thank you for reaching out. Your message has been received and our team will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', phone: '', company: '', inquiry: '', message: '' });
                  }}
                  className="mt-2 px-6 py-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-1">Send Us a Message</h2>
                  <p className="text-slate-500 text-sm font-normal">Fill in the details below and we will be in touch shortly.</p>
                </div>

                {error && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-700 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Full Name *</label>
                      <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+92 300 000 0000" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Company</label>
                      <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your Company" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Inquiry Type</label>
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
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-blue-600 active:bg-slate-800 disabled:opacity-60 text-white font-medium text-sm transition-all duration-200 shadow-md cursor-pointer"
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
        </div>
      </section>
    </motion.main>
  );
}
