import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isHomePage = location === '/';
  const isDarkNavbar = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDarkNavbar
          ? 'bg-transparent text-white border-b border-transparent'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-900 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between" style={{ height: '76px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer group">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold tracking-tight group-hover:scale-105 transition-transform ${
            isDarkNavbar ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'bg-slate-900 text-white'
          }`}>
            NX
          </div>
          <span className={`text-base font-bold tracking-tight ${isDarkNavbar ? 'text-white' : 'text-slate-900'}`}>
            NX Solutions
          </span>
        </Link>

        {/* Center Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  isDarkNavbar
                    ? isActive ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white'
                    : isActive ? 'text-emerald-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className={`inline-flex items-center px-5 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-sm duration-200 cursor-pointer ${
              isDarkNavbar
                ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
                : 'bg-slate-900 hover:bg-emerald-600 text-white'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-xl transition-colors ${
            isDarkNavbar 
              ? 'bg-slate-900 text-white border border-slate-800' 
              : 'bg-white text-slate-700 border border-slate-200'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
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
            className={`absolute top-full left-0 w-full border-b shadow-lg px-6 py-6 flex flex-col gap-2 ${
              isDarkNavbar 
                ? 'bg-slate-950 text-white border-slate-800' 
                : 'bg-white text-slate-900 border-slate-200'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isDarkNavbar
                      ? isActive ? 'bg-slate-900 text-emerald-400 font-semibold' : 'text-slate-300 hover:bg-slate-900'
                      : isActive ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-2 border-t border-slate-800/40">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
