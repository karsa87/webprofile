import React from 'react';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { Card } from '@/components/atoms/Card';

const PROBLEMS_AND_SOLUTIONS = [
  {
    problemTitle: 'Stok Sering Selisih & Gudang Berantakan?',
    problemDesc:
      'Catatan manual di spreadsheet membuat mutasi barang antar gudang hilang jejak, rawan kebocoran stok, dan audit bulanan memakan waktu berminggu-minggu.',
    solutionText:
      'SIWAM Warehouse Management System terintegrasi barcode scanner & mutasi otomatis multi-cabang.',
  },
  {
    problemTitle: 'Kasir Toko Ritel Lambat Saat Jam Sibuk?',
    problemDesc:
      'Aplikasi kasir pihak ketiga sering loading lama, koneksi internet ngadat bikin antrean menumpuk, dan laporan tutup buku kasir tidak klop dengan uang fisik.',
    solutionText:
      'Point of Sale (POS) ultra-ringan dengan offline-first capability & sinkronisasi realtime multi-outlet.',
  },
  {
    problemTitle: 'Software SaaS Kaku & Biaya Mahal?',
    problemDesc:
      'Membayar jutaan rupiah tiap bulan untuk software langganan yang tidak fleksibel, fitur yang tidak terpakai, dan alur kerja bisnis Anda yang dipaksa mengikuti sistem.',
    solutionText:
      '100% Custom Software Tailored to Your Business. Sekali bayar, hak milik penuh, dan data tersimpan di server Anda sendiri.',
  },
] as const;

export function BusinessSolutions() {
  return (
    <section id="biz-solutions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-800/80">
      <SectionHeader
        badgeLabel="Tantangan yang Kami Selesaikan"
        title="Apakah Bisnis Anda Menghadapi Masalah Ini?"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROBLEMS_AND_SOLUTIONS.map((item, index) => (
          <Card key={index} className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-lg mb-4">
              ✕
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {item.problemTitle}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              {item.problemDesc}
            </p>
            <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300 font-medium leading-relaxed">
              💡 <strong>Solusi Asrakit:</strong> {item.solutionText}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
