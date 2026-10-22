/**
 * Global Constants & Configurations (Single Source of Truth)
 */

export const SITE_CONFIG = {
  name: "Asrakit",
  tagline: "Enterprise Software Studio & Principal Engineering",
  description:
    "Software kustom skala enterprise (ERP, WMS 100+ Cabang, POS Ritel, Gov Platform) dan portofolio rekayasa perangkat lunak tingkat lanjut Mochamad Karsa Syaifudin Jupri.",
  url: "https://asrakit.com",
  author: "Mochamad Karsa Syaifudin Jupri",
  role: "Senior Backend Engineer & Lead Software Architect",
  contact: {
    whatsapp: "6287825383825",
    whatsappDisplay: "+62 878-2538-3825",
    email: "karsaaif87@gmail.com",
    location: "Malang, Jawa Timur (Remote / On-site)",
    linkedin: "https://www.linkedin.com/in/mochamad-karsa-syaifudin-jupri-331504a6/",
    github: "https://github.com/karsa87",
  },
  routes: {
    studio: "/",
    profile: "/profile",
  },
  metrics: {
    experienceYears: "10+ Tahun",
    experienceLabel: "Software Engineering",
    bulogDau: "10K+ DAU",
    bulogLabel: "Perum BULOG Systems",
    mamikosReq: "50K+ Req/Day",
    mamikosLabel: "Mamikos Backend API",
    speedupRate: "30% Speedup",
    speedupLabel: "Query & Latency Tuning",
  },
  seo: {
    googleSiteVerification:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    googleAnalyticsId:
      process.env.NEXT_PUBLIC_GA_ID || "G-ASRAKIT2026",
    keywords: [
      "Asrakit",
      "Asrakit Studio",
      "Mochamad Karsa Syaifudin Jupri",
      "Software House Malang",
      "Warehouse Management System Indonesia",
      "SIWAM WMS",
      "Retail POS Multi Store",
      "Senior Backend Engineer Indonesia",
      "Laravel Developer Expert",
      "Golang API Developer",
      "NestJS Architect",
      "Database Tuning Specialist",
      "Enterprise Custom Software",
    ],
  },
} as const;
