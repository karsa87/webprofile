import React from 'react';
import Link from 'next/link';
import { WhatsAppCtaButton } from '@/components/molecules/WhatsAppCtaButton';
import { MetricCounter } from '@/components/molecules/MetricCounter';
import { EnterpriseDashboardMockup } from '@/components/molecules/EnterpriseDashboardMockup';

const TRUST_STATS = [
  {
    value: '100+ Gudang',
    label: 'Terkontrol Realtime',
    context: 'Sinkronisasi stok akurat multi-cabang tanpa deviasi',
  },
  {
    value: '100% Hak Milik',
    label: 'Source Code Penuh',
    context: 'Tanpa biaya langganan bulanan software pihak ketiga',
  },
  {
    value: '10+ Tahun',
    label: 'Rekam Jejak Skala Nasional',
    context: 'Teruji di operasional BUMN dan platform high-concurrency',
  },
  {
    value: 'Sub-Detik',
    label: 'Respons Transaksi',
    context: 'Arsitektur database teroptimasi anti-lambat saat jam sibuk',
  },
] as const;

export function BusinessHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 border-b border-white/[0.08]">
      {/* Dynamic 2-Column Split Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
        {/* Left Column: Commercial Value Proposition */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Enterprise Bespoke Software Studio
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Sistem Kustom Skala Enterprise untuk{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Efisiensi & Profit Bisnis Nyata.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
            Asrakit merancang <strong className="text-white">ERP Manufaktur, Warehouse Management (100+ Cabang), dan POS Ritel Multi-Toko</strong>.
            Sistem dibangun sekali bayar sesuai alur bisnis Anda: <span className="text-white font-medium">100% hak milik kode sumber</span>, tanpa ketergantungan lisensi SaaS bulanan.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-8">
            <WhatsAppCtaButton
              label="Konsultasikan Kebutuhan Sistem"
              size="lg"
              className="w-full sm:w-auto"
              leadOptions={{ type: 'general' }}
              sourceSection="business_hero"
            />

            <a
              href="#biz-roi"
              className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-[#0E1524] hover:bg-[#162035] text-slate-200 border border-white/10 hover:border-orange-500/30 font-semibold text-xs transition-colors flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>Hitung Estimasi Penghematan</span>
            </a>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-400 pt-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>100% Source Code Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Direct Lead Engineer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Nol Biaya Royalti</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Software Mockup */}
        <div className="lg:col-span-5">
          <EnterpriseDashboardMockup />
        </div>
      </div>

      {/* Trust Metrics Bar: Hairline Grid with Animated Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {TRUST_STATS.map((stat) => (
          <MetricCounter
            key={stat.label}
            value={stat.value}
            label={stat.label}
            context={stat.context}
          />
        ))}
      </div>
    </section>
  );
}
