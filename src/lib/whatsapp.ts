import { SITE_CONFIG } from './constants';

export type WhatsAppLeadType = 'general' | 'project' | 'interview' | 'service';

export interface WhatsAppUrlOptions {
  type?: WhatsAppLeadType;
  serviceTitle?: string;
  customMessage?: string;
}

/**
 * Reusable WhatsApp Lead URL Generator
 * Formats clean, URL-encoded messages tailored to specific inbound contexts.
 */
export function createWhatsAppLeadUrl(options: WhatsAppUrlOptions = {}): string {
  const { type = 'general', serviceTitle, customMessage } = options;
  const phoneNumber = SITE_CONFIG.contact.whatsapp;

  if (customMessage) {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`;
  }

  let text = 'Halo Asrakit, saya tertarik berdiskusi kebutuhan pembuatan sistem.';

  switch (type) {
    case 'service':
      text = serviceTitle
        ? `Halo Asrakit, saya ingin berdiskusi mengenai kebutuhan: ${serviceTitle}`
        : 'Halo Asrakit, saya ingin berkonsultasi mengenai solusi sistem bisnis.';
      break;
    case 'interview':
      text = 'Halo Mas Karsa, saya tertarik dengan profil dan CV Anda untuk peluang kerja sama / interview.';
      break;
    case 'project':
      text = 'Halo Mas Karsa, saya ingin berdiskusi mengenai proyek sistem bisnis.';
      break;
    case 'general':
    default:
      text = 'Halo Asrakit, saya tertarik berdiskusi kebutuhan pembuatan sistem bisnis.';
      break;
  }

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}
