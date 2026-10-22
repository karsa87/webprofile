import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics";

export const viewport: Viewport = {
  themeColor: "#090D16",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.name,
  keywords: [...SITE_CONFIG.seo.keywords],
  category: "technology",
  classification: "Enterprise Software & Software Engineering Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: SITE_CONFIG.seo.googleSiteVerification || undefined,
  },
  alternates: {
    canonical: "./",
    languages: {
      "id-ID": "./",
    },
  },
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    creator: "@karsa87",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen selection:bg-orange-500 selection:text-white relative overflow-x-hidden bg-[#090D16] text-[#F3F4F6]">
        {/* Google Analytics Script (non-blocking strategy) */}
        <GoogleAnalytics />

        {/* Ambient Glows for Consistent Atmospheric UX */}
        <div 
          aria-hidden="true" 
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none -z-10" 
        />
        <div 
          aria-hidden="true" 
          className="fixed bottom-10 right-0 w-[500px] h-[450px] bg-amber-600/5 blur-[140px] rounded-full pointer-events-none -z-10" 
        />
        
        {children}
      </body>
    </html>
  );
}
