'use client';

import React from 'react';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { WhatsAppCtaButton } from '@/components/molecules/WhatsAppCtaButton';
import { SITE_CONFIG } from '@/lib/constants';
import { trackCvDownload } from '@/lib/analytics';

const PROFILE_METRICS = [
  {
    value: SITE_CONFIG.metrics.experienceYears,
    label: SITE_CONFIG.metrics.experienceLabel,
    context: 'Rekayasa sistem terdistribusi & enterprise backend',
  },
  {
    value: SITE_CONFIG.metrics.bulogDau,
    label: SITE_CONFIG.metrics.bulogLabel,
    context: 'Sistem akuntansi & logistik inti nasional',
  },
  {
    value: SITE_CONFIG.metrics.mamikosReq,
    label: SITE_CONFIG.metrics.mamikosLabel,
    context: 'Throughput tinggi dengan Redis caching terukur',
  },
  {
    value: SITE_CONFIG.metrics.speedupRate,
    label: SITE_CONFIG.metrics.speedupLabel,
    context: 'Reduksi latensi query database & API pipelines',
  },
] as const;

export function ProfileHero() {
  return (
    <section id="pro-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Biography & Metric Highlights */}
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-mono font-medium mb-6">
            Senior Backend Engineer & Lead Software Architect
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
            Mochamad Karsa <br />
            <span className="text-orange-400">Syaifudin Jupri</span>
          </h1>

          <p className="text-base text-slate-300 max-w-2xl leading-relaxed mb-8">
            Senior Backend Engineer dengan <strong className="text-white">10+ tahun pengalaman</strong> merancang
            dan memelihara sistem enterprise skala nasional. Berpengalaman di{' '}
            <strong className="text-white">Perum BULOG</strong> dan{' '}
            <strong className="text-white">Mamikos</strong>, terspesialisasi pada arsitektur{' '}
            <span className="text-slate-100 font-medium">Laravel, Golang, dan NestJS/Node.js</span>,
            optimasi query database berkecepatan tinggi, dan distributed APIs.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Button
              href={`mailto:${SITE_CONFIG.contact.email}`}
              isExternal
              variant="primary"
              size="md"
              className="gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{SITE_CONFIG.contact.email}</span>
            </Button>

            <WhatsAppCtaButton
              label={SITE_CONFIG.contact.whatsappDisplay}
              variant="secondary"
              size="md"
              leadOptions={{ type: 'interview' }}
              sourceSection="profile_hero"
            />

            <Button
              href="/documents/Mochamad_Karsa_CV.pdf"
              download="Mochamad_Karsa_CV.pdf"
              variant="outline"
              size="md"
              className="gap-2"
              aria-label="Unduh CV resmi Mochamad Karsa format PDF"
              onClick={() => trackCvDownload()}
            >
              <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Unduh CV Resmi (PDF)</span>
            </Button>

            <span className="px-3 py-2 rounded-lg bg-[#0E1524] border border-white/10 text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <span>📍 {SITE_CONFIG.contact.location}</span>
            </span>
          </div>

          {/* Quantitative Metric Highlights: Architectural 4-column block */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08]">
            {PROFILE_METRICS.map((metric) => (
              <div key={metric.value} className="p-3.5 rounded-lg bg-[#0C121D] border border-white/[0.06]">
                <div className="text-xl sm:text-2xl font-bold text-slate-100 font-mono tracking-tight">
                  {metric.value}
                </div>
                <div className="text-[11px] font-semibold text-orange-400/90 mt-1 uppercase tracking-wider">
                  {metric.label}
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                  {metric.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Avatar & Technical Architecture Card */}
        <div className="lg:col-span-4">
          <Card className="p-6 sm:p-7 rounded-xl bg-[#0E1524] border border-white/[0.14] text-center">
            <div className="w-20 h-20 rounded-xl bg-orange-600 border border-orange-500/50 mx-auto flex items-center justify-center font-extrabold text-2xl text-white mb-4 shadow-sm">
              MK
            </div>
            <h3 className="font-bold text-white text-lg">{SITE_CONFIG.author}</h3>
            <p className="text-xs text-orange-400 font-mono mt-0.5 mb-5">{SITE_CONFIG.role}</p>

            <div className="text-left text-xs text-slate-400 space-y-3 border-t border-white/10 pt-4 mb-6 font-mono">
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-slate-500">Core Stack:</span>
                <span className="text-slate-200 font-medium text-right">Laravel, Golang, NestJS</span>
              </div>
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-slate-500">Databases:</span>
                <span className="text-slate-200 font-medium text-right">PostgreSQL, MySQL, Redis</span>
              </div>
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-slate-500">DevOps:</span>
                <span className="text-slate-200 font-medium text-right">Docker, Linux, AWS</span>
              </div>
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-slate-500">Pendidikan:</span>
                <span className="text-slate-200 font-medium text-right">S1 Teknik Informatika</span>
              </div>
            </div>

            <WhatsAppCtaButton
              label="Undang Interview / Diskusi Tim"
              variant="primary"
              size="md"
              className="w-full"
              leadOptions={{ type: 'interview' }}
              sourceSection="profile_card"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
