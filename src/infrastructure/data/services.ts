import type { BusinessService } from '@/domain/models';

export const BUSINESS_SERVICES_DATA: readonly BusinessService[] = [
  {
    id: 'siwam-wms',
    title: 'SIWAM — Sistem Manajemen Pergudangan (WMS)',
    categoryTag: 'Supply Chain & Logistik',
    targetScale: 'Terpasang di 100+ Cabang',
    description: 'Platform lengkap untuk memantau inventaris stok masuk, mutasi antar cabang retail, barcode tagging, level buffer stock otomatis, hingga laporan rekapitulasi audit tanpa selisih.',
    bulletPoints: [
      'Multi-gudang & multi-cabang terpusat real-time',
      'Notifikasi peringatan stok menipis (Safety Stock)',
      'Hak akses bertingkat: Kepala Gudang, Admin, Procurement',
    ],
    ctaLabel: 'Diskusikan Kebutuhan WMS Bisnis Anda',
  },
  {
    id: 'retail-pos',
    title: 'Omni-Store Retail POS System',
    categoryTag: 'Retail & Rantai Toko',
    targetScale: 'Miniso & Wikacell Tested',
    description: 'Aplikasi kasir cerdas untuk gerai fisik ritel elektronik, lifestyle, dan fashion. Mempercepat transaksi kasir, cetak struk thermal, scan barcode, dan laporan kasir harian.',
    bulletPoints: [
      'Transaksi secepat kilat (sub-detik response time)',
      'Integrasi QRIS, Debit, Tunai, dan Piutang Kasir',
      'Laporan laba-rugi & omset per shift secara otomatis',
    ],
    ctaLabel: 'Diskusikan Kebutuhan POS Multi-Toko',
  },
  {
    id: 'centralized-reporting',
    title: 'Centralized Financial & Reporting Platform',
    categoryTag: 'Enterprise & Pemerintahan',
    targetScale: 'Mojokerto & Bulog Proven',
    description: 'Solusi integrasi data untuk institusi pemerintah dan konsorsium bisnis yang membutuhkan audit terpusat, konsolidasi laporan puluhan entitas, dan kepatuhan perpajakan/akuntansi.',
    bulletPoints: [
      'Standarisasi neraca & audit keuangan otomatis',
      'Ekspor laporan ke PDF/Excel siap cetak inspeksi',
      'Enkripsi data & audit log riwayat perubahan data',
    ],
    ctaLabel: 'Diskusikan Sistem Pelaporan Terpusat',
  },
  {
    id: 'custom-web-api',
    title: 'Custom Web Application & High-Scale API',
    categoryTag: 'Bespoke Development',
    targetScale: 'End-to-End Delivery',
    description: 'Punya ide produk software baru, portal edukasi, atau butuh merombak backend lama yang lemot? Asrakit membangun dari arsitektur database hingga antarmuka pengguna interaktif.',
    bulletPoints: [
      'Frontend modern responsif (Next.js / React)',
      'Backend bertenaga tinggi (Golang / Laravel)',
      'Dokumentasi API lengkap & serah terima source code 100%',
    ],
    ctaLabel: 'Diskusikan Ide Aplikasi Anda',
  },
];
