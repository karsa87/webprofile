'use client';

import React from 'react';
import { GradientText } from '@/components/atoms/Typography';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { WhatsAppCtaButton } from '@/components/molecules/WhatsAppCtaButton';
import { SITE_CONFIG } from '@/lib/constants';
import { trackCvDownload } from '@/lib/analytics';

const PROFILE_METRICS = [
  { value: SITE_CONFIG.metrics.experienceYears, label: SITE_CONFIG.metrics.experienceLabel },
  { value: SITE_CONFIG.metrics.bulogDau, label: SITE_CONFIG.metrics.bulogLabel },
  { value: SITE_CONFIG.metrics.mamikosReq, label: SITE_CONFIG.metrics.mamikosLabel },
  { value: SITE_CONFIG.metrics.speedupRate, label: SITE_CONFIG.metrics.speedupLabel },
] as const;

export function ProfileHero() {
  return (
    <section id="pro-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Biography & Metric Highlights */}
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Senior Backend Engineer & Lead Software Architect</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Mochamad Karsa <br />
            <GradientText>Syaifudin Jupri</GradientText>
          </h1>

          <p className="text-base text-gray-300 max-w-2xl leading-relaxed mb-6">
            Senior Backend Engineer dengan <strong className="text-white">10+ tahun pengalaman</strong> merancang
            dan memelihara sistem enterprise skala nasional. Berpengalaman di{' '}
            <strong className="text-white">Perum BULOG</strong> dan{' '}
            <strong className="text-white">Mamikos</strong>, terspesialisasi pada arsitektur{' '}
            <strong className="text-orange-400 font-medium">Laravel, Golang, NestJS/Node.js</strong>,
            optimasi query database berkecepatan tinggi, dan <em>scalable distributed APIs</em>.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Button
              href={`mailto:${SITE_CONFIG.contact.email}`}
              isExternal
              variant="primary"
              size="md"
              className="gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{SITE_CONFIG.contact.email}</span>
            </Button>

            <WhatsAppCtaButton
              label={SITE_CONFIG.contact.whatsappDisplay}
              variant="secondary"
              size="md"
              leadOptions={{ type: 'interview' }}
            />

            <Button
              href="/documents/Mochamad_Karsa_CV.pdf"
              download="Mochamad_Karsa_CV.pdf"
              variant="outline"
              size="md"
              className="gap-2"
              aria-label="Download CV Mochamad Karsa format PDF"
              onClick={() => trackCvDownload()}
            >
              <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV (PDF)</span>
            </Button>

            <span className="px-3 py-2.5 rounded-xl bg-gray-900/60 border border-gray-800 text-xs text-gray-400 flex items-center gap-1.5">
              <span>📍</span>
              <span>{SITE_CONFIG.contact.location}</span>
            </span>
          </div>

          {/* Highlight Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-800/80">
            {PROFILE_METRICS.map((metric) => (
              <div key={metric.value}>
                <div className="text-2xl font-bold text-orange-400 font-mono tracking-tight">{metric.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Avatar & Quick Overview Card */}
        <div className="lg:col-span-4">
          <Card className="p-6 rounded-3xl bg-gray-900/80 border border-gray-800 text-center">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 mx-auto flex items-center justify-center font-extrabold text-3xl text-white mb-4 shadow-xl shadow-orange-500/20">
              MK
            </div>
            <h3 className="font-bold text-white text-lg">{SITE_CONFIG.author}</h3>
            <p className="text-xs text-orange-400 font-medium mb-4">{SITE_CONFIG.role}</p>

            <div className="text-left text-xs text-gray-400 space-y-2.5 border-t border-gray-800 pt-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Core Stack:</span>
                <span className="text-gray-200 font-medium">Laravel, Golang, NestJS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Databases:</span>
                <span className="text-gray-200 font-medium">PostgreSQL, MySQL, Redis</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">DevOps:</span>
                <span className="text-gray-200 font-medium">Docker, Linux, AWS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Pendidikan:</span>
                <span className="text-gray-200 font-medium">S1 Teknik Informatika</span>
              </div>
            </div>

            <WhatsAppCtaButton
              label="Ajukan Interview / Diskusi Tim"
              variant="primary"
              size="md"
              className="w-full"
              leadOptions={{ type: 'interview' }}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
