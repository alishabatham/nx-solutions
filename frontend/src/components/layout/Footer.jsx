import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 text-slate-500 pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 cursor-pointer group mb-5">
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-black tracking-tighter">
                NX
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                nx solution
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm font-normal">
              Empowering organizations and security teams with advanced diagnostic tools, real-time vision, and automated access control.
            </p>
            <div className="flex flex-col gap-2.5 mt-6 text-xs font-medium">
              <a href="mailto:hello@nxsolution.ai" className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors">
                <Mail className="w-4 h-4 text-slate-400" />
                hello@nxsolution.ai
              </a>
              <a href="tel:+923000000000" className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors">
                <Phone className="w-4 h-4 text-slate-400" />
                +92 300 000 0000
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-slate-900 font-bold text-sm mb-4">Solutions</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li><Link href="/industries" className="hover:text-slate-900 transition-colors">By Industry</Link></li>
              <li><Link href="/solution" className="hover:text-slate-900 transition-colors">Architecture</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Hardware</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Software</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-slate-900 font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li><Link href="#" className="hover:text-slate-900 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Investors</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-slate-900 font-bold text-sm mb-4">Get In Touch</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Schedule a personalized consultation with our AI security architects today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-all shadow-sm"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>&copy; {new Date().getFullYear()} NX Solution. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
