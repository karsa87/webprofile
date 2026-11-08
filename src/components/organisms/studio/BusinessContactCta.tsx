import React from 'react';
import { SectionTitle } from '@/components/atoms/Typography';
import { WhatsAppCtaButton } from '@/components/molecules/WhatsAppCtaButton';
import { Button } from '@/components/atoms/Button';
import { SITE_CONFIG } from '@/lib/constants';

export function BusinessContactCta() {
  return (
    <section id="biz-contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="rounded-xl border border-white/[0.12] bg-[#0E1524] p-8 sm:p-14 text-center max-w-4xl mx-auto tactile-hover">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          KONSULTASI TEKNIS LANGSUNG DENGAN LEAD ARCHITECT
        </div>

        <SectionTitle as="h2" className="text-3xl sm:text-4xl mb-4">
          Konsultasikan Kebutuhan Sistem Bisnis Anda
        </SectionTitle>

        <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Diskusikan alur operasional yang ingin Anda automasi. Kami membantu memetakan arsitektur solusi, timeline pengerjaan, dan estimasi biaya yang transparan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-8">
          <WhatsAppCtaButton
            label={`WhatsApp: ${SITE_CONFIG.contact.whatsappDisplay}`}
            size="lg"
            variant="primary"
            className="w-full sm:w-auto"
            leadOptions={{ type: 'general' }}
            sourceSection="business_cta"
          />

          <Button
            href={`mailto:${SITE_CONFIG.contact.email}`}
            isExternal
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto gap-2"
          >
            <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Kirim Brief via Email</span>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/[0.08] text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Estimasi Respon Cepat (&lt; 2 Jam)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>100% Hak Milik Source Code</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Server Berdiri di VPS Anda</span>
          </div>
        </div>
      </div>
    </section>
  );
}
