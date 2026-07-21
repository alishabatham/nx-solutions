import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { PageTransition } from '@/components/ui/ExplorerCard';

export default function NotFound() {
  return (
    <motion.main
      className="w-full bg-white min-h-screen flex items-center justify-center px-6 pt-24 pb-20 text-center"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PageTransition}
    >
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-amber-500" />
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">404 - Page Not Found</h1>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </motion.main>
  );
}
