import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex flex-col items-start cursor-pointer group mb-5">
              <div className="text-2xl font-black tracking-tight leading-none flex items-center text-white">
                NX
                <span className="w-2 h-2 rounded-full bg-blue-500 ml-1 mb-1 group-hover:scale-125 transition-transform inline-block" />
              </div>
              <span className="text-[0.55rem] font-bold tracking-[0.22em] leading-none text-slate-500 uppercase">
                Solution
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              AI-driven automation, intelligent security systems, and smart infrastructure tailored for every industry.
            </p>
            <div className="flex flex-col gap-2.5 mt-6 text-sm">
              <a href="mailto:hello@nxsolution.ai" className="flex items-center gap-2.5 text-slate-400 hover:text-slate-200 transition-colors">
                <Mail className="w-4 h-4 text-slate-500" />
                hello@nxsolution.ai
              </a>
              <a href="tel:+923000000000" className="flex items-center gap-2.5 text-slate-400 hover:text-slate-200 transition-colors">
                <Phone className="w-4 h-4 text-slate-500" />
                +92 300 000 0000
              </a>
              <span className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500" />
                Karachi, Pakistan
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm">
              {['By Industry', 'Platform', 'Hardware', 'Software'].map((item) => (
                <li key={item}>
                  <Link href={item === 'By Industry' ? '/industries' : item === 'Platform' ? '/solution' : '#'} className="hover:text-slate-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Careers', 'Contact', 'Partners'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Contact' ? '/contact' : '#'} className="hover:text-slate-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              {['Documentation', 'Case Studies', 'Blog', 'Support'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-slate-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              {['LinkedIn', 'Twitter / X', 'YouTube', 'Instagram'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-slate-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} NX Solution. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
