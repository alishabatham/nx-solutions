import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
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

  const scrollContainer = (direction) => {
    const el = document.getElementById('explorer-slider');
    if (el) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  let level = 'industries';
  let stepIndex = 1;
  let isProblemLevel = false;
  let data = (cmsData.industries && Array.isArray(cmsData.industries) && cmsData.industries.length > 0) ? cmsData.industries : initialIndustries;
  let title = 'Select Your Industry';
  let subtitle = 'Choose your operational domain to see tailored AI solutions.';

  const breadcrumbItems = [{ name: 'Industries', path: '/industries' }];

  if (matchModule) {
    level = 'problems';
    stepIndex = 5;
    isProblemLevel = true;
    const key = `problems_${paramsModule.module}`;
    const fallback = getProblems(paramsModule.module);
    data = fallback;
    if (cmsData[key] && Array.isArray(cmsData[key]) && cmsData[key].length > 0) {
      const cmsIds = new Set(cmsData[key].map(i => i.id));
      const missing = fallback.filter(i => !cmsIds.has(i.id));
      data = [...cmsData[key], ...missing];
    }
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
    const fallback = getModules(paramsArea.area);
    data = fallback;
    if (cmsData[key] && Array.isArray(cmsData[key]) && cmsData[key].length > 0) {
      const cmsIds = new Set(cmsData[key].map(i => i.id));
      const missing = fallback.filter(i => !cmsIds.has(i.id));
      data = [...cmsData[key], ...missing];
    }
    title = `AI & Security Modules for ${toTitleCase(paramsArea.area)}`;
    subtitle = 'Select the required AI vision or automation module.';
    breadcrumbItems.push({ name: toTitleCase(paramsArea.industry), path: `/industries/${paramsArea.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsArea.domain), path: `/industries/${paramsArea.industry}/${paramsArea.domain}` });
    breadcrumbItems.push({ name: toTitleCase(paramsArea.area), path: `/industries/${paramsArea.industry}/${paramsArea.domain}/${paramsArea.area}` });
  } else if (matchDomain) {
    level = 'areas';
    stepIndex = 3;
    const key = `areas_${paramsDomain.domain}`;
    const fallback = getAreas(paramsDomain.domain);
    data = fallback;
    if (cmsData[key] && Array.isArray(cmsData[key]) && cmsData[key].length > 0) {
      const cmsIds = new Set(cmsData[key].map(i => i.id));
      const missing = fallback.filter(i => !cmsIds.has(i.id));
      data = [...cmsData[key], ...missing];
    }
    title = `Operational Zones in ${toTitleCase(paramsDomain.domain)}`;
    subtitle = 'Select the specific zone or facility area.';
    breadcrumbItems.push({ name: toTitleCase(paramsDomain.industry), path: `/industries/${paramsDomain.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsDomain.domain), path: `/industries/${paramsDomain.industry}/${paramsDomain.domain}` });
  } else if (matchIndustry) {
    level = 'domains';
    stepIndex = 2;
    const indKey = (paramsIndustry.industry || '').toLowerCase();
    if (indKey === 'healthcare') {
      data = getDomains('healthcare');
    } else {
      const key = `domains_${paramsIndustry.industry}`;
      const fallback = getDomains(paramsIndustry.industry);
      data = fallback;
      if (cmsData[key] && Array.isArray(cmsData[key]) && cmsData[key].length > 0) {
        const cmsIds = new Set(cmsData[key].map(i => i.id));
        const missing = fallback.filter(i => !cmsIds.has(i.id));
        data = [...cmsData[key], ...missing];
      }
    }
    title = `${toTitleCase(paramsIndustry.industry)} Domains`;
    subtitle = 'Select your institution or specific operational vertical.';
    breadcrumbItems.push({ name: toTitleCase(paramsIndustry.industry), path: `/industries/${paramsIndustry.industry}` });
  }

  // Auto-redirect if a module level only has a single self-titled problem card (prevents duplicate clicking)
  useEffect(() => {
    if (level === 'problems' && data && data.length === 1 && paramsModule) {
      if (data[0].id === paramsModule.module || data[0].name.toLowerCase() === paramsModule.module.toLowerCase()) {
        setLocation(`/industries/${paramsModule.industry}/${paramsModule.domain}/${paramsModule.area}/${paramsModule.module}/${data[0].id}`);
      }
    }
  }, [level, data, paramsModule]);

  const handleCardClick = (item) => {
    if (level === 'industries') {
      setLocation(`/industries/${item.id}`);
    } else if (level === 'domains') {
      setLocation(`/industries/${paramsIndustry.industry}/${item.id}`);
    } else if (level === 'areas') {
      setLocation(`/industries/${paramsDomain.industry}/${paramsDomain.domain}/${item.id}`);
    } else if (level === 'modules') {
      const nextProblems = getProblems(item.id);
      if (nextProblems && nextProblems.length === 1 && (nextProblems[0].id === item.id || nextProblems[0].name.toLowerCase() === item.name.toLowerCase())) {
        setLocation(`/industries/${paramsArea.industry}/${paramsArea.domain}/${paramsArea.area}/${item.id}/${nextProblems[0].id}`);
      } else {
        setLocation(`/industries/${paramsArea.industry}/${paramsArea.domain}/${paramsArea.area}/${item.id}`);
      }
    } else if (level === 'problems') {
      setLocation(`/industries/${paramsModule.industry}/${paramsModule.domain}/${paramsModule.area}/${paramsModule.module}/${item.id}`);
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
      className="w-full bg-[#f7f8fa] min-h-screen pt-28 pb-20 px-4 md:px-6 text-slate-900 overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4 mb-3">
          <Breadcrumb items={breadcrumbItems} />
          {breadcrumbItems.length > 1 && (
            <button
              onClick={handleBackClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>
          )}
        </div>

        {/* Section Header with Slider Navigation */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/60 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-1 font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
            <span className="text-xs font-semibold text-slate-600 bg-white px-3.5 py-2 rounded-full border border-slate-200 shadow-2xs">
              {data.length} Available Options
            </span>

            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollContainer('left')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollContainer('right')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Layout (Vertically Long Cards matching reference screenshot) */}
        <div
          id="explorer-slider"
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-2 -mx-4 px-4 touch-pan-x"
        >
          {data.map((item) => (
            <div key={item.id} className="w-[230px] xs:w-[250px] sm:w-[290px] md:w-[310px] shrink-0">
              <ExplorerCard
                id={item.id}
                title={item.name}
                subtitle={item.subtitle}
                image={item.image}
                isProblemLevel={isProblemLevel}
                onClick={() => handleCardClick(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
