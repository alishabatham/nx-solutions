import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Solutions', path: '/solution' },
    { name: 'About Us', path: '#' },
    { name: 'Resources', path: '#' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-18 flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start cursor-pointer group">
          <div className="text-2xl font-black tracking-tight leading-none flex items-center text-slate-900">
            NX
            <span className="w-2 h-2 rounded-full bg-blue-600 ml-1 mb-1 group-hover:scale-125 transition-transform inline-block" />
          </div>
          <span className="text-[0.58rem] font-bold tracking-[0.22em] leading-none text-slate-400 uppercase">
            Solution
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location === link.path && link.path !== '#';
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`nav-underline text-sm font-medium transition-colors duration-150 ${
                  isActive ? 'text-blue-600 active' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2"
          >
            Sign In
          </Link>
          <Link
            href="/solution"
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm transition-all duration-150 shadow-sm hover:shadow-md"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-slate-700" />
          ) : (
            <Menu className="w-5 h-5 text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg px-4 py-5 flex flex-col gap-1"
          >
            {navLinks.map((link) => {
              const isActive = location === link.path && link.path !== '#';
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`flex justify-between items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <Link
                href="/solution"
                className="block w-full px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm text-center transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
