import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/atoms/Badge';
import { GradientText } from '@/components/atoms/Typography';
import { WhatsAppCtaButton } from '@/components/molecules/WhatsAppCtaButton';
import { MetricCounter } from '@/components/molecules/MetricCounter';

const TRUST_STATS = [
  { value: '100+ Gudang', label: 'Terkontrol akurat secara real-time' },
  { value: '100% Hak Milik', label: 'Tanpa biaya langganan bulanan SaaS' },
  { value: '10+ Tahun', label: 'Pengalaman pengerjaan skala nasional' },
  { value: 'Zero Downtime', label: 'Arsitektur data anti lemot & aman' },
] as const;

export function BusinessHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 text-center relative">
      <Badge variant="brandSolid" size="lg" className="mb-6">
        <span>Bespoke Software for High-Growth Businesses</span>
      </Badge>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6">
        Software Kustom Skala Enterprise <br className="hidden sm:inline" />
        <GradientText>yang Mengakselerasi Profit Bisnis Anda.</GradientText>
      </h1>

      <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
        Asrakit membantu pemilik bisnis, perusahaan berkembang, dan institusi merancang sistem{' '}
        <strong className="text-gray-200">ERP, Warehouse Management (100+ Cabang), POS Ritel Multi-Toko</strong>,
        dan aplikasi kustom yang stabil, aman, dan 100% disesuaikan dengan alur bisnis Anda.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
        <WhatsAppCtaButton
          label="Jadwalkan Konsultasi Gratis"
          size="lg"
          className="w-full sm:w-auto"
          leadOptions={{ type: 'general' }}
        />

        <Link
          href="/profile"
          className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gray-900/90 hover:bg-gray-800 text-gray-200 border border-gray-700 font-semibold text-sm transition-all flex items-center justify-center gap-2 focus-visible:outline-orange-500"
        >
          <span>Lihat Profil Founder & Rekam Jejak</span>
          <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Business Trust Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-gray-800/80">
        {TRUST_STATS.map((stat) => (
          <MetricCounter key={stat.value} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
