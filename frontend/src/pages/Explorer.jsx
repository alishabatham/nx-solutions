import { useRef } from 'react';
import { useRoute, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/ExplorerBreadcrumb';
import { ExplorerCard, PageTransition } from '@/components/ui/ExplorerCard';
import {
  industries, getDomains, getAreas, getModules, getProblems,
  toTitleCase,
} from '@/data/explorer';

export default function Explorer() {
  const [, setLocation] = useLocation();
  const sliderRef = useRef(null);

  const [matchIndustries] = useRoute('/industries');
  const [matchIndustry, paramsIndustry] = useRoute('/industries/:industry');
  const [matchDomain, paramsDomain] = useRoute('/industries/:industry/:domain');
  const [matchArea, paramsArea] = useRoute('/industries/:industry/:domain/:area');
  const [matchModule, paramsModule] = useRoute('/industries/:industry/:domain/:area/:module');

  let level = 'industries';
  let data = industries;
  let title = 'Select Your Industry';
  let subtitle = 'Choose your operational domain to see tailored AI solutions.';

  const breadcrumbItems = [{ name: 'Industries', path: '/industries' }];

  if (matchModule) {
    level = 'problems';
    data = getProblems(paramsModule.module);
    title = 'Select Problem';
    subtitle = 'Identify the specific operational challenge you are facing.';
    breadcrumbItems.push({ name: toTitleCase(paramsModule.industry), path: `/industries/${paramsModule.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule.domain), path: `/industries/${paramsModule.industry}/${paramsModule.domain}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule.area), path: `/industries/${paramsModule.industry}/${paramsModule.domain}/${paramsArea ? paramsArea.area : paramsModule.area}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule.module), path: `/industries/${paramsModule.industry}/${paramsModule.domain}/${paramsModule.area}/${paramsModule.module}` });
  } else if (matchArea) {
    level = 'modules';
    data = getModules(paramsArea.area);
    title = 'Select Module';
    subtitle = 'Choose the AI security or automation module required.';
    breadcrumbItems.push({ name: toTitleCase(paramsArea.industry), path: `/industries/${paramsArea.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsArea.domain), path: `/industries/${paramsArea.industry}/${paramsArea.domain}` });
    breadcrumbItems.push({ name: toTitleCase(paramsArea.area), path: `/industries/${paramsArea.industry}/${paramsArea.domain}/${paramsArea.area}` });
  } else if (matchDomain) {
    level = 'areas';
    data = getAreas(paramsDomain.domain);
    title = 'Select Area';
    subtitle = 'Select the specific location or operational zone.';
    breadcrumbItems.push({ name: toTitleCase(paramsDomain.industry), path: `/industries/${paramsDomain.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsDomain.domain), path: `/industries/${paramsDomain.industry}/${paramsDomain.domain}` });
  } else if (matchIndustry) {
    level = 'domains';
    data = getDomains(paramsIndustry.industry);
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

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <motion.main
      className="w-full bg-[#f7f8fa] min-h-screen pt-32 pb-24 px-4 md:px-6"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      <div className="container mx-auto max-w-6xl">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header with Slider Control Buttons */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/60 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5 block">
              Step-by-Step Industry Navigator
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">{title}</h1>
            <p className="text-slate-500 text-sm md:text-base mt-1 font-normal">{subtitle}</p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs font-medium text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm mr-2">
              {data.length} Options
            </span>
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-700 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-700 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Card Slider Container */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-1"
          >
            {data.map((item) => (
              <ExplorerCard
                key={item.id}
                title={item.name}
                subtitle={item.subtitle}
                image={item.image}
                onClick={() => handleCardClick(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
}
