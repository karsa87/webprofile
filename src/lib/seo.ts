import { SITE_CONFIG } from './constants';

/**
 * Generates Schema.org JSON-LD Structured Data for Asrakit Studio (Route /)
 * Enriched with Organization, WebSite, and SoftwareApplication schemas for Google Rich Results.
 */
export function generateStudioJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://asrakit.com/#website',
        url: 'https://asrakit.com',
        name: 'Asrakit Studio',
        description: SITE_CONFIG.description,
        inLanguage: 'id-ID',
        publisher: {
          '@id': 'https://asrakit.com/#organization',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://asrakit.com/#organization',
        name: 'Asrakit Studio',
        url: 'https://asrakit.com',
        logo: 'https://asrakit.com/opengraph-image',
        image: 'https://asrakit.com/opengraph-image',
        description:
          'Enterprise software studio delivering bespoke ERP, WMS (100+ branches), Retail POS, and high-performance digital systems.',
        founder: {
          '@type': 'Person',
          name: SITE_CONFIG.author,
          jobTitle: SITE_CONFIG.role,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Malang',
          addressRegion: 'Jawa Timur',
          addressCountry: 'ID',
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
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'IDR',
          description: 'Custom Bespoke Architecture Inquiry',
        },
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
 * Enriched with Person, ProfilePage, and BreadcrumbList schemas for Google Indexing.
 */
export function generateProfileJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': 'https://asrakit.com/profile#webpage',
        url: 'https://asrakit.com/profile',
        name: `${SITE_CONFIG.author} — Principal Software Engineer Portfolio`,
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://asrakit.com/#website',
          name: 'Asrakit',
          url: 'https://asrakit.com',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://asrakit.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Founder Profile',
              item: 'https://asrakit.com/profile',
            },
          ],
        },
        about: {
          '@id': 'https://asrakit.com/profile#person',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://asrakit.com/profile#person',
        name: SITE_CONFIG.author,
        jobTitle: SITE_CONFIG.role,
        url: 'https://asrakit.com/profile',
        image: 'https://asrakit.com/profile/opengraph-image',
        email: SITE_CONFIG.contact.email,
        telephone: `+${SITE_CONFIG.contact.whatsapp}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Malang',
          addressRegion: 'Jawa Timur',
          addressCountry: 'ID',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Perum BULOG',
        },
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'STMIK PPKIA Pradnya Paramita',
          },
        ],
        sameAs: [
          SITE_CONFIG.contact.linkedin,
          SITE_CONFIG.contact.github,
        ],
        knowsAbout: [
          'Laravel',
          'Golang',
          'NestJS',
          'High-Concurrency Distributed Architecture',
          'Database Indexing & Query Tuning',
          'PostgreSQL',
          'MySQL',
          'Redis Caching',
          'Warehouse Management Systems (WMS)',
          'Retail Point of Sale (POS)',
          'Enterprise ERP Core Systems',
        ],
      },
    ],
  };
}
