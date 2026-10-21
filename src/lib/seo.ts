import { SITE_CONFIG } from './constants';

/**
 * Generates Schema.org JSON-LD Structured Data for Asrakit Studio (Route /)
 */
export function generateStudioJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://asrakit.com/#organization',
        name: 'Asrakit Studio',
        url: 'https://asrakit.com',
        logo: 'https://asrakit.com/images/logo.png',
        description:
          'Enterprise software studio delivering bespoke ERP, WMS (100+ branches), Retail POS, and high-performance digital systems.',
        founder: {
          '@type': 'Person',
          name: SITE_CONFIG.author,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${SITE_CONFIG.contact.whatsapp}`,
          contactType: 'customer service',
          areaServed: 'ID',
          availableLanguage: ['Indonesian', 'English'],
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'SIWAM — Warehouse Management System',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Cloud / Web',
        description:
          'Inventory & warehouse synchronization software for multi-branch retail operations.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Omni-Store Retail POS',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web / POS Hardware',
        description:
          'Sub-second point of sale transaction system with offline-first capabilities.',
      },
    ],
  };
}

/**
 * Generates Schema.org JSON-LD Structured Data for Mochamad Karsa (Route /profile)
 */
export function generateProfileJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://asrakit.com/profile#person',
    name: SITE_CONFIG.author,
    jobTitle: SITE_CONFIG.role,
    url: 'https://asrakit.com/profile',
    email: SITE_CONFIG.contact.email,
    telephone: `+${SITE_CONFIG.contact.whatsapp}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Malang',
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    sameAs: [
      SITE_CONFIG.contact.linkedin,
      SITE_CONFIG.contact.github,
    ],
    knowsAbout: [
      'Laravel',
      'Golang',
      'NestJS',
      'High-Concurrency Architecture',
      'Database Indexing & Query Tuning',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Warehouse Management Systems',
      'Enterprise ERP',
    ],
  };
}
