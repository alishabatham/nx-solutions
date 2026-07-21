import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Determine if we need dark mode navbar (Home) or light mode navbar (Explorer pages)
  const isHomePage = location === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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

  const navbarBg = isScrolled 
    ? (isHomePage ? 'bg-[#0a0e27]/90 backdrop-blur-md border-b border-blue-900/30' : 'bg-white/90 backdrop-blur-md border-b border-gray-200') 
    : (isHomePage ? 'bg-transparent' : 'bg-white border-b border-gray-100');

  const textColor = isHomePage ? 'text-white' : (isScrolled ? 'text-gray-900' : 'text-gray-900');
  const logoColor = isHomePage ? 'text-white' : 'text-primary';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-0 cursor-pointer group">
          <div className={`text-3xl font-black tracking-tight leading-none flex items-center ${logoColor}`}>
            NX <div className="w-2 h-2 rounded-full bg-blue-500 ml-1 mt-1 group-hover:scale-150 transition-transform"></div>
          </div>
          <span className={`text-[0.6rem] font-bold tracking-[0.2em] leading-none ${isHomePage ? 'text-blue-400' : 'text-gray-500'}`}>
            SOLUTION
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`text-sm font-medium hover:text-blue-500 transition-colors ${textColor} ${location === link.path ? 'text-blue-500' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/solution" className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
            Book Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className={textColor} /> : <Menu className={textColor} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-[#0a0e27] border-b border-blue-900/30 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className="text-white text-lg font-medium border-b border-blue-900/30 pb-3 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="w-5 h-5 text-blue-500" />
              </Link>
            ))}
            <Link 
              href="/solution"
              className="mt-4 px-6 py-3 rounded-md bg-blue-600 text-white font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
