import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/ExplorerCard';
import {
  CheckCircle2, Search, Cpu, BrainCircuit, Activity,
  ShieldCheck, LayoutDashboard, FileBarChart, TrendingUp,
  Settings, Layers, PhoneCall, ArrowRight, ShieldAlert
} from 'lucide-react';

import img1 from '@/assets/generated_images/sec_1.jpg';
import img2 from '@/assets/generated_images/sec_2.jpg';
import img3 from '@/assets/generated_images/sec_3.jpg';
import img4 from '@/assets/generated_images/sec_4.jpg';
import img5 from '@/assets/generated_images/sec_5.jpg';
import img6 from '@/assets/generated_images/sec_6.jpg';

const steps = [
  { 
    id: 1, 
    phase: 'PHASE 01 · PROBLEM IDENTIFICATION',
    title: 'Security Vulnerabilities & Breaches', 
    description: 'Unauthorized access and tailgating in restricted zones compromise operational security and safety protocols.', 
    icon: ShieldCheck, 
    image: img1 
  },
  { 
    id: 2, 
    phase: 'PHASE 01 · PROBLEM IDENTIFICATION',
    title: 'Current Manual Processes', 
    description: 'Manual logbooks, physical ID checks, and standalone RFID cards that can be shared or stolen, leading to inaccurate audit trails.', 
    icon: Search, 
    image: img2 
  },
  { 
    id: 3, 
    phase: 'PHASE 01 · PROBLEM IDENTIFICATION',
    title: 'Operational Challenges', 
    description: 'High reliance on human vigilance, delayed response to breaches, inability to track real-time occupancy, and high administrative overhead.', 
    icon: Activity, 
    image: img4 
  },
  { 
    id: 4, 
    phase: 'PHASE 02 · AI SOLUTION ARCHITECTURE',
    title: 'NX AI Core Solution', 
    description: 'A centralized, AI-driven authentication platform utilizing facial recognition, anti-spoofing, and behavioral analytics at edge endpoints.', 
    icon: BrainCircuit, 
    image: img3 
  },
  { 
    id: 5, 
    phase: 'PHASE 02 · AI SOLUTION ARCHITECTURE',
    title: 'Required Vision Hardware', 
    description: 'NX Vision Edge Terminals, AI-powered IP Cameras with Liveness Detection, and Automated Smart Turnstiles integrated directly with the network.', 
    icon: Cpu, 
    image: img1 
  },
  { 
    id: 6, 
    phase: 'PHASE 02 · AI SOLUTION ARCHITECTURE',
    title: 'NX Enterprise Software', 
    description: 'NX Core Security Platform — a unified orchestration layer managing identities, access policies, schedules, and device health centrally.', 
    icon: Layers, 
    image: img5 
  },
  { 
    id: 7, 
    phase: 'PHASE 03 · AUTOMATION & DASHBOARD',
    title: 'Real-Time AI Automation', 
    description: 'Automated alert generation for tailgating attempts, blacklisted faces, and forced entry, pushing real-time commands to lock down specific zones.', 
    icon: Settings, 
    image: img4 
  },
  { 
    id: 8, 
    phase: 'PHASE 03 · AUTOMATION & DASHBOARD',
    title: 'Live Management Dashboard', 
    description: 'Live spatial mapping, real-time footfall counters, active alerts queue, and instant terminal status streams in a single pane of glass.', 
    icon: LayoutDashboard, 
    image: img2 
  },
  { 
    id: 9, 
    phase: 'PHASE 03 · AUTOMATION & DASHBOARD',
    title: 'Audit & Compliance Reports', 
    description: 'Automated compliance reports, attendance logs, anomaly frequency charts, and department-wise access analytics exported to your ERP.', 
    icon: FileBarChart, 
    image: img5 
  },
  { 
    id: 10, 
    phase: 'PHASE 04 · IMPACT & RETURN ON INVESTMENT',
    title: 'Core Platform Benefits', 
    description: 'Zero physical contact, unbreakable identity verification, 100% accurate audit trails, and drastically reduced manual security costs.', 
    icon: CheckCircle2, 
    image: img6 
  },
  { 
    id: 11, 
    phase: 'PHASE 04 · IMPACT & RETURN ON INVESTMENT',
    title: 'Measurable Financial ROI', 
    description: 'Achieve payback within 8 months through elimination of manual guards at internal checkpoints and reduction of card replacement costs.', 
    icon: TrendingUp, 
    image: img3 
  },
  { 
    id: 12, 
    phase: 'PHASE 04 · IMPACT & RETURN ON INVESTMENT',
    title: 'Connected Security Modules', 
    description: 'Our platform simultaneously resolves Visitor Mismanagement, Contractor Overstays, and Emergency Evacuation Mustering.', 
    icon: ShieldAlert, 
    image: img1 
  },
];

export default function Solution() {
  return (
    <motion.main
      className="w-full bg-[#f7f8fa] min-h-screen pt-32 pb-24 overflow-hidden text-slate-900"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      {/* ── Page Header ── */}
      <div className="bg-white border-b border-slate-100 px-6 py-16 text-center relative overflow-hidden">
        <div className="relative z-10 container mx-auto max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium tracking-wide uppercase mb-4">
            Platform Architecture
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
            AI Access Control Transformation
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            End-to-end intelligent security deployment — from identifying operational bottlenecks to achieving complete automation and clear financial ROI.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 md:px-6 py-16">
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central guide line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45 }}
                  className={`flex flex-col md:flex-row items-stretch gap-8 md:gap-14 relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Bubble Node */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-20">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-medium text-xs flex items-center justify-center ring-4 ring-[#f7f8fa] shadow-sm">
                      {step.id}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 w-full flex flex-col justify-center">
                    <div className="bg-white rounded-[28px] p-7 md:p-8 soft-card-shadow border border-slate-100/80">
                      {/* Phase Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[0.65rem] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                          {step.phase}
                        </span>
                      </div>

                      {/* Header with Icon and Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-slate-500 text-sm leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Graphic */}
                  <div className="flex-1 w-full flex items-center">
                    <div className="w-full aspect-[16/10] rounded-[28px] overflow-hidden border border-slate-100 shadow-sm relative group bg-slate-900">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-center text-xs text-white/90">
                        <span className="font-medium">{step.title}</span>
                        <span className="text-[0.65rem] bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full font-mono">STEP {step.id}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Standalone Final CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-[32px] bg-slate-900 px-8 py-14 md:p-16 text-center text-white overflow-hidden relative shadow-xl"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6">
              Deployment Consultation
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight leading-tight">
              Ready to automate your facility?
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed mb-8 font-normal">
              Connect with our solutions engineering team to build a tailored AI security architecture and calculate your exact return on investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm transition-all shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                Book Consultation
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 hover:border-white text-white font-medium text-sm transition-all hover:bg-white/10"
              >
                Browse All Industries
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
