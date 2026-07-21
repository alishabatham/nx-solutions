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
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[4/3] bg-slate-200 shadow-sm hover:shadow-xl"
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

      {/* Gradient overlay — always present, stronger at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Bottom text */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-bold text-lg leading-snug drop-shadow-sm">
          {title}
        </h3>
        {subtitle && (
          <p className="text-white/70 text-xs mt-0.5 font-medium leading-snug">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export const PageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.28, ease: 'easeInOut' },
};
