import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export function ProfileHeader() {
  return (
    <header className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-white/[0.08]">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="px-3 py-1.5 rounded-lg bg-[#0E1524] border border-white/10 hover:border-orange-500/50 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-2 focus-visible:outline-orange-500 min-h-[38px]"
        >
          <svg
            className="w-4 h-4 text-orange-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Kembali ke Asrakit Studio</span>
        </Link>
      </div>

      <nav
        aria-label="Navigasi Profil Founder"
        className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300"
      >
        <a href="#pro-experience" className="hover:text-orange-400 transition-colors">
          Pengalaman Kerja
        </a>
        <a href="#pro-projects" className="hover:text-orange-400 transition-colors">
          Portofolio Teknis
        </a>
        <a href="#pro-stack" className="hover:text-orange-400 transition-colors">
          Skillset Matrix
        </a>
        <a href="#pro-education" className="hover:text-orange-400 transition-colors">
          Pendidikan
        </a>
      </nav>

      <div className="flex items-center gap-2.5">
        <a
          href={SITE_CONFIG.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-[#0E1524] hover:bg-[#151E32] text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-colors focus-visible:outline-orange-500 min-h-[38px] flex items-center"
        >
          LinkedIn
        </a>
        <a
          href={SITE_CONFIG.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-[#0E1524] hover:bg-[#151E32] text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-colors focus-visible:outline-orange-500 min-h-[38px] flex items-center"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
