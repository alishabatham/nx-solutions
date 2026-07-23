import { Link, useSearch, useLocation, useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/ExplorerCard';
import { healthcareSolutions } from '@/data/healthcareData';
import { toTitleCase } from '@/data/explorer';
import { 
  ArrowRight, PhoneCall, ShieldCheck, CheckCircle2, ChevronRight, 
  Sparkles, Activity, Users, Car, ShieldAlert, Check, 
  ArrowDown, ArrowUp, FileText, LayoutDashboard, Cpu, Wrench, 
  Settings, AlertTriangle, Clock, Lock, UserX, Layers, Calendar, 
  Shield, FileCheck, RefreshCw, BarChart3, HelpCircle, AlertCircle
} from 'lucide-react';

export default function Solution() {
  const [matchFullRoute, paramsFullRoute] = useRoute('/industries/:industry/:domain/:area/:module/:problem');
  const [matchSolutionRoute, paramsSolutionRoute] = useRoute('/solution/:problem');
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString || '');
  const problemParam = searchParams.get('problem');

  // Determine active problem ID
  const activeProblemId = paramsFullRoute?.problem || paramsSolutionRoute?.problem || problemParam || 'unauthorized-visitor';

  // Active solution dataset
  const activeSolution = healthcareSolutions[activeProblemId] || healthcareSolutions['unauthorized-visitor'];

  // Dynamic breadcrumbs
  const breadcrumbs = paramsFullRoute ? [
    { label: toTitleCase(paramsFullRoute.industry), path: `/industries/${paramsFullRoute.industry}` },
    { label: toTitleCase(paramsFullRoute.domain), path: `/industries/${paramsFullRoute.industry}/${paramsFullRoute.domain}` },
    { label: toTitleCase(paramsFullRoute.area), path: `/industries/${paramsFullRoute.industry}/${paramsFullRoute.domain}/${paramsFullRoute.area}` },
    { label: toTitleCase(paramsFullRoute.module), path: `/industries/${paramsFullRoute.industry}/${paramsFullRoute.domain}/${paramsFullRoute.area}/${paramsModuleKey(paramsFullRoute)}` },
    { label: activeSolution.title, path: '#', isCurrent: true }
  ] : [
    { label: 'Healthcare', path: '/industries/healthcare' },
    { label: 'Hospital', path: '/industries/healthcare/hospital' },
    { label: 'Main Gate', path: '/industries/healthcare/hospital/main-gate' },
    { label: 'Visitor Management', path: '/industries/healthcare/hospital/main-gate/visitor-management' },
    { label: activeSolution.title, path: '#', isCurrent: true }
  ];

  function paramsModuleKey(params) {
    return params?.module || 'visitor-management';
  }

  return (
    <motion.main
      className="w-full bg-[#f8fafc] min-h-screen pt-24 pb-24 text-slate-900 font-sans"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      {/* ── Top Header Banner (Light & Refined) ── */}
      <section className="bg-white border-b border-slate-200/80 px-4 sm:px-6 py-12 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10 space-y-4">
          
          {/* Breadcrumb Path */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
            {breadcrumbs.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {item.isCurrent ? (
                  <span className="text-slate-900 font-medium bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-blue-600 transition-colors cursor-pointer">
                    {item.label}
                  </Link>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                )}
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> SOLUTION BLUEPRINT
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              {activeSolution.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl font-normal leading-relaxed">
              Comprehensive operational blueprint detailing current workflows, AI vision capabilities, hardware requirements, software integration, and measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* ── Visualized Alternating Solution Rows ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl space-y-16 md:space-y-28">
          {activeSolution.cards.map((card, index) => {
            const isFlipped = index % 2 === 1;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center ${
                  isFlipped ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image Column */}
                <div className={`lg:col-span-6 ${isFlipped ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm relative group bg-slate-100">
                    <img
                      src={card.image || 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=800&q=80'}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 text-left ${isFlipped ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-1">
                    <span className="text-[11px] font-medium text-blue-600 uppercase tracking-widest block">
                      FEATURE {index + 1} OF {activeSolution.cards.length}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-snug">
                      {card.title}
                    </h2>
                  </div>

                  {/* Card Content Types Visualization */}
                  {card.type === 'text' && (
                    <div className="space-y-4">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                        {card.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                          <span className="text-xs text-slate-500 font-normal block">Scope</span>
                          <span className="text-sm font-medium text-slate-900">Hospital Protection</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                          <span className="text-xs text-slate-500 font-normal block">Deployment</span>
                          <span className="text-sm font-medium text-slate-900">Instant AI Vision</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {card.type === 'flow' && (
                    <div className="space-y-2.5">
                      {card.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-slate-800 text-sm font-normal">
                          <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center text-xs font-medium shrink-0">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.type === 'list_negative' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {card.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-rose-950 text-xs sm:text-sm font-normal">
                          <AlertCircle className="w-4.5 h-4.5 text-rose-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.type === 'list_solution' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {card.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-slate-900 text-xs sm:text-sm font-normal">
                          <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.type === 'hardware' && (
                    <div className="grid grid-cols-2 gap-3">
                      {card.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-slate-800 text-xs sm:text-sm font-normal">
                          <Cpu className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.type === 'software' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {card.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100 text-indigo-950 text-xs sm:text-sm font-normal">
                          <div className="flex items-center gap-2.5">
                            <Layers className="w-4.5 h-4.5 text-indigo-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 uppercase font-medium">
                            Active
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.type === 'workflow_tree' && (
                    <div className="space-y-3.5 text-sm text-slate-800 font-normal">
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                        {card.workflow.start.map((s, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                            <Check className="w-4 h-4 text-blue-600 shrink-0" /> {s}
                          </div>
                        ))}
                      </div>
                      <div className="p-3 text-center font-medium text-slate-900 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs sm:text-sm">
                        Decision Point: {card.workflow.decision}
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                        <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                          <span className="font-medium text-emerald-900 block border-b border-emerald-200/80 pb-1 mb-1">NO Branch</span>
                          {card.workflow.branches.no.map((b, idx) => <div key={idx} className="text-emerald-950 font-normal">• {b}</div>)}
                        </div>
                        <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200/80">
                          <span className="font-medium text-rose-900 block border-b border-rose-200/80 pb-1 mb-1">YES Branch</span>
                          {card.workflow.branches.yes.map((b, idx) => <div key={idx} className="text-rose-950 font-normal">• {b}</div>)}
                        </div>
                      </div>
                    </div>
                  )}

                  {card.type === 'dashboard_metrics' && (
                    <div className="grid grid-cols-2 gap-3">
                      {card.items.map((item, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                          <span className="text-[11px] text-slate-500 font-medium block uppercase tracking-wider">{item.label}</span>
                          <span className="text-sm sm:text-base font-semibold text-slate-800 block">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.type === 'reports' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {card.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-slate-800 text-xs sm:text-sm font-normal">
                          <FileText className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.type === 'benefits' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {card.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-emerald-950 text-xs sm:text-sm font-medium">
                          <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.type === 'roi' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {card.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-slate-800 text-xs sm:text-sm font-medium">
                          <span>{item.label}</span>
                          {item.type === 'decrease' ? (
                            <span className="text-emerald-700 font-medium text-xs uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">↓ Reduced</span>
                          ) : (
                            <span className="text-blue-700 font-medium text-xs uppercase bg-blue-50 px-2 py-0.5 rounded border border-blue-200">↑ Increased</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {card.type === 'tags' && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {card.items.map((item, idx) => (
                        <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-white text-slate-700 text-xs font-normal border border-slate-200 shadow-2xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {card.type === 'cta' && (
                    <div className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {card.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-slate-800 text-xs sm:text-sm font-medium">
                            <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                            <span>{item.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20 cursor-pointer"
                        >
                          <PhoneCall className="w-4 h-4" />
                          <span>Book Consultation Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Standalone Final CTA Banner (Light & Refined) ── */}
      <section className="px-4 sm:px-6 container mx-auto max-w-7xl pt-8">
        <div className="rounded-[36px] bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80 px-8 py-14 md:p-16 text-center text-slate-900 overflow-hidden relative shadow-lg border border-blue-100">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-medium tracking-widest uppercase">
              Deployment Consultation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Ready to automate your hospital security?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
              Connect with our solutions engineering team to build a tailored AI security architecture and calculate your exact return on investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/20 cursor-pointer"
              >
                <PhoneCall className="w-4.5 h-4.5" />
                Book Consultation
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-medium text-xs sm:text-sm border border-slate-200 shadow-2xs transition-all cursor-pointer"
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
