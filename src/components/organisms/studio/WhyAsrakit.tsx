import React from 'react';
import Link from 'next/link';
import { SectionTitle } from '@/components/atoms/Typography';
import { SITE_CONFIG } from '@/lib/constants';

export function WhyAsrakit() {
  return (
    <section id="biz-comparison" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 block">
            Keunggulan Asrakit
          </span>
          <SectionTitle className="mb-6">
            Dipimpin Langsung oleh Senior Engineer, Bukan Agen Perantara.
          </SectionTitle>

          <div className="space-y-4 text-xs text-gray-300 leading-relaxed mb-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </div>
              <div>
                <strong className="text-white">Arsitektur Teruji di Skala Nasional: </strong>
                Sistem Anda didesain dengan standar yang sama seperti sistem di{' '}
                <strong className="text-gray-100">Perum BULOG</strong> dan{' '}
                <strong className="text-gray-100">Mamikos (50k+ req/day)</strong>.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </div>
              <div>
                <strong className="text-white">Garansi Pemeliharaan & Kode Bersih: </strong>
                Kami menyertakan dokumentasi teknis dan sesi pelatihan bagi tim Anda, menjamin software mudah dioperasikan sehari-hari.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </div>
              <div>
                <strong className="text-white">Komunikasi Terbuka & On-Budget: </strong>
                Ruang lingkup kerja jelas sejak awal (SOW terperinci) tanpa ada biaya tersembunyi di tengah jalan.
              </div>
            </div>
          </div>
        </div>

        {/* Founder Spotlight Card */}
        <div className="lg:col-span-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/90 border border-orange-500/30 relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center font-extrabold text-2xl text-white shadow-lg shadow-orange-500/20">
                MK
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {SITE_CONFIG.author}
                </h3>
                <p className="text-orange-400 text-xs font-semibold">
                  Founder & Principal Software Engineer Asrakit
                </p>
                <p className="text-xs text-gray-400">
                  {SITE_CONFIG.metrics.experienceYears} Pengalaman Enterprise Software
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed mb-6 italic">
              &ldquo;Kami mendirikan Asrakit agar para pelaku bisnis memiliki software andal sekelas korporasi besar tanpa harus membayar mahal lisensi SaaS luar negeri yang kaku. Kami hadir sebagai partner teknis jangka panjang Anda.&rdquo;
            </p>

            <Link
              href="/profile"
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 focus-visible:outline-orange-500"
            >
              <span>Buka Profil Lengkap, CV & Technical Stack &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
