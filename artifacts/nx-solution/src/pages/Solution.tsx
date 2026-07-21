import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/ExplorerCard';
import {
  CheckCircle2, Search, Cpu, BrainCircuit, Activity,
  ShieldCheck, LayoutDashboard, FileBarChart, TrendingUp,
  Settings, Layers, PhoneCall
} from 'lucide-react';
import React from 'react';

import img1 from '@assets/generated_images/sec_1.jpg';
import img2 from '@assets/generated_images/sec_2.jpg';
import img3 from '@assets/generated_images/sec_3.jpg';
import img4 from '@assets/generated_images/sec_4.jpg';
import img5 from '@assets/generated_images/sec_5.jpg';
import img6 from '@assets/generated_images/sec_6.jpg';

const steps = [
  { id: 1, title: 'Problem', description: 'Unauthorized access and tailgating in restricted zones compromise operational security and safety protocols.', icon: ShieldCheck, image: img1 },
  { id: 2, title: 'Current Process', description: 'Manual logbooks, physical ID checks, and standalone RFID cards that can be shared or stolen, leading to inaccurate audit trails.', icon: Search, image: img2 },
  { id: 3, title: 'Challenges', description: 'High reliance on human vigilance, delayed response to breaches, inability to track real-time occupancy, and high administrative overhead.', icon: Activity, image: img4 },
  { id: 4, title: 'NX AI Solution', description: 'A centralized, AI-driven authentication platform utilizing facial recognition, anti-spoofing, and behavioral analytics at edge endpoints.', icon: BrainCircuit, image: img2 },
  { id: 5, title: 'Required Hardware', description: 'NX Vision Edge Terminals, AI-powered IP Cameras with Liveness Detection, and Automated Smart Turnstiles integrated directly with the network.', icon: Cpu, image: img3 },
  { id: 6, title: 'NX Software', description: 'NX Core Security Platform — a unified orchestration layer managing identities, access policies, schedules, and device health centrally.', icon: Layers, image: img5 },
  { id: 7, title: 'AI Automation', description: 'Automated alert generation for tailgating attempts, blacklisted faces, and forced entry, pushing real-time commands to lock down specific zones.', icon: Settings, image: img4 },
  { id: 8, title: 'Dashboard', description: 'Live spatial mapping, real-time footfall counters, active alerts queue, and instant terminal status streams in a single pane of glass.', icon: LayoutDashboard, image: img5 },
  { id: 9, title: 'Reports', description: 'Automated compliance reports, attendance logs, anomaly frequency charts, and department-wise access analytics exported to your ERP.', icon: FileBarChart, image: img5 },
  { id: 10, title: 'Benefits', description: 'Zero physical contact, unbreakable identity verification, 100% accurate audit trails, and drastically reduced manual security costs.', icon: CheckCircle2, image: img6 },
  { id: 11, title: 'ROI', description: 'Achieve payback within 8 months through elimination of manual guards at internal checkpoints and reduction of card replacement costs.', icon: TrendingUp, image: img6 },
  { id: 12, title: 'Related Problems', description: 'Our platform simultaneously resolves Visitor Mismanagement, Contractor Overstays, and Emergency Evacuation Mustering.', icon: Layers, image: img1 },
];

export default function Solution() {
  return (
    <motion.main
      className="w-full bg-white min-h-screen pt-28 pb-20 overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      {/* Page header */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-50 rounded-full blur-[80px] opacity-70 pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-5">
            Solution Blueprint
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">
            AI Access Control Transformation
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            End-to-end intelligent security deployment — from identifying bottlenecks to achieving operational excellence and measurable ROI.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 py-20">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-px" />

          <div className="space-y-20 md:space-y-28">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Step number bubble — centered on the line */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-black text-lg flex items-center justify-center ring-4 ring-white shadow-md">
                      {step.id}
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`flex-1 w-full ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    {/* Mobile step number */}
                    <div className="flex items-center gap-3 mb-4 md:hidden">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-base flex items-center justify-center shrink-0">
                        {step.id}
                      </div>
                      <h3 className="text-xl font-black text-slate-900">{step.title}</h3>
                    </div>

                    <div className={`hidden md:flex items-center gap-3 mb-4 ${isEven ? '' : 'justify-end'}`}>
                      <div className={`w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center ${isEven ? '' : 'order-last'}`}>
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">{step.title}</h3>
                    </div>

                    <div className={`inline-block text-left`}>
                      <p className="text-slate-600 text-base leading-relaxed bg-white border border-slate-200 rounded-2xl p-6 shadow-sm max-w-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 w-full relative z-10">
                    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 relative group">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-xs font-bold tracking-widest text-white/90 uppercase">{step.title} · Step {step.id}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-28 rounded-3xl bg-blue-600 px-10 py-16 text-center overflow-hidden relative"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full opacity-40 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-blue-700 rounded-full opacity-40 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white font-black text-2xl mx-auto mb-8">
              13
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Ready to transform your operations?
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Talk to our solution architects to design a bespoke AI deployment for your facility and calculate your exact ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-blue-700 font-bold text-sm transition-all shadow-sm hover:shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                Book a Live Demo
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center px-8 py-3.5 rounded-lg border border-blue-400 hover:border-white text-white font-bold text-sm transition-all hover:bg-blue-500"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
