import React from 'react';
import type { Metadata } from 'next';
import { PageSwitcherBar } from '@/components/molecules/PageSwitcherBar';
import { StudioHeader } from '@/components/shared/StudioHeader';
import { StudioFooter } from '@/components/shared/Footers';
import { BusinessHero } from '@/components/organisms/studio/BusinessHero';
import { BusinessSolutions } from '@/components/organisms/studio/BusinessSolutions';
import { ProductCatalog } from '@/components/organisms/studio/ProductCatalog';
import { WhyAsrakit } from '@/components/organisms/studio/WhyAsrakit';
import { BusinessContactCta } from '@/components/organisms/studio/BusinessContactCta';
import { getAllServices } from '@/application/services';
import { generateStudioJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Asrakit — Enterprise Software Studio & Solusi Sistem Bisnis',
  description:
    'Studio software kustom skala enterprise (ERP, WMS 100+ Cabang, POS Ritel, Gov Platform) untuk pemilik bisnis dan perusahaan berkembang.',
  alternates: {
    canonical: 'https://asrakit.com/',
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

      <main className="flex-1">
        {/* Hero Section */}
        <BusinessHero />

        {/* Problem Statement & Solutions Grid */}
        <BusinessSolutions />

        {/* Product Catalog Showcase */}
        <ProductCatalog services={services} />

        {/* Why Asrakit & Founder Spotlight */}
        <WhyAsrakit />

        {/* Inbound Lead CTA */}
        <BusinessContactCta />
      </main>

      {/* Studio Footer */}
      <StudioFooter />
    </div>
  );
}
