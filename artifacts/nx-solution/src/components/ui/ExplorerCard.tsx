import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  subtitle?: string;
  image?: string;
  onClick?: () => void;
}

export function ExplorerCard({ title, subtitle, image, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[4/3] bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/80 hover:border-slate-300 transition-shadow duration-300"
      onClick={onClick}
    >
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Bottom text */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-bold text-base leading-snug drop-shadow-sm">
          {title}
        </h3>
        {subtitle && (
          <p className="text-white/75 text-xs mt-0.5 font-medium leading-snug">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export const PageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.25, ease: 'easeInOut' },
};
