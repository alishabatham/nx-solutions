import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, AlertCircle, Layers } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/ExplorerBreadcrumb';
import { ExplorerCard, PageTransition } from '@/components/ui/ExplorerCard';
import { fetchPageCMS } from '@/services/api';
import {
  industries as initialIndustries, getDomains, getAreas, getModules, getProblems,
  toTitleCase,
} from '@/data/explorer';

export default function Explorer() {
  const [, setLocation] = useLocation();
  const [cmsData, setCmsData] = useState({});

  const [matchIndustries] = useRoute('/industries');
  const [matchIndustry, paramsIndustry] = useRoute('/industries/:industry');
  const [matchDomain, paramsDomain] = useRoute('/industries/:industry/:domain');
  const [matchArea, paramsArea] = useRoute('/industries/:industry/:domain/:area');
  const [matchModule, paramsModule] = useRoute('/industries/:industry/:domain/:area/:module');

  // Always scroll to top when navigation changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [matchIndustries, matchIndustry, matchDomain, matchArea, matchModule]);

  useEffect(() => {
    async function loadCMS() {
      const cms = await fetchPageCMS('explorer_all_levels');
      if (cms && cms.sections) {
        setCmsData(cms.sections);
      }
    }
    loadCMS();
  }, []);

  let level = 'industries';
  let stepIndex = 1;
  let isProblemLevel = false;
  let data = cmsData.industries || initialIndustries;
  let title = 'Select Your Industry';
  let subtitle = 'Choose your operational domain to see tailored AI solutions.';

  const breadcrumbItems = [{ name: 'Industries', path: '/industries' }];

  if (matchModule) {
    level = 'problems';
    stepIndex = 5;
    isProblemLevel = true;
    const key = `problems_${paramsModule.module}`;
    data = (cmsData[key]) || getProblems(paramsModule.module);
    title = `Operational Challenges in ${toTitleCase(paramsModule.module)}`;
    subtitle = 'Select the specific challenge your facility is experiencing.';
    breadcrumbItems.push({ name: toTitleCase(paramsModule.industry), path: `/industries/${paramsModule.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule.domain), path: `/industries/${paramsModule.industry}/${paramsModule.domain}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule.area), path: `/industries/${paramsModule.industry}/${paramsModule.domain}/${paramsArea ? paramsArea.area : paramsModule.area}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule.module), path: `/industries/${paramsModule.industry}/${paramsModule.domain}/${paramsModule.area}/${paramsModule.module}` });
  } else if (matchArea) {
    level = 'modules';
    stepIndex = 4;
    const key = `modules_${paramsArea.area}`;
    data = (cmsData[key]) || getModules(paramsArea.area);
    title = `AI & Security Modules for ${toTitleCase(paramsArea.area)}`;
    subtitle = 'Select the required AI vision or automation module.';
    breadcrumbItems.push({ name: toTitleCase(paramsArea.industry), path: `/industries/${paramsArea.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsArea.domain), path: `/industries/${paramsArea.industry}/${paramsArea.domain}` });
    breadcrumbItems.push({ name: toTitleCase(paramsArea.area), path: `/industries/${paramsArea.industry}/${paramsArea.domain}/${paramsArea.area}` });
  } else if (matchDomain) {
    level = 'areas';
    stepIndex = 3;
    const key = `areas_${paramsDomain.domain}`;
    data = (cmsData[key]) || getAreas(paramsDomain.domain);
    title = `Operational Zones in ${toTitleCase(paramsDomain.domain)}`;
    subtitle = 'Select the specific zone or facility area.';
    breadcrumbItems.push({ name: toTitleCase(paramsDomain.industry), path: `/industries/${paramsDomain.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsDomain.domain), path: `/industries/${paramsDomain.industry}/${paramsDomain.domain}` });
  } else if (matchIndustry) {
    level = 'domains';
    stepIndex = 2;
    const key = `domains_${paramsIndustry.industry}`;
    data = (cmsData[key]) || getDomains(paramsIndustry.industry);
    title = `${toTitleCase(paramsIndustry.industry)} Domains`;
    subtitle = 'Select your institution or specific operational vertical.';
    breadcrumbItems.push({ name: toTitleCase(paramsIndustry.industry), path: `/industries/${paramsIndustry.industry}` });
  }

  const handleCardClick = (item) => {
    if (level === 'industries') {
      setLocation(`/industries/${item.id}`);
    } else if (level === 'domains') {
      setLocation(`/industries/${paramsIndustry.industry}/${item.id}`);
    } else if (level === 'areas') {
      setLocation(`/industries/${paramsDomain.industry}/${paramsDomain.domain}/${item.id}`);
    } else if (level === 'modules') {
      setLocation(`/industries/${paramsArea.industry}/${paramsArea.domain}/${paramsArea.area}/${item.id}`);
    } else if (level === 'problems') {
      setLocation(`/solution`);
    }
  };

  const handleBackClick = () => {
    if (breadcrumbItems.length > 1) {
      const prevPath = breadcrumbItems[breadcrumbItems.length - 2].path;
      setLocation(prevPath);
    } else {
      setLocation('/industries');
    }
  };

  return (
    <motion.main
      key={level + (paramsIndustry?.industry || '') + (paramsDomain?.domain || '') + (paramsArea?.area || '') + (paramsModule?.module || '')}
      className="w-full bg-[#f7f8fa] min-h-screen pt-28 pb-20 px-4 md:px-6 text-slate-900"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 mb-3">
          <Breadcrumb items={breadcrumbItems} />
          {breadcrumbItems.length > 1 && (
            <button
              onClick={handleBackClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>
          )}
        </div>

        {/* Section Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/60 pb-5">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
              isProblemLevel
                ? 'bg-rose-100 text-rose-700 border border-rose-200'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}>
              {isProblemLevel ? (
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              ) : (
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
              )}
              STEP {stepIndex} OF 5: {isProblemLevel ? 'OPERATIONAL PROBLEMS' : level.toUpperCase()}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-1 font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs shrink-0 self-start sm:self-auto">
            {data.length} Available Options
          </div>
        </div>

        {/* Problem Warning Alert Banner */}
        {isProblemLevel && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200/80 text-rose-900 mb-6 flex items-center gap-3 shadow-2xs">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            <p className="text-xs sm:text-sm font-medium">
              Below are the specific operational challenges. Click on any problem to view its customized AI solution blueprint and ROI metrics.
            </p>
          </div>
        )}

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {data.map((item) => (
            <ExplorerCard
              key={item.id}
              id={item.id}
              title={item.name}
              subtitle={item.subtitle}
              icon={item.icon}
              isProblemLevel={isProblemLevel}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>
      </div>
    </motion.main>
  );
}
