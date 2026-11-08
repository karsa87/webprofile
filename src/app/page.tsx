import React from 'react';
import type { Metadata } from 'next';
import { PageSwitcherBar } from '@/components/molecules/PageSwitcherBar';
import { StudioHeader } from '@/components/shared/StudioHeader';
import { StudioFooter } from '@/components/shared/Footers';
import { BusinessHero } from '@/components/organisms/studio/BusinessHero';
import { BusinessSolutions } from '@/components/organisms/studio/BusinessSolutions';
import { RoiSavingsCalculator } from '@/components/molecules/RoiSavingsCalculator';
import { ProductCatalog } from '@/components/organisms/studio/ProductCatalog';
import { SystemTopologyVisualizer } from '@/components/molecules/SystemTopologyVisualizer';
import { WhyAsrakit } from '@/components/organisms/studio/WhyAsrakit';
import { BusinessContactCta } from '@/components/organisms/studio/BusinessContactCta';
import { getAllServices } from '@/application/services';
import { generateStudioJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Asrakit: Enterprise Software Studio & Solusi Sistem Bisnis',
  description:
    'Studio software kustom skala enterprise (ERP, WMS 100+ Cabang, POS Ritel, Gov Platform) untuk pemilik bisnis dan perusahaan berkembang.',
  alternates: {
    canonical: 'https://asrakit.com/',
  },
  openGraph: {
    title: 'Asrakit: Enterprise Software Studio & Solusi Sistem Bisnis',
    description:
      'Software kustom skala enterprise (ERP, WMS 100+ Cabang, POS Ritel) tanpa biaya lisensi SaaS bulanan.',
    url: 'https://asrakit.com/',
    siteName: 'Asrakit',
    images: [
      {
        url: '/images/og-business.png',
        width: 1200,
        height: 630,
        alt: 'Asrakit Enterprise Software Studio & Digital Systems',
        type: 'image/png',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asrakit: Enterprise Software Studio',
    description:
      'Software kustom skala enterprise yang mengakselerasi profit bisnis Anda.',
    images: ['/images/og-business.png'],
    creator: '@karsa87',
  },
};

export default async function HomePage() {
  const services = await getAllServices();
  const jsonLd = generateStudioJsonLd();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky Quick-Switcher Bar */}
      <PageSwitcherBar />

      {/* Main Studio Navigation Header */}
      <StudioHeader />

      <main id="main-content" className="flex-1">
        {/* Hero Section: Split Screen with Interactive Dashboard Mockup */}
        <BusinessHero />

        {/* Problem Statement & Solutions Comparison Matrix */}
        <BusinessSolutions />

        {/* Interactive Feature: ROI SaaS Savings Calculator */}
        <RoiSavingsCalculator />

        {/* Product Catalog Showcase with Flagship Spotlight */}
        <ProductCatalog services={services} />

        {/* Distributed Architecture Topology Blueprint */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/[0.08]">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs font-semibold mb-4">
              BLUEPRINT ARSITEKTUR TEKNIS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Topologi Sistem Terdistribusi Skala Tinggi
            </h2>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              Arsitektur terpisah dari tingkat Edge Client, API Gateway, Cache Cluster, hingga Replikasi Database untuk menjamin nol downtime saat beban transaksi puncak.
            </p>
          </div>
          <SystemTopologyVisualizer />
        </section>

        {/* Why Asrakit & Direct Engineer Commitment */}
        <WhyAsrakit />

        {/* Inbound Lead Consultation CTA */}
        <BusinessContactCta />
      </main>

      {/* Studio Footer */}
      <StudioFooter />
    </div>
  );
}
