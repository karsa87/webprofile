'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type SystemView = 'wms' | 'pos' | 'erp';

export function EnterpriseDashboardMockup() {
  const [activeTab, setActiveTab] = useState<SystemView>('wms');

  return (
    <div className="rounded-2xl border border-white/15 bg-[#080D18]/90 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-xs">
      {/* Top Application Bar (macOS / HUD style) */}
      <div className="px-4 py-3 bg-[#0A101F] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="text-[11px] text-slate-400 font-semibold ml-2">
            asrakit-engine.internal // production-cluster
          </span>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-2 text-[10px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-emerald-400 font-bold uppercase tracking-wider">
            100+ NODES SYNCED
          </span>
        </div>
      </div>

      {/* Module Selector Tabs */}
      <div className="grid grid-cols-3 bg-[#060A12] border-b border-white/10 text-center">
        <button
          type="button"
          onClick={() => setActiveTab('wms')}
          className={cn(
            'py-2.5 text-[11px] font-semibold transition-all border-b-2',
            activeTab === 'wms'
              ? 'border-orange-500 text-orange-400 bg-orange-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          )}
        >
          SIWAM WMS (Gudang)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('pos')}
          className={cn(
            'py-2.5 text-[11px] font-semibold transition-all border-b-2',
            activeTab === 'pos'
              ? 'border-orange-500 text-orange-400 bg-orange-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          )}
        >
          Omni-Store POS (Kasir)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('erp')}
          className={cn(
            'py-2.5 text-[11px] font-semibold transition-all border-b-2',
            activeTab === 'erp'
              ? 'border-orange-500 text-orange-400 bg-orange-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          )}
        >
          ERP Ledger & Tax
        </button>
      </div>

      {/* Screen Body */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#070C16]">
        {activeTab === 'wms' && (
          <div className="space-y-4">
            {/* Top Metrics Row */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-2.5 rounded-lg bg-[#0C1322] border border-white/5">
                <span className="text-[10px] text-slate-400 block">Total SKU Terdata</span>
                <span className="text-base font-bold text-white">48,250 Unit</span>
                <span className="text-[9px] text-emerald-400 block mt-0.5">99.8% Akurasi Fisik</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0C1322] border border-white/5">
                <span className="text-[10px] text-slate-400 block">Cabang Terkoneksi</span>
                <span className="text-base font-bold text-orange-400">104 Gudang</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Realtime Streaming</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0C1322] border border-white/5">
                <span className="text-[10px] text-slate-400 block">Mutasi Hari Ini</span>
                <span className="text-base font-bold text-sky-400">1,820 In/Out</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Barcode Verified</span>
              </div>
            </div>

            {/* Warehouse Nodes Status Table */}
            <div className="rounded-lg bg-[#0A0F1D] border border-white/5 p-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5 text-[10px] text-slate-400">
                <span>SIMULASI MONITORING CABANG</span>
                <span className="text-emerald-400 font-semibold">ALL OPERATIONAL</span>
              </div>
              <div className="mt-2 space-y-1.5 text-[11px]">
                <div className="flex justify-between items-center p-1.5 rounded bg-white/[0.02]">
                  <span className="text-slate-200 font-semibold">Hub Gudang Utama Surabaya</span>
                  <span className="text-emerald-400 font-mono">14,200 SKU · NORMAL</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded bg-white/[0.02]">
                  <span className="text-slate-200 font-semibold">Cabang Jakarta Barat</span>
                  <span className="text-emerald-400 font-mono">3,890 SKU · SINKRON</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded bg-white/[0.02]">
                  <span className="text-slate-200 font-semibold">Hub Distribusi Medan</span>
                  <span className="text-amber-400 font-mono">1,120 SKU · REORDER ALERT</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pos' && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-2.5 rounded-lg bg-[#0C1322] border border-white/5">
                <span className="text-[10px] text-slate-400 block">Waktu Transaksi</span>
                <span className="text-base font-bold text-emerald-400">&lt; 0.4 Detik</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Tanpa Antre</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0C1322] border border-white/5">
                <span className="text-[10px] text-slate-400 block">Offline Mode</span>
                <span className="text-base font-bold text-white">Aktif</span>
                <span className="text-[9px] text-sky-400 block mt-0.5">Otomatis Sync</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0C1322] border border-white/5">
                <span className="text-[10px] text-slate-400 block">Selisih Kasir</span>
                <span className="text-base font-bold text-orange-400">Rp 0 (Nol)</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Audit Blind-Close</span>
              </div>
            </div>

            <div className="rounded-lg bg-[#0A0F1D] border border-white/5 p-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5 text-[10px] text-slate-400">
                <span>SIMULASI FEED TRANSAKSI KASIR</span>
                <span className="text-sky-400 font-semibold">LATENCY: 12ms</span>
              </div>
              <div className="mt-2 space-y-1.5 text-[11px]">
                <div className="flex justify-between items-center p-1.5 rounded bg-white/[0.02]">
                  <span className="text-slate-200">TRX #9901 · Struk Cetak QRIS</span>
                  <span className="text-emerald-400">SUKSES (Sub-Detik)</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded bg-white/[0.02]">
                  <span className="text-slate-200">TRX #9902 · Offline Buffer Synced</span>
                  <span className="text-emerald-400">TERCATAT DI CLOUD</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'erp' && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-2.5 rounded-lg bg-[#0C1322] border border-white/5">
                <span className="text-[10px] text-slate-400 block">Buku Kas Besar</span>
                <span className="text-base font-bold text-white">Otomatis</span>
                <span className="text-[9px] text-emerald-400 block mt-0.5">Jurnal Berimbang</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0C1322] border border-white/5">
                <span className="text-[10px] text-slate-400 block">Modul Pajak PPN/PPh</span>
                <span className="text-base font-bold text-orange-400">Regulasi RI</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Sesuai DJP</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0C1322] border border-white/5">
                <span className="text-[10px] text-slate-400 block">Biaya Lisensi SaaS</span>
                <span className="text-base font-bold text-emerald-400">Rp 0/Bulan</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Milik Perusahaan</span>
              </div>
            </div>

            <div className="rounded-lg bg-[#0A0F1D] border border-white/5 p-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5 text-[10px] text-slate-400">
                <span>VERIFIKASI INTEGRITAS DATABASE</span>
                <span className="text-emerald-400 font-semibold">ACID COMPLIANT</span>
              </div>
              <div className="mt-2 space-y-1.5 text-[11px]">
                <div className="flex justify-between items-center p-1.5 rounded bg-white/[0.02]">
                  <span className="text-slate-200">PostgreSQL Immutable Audit Trail</span>
                  <span className="text-emerald-400">ENCRYPTED & BACKED UP</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded bg-white/[0.02]">
                  <span className="text-slate-200">Multi-Entity Role Based Access</span>
                  <span className="text-sky-400">AUDITOR / OWNER LEVEL</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 border-t border-white/5">
          <span>Arsitektur Self-Hosted: Server di VPS Anda</span>
          <span className="text-orange-400 font-semibold">100% Hak Milik Kode Sumber</span>
        </div>
      </div>
    </div>
  );
}
