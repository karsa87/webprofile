import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export function ProfileHeader() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between border-b border-gray-800/80">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="px-3 py-1.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-orange-500 text-xs font-semibold text-gray-300 hover:text-white transition-all flex items-center gap-1.5 focus-visible:outline-orange-500"
        >
          <svg className="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Kembali ke Website Asrakit Studio</span>
        </Link>
      </div>

      <nav aria-label="Navigasi Profil Founder" className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#pro-experience" className="hover:text-orange-400 transition-colors">Pengalaman Kerja</a>
        <a href="#pro-projects" className="hover:text-orange-400 transition-colors">Portofolio Teknis</a>
        <a href="#pro-stack" className="hover:text-orange-400 transition-colors">Tech Stack</a>
        <a href="#pro-education" className="hover:text-orange-400 transition-colors">Pendidikan</a>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={SITE_CONFIG.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800 text-xs font-semibold transition-all focus-visible:outline-orange-500"
        >
          LinkedIn
        </a>
        <a
          href={SITE_CONFIG.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800 text-xs font-semibold transition-all focus-visible:outline-orange-500"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
