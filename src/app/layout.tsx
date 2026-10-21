import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asrakit — Enterprise Software Studio & Principal Engineering",
  description: "Software kustom skala enterprise (ERP, WMS 100+ Cabang, POS Ritel) dan portofolio rekayasa perangkat lunak tingkat lanjut Mochamad Karsa Syaifudin Jupri.",
  metadataBase: new URL("https://asrakit.com"),
  openGraph: {
    title: "Asrakit — Enterprise Software Studio & Principal Engineering",
    description: "Software kustom skala enterprise dan portofolio rekayasa backend berkecepatan tinggi.",
    url: "https://asrakit.com",
    siteName: "Asrakit",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen selection:bg-orange-500 selection:text-white relative overflow-x-hidden bg-[#090D16] text-[#F3F4F6]">
        {/* Ambient Glows for Consistent Atmospheric UX */}
        <div 
          aria-hidden="true" 
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none -z-10" 
        />
        <div 
          aria-hidden="true" 
          className="fixed bottom-10 right-0 w-[500px] h-[450px] bg-amber-600/5 blur-[140px] rounded-full pointer-events-none -z-10" 
        />
        
        {children}
      </body>
    </html>
  );
}
