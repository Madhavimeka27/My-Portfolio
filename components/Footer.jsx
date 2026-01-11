import React from 'react';
import { Code } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {year} Madhavi Meka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
