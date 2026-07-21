import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-[#050818] border-t border-blue-900/20 text-gray-400 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex flex-col items-start gap-0 cursor-pointer group mb-4">
              <div className="text-2xl font-black tracking-tight leading-none flex items-center text-white">
                NX <div className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-1 mt-1"></div>
              </div>
              <span className="text-[0.55rem] font-bold tracking-[0.2em] leading-none text-blue-400">
                SOLUTION
              </span>
            </Link>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              AI-driven automation, intelligent security systems, and smart infrastructure across industries.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/industries" className="hover:text-blue-400 transition-colors">By Industry</Link></li>
              <li><Link href="/solution" className="hover:text-blue-400 transition-colors">Platform</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Hardware</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Software</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Partners</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-900/20 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} NX Solution. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
