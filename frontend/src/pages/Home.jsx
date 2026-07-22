import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Calendar, Sparkles, Target, Eye, Lightbulb, CheckCircle2, AlertTriangle, 
  ChevronRight, ArrowUpRight, GraduationCap, Heart, Activity, Factory, Briefcase, ShoppingCart, 
  Truck, Home as HomeIcon, Layers, Landmark, Building, Glasses, Search, BarChart2, 
  PenTool, Cpu, Rocket, RefreshCw, Shield, Users, Lock, Camera, CheckSquare, Building2, 
  Zap, Monitor, MapPin, Laptop, ChevronLeft, Check, RefreshCcw, BarChart, Award, Plane
} from 'lucide-react';
import { fetchPageCMS } from '@/services/api';
import { ExplorerCard } from '@/components/ui/ExplorerCard';
import {
  defaultHero, aboutSection, challengesToSolutions, industriesList, processSteps, 
  solutionsList, currentWorkProjects, techLogos, clientTestimonials
} from '@/data/homeData';

export default function Home() {
  const [, setLocation] = useLocation();
  const [hero, setHero] = useState(defaultHero);
  const [about, setAbout] = useState(aboutSection);
  const [challenges, setChallenges] = useState(challengesToSolutions);
  const [solutions, setSolutions] = useState(solutionsList);
  const [projects, setProjects] = useState(currentWorkProjects);
  const [testimonials, setTestimonials] = useState(clientTestimonials);

  useEffect(() => {
    async function loadCMS() {
      try {
        const cms = await fetchPageCMS('home');
        if (cms) {
          if (cms.hero && typeof cms.hero === 'object') setHero((prev) => ({ ...prev, ...cms.hero }));
          if (cms.about && typeof cms.about === 'object') setAbout((prev) => ({ ...prev, ...cms.about }));
          if (cms.challenges && typeof cms.challenges === 'object') setChallenges((prev) => ({ ...prev, ...cms.challenges }));
          if (Array.isArray(cms.solutions) && cms.solutions.length > 0) setSolutions(cms.solutions);
          if (Array.isArray(cms.projects) && cms.projects.length > 0) {
            const safeProjects = cms.projects.map((p, idx) => ({
              ...currentWorkProjects[idx % currentWorkProjects.length],
              ...p,
              icon: p.icon || currentWorkProjects[idx % currentWorkProjects.length]?.icon || 'Building2',
              title: p.title || p.name || 'Live Project'
            }));
            setProjects(safeProjects);
          }
          if (Array.isArray(cms.testimonials) && cms.testimonials.length > 0) setTestimonials(cms.testimonials);
        }
      } catch (err) {
        console.warn('[CMS Error]:', err);
      }
    }
    loadCMS();
  }, []);

  const scrollContainer = (id, direction) => {
    const el = document.getElementById(id);
    if (el) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getSolutionIcon = (iconName) => {
    const icons = {
      Shield, Users, Lock, Camera, CheckSquare, Truck, Building2, Zap, Monitor
    };
    const Component = icons[iconName] || Shield;
    return <Component className="w-5 h-5 text-emerald-600" />;
  };

  return (
    <main className="w-full bg-[#f8fafc] text-slate-900 overflow-hidden font-sans">

      {/* ── SECTION 01: HERO SECTION ── */}
      <section className="relative min-h-[85vh] bg-slate-950 text-white pt-28 pb-16 px-4 sm:px-6 flex items-center justify-center overflow-hidden border-b border-slate-800/80">
        {/* Network / Tech Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="w-full max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Wing Images */}
          <div className="hidden sm:grid lg:col-span-3 grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-slate-800/80 shadow-lg relative group">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80" 
                alt="Smart Campus" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-slate-950/40"></div>
            </div>
            <div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-slate-800/80 shadow-lg relative group">
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80" 
                alt="Warehouse & Logistics" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-slate-950/40"></div>
            </div>
            <div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-slate-800/80 shadow-lg relative group col-span-2 lg:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80" 
                alt="Security & Diagnostics" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-slate-950/40"></div>
            </div>
          </div>

          {/* Center Copy & CTAs */}
          <div className="lg:col-span-6 text-center space-y-6 px-2 sm:px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.15] text-white max-w-2xl mx-auto"
            >
              Engineering<br />
              Intelligent <span className="text-emerald-500 font-extrabold">Solutions</span><br />
              for Modern Operations
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-xl mx-auto"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
            >
              <Link
                href="/industries"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/25 cursor-pointer"
              >
                {hero.primaryBtnText || 'Explore Industries'}
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-950/90 hover:bg-slate-900 text-white font-medium text-xs sm:text-sm border border-slate-700/90 transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                {hero.secondaryBtnText || 'Schedule Consultation'}
              </Link>
            </motion.div>
          </div>

          {/* Right Wing Images */}
          <div className="hidden sm:grid lg:col-span-3 grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-slate-800/80 shadow-lg relative group">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" 
                alt="Smart Factory" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-slate-950/40"></div>
            </div>
            <div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-slate-800/80 shadow-lg relative group">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80" 
                alt="IT & Corporate" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-slate-950/40"></div>
            </div>
            <div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-slate-800/80 shadow-lg relative group col-span-2 lg:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80" 
                alt="Healthcare & Hospitals" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-slate-950/40"></div>
            </div>
          </div>

        </div>
      </section>


      {/* ── SECTION 02: ABOUT NX SOLUTION ── */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: About Text Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                ABOUT NX SOLUTION
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                {about.title}
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                <p>{about.description1}</p>
                <p>{about.description2}</p>
                {about.description3 && <p>{about.description3}</p>}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Feature Highlights Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'AI-Powered Diagnostics', text: 'Real-time analysis of operational streams to identify potential risks early.', icon: Target },
                { title: 'Personalized Access Plans', text: 'Tailored risk profiles and access rules for every role in your organization.', icon: Shield },
                { title: 'Cutting-Edge Automation', text: 'Automated entry gates, Mustering counts, and sensor monitoring.', icon: Cpu },
                { title: 'Real-Time Spatial Insights', text: 'Deep analytics across facility logs for complete visibility.', icon: Eye },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-200/80 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[0.75rem] text-slate-500 leading-relaxed font-normal">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>


      {/* ── SECTION 03: INDUSTRIES WE SERVE (Inner Card Style in Horizontal Slider) ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                INDUSTRIES WE SERVE
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Tailored AI & IoT Solutions across Verticals
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollContainer('industry-slider', 'left')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollContainer('industry-slider', 'right')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold transition-all shadow-sm shrink-0 ml-2"
              >
                Explore All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Horizontal Slider for Inner ExplorerCard items */}
          <div 
            id="industry-slider"
            className="flex items-center gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-2 -mx-4 px-4"
          >
            {industriesList.map((item) => (
              <div key={item.id} className="min-w-[260px] sm:min-w-[290px] shrink-0">
                <ExplorerCard
                  id={item.id}
                  title={item.name}
                  subtitle={item.subtitle}
                  icon={item.icon}
                  onClick={() => setLocation(`/industries/${item.id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 04: OUR SOLUTION ENGINEERING PROCESS ── */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200/60 font-sans">
        <div className="container mx-auto max-w-7xl space-y-10">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5 block">
                OUR SOLUTION ENGINEERING PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Step-by-step Methodology
              </h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
              A structured engineering workflow that turns operational challenges into automated AI & IoT ecosystems.
            </p>
          </div>

          {/* Stepper Connector Line + Step Circles Container */}
          <div className="relative pt-6 pb-2 hidden lg:block">
            {/* Horizontal Line behind circles */}
            <div className="absolute top-[calc(1.5rem+6px)] left-[3.5%] right-[3.5%] h-[1px] bg-slate-200 -z-0"></div>

            {/* Row of 7 Step Number Circles */}
            <div className="grid grid-cols-7 gap-4 relative z-10 text-center">
              {processSteps.map((step) => (
                <div key={step.step} className="flex justify-center items-center">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-500 font-semibold text-xs flex items-center justify-center shadow-2xs ring-4 ring-white">
                    {step.step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7 Clean White Cards Matching Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 text-left">
            {processSteps.map((step, idx) => {
              const icons = { Glasses, Search, BarChart, PenTool, Cpu, Rocket, RefreshCcw };
              const IconComp = icons[step.icon] || CheckCircle2;
              return (
                <div 
                  key={step.step}
                  className="group bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 min-h-[210px]"
                >
                  {/* Linear Icon at Top */}
                  <div className="text-slate-800 group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* STEP Label + Heading + Subtitle at Bottom */}
                  <div className="space-y-1.5">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-wider text-slate-400 block">
                      STEP {idx + 1}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-snug group-hover:text-slate-950 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[0.68rem] text-slate-500 font-normal leading-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ── SECTION 05: OUR CURRENT WORKS (Automatic Infinite Marquee with Icons & Institution Names) ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        <div className="container mx-auto max-w-7xl mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                OUR CURRENT WORK
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Live Deployments
              </h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xs font-normal">
              Trusted by leading institutions, hospitals, and enterprise facilities.
            </p>
          </div>
        </div>

        {/* Automatic Infinite Marquee Slider with Framer Motion */}
        <div className="relative w-full overflow-hidden py-4 flex">
          <motion.div 
            className="flex gap-5 shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 28,
                ease: 'linear',
              },
            }}
          >
            {[...projects, ...projects, ...projects, ...projects].map((proj, idx) => {
              const icons = { GraduationCap, Heart, Factory, Building2, Truck, Landmark, Briefcase, Shield, Rocket, Award, Plane };
              const IconComponent = icons[proj.icon] || Building2;
              return (
                <div 
                  key={`${proj.id || idx}-${idx}`}
                  className="bg-white rounded-[24px] border border-slate-200/90 soft-card-shadow p-6 text-center flex flex-col items-center justify-between min-h-[195px] w-[210px] shrink-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {/* Top Centered Badge / Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-3 shadow-sm shrink-0 border border-slate-800">
                    {proj.badgeText ? (
                      <span className="font-extrabold text-[0.7rem] tracking-tight uppercase text-emerald-400 leading-none">
                        {proj.badgeText}
                      </span>
                    ) : (
                      <IconComponent className="w-6 h-6 stroke-[2] text-emerald-400" />
                    )}
                  </div>

                  {/* Centered Institution Name */}
                  <h3 className="text-[0.78rem] font-bold text-slate-800 tracking-tight leading-snug line-clamp-3 my-auto max-w-[170px]">
                    {proj.title}
                  </h3>

              
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>


      {/* ── SECTION 06: OUR SOLUTIONS (Enterprise Solution Suite) ── */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-slate-800"></span>
              OUR SOLUTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Enterprise Solution Suite
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
              Integrated AI & IoT modules engineered for physical security, visitor access, and operational automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <div 
                key={sol.id}
                onClick={() => setLocation('/solution')}
                className="bg-white rounded-[28px] p-7 md:p-8 border border-slate-200/90 soft-card-shadow hover:shadow-2xl hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between space-y-6 cursor-pointer"
              >
                {/* Glowing Top Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Top Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
                    {getSolutionIcon(sol.icon)}
                  </div>
                  <span className="text-[0.62rem] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-200 transition-colors">
                    {sol.subtitle}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                      {sol.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 07: HARDWARE WE USE & TECHNOLOGY ECOSYSTEM (Automatic Marquee Slider - Only Logos) ── */}
      <section className="py-16 px-4 sm:px-6 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        <div className="container mx-auto max-w-7xl text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            HARDWARE WE USE & ECOSYSTEM
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Seamless Hardware & Cloud Compatibility
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto">
            Compatible with leading enterprise hardware and software technologies based on project requirements.
          </p>
        </div>

        {/* Automatic Infinite Marquee Slider with Framer Motion (Only Logos) */}
        <div className="relative w-full overflow-hidden py-4 flex">
          <motion.div 
            className="flex gap-6 items-center shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 28,
                ease: 'linear',
              },
            }}
          >
            {[...techLogos, ...techLogos, ...techLogos].map((tech, idx) => (
              <div 
                key={`${tech.name}-${idx}`}
                className="h-16 px-8 rounded-2xl bg-white border border-slate-200/90 soft-card-shadow flex items-center justify-center shrink-0 hover:border-emerald-500/40 hover:shadow-md transition-all cursor-default group"
              >
                {tech.logo ? (
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="h-7 max-w-[130px] object-contain grayscale group-hover:grayscale-0 transition-all opacity-85 group-hover:opacity-100"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <span className="text-xs font-extrabold text-slate-800 tracking-tight hidden uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ── SECTION 08: CLIENTS TRUST US ── */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-slate-700"></span>
              CLIENTS TRUST US
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What Operational Leaders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
              >
                <p className="text-sm text-slate-700 italic leading-relaxed font-normal">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-200/80 pt-4">
                  <h4 className="text-xs font-bold text-slate-900">— {t.author}</h4>
                  <p className="text-[0.7rem] text-slate-500">{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 09: LET'S BUILD SMARTER OPERATIONS TOGETHER ── */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        <div className="absolute top-1/2 left-10 w-[500px] h-[250px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                LET'S BUILD SMARTER OPERATIONS TOGETHER
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Discuss your operational challenges with our experts and see how intelligent solutions can transform your organization.
              </h2>

              {/* 3 Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Consultation
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all"
                >
                  <Laptop className="w-4 h-4 text-blue-400" />
                  Book a Demo
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  Request Site Visit
                </Link>
              </div>
            </div>

            {/* Right Team Meeting Image */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                  alt="Consultation Meeting" 
                  className="w-full h-64 lg:h-72 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
