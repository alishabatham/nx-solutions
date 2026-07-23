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

const FallbackImages = {
  education: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
  healthcare: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  manufacturing: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  corporate: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  logistics: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  banking: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&q=80',
  retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
  airport: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
  railway: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
  energy: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
  default: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80'
};

export function ExplorerCard({ id, title, subtitle, icon, image, onClick, isProblemLevel }) {
  let IconComponent = icon ? IconMap[icon] : null;

  if (!IconComponent && id) {
    IconComponent = FallbackIcons[id.toLowerCase()] || Shield;
  }

  if (!IconComponent) {
    IconComponent = Layers;
  }

  const cardImage = image || (id ? FallbackImages[id.toLowerCase()] : null) || FallbackImages.default;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[20px] sm:rounded-[28px] overflow-hidden cursor-pointer bg-slate-900 h-[300px] xs:h-[340px] sm:h-[390px] md:h-[420px] shadow-md border border-slate-200/80 transition-all select-none"
      onClick={onClick}
    >
      {/* Full Cover Image */}
      <img 
        src={cardImage} 
        alt={title} 
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />

      {/* Bottom Gradient Overlay & Title */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent flex flex-col justify-end p-4 sm:p-5 text-left z-10">
        <h3 className="font-extrabold text-sm sm:text-base md:text-lg text-white tracking-tight leading-snug drop-shadow-md group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[0.7rem] sm:text-xs font-normal text-slate-300 mt-0.5 sm:mt-1 line-clamp-2 leading-relaxed opacity-90">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export const PageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
};
