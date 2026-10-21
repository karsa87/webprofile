import React from 'react';
import type { Metadata } from 'next';
import { PageSwitcherBar } from '@/components/molecules/PageSwitcherBar';
import { ProfileHeader } from '@/components/shared/ProfileHeader';
import { ProfileFooter } from '@/components/shared/Footers';
import { ProfileHero } from '@/components/organisms/profile/ProfileHero';
import { CareerTimeline } from '@/components/organisms/profile/CareerTimeline';
import { TechnicalProjectsShowcase } from '@/components/organisms/profile/TechnicalProjectsShowcase';
import { TechStackRadar } from '@/components/organisms/profile/TechStackRadar';
import { EducationSection } from '@/components/organisms/profile/EducationSection';
import { getAllCareers, getAllProjects } from '@/application/services';
import { SITE_CONFIG } from '@/lib/constants';
import { generateProfileJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.author} — Principal Software Engineer & Lead Architect`,
  description:
    'Rekam jejak rekayasa perangkat lunak teknis tingkat lanjut Mochamad Karsa Syaifudin Jupri (10+ tahun, ex-BULOG, Mamikos, Go, Laravel, High-Throughput APIs).',
  alternates: {
    canonical: 'https://asrakit.com/profile',
  },
  openGraph: {
    title: `${SITE_CONFIG.author} — Senior Backend Engineer Portfolio`,
    description:
      'Portofolio teknis rekayasa sistem terdistribusi, optimasi database, dan RESTful API skala enterprise.',
    url: 'https://asrakit.com/profile',
    siteName: 'Asrakit',
    type: 'profile',
  },
};

export default async function ProfilePage() {
  const [careers, projects] = await Promise.all([
    getAllCareers(),
    getAllProjects(),
  ]);
  const jsonLd = generateProfileJsonLd();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky Switcher Bar */}
      <PageSwitcherBar />

      {/* Profile Header Navigation */}
      <ProfileHeader />

      <main className="flex-1">
        {/* Profile Hero & Overview */}
        <ProfileHero />

        {/* Work Experience Timeline */}
        <CareerTimeline careers={careers} />

        {/* Technical Projects Showcase with Deep-Dive Modals */}
        <TechnicalProjectsShowcase projects={projects} />

        {/* Skillset Matrix Radar */}
        <TechStackRadar />

        {/* Formal Education */}
        <EducationSection />
      </main>

      {/* Profile Footer */}
      <ProfileFooter />
    </div>
  );
}
