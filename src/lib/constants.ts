/**
 * Global Constants & Configurations (Single Source of Truth)
 */

export const SITE_CONFIG = {
  name: "Asrakit",
  tagline: "Enterprise Software Studio & Principal Engineering",
  author: "Mochamad Karsa Syaifudin Jupri",
  role: "Senior Software Engineer & Lead Architect",
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
} as const;
