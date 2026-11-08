'use client';

import React, { useState } from 'react';
import { createWhatsAppLeadUrl } from '@/lib/whatsapp';

export function RoiSavingsCalculator() {
  const [branches, setBranches] = useState<number>(5);
  const [users, setUsers] = useState<number>(12);

  // Typical SaaS costs in IDR per month: ~Rp 450,000 per user + branch add-on
  const monthlySaasCost = users * 450000 + branches * 500000;
  const annualSaasCost = monthlySaasCost * 12;
  const threeYearsSaasCost = annualSaasCost * 3;

  // Asrakit estimated one-time bespoke build + annual maintenance (estimated ~70% savings)
  const threeYearsEstimatedSavings = Math.round(threeYearsSaasCost * 0.72);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const whatsappUrl = createWhatsAppLeadUrl({
    customMessage: `Halo Asrakit, saya telah menggunakan kalkulator penghematan di website. Saya memiliki ${branches} cabang dan ${users} user operasional. Saya tertarik mendiskusikan pembuatan sistem kustom dengan hak milik penuh.`,
  });

  return (
    <section id="biz-roi" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/[0.08]">
      <div className="rounded-2xl border border-white/[0.12] bg-[#0A0F1D]/80 backdrop-blur-md p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Subtle Decorative Architectural Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs font-semibold mb-4">
            KALKULATOR ESTIMASI FINANSIAL
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Berapa Banyak Modal yang Terbuang untuk Biaya Langganan SaaS Bulanan?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Software SaaS pihak ketiga menagih biaya per-user dan per-cabang setiap bulan tanpa henti.
            Dengan Asrakit, sistem dibangun kustom sekali bayar dan menjadi aset hak milik penuh perusahaan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Controls: Sliders */}
          <div className="lg:col-span-6 space-y-6 bg-[#080D18] p-6 rounded-xl border border-white/[0.08]">
            {/* Slider 1: Branches */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono">
                <label htmlFor="roi-branches" className="text-xs text-slate-300 font-semibold">
                  Jumlah Cabang / Gudang / Toko
                </label>
                <span className="text-sm font-bold text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20">
                  {branches} Cabang
                </span>
              </div>
              <input
                id="roi-branches"
                type="range"
                min="1"
                max="50"
                value={branches}
                onChange={(e) => setBranches(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>1 Cabang</span>
                <span>25 Cabang</span>
                <span>50+ Cabang</span>
              </div>
            </div>

            {/* Slider 2: Users */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono">
                <label htmlFor="roi-users" className="text-xs text-slate-300 font-semibold">
                  Jumlah User / Kasir / Admin
                </label>
                <span className="text-sm font-bold text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20">
                  {users} Pengguna
                </span>
              </div>
              <input
                id="roi-users"
                type="range"
                min="2"
                max="100"
                value={users}
                onChange={(e) => setUsers(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>2 User</span>
                <span>50 User</span>
                <span>100+ User</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0C1322] border border-white/5 text-[11px] text-slate-400 space-y-1 font-mono">
              <div className="flex justify-between">
                <span>Biaya SaaS Rutin per Bulan:</span>
                <span className="text-slate-200 font-bold">{formatRupiah(monthlySaasCost)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Pengeluaran SaaS (1 Tahun):</span>
                <span className="text-red-400 font-bold">{formatRupiah(annualSaasCost)}</span>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#121B2F] to-[#0A0F1D] p-6 sm:p-8 rounded-xl border border-orange-500/30 text-center relative">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-2">
              ESTIMASI EFISIENSI MODAL (3 TAHUN)
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-2">
              Hemat {formatRupiah(threeYearsEstimatedSavings)}
            </div>
            <p className="text-xs text-orange-400/90 font-medium mb-6">
              Dibandingkan terus membayar lisensi per-user software pihak ketiga selama 36 bulan.
            </p>

            <div className="space-y-2 text-left text-xs font-mono text-slate-300 mb-8 border-t border-b border-white/10 py-4">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Biaya Lisensi Bulanan Pihak Ketiga: <strong>Rp 0 (Nol Rupiah)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Kepemilikan Kode Sumber & Database: <strong>100% Hak Milik Anda</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Kustomisasi Alur Kerja: <strong>Fleksibel Mengikuti SOP Bisnis Anda</strong></span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/20 transition-all focus-visible:outline-orange-500 min-h-[44px]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.99.54 1.78.829 2.796.83h.005c3.181 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.817-5.775-5.817zm3.447 8.225c-.147.414-.735.794-1.029.845-.295.052-.676.077-2.18-.546-1.503-.623-2.457-2.158-2.531-2.257-.075-.099-.607-.808-.607-1.542 0-.735.385-1.096.522-1.244.137-.148.3-.185.4-.185.1 0 .2 0 .288.005.093.004.218-.035.34.258.127.305.434 1.058.472 1.135.038.077.063.167.013.267-.05.1-.075.163-.15.251-.075.088-.158.196-.226.263-.075.074-.153.155-.066.305.087.15.387.638.831 1.033.571.508 1.053.665 1.203.74.15.075.238.063.326-.038.088-.1.376-.438.476-.588.1-.15.2-.125.338-.075.138.05.877.413 1.028.489.15.075.25.112.288.175.038.063.038.366-.109.78z" />
              </svg>
              <span>Konsultasikan Kebutuhan {branches} Cabang via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
