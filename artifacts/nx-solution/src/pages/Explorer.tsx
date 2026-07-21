import { useRoute, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/ui/ExplorerBreadcrumb';
import { ExplorerCard, PageTransition } from '@/components/ui/ExplorerCard';
import {
  industries, getDomains, getAreas, getModules, getProblems,
  toTitleCase,
} from '@/data/explorer';

export default function Explorer() {
  const [, setLocation] = useLocation();

  const [matchIndustries] = useRoute('/industries');
  const [matchIndustry, paramsIndustry] = useRoute('/industries/:industry');
  const [matchDomain, paramsDomain] = useRoute('/industries/:industry/:domain');
  const [matchArea, paramsArea] = useRoute('/industries/:industry/:domain/:area');
  const [matchModule, paramsModule] = useRoute('/industries/:industry/:domain/:area/:module');

  let level = 'industries';
  let data: any[] = industries;
  let title = 'Select Your Industry';
  let subtitle = 'Choose your operational domain to see tailored AI solutions.';

  const breadcrumbItems = [{ name: 'Industries', path: '/industries' }];

  if (matchModule) {
    level = 'problems';
    data = getProblems(paramsModule!.module);
    title = 'Select Problem';
    subtitle = 'Identify the specific operational challenge you are facing.';
    breadcrumbItems.push({ name: toTitleCase(paramsModule!.industry), path: `/industries/${paramsModule!.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule!.domain), path: `/industries/${paramsModule!.industry}/${paramsModule!.domain}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule!.area), path: `/industries/${paramsModule!.industry}/${paramsModule!.domain}/${paramsModule!.area}` });
    breadcrumbItems.push({ name: toTitleCase(paramsModule!.module), path: `/industries/${paramsModule!.industry}/${paramsModule!.domain}/${paramsModule!.area}/${paramsModule!.module}` });
  } else if (matchArea) {
    level = 'modules';
    data = getModules(paramsArea!.area);
    title = 'Select Module';
    subtitle = 'Choose the AI security or automation module required.';
    breadcrumbItems.push({ name: toTitleCase(paramsArea!.industry), path: `/industries/${paramsArea!.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsArea!.domain), path: `/industries/${paramsArea!.industry}/${paramsArea!.domain}` });
    breadcrumbItems.push({ name: toTitleCase(paramsArea!.area), path: `/industries/${paramsArea!.industry}/${paramsArea!.domain}/${paramsArea!.area}` });
  } else if (matchDomain) {
    level = 'areas';
    data = getAreas(paramsDomain!.domain);
    title = 'Select Area';
    subtitle = 'Select the specific location or operational zone.';
    breadcrumbItems.push({ name: toTitleCase(paramsDomain!.industry), path: `/industries/${paramsDomain!.industry}` });
    breadcrumbItems.push({ name: toTitleCase(paramsDomain!.domain), path: `/industries/${paramsDomain!.industry}/${paramsDomain!.domain}` });
  } else if (matchIndustry) {
    level = 'domains';
    data = getDomains(paramsIndustry!.industry);
    title = 'Select Domain';
    subtitle = 'Narrow down to your specific institution type.';
    breadcrumbItems.push({ name: toTitleCase(paramsIndustry!.industry), path: `/industries/${paramsIndustry!.industry}` });
  }

  const handleCardClick = (item: any) => {
    if (level === 'industries') {
      setLocation(`/industries/${item.id}`);
    } else if (level === 'domains') {
      setLocation(`/industries/${paramsIndustry!.industry}/${item.id}`);
    } else if (level === 'areas') {
      setLocation(`/industries/${paramsDomain!.industry}/${paramsDomain!.domain}/${item.id}`);
    } else if (level === 'modules') {
      setLocation(`/industries/${paramsArea!.industry}/${paramsArea!.domain}/${paramsArea!.area}/${item.id}`);
    } else if (level === 'problems') {
      setLocation(`/solution`);
    }
  };

  return (
    <motion.main
      className="w-full bg-white min-h-screen pt-28 pb-20 px-4 md:px-6"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      <div className="container mx-auto max-w-6xl">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">{title}</h1>
          <p className="text-slate-500 text-base">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
    </motion.main>
  );
}
