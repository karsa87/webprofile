# PRODUCT REQUIREMENT DOCUMENT (PRD)

| **Document Metadata** | **Specification** |
| :--- | :--- |
| **Product Name** | Asrakit Webprofile Platform |
| **Document Version** | 1.0.0 (Release-Ready) |
| **Document Status** | Approved for Engineering |
| **Owner / Author** | Senior Product Manager & Lead UI/UX |
| **Target Implementer** | Senior Software Engineer / Lead Developer |
| **SDLC Phase** | Phase 2: Detailed Specifications & Technical Implementation |
| **Target Release** | Q4 2026 / MVP |

---

## 1. Executive Summary & Product Vision

### 1.1 Product Statement
Asrakit Webprofile adalah platform web hybrid modern berkinerja tinggi yang memiliki fungsi ganda:
1. **Commercial Studio Portal (`/`):** Etalase solusi perangkat lunak kustom skala enterprise (ERP, WMS 100+ Cabang, POS Ritel, Gov Platform) untuk pemilik bisnis (*Business Owners & Enterprise Clients*).
2. **Principal Engineer Portfolio (`/profile`):** Rekam jejak rekayasa perangkat lunak teknis tingkat lanjut dari **Mochamad Karsa Syaifudin Jupri** (10+ tahun pengalaman, ex-BULOG, Mamikos, arsitektur Go/Laravel) untuk *Tech Recruiters, CTO, & Engineering Managers*.

### 1.2 Core Value Proposition
* **Bagi Klien Bisnis:** Akses langsung ke solusi software siap pakai dan kustom tanpa keterikatan lisensi SaaS bulanan pihak ketiga yang mahal, dengan kepemilikan kode sumber 100%.
* **Bagi Tech Recruiters & Partner:** Validasi instan atas kompetensi teknis backend skala nasional (*high-load, high-concurrency, database optimization*).

### 1.3 Key Performance Indicators (Success Metrics)
| Metric ID | KPI Description | Baseline / Target |
| :--- | :--- | :--- |
| **KPI-01** | Lead Conversion Rate (Inbound WhatsApp/Email click-through) | > 8.5% dari total unique visitors |
| **KPI-02** | CV Download & Recruiter Engagement Rate di route `/profile` | > 15% dari traffic ke `/profile` |
| **KPI-03** | Core Web Vitals (Lighthouse Performance Score) | **95 - 100** (Desktop & Mobile) |
| **KPI-04** | Largest Contentful Paint (LCP) | **< 1.2 detik** pada jaringan 4G standar |
| **KPI-05** | Cumulative Layout Shift (CLS) | **0.00** (Zero visual layout shift) |

---

## 2. Target User Personas & Problem Scenarios

### 2.1 Persona A: "The Pragmatic Business Owner" (Target Route `/`)
* **Demografi:** Pemilik bisnis ritel, distributor, atau founder UMKM skala berkembang (30-50 tahun).
* **Pain Points:** 
  * Biaya subscription SaaS kaku dan mahal.
  * Sering terjadi selisih stok gudang karena pencatatan manual.
  * Aplikasi kasir ritel lambat saat peak-hour transaksi.
* **Goals:** Mencari vendor/studio perangkat lunak terpercaya yang bisa membuat sistem custom sesuai alur operasional mereka dengan harga masuk akal dan garansi pemeliharaan.

### 2.2 Persona B: "The Engineering Recruiter / VP of Engineering" (Target Route `/profile`)
* **Demografi:** Tech Recruiter, Head of Engineering, atau CTO dari unicorn/perusahaan teknologi.
* **Pain Points:** Terlalu banyak kandidat backend dengan pengalaman tutorial/shallow tanpa rekam jejak sistem berskala tinggi (*concurrency, database locks, multi-branch scaling*).
* **Goals:** Menilai bukti riil arsitektur, metrik kuantitatif (*30% speedup, 50k+ req/day, 100+ cabang*), dan mengunduh resume dalam sekali klik.

---

## 3. Information Architecture & Routing Architecture

Sistem menggunakan **Next.js App Router** dengan pemisahan URL eksplisit:

```
[Incoming Traffic]
      │
      ├───► HTTP GET / ──────────────► [Route: Asrakit Studio - Business Portal]
      │                                 - Hero: Enterprise Custom Software
      │                                 - Business Pain Points & Solutions
      │                                 - Product Catalog (WMS, POS, Gov, Web App)
      │                                 - Engagement Model & Workflow
      │                                 - CTA: Consult via WhatsApp (+62 878-2538-3825)
      │                                 - Founder Cross-Link Pill
      │
      └───► HTTP GET /profile ───────► [Route: Mochamad Karsa - Principal Engineer]
                                        - Technical Hero (Senior Backend Engineer)
                                        - Key Engineering Impact Counter
                                        - Full Career Timeline (BULOG, Mamikos, L6)
                                        - Technical System Architecture Deep-Dive Modals
                                        - Tech Stack & Capability Matrix
                                        - Formal Academic Background
                                        - Primary CTA: Download CV & Technical Interview
```

---

## 4. Functional Requirements (FR) & User Stories

### FR-01: Business Portal & Product Catalog (Route `/`)
* **User Story:** *Sebagai Business Owner, saya ingin melihat solusi perangkat lunak yang disediakan Asrakit beserta use case riilnya, agar saya yakin Asrakit mampu menyelesaikan masalah operasional bisnis saya.*
* **Acceptance Criteria (Gherkin):**
  ```gherkin
  Scenario: Menjelajah katalog sistem pada route /
    Given Pengguna berada di route "/"
    When Pengguna melakukan scroll ke section "#biz-showcase"
    Then Sistem menampilkan kartu produk: SIWAM WMS, Omni-Store POS, Centralized Gov Reporting, dan Custom Web App
    And Setiap kartu memuat: Target skala, industri, ringkasan fitur, dan tombol CTA konsultasi
  ```

### FR-02: Inbound Lead Generation & WhatsApp Quick-Link
* **User Story:** *Sebagai Calon Klien, saya ingin dapat langsung mengirim pesan konsultasi ke WhatsApp tanpa harus mengisi form panjang yang melelahkan.*
* **Acceptance Criteria (Gherkin):**
  ```gherkin
  Scenario: Menekan tombol CTA WhatsApp pada halaman bisnis
    Given Pengguna berada di route "/"
    When Pengguna menekan tombol "Konsultasikan Kebutuhan Sistem"
    Then Sistem membuka URL WhatsApp API ("https://wa.me/6287825383825?text=...") di tab baru
    And Pesan prefilled sudah terformat rapi sesuai konteks konsultasi
  ```

### FR-03: Technical Career Timeline (Route `/profile`)
* **User Story:** *Sebagai Tech Recruiter, saya ingin melihat riwayat pekerjaan kandidat secara kronologis terbalik lengkap dengan dampak kuantitatifnya.*
* **Acceptance Criteria (Gherkin):**
  ```gherkin
  Scenario: Membaca riwayat karir di route /profile
    Given Pengguna berada di route "/profile"
    When Pengguna membuka section "#pro-experience"
    Then Sistem menampilkan timeline karir:
      | Posisi                  | Perusahaan             | Periode          |
      | Senior Software Eng     | Perum BULOG            | 2024 - Sekarang  |
      | Backend Software Eng    | Mamikos                | 2022 - 2024      |
      | R&D Support             | PT Liputan Enam        | 2017 - 2022      |
      | Fullstack Developer     | CV Zein Adikarya       | 2015 - 2016      |
      | Java/ERP Developer      | CV Wirabumi Software   | 2013 - 2015      |
    And Setiap item memuat bullet points pencapaian terukur (e.g. "30% query speedup", "10k+ DAU")
  ```

### FR-04: Deep-Dive System Architecture Interactive Modal
* **User Story:** *Sebagai CTO / Engineering Lead, saya ingin membaca arsitektur teknis dan tantangan sistem pada setiap proyek untuk mengevaluasi kedalaman rekayasa backend kandidat.*
* **Acceptance Criteria (Gherkin):**
  ```gherkin
  Scenario: Membuka modal detail proyek
    Given Pengguna berada di section portofolio teknis di "/profile"
    When Pengguna menekan tombol "Detail Solusi & Arsitektur" pada kartu proyek SIWAM
    Then Modal dialog interaktif muncul tanpa refresh halaman
    And Modal menampilkan rincian: Problem Statement, Engineering Solution, Tech Stack Badges, dan Measurable Outcome
    When Pengguna menekan tombol "ESC" atau klik di luar modal
    Then Modal tertutup dan fokus kembali ke tombol pemanggil
  ```

### FR-05: CV Download & Direct Recruiter Actions
* **User Story:** *Sebagai Recruiter, saya ingin mengunduh CV format PDF resmi dari halaman profil.*
* **Acceptance Criteria (Gherkin):**
  ```gherkin
  Scenario: Mengunduh resume teknis
    Given Pengguna berada di route "/profile"
    When Pengguna menekan tombol "Download CV (PDF)"
    Then Browser mengunduh file PDF resmi kandidat dari direktori public/documents/
  ```

---

## 5. Non-Functional Requirements (NFR)

### 5.1 Performance & Rendering Standards (SDLC Quality Gate)
* **Rendering Strategy:** **Static Site Generation (SSG) / React Server Components (RSC)** pada level halaman untuk *zero-latency initial load*.
* **Client-Side Hydration:** Komponen client (`'use client'`) dibatasi hanya untuk:
  * Modal dialog arsitektur (`ProjectModal.tsx`)
  * Navigasi mobile menu drawer (`MobileNav.tsx`)
  * Tab filter portofolio (`ProjectFilter.tsx`)
* **Bundle Budget:** Ukuran JavaScript runtime awal klien (First Load JS) **< 75 KB**.

### 5.2 SEO & Structured Data (JSON-LD)
* **Metadata Route `/`:**
  * Canonical URL: `https://asrakit.com/`
  * Schema Type: `Organization` & `SoftwareApplication`
  * OpenGraph Tags: Title, Description, Image (1200x630 px preview), Locale `id_ID`.
* **Metadata Route `/profile`:**
  * Canonical URL: `https://asrakit.com/profile`
  * Schema Type: `Person`
  * Properti Schema: `name: "Mochamad Karsa Syaifudin Jupri"`, `jobTitle: "Senior Backend Engineer"`, `sameAs: ["linkedin.com/in/...", "github.com/..."]`.

### 5.3 Accessibility (a11y) & Usability
* **Standard:** **WCAG 2.1 Level AA Compliance**.
* **Contrast Ratio:** Teks putih/abu-abu di atas dark slate (`#090D16`) minimal **4.5:1**; aksen teks orange minimal **3:1** untuk elemen UI besar.
* **Keyboard Navigation:** Seluruh elemen interaktif (link, tombol, modal) dapat diakses penuh via keyboard (`Tab`, `Shift+Tab`, `Enter`, `Escape`).

---

## 6. UI/UX Design System Specification

### 6.1 Token Palet Warna (Smooth Orange & Dark Obsidian)
| Semantic Token | Hex Code | Penggunaan |
| :--- | :--- | :--- |
| **`color-bg-base`** | `#090D16` | Background kanvas utama aplikasi |
| **`color-surface-card`** | `#111827` | Kontainer kartu dan modal |
| **`color-surface-border`**| `rgba(255, 255, 255, 0.08)` | Border pemisah halus antar komponen |
| **`color-primary-orange`**| `#F97316` | Aksen tombol utama, highlight teks, brand badge |
| **`color-primary-hover`** | `#EA580C` | State hover untuk elemen interaktif primer |
| **`color-orange-glow`**   | `rgba(249, 115, 22, 0.15)` | Ambient background blur & button glow |
| **`color-text-main`**     | `#F8FAFC` | Tipografi headline dan judul |
| **`color-text-muted`**    | `#94A3B8` | Body text dan deskripsi sekunder |

---

## 7. Data Contracts & Architecture (TypeScript Interfaces)

Data disimpan secara modular dalam folder `data/` sebagai single source of truth dengan kontrak tipe data eksplisit:

```typescript
// types/index.ts

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: 'enterprise-wms' | 'pos-retail' | 'gov-platform' | 'microservice';
  year: string;
  client?: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
}

export interface CareerItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  metricsHighlight?: string;
}

export interface BusinessService {
  id: string;
  title: string;
  categoryTag: string;
  description: string;
  bulletPoints: string[];
  ctaLabel: string;
}
```

---

## 8. SDLC Execution Roadmap & Definition of Done (DoD)

### 8.1 Sprints & Milestones
```
[Sprint 1: Scaffolding & Design Foundation]
  ├── Initializing Next.js 14/15 + Tailwind CSS + TypeScript
  ├── Setup Tailwind Color Tokens & Typography
  └── Implement Base Layout Shell & Shared Header/Footer

[Sprint 2: Business Core Delivery (Route /)]
  ├── Build Business Hero & Value Proposition
  ├── Implement Business Problem-Solution Grid
  ├── Implement Product Catalog (SIWAM, POS, Gov, Custom App)
  └── Setup Inbound WhatsApp CTA Generator

[Sprint 3: Principal Profile Delivery (Route /profile)]
  ├── Build Profile Hero & Impact Metrics Bar
  ├── Implement Full Career Timeline (BULOG, Mamikos, etc.)
  ├── Implement Project Showcase & Interactive Detail Modals
  └── Implement Tech Radar & Formal Education

[Sprint 4: QA, a11y & Production Hardening]
  ├── SEO Metadata & JSON-LD Verification
  ├── Lighthouse Audit (CWV Benchmark Target: 95+)
  └── Cross-browser & Mobile Responsiveness Test
```

### 8.2 Definition of Done (DoD)
Setiap fitur dinyatakan selesai jika dan hanya jika:
1. Kode lulus `npm run build` dan `npm run lint` tanpa error tipe data TypeScript (`strict: true`).
2. Route `/` dan `/profile` dapat diakses secara mandiri dengan navigasi transparan.
3. Responsif sempurna pada breakpoint Mobile (375px), Tablet (768px), dan Desktop (1280px+).
4. Tidak ada layout shift (CLS = 0) dan kontras warna memenuhi standar WCAG AA.
