import React from 'react';
import { SectionHeader } from '@/components/molecules/SectionHeader';

const PROBLEM_SOLUTION_MATRIX = [
  {
    category: 'Logistik & Inventaris',
    icon: (
      <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
    problem: 'Stok Sering Selisih & Mutasi Manual',
    problemDetails:
      'Pencatatan manual di spreadsheet membuat perpindahan barang antar gudang dan cabang sulit dilacak, memicu kebocoran stok dan proses rekonsiliasi audit bulanan yang lambat.',
    solutionTitle: 'SIWAM: Ledger Mutasi Terverifikasi Barcode',
    solutionDetails:
      'Arsitektur terpusat dengan sinkronisasi mutasi otomatis. Setiap pergerakan barang (masuk, keluar, transfer, retur) dicatat dalam ledger transaksional immutable dengan verifikasi barcode scanner.',
  },
  {
    category: 'Operasional Ritel',
    icon: (
      <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8h10" />
        <path d="M7 12h5" />
      </svg>
    ),
    problem: 'Kasir Toko Lambat Saat Jam Sibuk',
    problemDetails:
      'Aplikasi kasir pihak ketiga sering loading lambat saat jam transaksi ramai, koneksi internet ngadat membuat antrean menumpuk, dan laporan tutup kasir harian tidak sesuai uang fisik.',
    solutionTitle: 'Omni-Store POS: Latensi Sub-Detik & Offline Mode',
    solutionDetails:
      'Aplikasi kasir ringan dengan kapabilitas offline-first dan sinkronisasi realtime multi-outlet. Transaksi kasir tetap berjalan lancar meski internet terputus, cetak struk instan, dan rekonsiliasi kasir otomatis.',
  },
  {
    category: 'Lisensi & Kendali Data',
    icon: (
      <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
        <path d="M12 18h6" />
      </svg>
    ),
    problem: 'Biaya Langganan SaaS Mahal & Kaku',
    problemDetails:
      'Bisnis terbebani jutaan rupiah per bulan untuk biaya lisensi per-user software luar negeri yang fiturnya tidak fleksibel, alur kerja dipaksa mengikuti sistem, dan data sensitif tersimpan di server pihak ketiga.',
    solutionTitle: '100% Hak Milik: Sekali Investasi di Server Anda',
    solutionDetails:
      'Software dibangun kustom sesuai SOP spesifik bisnis Anda. Sekali bayar dengan kepemilikan kode sumber penuh, database berada di infrastruktur server Anda sendiri tanpa biaya langganan bulanan kaku.',
  },
] as const;

export function BusinessSolutions() {
  return (
    <section id="biz-solutions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/[0.08]">
      <SectionHeader
        badgeLabel="Diagnosa Operasional"
        title="Tantangan Lapangan yang Kami Tuntaskan"
        description="Kami merancang perangkat lunak untuk menyelesaikan hambatan operasional nyata, bukan sekadar membuat tampilan aplikasi."
      />

      <div className="space-y-4">
        {PROBLEM_SOLUTION_MATRIX.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/[0.08] bg-[#0C121D] overflow-hidden grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] tactile-hover"
          >
            {/* Left: Problem Statement */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#0A0F18]/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded bg-orange-500/10 border border-orange-500/20">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-200 mt-2 mb-3">
                  {item.problem}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.problemDetails}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] text-red-400/90 font-medium font-mono">
                <span>✕ Hambatan Operasional Lapangan</span>
              </div>
            </div>

            {/* Right: Asrakit Architecture Solution */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[#0C121D]">
              <div>
                <span className="text-[11px] font-mono text-orange-400 uppercase tracking-wider font-semibold">
                  Solusi Rekayasa Asrakit
                </span>
                <h4 className="text-lg font-bold text-white mt-2 mb-3">
                  {item.solutionTitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.solutionDetails}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] text-emerald-400 font-medium font-mono">
                <span>✓ Hasil Terukur & Efisiensi Sistem Teruji</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
