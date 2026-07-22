import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/ExplorerCard';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';

import img1 from '@/assets/generated_images/sec_1.jpg';
import img2 from '@/assets/generated_images/sec_2.jpg';
import img3 from '@/assets/generated_images/sec_3.jpg';
import img4 from '@/assets/generated_images/sec_4.jpg';
import img5 from '@/assets/generated_images/sec_5.jpg';
import img6 from '@/assets/generated_images/sec_6.jpg';

const solutionsData = [
  {
    id: 'campus-security',
    title: 'Enhanced campus security with eliminated security risks',
    description: 'NX Solution offers comprehensive on- and off-campus security solutions covering school buses, gates, perimeters, buildings, and internal roads, with a wealth of security applications for vehicle, personnel, and alarm management. NX can ensure students, parents, and administrators enjoy a secured and serene learning environment.',
    linkText: 'Campus Security Solution',
    image: img1,
  },
  {
    id: 'attendance-efficiency',
    title: 'Flexible attendance solutions with enhanced efficiency',
    description: "NX Solution's student and staff attendance solution satisfies common participation needs on campus with access control terminals and intelligent attendance devices. Efficient and automatic data recording adds to management efficiency of teachers and school administrators.",
    linkText: 'Students Attendance Solutions',
    image: img2,
  },
  {
    id: 'anpr-gate-access',
    title: 'Automated ANPR vehicle gate access & traffic control',
    description: 'Streamline entry gates with automatic number plate recognition (ANPR), barrier control, and automated visitor pass verification for vehicles entering industrial plants, educational campuses, or corporate parks.',
    linkText: 'Vehicle & Gate Access Solutions',
    image: img3,
  },
  {
    id: 'ai-perimeter-vision',
    title: 'AI-driven perimeter vision & intrusion detection',
    description: 'Continuous 24/7 CCTV surveillance analytics with real-time liveness detection, virtual boundary crossing alerts, and instant incident escalation to central command centers.',
    linkText: 'Perimeter & AI Vision Solutions',
    image: img4,
  },
  {
    id: 'smart-workspace',
    title: 'Smart building & occupancy utilization analytics',
    description: 'Optimize space utilization, room booking, and facility energy consumption using IoT spatial sensors, occupancy counters, and unified dashboard orchestration for corporate offices.',
    linkText: 'Smart Workspace Solutions',
    image: img5,
  },
  {
    id: 'command-center',
    title: 'Centralized operations command & emergency mustering',
    description: 'Single-pane-of-glass dashboard providing live headcount tracking, emergency evacuation Mustering, visitor audit logs, and direct ERP system integrations.',
    linkText: 'Central Operations Solutions',
    image: img6,
  },
];

export default function Solution() {
  return (
    <motion.main
      className="w-full bg-[#f8fafc] min-h-screen pt-28 pb-24 text-slate-900 font-sans"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      {/* ── Page Header ── */}
      <section className="bg-white border-b border-slate-200/80 px-6 py-16 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-slate-800"></span>
            ENTERPRISE SOLUTIONS SUITE
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tailored AI & Automation Solutions
          </h1>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            End-to-end intelligent security blueprints designed for complex operational environments, from campus security to automated gate controls.
          </p>
        </div>
      </section>

      {/* ── Alternating Split Layout Rows ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl space-y-20 md:space-y-28">
          {solutionsData.map((item, index) => {
            const isFlipped = index % 2 === 1;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center ${
                  isFlipped ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isFlipped ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="w-full h-[260px] sm:h-[340px] md:h-[380px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm relative group bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-5 text-left ${isFlipped ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm sm:text-base group transition-colors cursor-pointer"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Standalone Final CTA Banner ── */}
      <section className="px-4 sm:px-6 container mx-auto max-w-7xl">
        <div className="rounded-[36px] bg-slate-950 px-8 py-14 md:p-16 text-center text-white overflow-hidden relative shadow-2xl border border-slate-800">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase">
              Deployment Consultation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to automate your facility?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
              Connect with our solutions engineering team to build a tailored AI security architecture and calculate your exact return on investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <PhoneCall className="w-4.5 h-4.5" />
                Book Consultation
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all cursor-pointer"
              >
                Browse All Industries
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
