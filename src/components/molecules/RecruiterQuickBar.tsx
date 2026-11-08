'use client';

import React from 'react';
import { trackCvDownload } from '@/lib/analytics';
import { SITE_CONFIG } from '@/lib/constants';

export function RecruiterQuickBar() {
  return (
    <div className="bg-[#080D18]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3 sticky top-9 z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left: Availability & Core Identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AVAILABLE FOR LEAD & ARCHITECTURE ROLES</span>
          </div>
          <span className="hidden lg:inline text-slate-400 font-mono text-[11px]">
            10+ Tahun Rekam Jejak Enterprise Backend (ex-BULOG, Mamikos)
          </span>
        </div>

        {/* Right: Direct Recruiter Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Download CV */}
          <a
            href="/documents/Mochamad_Karsa_CV.pdf"
            download="Mochamad_Karsa_CV.pdf"
            onClick={() => trackCvDownload()}
            className="px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm min-h-[34px] focus-visible:outline-orange-500"
            aria-label="Unduh Resume Resmi Mochamad Karsa PDF"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Unduh Resume (PDF)</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="px-3 py-1.5 rounded-lg bg-[#0E1524] hover:bg-[#151E32] text-slate-200 hover:text-white border border-white/10 text-xs font-mono transition-colors flex items-center gap-1.5 min-h-[34px]"
            aria-label="Kirim Email ke Mochamad Karsa"
          >
            <svg className="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent('Halo Mochamad Karsa, saya tertarik dengan profil arsitektur Anda dan ingin mengundang diskusi rekrutmen/konsultasi.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#0E1524] hover:bg-[#151E32] text-slate-200 hover:text-white border border-white/10 text-xs font-mono transition-colors flex items-center gap-1.5 min-h-[34px]"
            aria-label="Kirim Pesan WhatsApp ke Mochamad Karsa"
          >
            <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.99.54 1.78.829 2.796.83h.005c3.181 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.817-5.775-5.817zm3.447 8.225c-.147.414-.735.794-1.029.845-.295.052-.676.077-2.18-.546-1.503-.623-2.457-2.158-2.531-2.257-.075-.099-.607-.808-.607-1.542 0-.735.385-1.096.522-1.244.137-.148.3-.185.4-.185.1 0 .2 0 .288.005.093.004.218-.035.34.258.127.305.434 1.058.472 1.135.038.077.063.167.013.267-.05.1-.075.163-.15.251-.075.088-.158.196-.226.263-.075.074-.153.155-.066.305.087.15.387.638.831 1.033.571.508 1.053.665 1.203.74.15.075.238.063.326-.038.088-.1.376-.438.476-.588.1-.15.2-.125.338-.075.138.05.877.413 1.028.489.15.075.25.112.288.175.038.063.038.366-.109.78z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* LinkedIn */}
          <a
            href={SITE_CONFIG.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#0E1524] hover:bg-[#151E32] text-slate-200 hover:text-white border border-white/10 text-xs font-mono transition-colors min-h-[34px] flex items-center"
            aria-label="Buka Profil LinkedIn Mochamad Karsa"
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href={SITE_CONFIG.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#0E1524] hover:bg-[#151E32] text-slate-200 hover:text-white border border-white/10 text-xs font-mono transition-colors min-h-[34px] flex items-center"
            aria-label="Buka Profil GitHub Mochamad Karsa"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
