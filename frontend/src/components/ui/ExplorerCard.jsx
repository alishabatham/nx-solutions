import { motion } from 'framer-motion';
import { IconMap } from '@/data/explorer';
import { 
  GraduationCap, Heart, Factory, Building2, Truck, Landmark, 
  ShoppingBag, Plane, Train, Zap, Shield, Cpu, Activity, Layers
} from 'lucide-react';

const FallbackIcons = {
  education: GraduationCap,
  healthcare: Heart,
  manufacturing: Factory,
  corporate: Building2,
  logistics: Truck,
  banking: Landmark,
  retail: ShoppingBag,
  airport: Plane,
  railway: Train,
  energy: Zap,
};

export function ExplorerCard({ id, title, subtitle, icon, onClick, isProblemLevel }) {
  let IconComponent = icon ? IconMap[icon] : null;

  if (!IconComponent && id) {
    IconComponent = FallbackIcons[id.toLowerCase()] || Shield;
  }

  if (!IconComponent) {
    IconComponent = Layers;
  }

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.012 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-[24px] sm:rounded-[28px] cursor-pointer bg-white soft-card-shadow soft-card-hover min-h-[190px] sm:min-h-[220px] flex flex-col items-center justify-center text-center p-6 sm:p-8 transition-all border ${
        isProblemLevel
          ? 'border-rose-200 hover:border-rose-500 bg-rose-50/20 shadow-rose-500/5'
          : 'border-slate-100'
      }`}
      onClick={onClick}
    >
      {/* Top Centered Icon Badge */}
      <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300 shadow-sm shrink-0 border ${
        isProblemLevel
          ? 'bg-rose-100/80 border-rose-200 text-rose-600 group-hover:bg-rose-600 group-hover:text-white'
          : 'bg-blue-50/90 border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
      }`}>
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
      </div>

      {/* Centered Title */}
      <h3 className={`font-bold text-base sm:text-lg leading-snug tracking-tight transition-colors ${
        isProblemLevel
          ? 'text-slate-900 group-hover:text-rose-600'
          : 'text-slate-900 group-hover:text-blue-600'
      }`}>
        {title}
      </h3>

      {/* Centered Subtitle */}
      {subtitle && (
        <p className="text-[0.75rem] sm:text-xs font-normal mt-1 sm:mt-1.5 leading-relaxed text-slate-500 max-w-[220px]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export const PageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
};
