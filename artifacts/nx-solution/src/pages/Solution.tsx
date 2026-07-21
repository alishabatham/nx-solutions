import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/ExplorerCard';
import { 
  CheckCircle2, Search, Cpu, BrainCircuit, Activity, 
  ShieldCheck, LayoutDashboard, FileBarChart, TrendingUp,
  Settings, Layers, PhoneCall
} from 'lucide-react';
import React from 'react';

// Using the generated images
import img1 from '@assets/generated_images/sec_1.jpg';
import img2 from '@assets/generated_images/sec_2.jpg';
import img3 from '@assets/generated_images/sec_3.jpg';
import img4 from '@assets/generated_images/sec_4.jpg';
import img5 from '@assets/generated_images/sec_5.jpg';
import img6 from '@assets/generated_images/sec_6.jpg';

const steps = [
  {
    id: 1,
    title: "Problem",
    description: "Unauthorized access and tailgating in restricted zones compromise operational security and safety protocols.",
    icon: ShieldCheck,
    image: img1
  },
  {
    id: 2,
    title: "Current Process",
    description: "Manual logbooks, physical ID checks, and standalone RFID cards that can be shared or stolen, leading to inaccurate audit trails.",
    icon: Search,
    image: img2
  },
  {
    id: 3,
    title: "Challenges",
    description: "High reliance on human vigilance, delayed response to breaches, inability to track real-time occupancy, and high administrative overhead.",
    icon: Activity,
    image: img4
  },
  {
    id: 4,
    title: "NX AI Solution",
    description: "A centralized, AI-driven authentication platform utilizing facial recognition, anti-spoofing, and behavioral analytics at edge endpoints.",
    icon: BrainCircuit,
    image: img2
  },
  {
    id: 5,
    title: "Required Hardware",
    description: "NX Vision Edge Terminals, AI-powered IP Cameras with Liveness Detection, and Automated Smart Turnstiles integrated directly with the network.",
    icon: Cpu,
    image: img3
  },
  {
    id: 6,
    title: "NX Software",
    description: "NX Core Security Platform—a unified orchestration layer managing identities, access policies, schedules, and device health centrally.",
    icon: Layers,
    image: img5
  },
  {
    id: 7,
    title: "AI Automation",
    description: "Automated alert generation for tailgating attempts, blacklisted faces, and forced entry, pushing real-time commands to lock down specific zones.",
    icon: Settings,
    image: img4
  },
  {
    id: 8,
    title: "Dashboard",
    description: "Live spatial mapping, real-time footfall counters, active alerts queue, and instant terminal status streams in a single pane of glass.",
    icon: LayoutDashboard,
    image: img5
  },
  {
    id: 9,
    title: "Reports",
    description: "Automated compliance reports, attendance logs, anomaly frequency charts, and department-wise access analytics exported to your ERP.",
    icon: FileBarChart,
    image: img5
  },
  {
    id: 10,
    title: "Benefits",
    description: "Zero physical contact, unbreakable identity verification, 100% accurate audit trails, and drastically reduced manual security costs.",
    icon: CheckCircle2,
    image: img6
  },
  {
    id: 11,
    title: "ROI",
    description: "Achieve payback within 8 months through elimination of manual guards at internal checkpoints and reduction of card replacement costs.",
    icon: TrendingUp,
    image: img6
  },
  {
    id: 12,
    title: "Related Problems",
    description: "Our platform simultaneously resolves Visitor Mismanagement, Contractor Overstays, and Emergency Evacuation Mustering.",
    icon: Layers,
    image: img1
  },
];

export default function Solution() {
  return (
    <motion.main 
      className="w-full bg-slate-50 min-h-screen pt-28 pb-20 px-4 md:px-6 overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      <div className="container mx-auto max-w-5xl">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-6 shadow-sm border border-blue-200">
            Solution Blueprint
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            AI Access Control Transformation
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            End-to-end intelligent security deployment from identifying bottlenecks to achieving operational excellence and ROI.
          </p>
        </div>

        <div className="space-y-24 relative before:absolute before:inset-0 before:ml-[28px] md:before:ml-1/2 before:-translate-x-px md:before:translate-x-0 before:w-0.5 before:bg-blue-100 before:z-0 hidden sm:block"></div>

        <div className="space-y-24 md:space-y-32 relative z-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Text Content */}
                <div className={`flex-1 w-full flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-black text-xl shadow-lg shrink-0">
                      {step.id}
                    </span>
                    <h3 className="text-2xl font-black text-gray-900">{step.title}</h3>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-6 mb-6">
                    {isEven && (
                      <span className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)] shrink-0 z-10 absolute left-1/2 -translate-x-1/2 ring-8 ring-slate-50">
                        {step.id}
                      </span>
                    )}
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">{step.title}</h3>
                    {!isEven && (
                      <span className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)] shrink-0 z-10 absolute left-1/2 -translate-x-1/2 ring-8 ring-slate-50">
                        {step.id}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed max-w-md bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative z-20">
                    {step.description}
                  </p>
                </div>

                {/* Visual Representation */}
                <div className="flex-1 w-full relative z-20">
                  <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl relative group">
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                      <div className="font-mono text-sm tracking-widest text-white/90 font-bold uppercase">{step.title} VISUALIZATION</div>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}

          {/* Final Step: Book Demo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center pt-24 pb-12 mt-12 border-t border-gray-200"
          >
            <span className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white font-black text-3xl shadow-[0_0_40px_rgba(37,99,235,0.4)] mb-10 ring-8 ring-blue-50">
              13
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center tracking-tight">Ready to transform your operations?</h2>
            <p className="text-gray-500 text-xl mb-10 text-center max-w-2xl leading-relaxed">
              Talk to our solution architects to design a bespoke AI deployment for your facility and calculate your exact ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-10 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 w-full sm:w-auto">
                <PhoneCall className="w-5 h-5" /> Book a Live Demo
              </button>
              <button className="px-10 py-5 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-bold text-lg transition-all text-center w-full sm:w-auto shadow-sm">
                Contact Sales
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.main>
  );
}
