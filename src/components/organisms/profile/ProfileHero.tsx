'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { WhatsAppCtaButton } from '@/components/molecules/WhatsAppCtaButton';
import { MetricCounter } from '@/components/molecules/MetricCounter';
import { SITE_CONFIG } from '@/lib/constants';
import { trackCvDownload } from '@/lib/analytics';

const PROFILE_METRICS = [
  {
    value: '10+ Tahun',
    label: 'Pengalaman Backend',
    context: 'Rekayasa sistem terdistribusi & enterprise backend',
  },
  {
    value: '10,000+ DAU',
    label: 'Perum BULOG Core',
    context: 'Sistem akuntansi, logistik & perpajakan nasional',
  },
  {
    value: '50,000+ Req/Hari',
    label: 'Mamikos Scale',
    context: 'Throughput tinggi dengan Redis caching terukur',
  },
  {
    value: '30% Reduksi',
    label: 'Latensi Database',
    context: 'Optimasi query indexing & RESTful API pipelines',
  },
] as const;

export function ProfileHero() {
  return (
    <section id="pro-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
        {/* Left Column: Portrait & Personal Identity */}
        <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
          {/* Real Photo Avatar in Futuristic Frame */}
          <div className="relative group mb-6">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-orange-500/40 via-amber-500/20 to-sky-500/30 blur-sm group-hover:blur-md transition-all duration-300" />
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-white/20 bg-[#0E1524] shadow-2xl">
              <Image
                src="/images/karsa.jpg"
                alt="Mochamad Karsa Syaifudin Jupri - Lead Software Architect"
                width={208}
                height={208}
                className="w-full h-full object-cover object-top filter contrast-[1.03]"
                priority
              />
            </div>
            {/* Status Pill */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#070B14] border border-orange-500/40 text-[10px] font-mono text-orange-400 font-bold whitespace-nowrap shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              10+ TAHUN EXP
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-mono font-medium mb-3 mt-2">
            Senior Backend Engineer & Lead Architect
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Mochamad Karsa <br className="hidden sm:inline" />
            <span className="text-orange-400">Syaifudin Jupri</span>
          </h1>

          <div className="text-xs font-mono text-slate-400 mt-2 flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{SITE_CONFIG.contact.location}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mt-6">
            <a
              href="/documents/Mochamad_Karsa_CV.pdf"
              download="Mochamad_Karsa_CV.pdf"
              onClick={() => trackCvDownload()}
              className="px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors flex items-center gap-2 shadow-md focus-visible:outline-orange-500 min-h-[40px]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Unduh CV Resmi (PDF)</span>
            </a>

            <WhatsAppCtaButton
              label="Undang Wawancara"
              variant="secondary"
              size="sm"
              leadOptions={{ type: 'interview' }}
              sourceSection="profile_hero"
            />
          </div>
        </div>

        {/* Right Column: Deep Engineering Overview & Technical Proof */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A]/80 border border-white/10 backdrop-blur-md">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3">
              Rekayasa Perangkat Lunak Skala Enterprise & Sistem Terdistribusi
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Senior Backend Engineer dengan rekam jejak lebih dari satu dekade merancang arsitektur backend tangguh untuk platform ber-traffic tinggi dan sistem misi kritis nasional. Berpengalaman di <strong className="text-white">Perum BULOG</strong> dan <strong className="text-white">Mamikos</strong>, terspesialisasi pada arsitektur <span className="text-orange-400 font-medium">Golang, Laravel, dan NestJS/Node.js</span>, manajemen database berskala besar, optimasi antrean Redis, dan sinkronisasi multi-cabang.
            </p>

            {/* Architectural Telemetry Box */}
            <div className="rounded-xl bg-[#050811] border border-white/10 p-4 font-mono text-xs space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-white/10 text-[11px] text-slate-400">
                <span>ENGINEERING SPECIFICATION & ARCHITECTURE PROFILE</span>
                <span className="text-emerald-400 font-bold">VERIFIED REPO</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded bg-white/[0.02]">
                  <span className="text-slate-500 block">Core Languages:</span>
                  <span className="text-slate-100 font-semibold">Golang, PHP (Laravel 11), Node.js, Python</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02]">
                  <span className="text-slate-500 block">Databases & Caching:</span>
                  <span className="text-slate-100 font-semibold">PostgreSQL, MySQL, Redis, MongoDB</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02]">
                  <span className="text-slate-500 block">System Patterns:</span>
                  <span className="text-slate-100 font-semibold">Distributed APIs, Event Queue, Index Tuning</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02]">
                  <span className="text-slate-500 block">DevOps & Cloud:</span>
                  <span className="text-slate-100 font-semibold">Docker Container, Linux OS, AWS EC2/RDS, Nginx</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantitative Metric Highlights: Architectural 4-column block with Count-up */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {PROFILE_METRICS.map((metric) => (
          <MetricCounter
            key={metric.label}
            value={metric.value}
            label={metric.label}
            context={metric.context}
          />
        ))}
      </div>
    </section>
  );
}
