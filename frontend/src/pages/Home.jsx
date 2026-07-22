import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Calendar, Sparkles, Target, Eye, Lightbulb, CheckCircle2, AlertTriangle, 
  ChevronRight, ArrowUpRight, GraduationCap, Activity, Factory, Briefcase, ShoppingCart, 
  Truck, Home as HomeIcon, Layers, Landmark, Building, Glasses, Search, BarChart2, 
  PenTool, Cpu, Rocket, RefreshCw, Shield, Users, Lock, Camera, CheckSquare, Building2, 
  Zap, Monitor, MapPin, Laptop, ChevronLeft, Check, RefreshCcw, BarChart
} from 'lucide-react';
import { fetchPageCMS } from '@/services/api';
import {
  defaultHero, aboutSection, challengesToSolutions, industriesList, processSteps, 
  solutionsList, currentWorkProjects, techLogos, clientTestimonials
} from '@/data/homeData';

export default function Home() {
  const [, setLocation] = useLocation();
  const [hero, setHero] = useState(defaultHero);
  const [about, setAbout] = useState(aboutSection);

  useEffect(() => {
    async function loadCMS() {
      const cms = await fetchPageCMS('home');
      if (cms) {
        if (cms.hero) setHero((prev) => ({ ...prev, ...cms.hero }));
        if (cms.about) setAbout((prev) => ({ ...prev, ...cms.about }));
      }
    }
    loadCMS();
  }, []);

  const getIndustryIcon = (iconName) => {
    const icons = {
      GraduationCap, Activity, Factory, Briefcase, ShoppingCart, Truck, Home: HomeIcon, Layers, Landmark, Building
    };
    const Component = icons[iconName] || Building;
    return <Component className="w-5 h-5 text-emerald-600" />;
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
      <section className="relative min-h-[92vh] bg-slate-950 text-white pt-36 pb-20 px-4 sm:px-6 flex flex-col justify-center items-center text-center overflow-hidden border-b border-slate-800/60">
        {/* Tech Grid Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        {/* Glow Accents */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/15 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-[350px] h-[200px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center space-y-7">
          {/* Section Tag Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            01 HERO SECTION
          </motion.div>

          {/* Main Middle Aligned Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.12] text-white max-w-4xl mx-auto"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">Intelligent Solutions</span> for Modern Operations
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {hero.subtitle}
          </motion.p>

          {/* Action Buttons (Center Aligned) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-400/40 transform hover:-translate-y-0.5"
            >
              {hero.primaryBtnText || 'Explore Industries'}
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-all duration-300 hover:border-slate-500 shadow-md"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              {hero.secondaryBtnText || 'Schedule Consultation'}
            </Link>
          </motion.div>

          {/* Centered Image Grid Showcase Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full pt-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 max-w-5xl mx-auto">
              {hero.heroImages.map((img, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-36 sm:h-44"
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-[0.7rem] font-bold text-white tracking-wide truncate">{img.title}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>


      {/* ── SECTION 02: ABOUT NX SOLUTION ── */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl">
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-slate-700"></span>
            02 ABOUT NX SOLUTION
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {about.title}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                {about.description1}
              </p>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                {about.description2}
              </p>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                {about.description3}
              </p>
            </div>

            {/* Right Office Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative">
                <img 
                  src={about.teamImage} 
                  alt="NX Solution Engineering Team" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                      NX
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">NX Solution Engineering</h4>
                      <p className="text-[0.7rem] text-slate-500">AI & IoT Infrastructure Specialists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutSection.pillars.map((item) => {
              const icons = { Target, Eye, Lightbulb };
              const IconComp = icons[item.icon] || Target;
              return (
                <div 
                  key={item.id}
                  className="bg-[#f8fafc] rounded-2xl p-7 border border-slate-200/80 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-md group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── SECTION 03: FROM CHALLENGES TO SOLUTIONS ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-slate-800"></span>
            03 FROM CHALLENGES TO SOLUTIONS
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2">
            {challengesToSolutions.title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mb-12">
            {challengesToSolutions.subtitle}
          </p>

          {/* 3 Column Process Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Column 1: OPERATIONAL CHALLENGES */}
            <div className="bg-white rounded-3xl p-7 border border-rose-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-rose-100 pb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> OPERATIONAL CHALLENGES
                </h3>
                <span className="text-[0.65rem] font-semibold bg-rose-50 text-rose-600 px-2.5 py-1 rounded-full">Pain Points</span>
              </div>
              <ul className="space-y-3">
                {challengesToSolutions.challenges.map((c, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-rose-50/50 text-xs sm:text-sm font-medium text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: OUR ENGINEERING APPROACH */}
            <div className="bg-white rounded-3xl p-7 border border-blue-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-blue-100 pb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2">
                  <PenTool className="w-4 h-4" /> OUR ENGINEERING APPROACH
                </h3>
                <span className="text-[0.65rem] font-semibold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">6 Steps</span>
              </div>
              <div className="space-y-3">
                {challengesToSolutions.approach.map((step) => (
                  <div key={step.step} className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/50 border border-blue-100/60">
                    <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                      <p className="text-[0.7rem] text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: INTELLIGENT OUTCOMES */}
            <div className="bg-white rounded-3xl p-7 border border-emerald-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> INTELLIGENT OUTCOMES
                </h3>
                <span className="text-[0.65rem] font-semibold bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full">Results</span>
              </div>
              <ul className="space-y-3">
                {challengesToSolutions.outcomes.map((o, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 text-xs sm:text-sm font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* ── SECTION 04: INDUSTRIES WE SERVE ── */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                04 INDUSTRIES WE SERVE
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Tailored AI & IoT Solutions across Verticals
              </h2>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold transition-all shadow-sm shrink-0"
            >
              Explore All Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {industriesList.map((item) => (
              <div
                key={item.id}
                onClick={() => setLocation(`/industries/${item.id}`)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="h-28 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                    {getIndustryIcon(item.icon)}
                  </div>
                </div>
                <div className="p-3.5 text-left">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[0.68rem] text-slate-500 mt-0.5 line-clamp-1 font-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 05: OUR SOLUTION ENGINEERING PROCESS ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-slate-800"></span>
            05 OUR SOLUTION ENGINEERING PROCESS
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Step-by-step Methodology for Success
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mb-14">
            From initial site observation to continuous system optimization.
          </p>

          {/* Process Horizontal Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative">
            {processSteps.map((step, idx) => (
              <div 
                key={step.step}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-3 relative group"
              >
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-[0.68rem] text-slate-500 font-normal leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 06: OUR SOLUTIONS ── */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-slate-700"></span>
              06 OUR SOLUTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Enterprise Solution Suite
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {solutionsList.map((sol) => (
              <div 
                key={sol.id}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200 hover:border-emerald-500/50 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSolutionIcon(sol.icon)}
                  </div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    {sol.subtitle}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                  {sol.name}
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  {sol.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 07: OUR CURRENT WORK ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 border-b border-slate-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                07 OUR CURRENT WORK
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Live Projects & Deployments
              </h2>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:bg-slate-900 hover:text-white text-slate-700 text-xs font-semibold transition-all shrink-0"
            >
              Explore All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentWorkProjects.map((proj) => (
              <div 
                key={proj.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[0.65rem] font-bold px-3 py-1 rounded-full border backdrop-blur-md ${proj.statusBg}`}>
                      {proj.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 text-white text-[0.65rem] px-2.5 py-1 rounded-md flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {proj.location}
                  </div>
                </div>

                <div className="p-5 text-left space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 08: TECHNOLOGY ECOSYSTEM ── */}
      <section className="py-16 px-4 sm:px-6 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-slate-700"></span>
            08 TECHNOLOGY ECOSYSTEM
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Seamless Hardware & Cloud Compatibility
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto mb-10">
            Compatible with leading enterprise hardware and software technologies based on project requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
            {techLogos.map((tech) => (
              <div 
                key={tech.name}
                className="px-4 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs font-bold text-slate-700 hover:border-emerald-500/50 hover:bg-emerald-50/50 transition-all cursor-default flex items-center gap-2 shadow-2xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 09: CLIENTS TRUST US ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-slate-800"></span>
              09 CLIENTS TRUST US
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What Operational Leaders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {clientTestimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
              >
                <p className="text-sm text-slate-700 italic leading-relaxed font-normal">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-xs font-bold text-slate-900">— {t.author}</h4>
                  <p className="text-[0.7rem] text-slate-500">{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 10: LET'S BUILD SMARTER OPERATIONS TOGETHER ── */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        <div className="absolute top-1/2 left-10 w-[500px] h-[250px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                10 LET'S BUILD SMARTER OPERATIONS TOGETHER
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
