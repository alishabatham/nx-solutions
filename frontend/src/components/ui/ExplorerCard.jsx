import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function ExplorerCard({ title, subtitle, image, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[32px] overflow-hidden cursor-pointer bg-slate-900 border border-slate-100 soft-card-shadow soft-card-hover h-[480px] w-[300px] sm:w-[320px] md:w-[350px] shrink-0 snap-start flex flex-col justify-between p-8"
      onClick={onClick}
    >
      {/* Background Image Thumbnail */}
      {image ? (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:scale-108 group-hover:opacity-95"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[#0f172a]" />
      )}

      {/* Top Action Arrow */}
      <div className="relative z-10 flex items-center justify-end">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all duration-300 shadow-md">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Bottom Content (Title & Subtitle) */}
      <div className="relative z-10 mt-auto pt-6">
        <h3 className="font-semibold text-2xl leading-snug tracking-tight text-white group-hover:text-blue-200 transition-colors drop-shadow-sm">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs font-normal mt-2 leading-relaxed text-slate-300/90 line-clamp-3">
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
