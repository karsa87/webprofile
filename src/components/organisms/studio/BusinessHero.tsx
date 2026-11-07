import React from 'react';
import Link from 'next/link';
import { WhatsAppCtaButton } from '@/components/molecules/WhatsAppCtaButton';
import { MetricCounter } from '@/components/molecules/MetricCounter';

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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-mono font-medium mb-8">
          Enterprise Bespoke Software Studio
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
          Software Kustom Skala Enterprise untuk{' '}
          <span className="text-orange-400">Efisiensi Operasional Nyata.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Asrakit membangun sistem <strong className="text-white">ERP, Warehouse Management (100+ Cabang), POS Ritel Multi-Toko</strong>,
          dan platform pelaporan terpusat. Kode sumber 100% milik Anda, tanpa ketergantungan lisensi SaaS pihak ketiga.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-16">
          <WhatsAppCtaButton
            label="Konsultasikan Kebutuhan Sistem"
            size="lg"
            className="w-full sm:w-auto"
            leadOptions={{ type: 'general' }}
            sourceSection="business_hero"
          />

          <Link
            href="/profile"
            className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#121A29] hover:bg-[#1A2336] text-slate-200 border border-white/10 hover:border-white/20 font-semibold text-xs transition-colors flex items-center justify-center gap-2 min-h-[44px]"
          >
            <span>Rekam Jejak Principal Engineer</span>
          </Link>
        </div>
      </div>

      {/* Trust Metrics Bar: Hairline Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
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
