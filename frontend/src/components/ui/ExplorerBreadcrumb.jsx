import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex mb-8">
      <ol className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200/80 backdrop-blur-sm text-xs text-slate-500 overflow-x-auto whitespace-nowrap no-scrollbar">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors font-medium">
            <Home className="w-3.5 h-3.5 text-slate-400" />
            Home
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              {isLast ? (
                <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">{item.name}</span>
              ) : (
                <Link href={item.path} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
