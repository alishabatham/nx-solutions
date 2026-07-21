import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
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
    { name: 'Industries', path: '/industries' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f7f8fa]/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm'
          : 'bg-[#f7f8fa]/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between" style={{ height: '76px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-semibold tracking-tight group-hover:scale-105 transition-transform">
            NX
          </div>
          <span className="text-base font-semibold tracking-tight text-slate-900">
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
                className={`text-sm font-normal transition-colors ${
                  isActive ? 'text-slate-900 font-medium' : 'text-slate-600 hover:text-slate-900'
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
            className="inline-flex items-center px-5 py-2 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs transition-all shadow-sm duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
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
            className="absolute top-full left-0 w-full bg-[#f7f8fa] border-b border-slate-200 shadow-lg px-6 py-6 flex flex-col gap-2"
          >
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
