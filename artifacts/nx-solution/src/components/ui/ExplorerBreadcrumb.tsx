import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';
import React from 'react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-8">
      <ol className="inline-flex items-center gap-1 text-sm text-slate-500 overflow-x-auto whitespace-nowrap no-scrollbar flex-wrap">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors font-medium">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-1">
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              {isLast ? (
                <span className="text-blue-600 font-semibold">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-slate-800 transition-colors">
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
