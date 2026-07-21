import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Building2, BarChart3, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="w-full bg-[#0a0e27] min-h-screen text-white overflow-hidden flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 hero-gradient flex-1 flex flex-col justify-center">
        <div className="absolute inset-0 circuit-pattern opacity-50"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm glow-box"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Next-Generation Enterprise AI Platform
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 max-w-5xl leading-[1.1]"
          >
            AI Powered Solutions For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 glow-text">Every Industry</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100/70 max-w-3xl mb-12 font-light leading-relaxed"
          >
            Deploy intelligent security systems, smart infrastructure, and AI-driven automation that scales across your entire enterprise. Precision engineering for critical operations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link 
              href="/industries" 
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] flex items-center gap-2"
            >
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/solution" 
              className="px-8 py-4 rounded-full bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium text-lg transition-all flex items-center gap-2"
            >
              Platform Overview
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-blue-900/30 bg-[#060919]/80 backdrop-blur-md relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-900/30">
            {[
              { value: "50+", label: "Industries Served" },
              { value: "200+", label: "AI Solutions" },
              { value: "500+", label: "Happy Clients" },
              { value: "99.9%", label: "System Reliability" }
            ].map((stat, i) => (
              <div key={i} className="py-8 text-center flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</span>
                <span className="text-sm md:text-base text-blue-300/70 uppercase tracking-wider font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-[#0a0e27] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Enterprise-Grade <span className="text-blue-400">Intelligence</span></h2>
            <p className="text-gray-400 text-lg">Our unified platform connects your physical infrastructure with advanced AI to deliver unprecedented operational clarity and security.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Intelligent Security", desc: "Automated threat detection, facial recognition, and proactive incident response systems." },
              { icon: <Cpu className="w-8 h-8" />, title: "Edge AI Processing", desc: "Real-time data analysis at the edge for zero-latency decision making and automation." },
              { icon: <BarChart3 className="w-8 h-8" />, title: "Centralized Analytics", desc: "Comprehensive dashboards providing actionable insights across all your facilities globally." }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Industries Preview */}
      <section className="py-24 bg-[#050818] relative border-t border-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Solutions by <span className="text-blue-400">Industry</span></h2>
              <p className="text-gray-400 text-lg">Tailored AI architectures designed for the specific operational challenges of your sector.</p>
            </div>
            <Link href="/industries" className="mt-6 md:mt-0 flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
              View All Industries <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Education", subtitle: "Smart Campus Automation", bg: "bg-blue-900/20" },
              { name: "Healthcare", subtitle: "Hospital & Patient Safety", bg: "bg-emerald-900/20" },
              { name: "Manufacturing", subtitle: "Industrial AI Control", bg: "bg-orange-900/20" },
              { name: "Smart City", subtitle: "Urban Public Safety", bg: "bg-purple-900/20" },
            ].map((ind, i) => (
              <Link key={i} href="/industries" className={`rounded-2xl p-8 border border-white/10 ${ind.bg} hover:border-blue-500/50 transition-all cursor-pointer group`}>
                <Building2 className="w-10 h-10 text-white/50 mb-6 group-hover:text-blue-400 transition-colors" />
                <h3 className="text-xl font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-sm text-gray-400">{ind.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Strip */}
      <section className="py-20 hero-gradient border-t border-blue-900/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to secure your infrastructure?</h2>
          <Link 
            href="/solution" 
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)]"
          >
            Start Your Transformation
          </Link>
        </div>
      </section>
    </main>
  );
}
