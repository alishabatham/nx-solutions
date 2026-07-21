import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { motion } from 'framer-motion';
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
  let data = cmsData.industries || initialIndustries;
  let title = 'Select Your Industry';
  let subtitle = 'Choose your operational domain to see tailored AI solutions.';

  const breadcrumbItems = [{ name: 'Industries', path: '/industries' }];

  if (matchModule) {
    level = 'problems';
    const key = `problems_${paramsModule.module}`;
    data = (cmsData[key]) || getProblems(paramsModule.module);
    title = 'Select Problem';
    subtitle = 'Identify the specific operational challenge you are facing.';
    breadcrumbItems.push({ name: toTitleCase(paramsModule.industry), path: `/industries/${paramsModule.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule.domain), path: `/industries/${paramsModule.industry}/${paramsModule.domain}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule.area), path: `/industries/${paramsModule.industry}/${paramsModule.domain}/${paramsArea ? paramsArea.area : paramsModule.area}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule.module), path: `/industries/${paramsModule.industry}/${paramsModule.domain}/${paramsModule.area}/${paramsModule.module}` });
  } else if (matchArea) {
    level = 'modules';
    const key = `modules_${paramsArea.area}`;
    data = (cmsData[key]) || getModules(paramsArea.area);
    title = 'Select Module';
    subtitle = 'Choose the AI security or automation module required.';
    breadcrumbItems.push({ name: toTitleCase(paramsArea.industry), path: `/industries/${paramsArea.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsArea.domain), path: `/industries/${paramsArea.industry}/${paramsArea.domain}` });
    breadcrumbItems.push({ name: toTitleCase(paramsArea.area), path: `/industries/${paramsArea.industry}/${paramsArea.domain}/${paramsArea.area}` });
  } else if (matchDomain) {
    level = 'areas';
    const key = `areas_${paramsDomain.domain}`;
    data = (cmsData[key]) || getAreas(paramsDomain.domain);
    title = 'Select Area';
    subtitle = 'Select the specific location or operational zone.';
    breadcrumbItems.push({ name: toTitleCase(paramsDomain.industry), path: `/industries/${paramsDomain.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsDomain.domain), path: `/industries/${paramsDomain.industry}/${paramsDomain.domain}` });
  } else if (matchIndustry) {
    level = 'domains';
    const key = `domains_${paramsIndustry.industry}`;
    data = (cmsData[key]) || getDomains(paramsIndustry.industry);
    title = 'Select Domain';
    subtitle = 'Narrow down to your specific institution type.';
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

  return (
    <motion.main
      className="w-full bg-[#f7f8fa] min-h-screen pt-28 pb-20 px-4 md:px-6 text-slate-900"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      <div className="container mx-auto max-w-6xl">
        <Breadcrumb items={breadcrumbItems} />

        {/* Section Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/60 pb-5">
          <div>
            <span className="text-[0.68rem] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1 block">
              Step-by-Step Industry Navigator
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">{title}</h1>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-1 font-normal leading-relaxed">{subtitle}</p>
          </div>

          <div className="text-xs font-medium text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm shrink-0 self-start sm:self-auto">
            {data.length} Options
          </div>
        </div>

        {/* Grid Layout: Responsive 2-column grid on mobile for perfect fit */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {data.map((item) => (
            <ExplorerCard
              key={item.id}
              id={item.id}
              title={item.name}
              subtitle={item.subtitle}
              icon={item.icon}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>
      </div>
    </motion.main>
  );
}
