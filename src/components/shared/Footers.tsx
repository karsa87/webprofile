import React from 'react';
import Link from 'next/link';

export function StudioFooter() {
  return (
    <footer className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      <div>
        <span className="font-bold text-slate-300">ASRAKIT STUDIO</span> &bull; Solusi Perangkat Lunak Enterprise & POS. Malang, Jawa Timur.
      </div>
      <div className="flex items-center gap-4">
        <Link href="/profile" className="text-orange-400 hover:text-orange-300 transition-colors font-medium">
          Profil & Rekam Jejak Mochamad Karsa (Principal Engineer)
        </Link>
      </div>
    </footer>
  );
}

export function ProfileFooter() {
  return (
    <footer className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      <div>
        &copy; {new Date().getFullYear()} Mochamad Karsa Syaifudin Jupri &bull; Senior Backend Engineer &bull; Asrakit Studio.
      </div>
      <Link href="/" className="text-orange-400 hover:text-orange-300 transition-colors font-medium">
        Kembali ke Halaman Bisnis Asrakit Studio
      </Link>
    </footer>
  );
}
