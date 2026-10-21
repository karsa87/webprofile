import React from 'react';
import { SectionTitle } from '@/components/atoms/Typography';
import { WhatsAppCtaButton } from '@/components/molecules/WhatsAppCtaButton';
import { Button } from '@/components/atoms/Button';
import { SITE_CONFIG } from '@/lib/constants';

export function BusinessContactCta() {
  return (
    <section id="biz-contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800/80">
      <div className="rounded-3xl bg-gradient-to-r from-gray-900 via-gray-900 to-orange-950/40 border border-orange-500/30 p-8 sm:p-14 text-center relative overflow-hidden">
        <SectionTitle as="h2" className="text-3xl sm:text-4xl mb-4">
          Mulai Konsultasikan Kebutuhan Sistem Bisnis Anda
        </SectionTitle>

        <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Diskusikan alur operasional yang ingin Anda automasi. Tim kami akan membantu memetakan arsitektur solusi, estimasi waktu, dan skema biaya yang transparan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <WhatsAppCtaButton
            label={`Hubungi via WhatsApp (${SITE_CONFIG.contact.whatsappDisplay})`}
            size="lg"
            variant="primary"
            className="w-full sm:w-auto shadow-xl shadow-orange-500/25"
            leadOptions={{ type: 'general' }}
          />

          <Button
            href={`mailto:${SITE_CONFIG.contact.email}`}
            isExternal
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Kirim Email Brief Proyek
          </Button>
        </div>
      </div>
    </section>
  );
}
