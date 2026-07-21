import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  onClick?: () => void;
}

export function ExplorerCard({ title, subtitle, icon, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer group flex flex-col items-center text-center h-full"
      onClick={onClick}
    >
      <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      {subtitle && (
        <p className="text-sm text-gray-500">{subtitle}</p>
      )}
    </motion.div>
  );
}

export const PageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: "easeInOut" }
};
