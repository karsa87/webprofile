import React from 'react';
import Link from 'next/link';
import type { BusinessService } from '@/domain/models';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { Card } from '@/components/atoms/Card';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';

export interface ProductCatalogProps {
  services: readonly BusinessService[];
}

export function ProductCatalog({ services }: ProductCatalogProps) {
  const flagship = services.find((s) => s.id === 'siwam-wms') || services[0];
  const supporting = services.filter((s) => s.id !== flagship.id);

  return (
    <section id="biz-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/[0.08]">
      <SectionHeader
        badgeLabel="Katalog Sistem"
        title="Arsitektur Software Siap Implementasi"
        description="Sistem teruji yang dapat langsung diadaptasi dan dikustomisasi sesuai alur kerja spesifik industri Anda."
      />

      {/* Flagship Product Showcase (Asymmetric Prominence) */}
      {flagship && (
        <div className="rounded-xl border border-white/[0.14] bg-[#0E1524] p-6 sm:p-10 mb-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="brand">{flagship.categoryTag}</Badge>
                {flagship.targetScale && (
                  <Badge variant="mono">{flagship.targetScale}</Badge>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {flagship.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {flagship.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {flagship.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="text-orange-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button href="#biz-contact" variant="primary" size="md">
                  {flagship.ctaLabel}
                </Button>
                <Link
                  href="/profile#pro-projects"
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors underline underline-offset-4 px-2"
                >
                  Lihat Detail Studi Kasus Teknis
                </Link>
              </div>
            </div>

            {/* Architectural Diagram Box */}
            <div className="lg:col-span-5 bg-[#090E17] rounded-lg border border-white/10 p-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400 text-[11px]">
                <span>ARCHITECTURE BLUEPRINT</span>
                <span className="text-emerald-400">ACTIVE SCALE: 100+ NODES</span>
              </div>
              <div className="space-y-3 text-[11px] text-slate-300">
                <div className="p-2.5 rounded bg-white/[0.03] border border-white/5">
                  <span className="text-orange-400 font-bold block mb-1">01. Central Ledger Mutasi</span>
                  <span>Setiap mutasi in/out divalidasi barcode scanner dan dicatat dalam audit trail terpusat.</span>
                </div>
                <div className="p-2.5 rounded bg-white/[0.03] border border-white/5">
                  <span className="text-orange-400 font-bold block mb-1">02. Automated Buffer Alerts</span>
                  <span>Notifikasi stok menipis otomatis terkirim ke procurement sebelum terjadi stock-out.</span>
                </div>
                <div className="p-2.5 rounded bg-white/[0.03] border border-white/5">
                  <span className="text-orange-400 font-bold block mb-1">03. Multi-Tier RBAC</span>
                  <span>Akses ketat terbagi untuk Kepala Gudang, Kasir, Admin, dan Auditor Eksternal.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Supporting Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supporting.map((service) => (
          <Card
            key={service.id}
            className="p-6 rounded-xl bg-[#0C121D] flex flex-col justify-between tactile-hover"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant="neutral">{service.categoryTag}</Badge>
                {service.targetScale && (
                  <span className="text-[10px] font-mono text-slate-400">
                    {service.targetScale}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0E1626] border border-white/10 flex items-center justify-center text-orange-400 shrink-0">
                  {service.id.includes('erp') ? (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 20h20" />
                      <path d="m5 10 7-7 7 7v10H5Z" />
                      <path d="M9 20v-6h6v6" />
                    </svg>
                  ) : service.id.includes('pos') ? (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M6 8h.01" />
                      <path d="M10 8h.01" />
                      <path d="M14 8h.01" />
                      <path d="M18 8h.01" />
                      <path d="M8 12h8" />
                      <path d="M8 16h4" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white">
                  {service.title}
                </h4>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                {service.description}
              </p>

              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                {service.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              href="#biz-contact"
              variant="secondary"
              size="sm"
              className="w-full"
            >
              {service.ctaLabel}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
