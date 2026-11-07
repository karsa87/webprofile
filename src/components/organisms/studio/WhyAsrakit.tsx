import React from 'react';
import Link from 'next/link';
import { SectionTitle } from '@/components/atoms/Typography';
import { SITE_CONFIG } from '@/lib/constants';

export function WhyAsrakit() {
  return (
    <section id="biz-comparison" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="text-[11px] font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2">
            Standar Rekayasa Asrakit
          </div>
          <SectionTitle className="mb-6">
            Dikerjakan Langsung oleh Senior Engineer, Tanpa Perantara Agensi.
          </SectionTitle>

          <div className="space-y-5 text-xs text-slate-300 leading-relaxed mb-6">
            <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#0C121D] border border-white/[0.06]">
              <span className="font-mono text-orange-400 font-bold text-sm shrink-0">01</span>
              <div>
                <strong className="text-white block mb-0.5">Arsitektur Teruji di Skala Nasional</strong>
                <span>
                  Sistem Anda dibangun dengan standar keandalan yang sama seperti sistem di{' '}
                  <strong className="text-slate-100">Perum BULOG</strong> dan{' '}
                  <strong className="text-slate-100">Mamikos (50k+ req/hari)</strong>.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#0C121D] border border-white/[0.06]">
              <span className="font-mono text-orange-400 font-bold text-sm shrink-0">02</span>
              <div>
                <strong className="text-white block mb-0.5">Kepemilikan Penuh & Dokumentasi Kode</strong>
                <span>
                  Seluruh repositori kode sumber, dokumentasi arsitektur, dan database schema diserahkan 100% kepada Anda tanpa biaya keterikatan vendor.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#0C121D] border border-white/[0.06]">
              <span className="font-mono text-orange-400 font-bold text-sm shrink-0">03</span>
              <div>
                <strong className="text-white block mb-0.5">Komunikasi Teknis Transparan</strong>
                <span>
                  Ruang lingkup kerja disepakati terperinci sejak awal (SOW jelas) tanpa biaya tersembunyi, dengan garansi pemeliharaan pasca serah terima.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Spotlight Card */}
        <div className="lg:col-span-6">
          <div className="p-8 rounded-xl bg-[#0E1524] border border-white/[0.14] shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-orange-600 flex items-center justify-center font-extrabold text-2xl text-white border border-orange-500/50 shadow-sm shrink-0">
                MK
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {SITE_CONFIG.author}
                </h3>
                <p className="text-orange-400 text-xs font-semibold">
                  Founder & Principal Software Engineer
                </p>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">
                  10+ Tahun Rekayasa Backend Skala Nasional
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6 border-l-2 border-orange-500/50 pl-3.5 py-0.5 italic">
              &ldquo;Asrakit didirikan agar para pemilik bisnis memiliki software andal sekelas korporasi besar tanpa harus membayar lisensi bulanan pihak ketiga yang kaku. Kami hadir sebagai partner teknis jangka panjang Anda.&rdquo;
            </p>

            <Link
              href="/profile"
              className="w-full py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-2 focus-visible:outline-orange-500 min-h-[44px]"
            >
              <span>Buka Profil Lengkap, CV & Technical Stack</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
