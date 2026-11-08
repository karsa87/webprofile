'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface NodeDetail {
  id: string;
  name: string;
  layer: string;
  description: string;
  specs: { label: string; value: string }[];
  status: string;
}

const NODES: Record<string, NodeDetail> = {
  edge: {
    id: 'edge',
    name: 'Edge Devices & Multi-Outlets',
    layer: 'Client Layer',
    description: 'Terminal kasir POS offline-first, scanner barcode gudang, dan dashboard manajemen operasional.',
    specs: [
      { label: 'Protokol', value: 'HTTPS / WSS / gRPC' },
      { label: 'Ketahanan', value: 'Offline Cache 72 Jam' },
      { label: 'Perangkat', value: 'Android, Handheld, PC' },
    ],
    status: 'ACTIVE: 100+ NODES',
  },
  gateway: {
    id: 'gateway',
    name: 'Reverse Proxy & Security Gateway',
    layer: 'Gateway Layer',
    description: 'Nginx terkonfigurasi tinggi dengan proteksi DDoS, SSL termination, dan rate-limiting proteksi backend.',
    specs: [
      { label: 'Throughput', value: '15,000 req/sec' },
      { label: 'Latensi Handshake', value: '< 8ms' },
      { label: 'Security', value: 'Strict CSP & TLS 1.3' },
    ],
    status: 'UPTIME 99.99%',
  },
  services: {
    id: 'services',
    name: 'Distributed Services Cluster',
    layer: 'Service Layer',
    description: 'Layanan terpisah untuk SIWAM WMS (Wave picking), ERP General Ledger, dan POS Transaction Engine.',
    specs: [
      { label: 'Core Stack', value: 'Golang / Laravel 11' },
      { label: 'Concurrency', value: 'Worker Pool Non-Blocking' },
      { label: 'Failover', value: 'Auto-Restart & Healthcheck' },
    ],
    status: 'HEALTHY CLUSTER',
  },
  redis: {
    id: 'redis',
    name: 'Redis In-Memory Cache & Queue',
    layer: 'Data Cache Layer',
    description: 'Penahan beban transaksi tinggi, distributed lock stok barang, dan background job worker queue.',
    specs: [
      { label: 'Latensi Pembacaan', value: '< 2ms' },
      { label: 'Persistensi', value: 'AOF & RDB Snapshot' },
      { label: 'Fungsi Kritis', value: 'Anti-Overbooking Stok' },
    ],
    status: 'IN-MEMORY: 0 LATENCY',
  },
  postgres: {
    id: 'postgres',
    name: 'PostgreSQL HA Master-Replica',
    layer: 'Database Layer',
    description: 'Database relasional teroptimasi dengan pemisahan Read/Write replica, indexing B-Tree, dan audit immutable.',
    specs: [
      { label: 'Integritas Data', value: 'ACID Strict Level' },
      { label: 'Replikasi', value: 'Streaming WAL Replicas' },
      { label: 'Optimasi Query', value: 'P99 Latensi < 45ms' },
    ],
    status: 'PRIMARY-REPLICA SYNC',
  },
};

export function SystemTopologyVisualizer() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('services');
  const activeNode = NODES[selectedNodeId] || NODES.services;

  return (
    <div className="rounded-xl border border-white/[0.12] bg-[#0A0F19] overflow-hidden my-12">
      {/* Top Bar Navigation */}
      <div className="p-4 sm:p-5 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4 bg-[#080D15]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-bold text-white tracking-wide">
              TOPOLOGI ARSITEKTUR TERDISTRIBUSI
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500">
            | High-Throughput & Self-Hosted Engine
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-orange-400 font-semibold px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/20">
            {activeNode.status}
          </span>
        </div>
      </div>

      {/* Main Grid: Interactive Canvas + Live Node Telemetry Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
        {/* Interactive Schematic Diagram (SVG Canvas) */}
        <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
          <p className="text-xs text-slate-400 mb-6 font-mono">
            Pilih komponen arsitektur di bawah untuk melihat spesifikasi kapasitas dan protokol sistem:
          </p>

          {/* Node Selector Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setSelectedNodeId('edge')}
              className={cn(
                'p-3.5 rounded-lg border text-left transition-all',
                selectedNodeId === 'edge'
                  ? 'border-orange-500 bg-orange-500/10 text-white shadow-sm'
                  : 'border-white/[0.08] bg-[#0D1422] text-slate-300 hover:border-white/20'
              )}
            >
              <div className="text-[10px] font-mono uppercase text-slate-400">01. Ingestion</div>
              <div className="text-xs font-bold mt-1 text-slate-100">Edge & Multi-Gudang</div>
              <div className="text-[10px] text-slate-500 mt-0.5">100+ Outlet & Scanner</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedNodeId('gateway')}
              className={cn(
                'p-3.5 rounded-lg border text-left transition-all',
                selectedNodeId === 'gateway'
                  ? 'border-orange-500 bg-orange-500/10 text-white shadow-sm'
                  : 'border-white/[0.08] bg-[#0D1422] text-slate-300 hover:border-white/20'
              )}
            >
              <div className="text-[10px] font-mono uppercase text-slate-400">02. Security</div>
              <div className="text-xs font-bold mt-1 text-slate-100">API Gateway / Proxy</div>
              <div className="text-[10px] text-slate-500 mt-0.5">SSL & Rate-Limiting</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedNodeId('services')}
              className={cn(
                'p-3.5 rounded-lg border text-left transition-all',
                selectedNodeId === 'services'
                  ? 'border-orange-500 bg-orange-500/10 text-white shadow-sm'
                  : 'border-white/[0.08] bg-[#0D1422] text-slate-300 hover:border-white/20'
              )}
            >
              <div className="text-[10px] font-mono uppercase text-slate-400">03. Core Engine</div>
              <div className="text-xs font-bold mt-1 text-slate-100">Services Cluster</div>
              <div className="text-[10px] text-slate-500 mt-0.5">WMS, ERP, POS Logic</div>
            </button>
          </div>

          {/* SVG Animated Topology Schema */}
          <div className="relative bg-[#070B12] rounded-lg border border-white/[0.06] p-4 sm:p-6 overflow-hidden">
            <svg
              className="w-full h-auto"
              viewBox="0 0 640 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Diagram Alur Data Arsitektur Sistem Asrakit"
            >
              {/* Connection Lines with Animated Data Stream */}
              {/* Edge to Gateway */}
              <line
                x1="120"
                y1="90"
                x2="240"
                y2="90"
                stroke="#F97316"
                strokeWidth="2"
                strokeOpacity="0.8"
                className="animate-data-stream"
              />
              {/* Gateway to Services */}
              <line
                x1="280"
                y1="90"
                x2="380"
                y2="90"
                stroke="#F97316"
                strokeWidth="2"
                strokeOpacity="0.8"
                className="animate-data-stream"
              />
              {/* Services to Redis (Top branch) */}
              <path
                d="M420 90 C460 90, 470 50, 520 50"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeOpacity="0.8"
                className="animate-data-stream"
              />
              {/* Services to PostgreSQL (Bottom branch) */}
              <path
                d="M420 90 C460 90, 470 130, 520 130"
                stroke="#10B981"
                strokeWidth="2"
                strokeOpacity="0.8"
                className="animate-data-stream"
              />

              {/* Node 1: Edge Nodes */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedNodeId('edge')}
              >
                <rect
                  x="20"
                  y="50"
                  width="100"
                  height="80"
                  rx="8"
                  fill="#0E1626"
                  stroke={selectedNodeId === 'edge' ? '#F97316' : 'rgba(255,255,255,0.15)'}
                  strokeWidth={selectedNodeId === 'edge' ? '2' : '1'}
                />
                <text x="70" y="82" fill="#F8FAFC" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  EDGE CLIENTS
                </text>
                <text x="70" y="100" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  POS & Scanners
                </text>
                <circle cx="70" cy="115" r="3" fill="#10B981" />
              </g>

              {/* Node 2: Gateway */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedNodeId('gateway')}
              >
                <rect
                  x="200"
                  y="50"
                  width="80"
                  height="80"
                  rx="8"
                  fill="#0E1626"
                  stroke={selectedNodeId === 'gateway' ? '#F97316' : 'rgba(255,255,255,0.15)'}
                  strokeWidth={selectedNodeId === 'gateway' ? '2' : '1'}
                />
                <text x="240" y="82" fill="#F8FAFC" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  GATEWAY
                </text>
                <text x="240" y="100" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  SSL & Proxy
                </text>
                <circle cx="240" cy="115" r="3" fill="#10B981" />
              </g>

              {/* Node 3: Core Services */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedNodeId('services')}
              >
                <rect
                  x="340"
                  y="45"
                  width="90"
                  height="90"
                  rx="8"
                  fill="#141E33"
                  stroke={selectedNodeId === 'services' ? '#F97316' : 'rgba(255,255,255,0.2)'}
                  strokeWidth={selectedNodeId === 'services' ? '2' : '1'}
                />
                <text x="385" y="82" fill="#F8FAFC" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  CORE ENGINE
                </text>
                <text x="385" y="100" fill="#F97316" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="monospace">
                  WMS & ERP
                </text>
                <circle cx="385" cy="118" r="3" fill="#10B981" />
              </g>

              {/* Node 4: Redis Cache */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedNodeId('redis')}
              >
                <rect
                  x="500"
                  y="20"
                  width="120"
                  height="55"
                  rx="8"
                  fill="#0E1626"
                  stroke={selectedNodeId === 'redis' ? '#38BDF8' : 'rgba(255,255,255,0.15)'}
                  strokeWidth={selectedNodeId === 'redis' ? '2' : '1'}
                />
                <text x="560" y="44" fill="#38BDF8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  REDIS CLUSTER
                </text>
                <text x="560" y="60" fill="#94A3B8" fontSize="8" textAnchor="middle" fontFamily="monospace">
                  Fast In-Memory Cache
                </text>
              </g>

              {/* Node 5: PostgreSQL */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedNodeId('postgres')}
              >
                <rect
                  x="500"
                  y="105"
                  width="120"
                  height="55"
                  rx="8"
                  fill="#0E1626"
                  stroke={selectedNodeId === 'postgres' ? '#10B981' : 'rgba(255,255,255,0.15)'}
                  strokeWidth={selectedNodeId === 'postgres' ? '2' : '1'}
                />
                <text x="560" y="129" fill="#10B981" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  POSTGRESQL HA
                </text>
                <text x="560" y="145" fill="#94A3B8" fontSize="8" textAnchor="middle" fontFamily="monospace">
                  Write / Read Replica
                </text>
              </g>
            </svg>
          </div>

          {/* Quick Select Buttons for Data Plane */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              type="button"
              onClick={() => setSelectedNodeId('redis')}
              className={cn(
                'p-2.5 rounded-lg border text-left text-xs font-mono transition-all flex items-center justify-between',
                selectedNodeId === 'redis'
                  ? 'border-sky-500 bg-sky-500/10 text-sky-300'
                  : 'border-white/[0.08] bg-[#0C121D] text-slate-400 hover:border-white/20'
              )}
            >
              <span>04. Redis Cache</span>
              <span className="text-[10px] text-sky-400">&lt; 2ms Latensi</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedNodeId('postgres')}
              className={cn(
                'p-2.5 rounded-lg border text-left text-xs font-mono transition-all flex items-center justify-between',
                selectedNodeId === 'postgres'
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
                  : 'border-white/[0.08] bg-[#0C121D] text-slate-400 hover:border-white/20'
              )}
            >
              <span>05. PostgreSQL HA</span>
              <span className="text-[10px] text-emerald-400">Master-Replica</span>
            </button>
          </div>
        </div>

        {/* Right Column: Live Telemetry & Capacity Breakdown */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-[#0C121E] flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono text-orange-400 uppercase tracking-widest font-semibold mb-1">
              {activeNode.layer}
            </div>
            <h4 className="text-xl font-bold text-white tracking-tight mb-3">
              {activeNode.name}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              {activeNode.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-white/[0.08]">
              {activeNode.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="p-3 rounded-lg bg-[#080D15] border border-white/[0.06] flex items-center justify-between font-mono"
                >
                  <span className="text-xs text-slate-400">{spec.label}</span>
                  <span className="text-xs font-semibold text-slate-100">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/[0.08] text-[11px] text-slate-400 flex items-center gap-2 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>Seluruh komponen dapat berjalan di VPS mandiri</span>
          </div>
        </div>
      </div>
    </div>
  );
}
