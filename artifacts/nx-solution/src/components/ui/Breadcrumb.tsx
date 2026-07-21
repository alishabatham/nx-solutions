import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';
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
    <nav className="flex px-5 py-3 text-sm text-gray-600 bg-white border-b border-gray-100 rounded-lg shadow-sm w-full mb-8">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 whitespace-nowrap overflow-x-auto no-scrollbar w-full">
        <li className="inline-flex items-center shrink-0">
          <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
            Home
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.path} className="shrink-0 flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
              {isLast ? (
                <span className="text-blue-600 font-medium">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-blue-600 transition-colors">
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
