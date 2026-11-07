import React from 'react';
import { SectionTitle } from '@/components/atoms/Typography';
import { WhatsAppCtaButton } from '@/components/molecules/WhatsAppCtaButton';
import { Button } from '@/components/atoms/Button';
import { SITE_CONFIG } from '@/lib/constants';

export function BusinessContactCta() {
  return (
    <section id="biz-contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="rounded-xl border border-white/[0.12] bg-[#0E1524] p-8 sm:p-14 text-center max-w-4xl mx-auto">
        <SectionTitle as="h2" className="text-3xl sm:text-4xl mb-4">
          Konsultasikan Kebutuhan Sistem Bisnis Anda
        </SectionTitle>

        <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Diskusikan alur operasional yang ingin Anda automasi. Kami membantu memetakan arsitektur solusi, timeline pengerjaan, dan estimasi biaya yang transparan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
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
            className="w-full sm:w-auto"
          >
            Kirim Brief via Email
          </Button>
        </div>
      </div>
    </section>
  );
}
