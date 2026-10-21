import type { CareerItem } from '@/domain/models';

export const CAREERS_DATA: readonly CareerItem[] = [
  {
    id: 'bulog',
    role: 'Senior Software Engineer',
    company: 'Perum BULOG',
    period: '2024 — Sekarang',
    location: 'Jakarta, Indonesia',
    isCurrent: true,
    responsibilities: [
      'Merancang, mengembangkan, dan memelihara sistem backend enterprise untuk operasional inti nasional (Sistem Akuntansi, Perpajakan, dan Warehouse Management).',
      'Mengembangkan REST API yang mendukung 10.000+ daily active users dengan keandalan tinggi.',
      'Mengoptimasi performa database queries, memangkas waktu pemrosesan sistem hingga 30%.',
      'Berkolaborasi lintas fungsi menghantarkan 4 fitur kunci bisnis yang meningkatkan efisiensi proses operasional sebesar 50%.',
    ],
    metricsHighlight: '10K+ DAU • 30% Speedup',
  },
  {
    id: 'mamikos',
    role: 'Backend Software Engineer',
    company: 'Mamikos',
    period: '2022 — 2024',
    location: 'Jakarta, Indonesia',
    responsibilities: [
      'Mengembangkan backend service yang menangani 50.000+ request harian menggunakan arsitektur Laravel.',
      'Membangun RESTful API performa tinggi untuk aplikasi web dan mobile guna merampingkan integrasi data antar layanan.',
      'Mengoptimasi skema database dan queries, meningkatkan efisiensi data retrieval sebesar 100 queries/detik dan latency berkurang 30%.',
    ],
    metricsHighlight: '50K+ Req/Day • Redis Cache',
  },
  {
    id: 'liputan6',
    role: 'Research and Development Support',
    company: 'PT. Liputan Enam Dot Com',
    period: '2017 — 2022',
    location: 'Malang, Indonesia',
    responsibilities: [
      'Mendukung tim R&D dalam riset dan perancangan internal tools untuk operasional portal berita media digital.',
      'Melakukan pengujian sistem dan penjaminan kualitas fungsional aplikasi software internal.',
    ],
  },
  {
    id: 'zein',
    role: 'Fullstack Web Developer',
    company: 'CV. Zein Adikarya',
    period: '2015 — 2016',
    location: 'Malang, Indonesia',
    responsibilities: [
      'Mengembangkan sistem web-based untuk berbagai klien perusahaan.',
      'Menangani tugas implementasi backend dan frontend terintegrasi.',
    ],
  },
  {
    id: 'wirabumi',
    role: 'Java & ERP Developer',
    company: 'CV. Wirabumi Software',
    period: '2013 — 2015',
    location: 'Malang, Indonesia',
    responsibilities: [
      'Kustomisasi modul Openbravo ERP (Java) untuk kebutuhan Finance, Inventory, dan Procurement perusahaan klien.',
      'Mengintegrasikan dan mengoptimasi backend database untuk keandalan flow transaksi perbankan & inventaris.',
    ],
    metricsHighlight: 'Openbravo ERP Core',
  },
];
