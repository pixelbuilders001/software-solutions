"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BrowserChrome } from '@/components/ui/BrowserChrome';
import { productsData } from '@/config/products';
import { 
  ScanBarcode, 
  QrCode, 
  Printer, 
  Smartphone, 
  ArrowRight, 
  Check, 
  Zap, 
  Layers, 
  Scissors
} from 'lucide-react';

export const BarcodePosShowcase: React.FC = () => {
  const product = productsData.find((p) => p.id === 'barcode-pos')!;
  const [activeScreen, setActiveScreen] = useState<'pos' | 'qr' | 'stickers'>('pos');

  const screens = {
    pos: {
      image: "/images/products/barcode-pos/pos_checkout_terminal.png",
      title: "In-Store POS Checkout Terminal",
      caption: "Touch and keyboard-friendly counter: catalogue grid, instant search, walk-in customer selector, tailoring addon, and instant bill finalization.",
      url: "https://pos.shreebanarasisarees.in/terminal",
    },
    qr: {
      image: "/images/products/barcode-pos/link_remote_scanner_qr.png",
      title: "Link Remote Mobile Scanner (QR Pairing)",
      caption: "Instant phone pairing: scan the dynamic QR code with any staff phone camera to start streaming barcode scans straight to the counter.",
      url: "https://pos.shreebanarasisarees.in/link-scanner",
    },
    stickers: {
      image: "/images/products/barcode-pos/bulk_a4_barcode_printer.png",
      title: "Bulk A4 Barcode Sticker Generator (Cut & Paste)",
      caption: "Prints 24 barcode labels per A4 sheet (3x8 grid) with SKU numbers, dashed cut lines, and batch filters for regular laser/inkjet printers.",
      url: "https://pos.shreebanarasisarees.in/barcode-printer",
    },
  };

  const steps = [
    {
      num: "01",
      title: "Scan or Search",
      desc: "Scan saree barcode with physical laser gun or staff phone camera, or search by SKU/name.",
    },
    {
      num: "02",
      title: "Item & Addons",
      desc: "MRP and item discounts apply automatically. Attach value services like +Tailoring or Fall & Pico.",
    },
    {
      num: "03",
      title: "Payment & Udhar",
      desc: "Split payments across Cash, UPI, and Card. Record partial payments with customer credit (उधार).",
    },
    {
      num: "04",
      title: "Instant Receipt",
      desc: "One-click print for bilingual sales receipts with Hindi saree descriptions or standard invoices.",
    },
  ];

  return (
    <section id="barcode-pos" className="py-20 md:py-32 bg-[#F8F8F5] scroll-mt-16">
      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF4E8] text-[#8C6A23] border border-[#EEDFBF] mb-4">
            <ScanBarcode className="w-3.5 h-3.5" />
            <span>Product 03 · Point of Sale</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12]">
            {product.headline}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#686868] leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* 4-Step Retail Speed Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((st, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-[#E3E3DD] shadow-2xs relative overflow-hidden"
            >
              <span className="text-3xl font-black text-[#EFEFEA] absolute top-3 right-4 select-none">
                {st.num}
              </span>
              <h3 className="text-sm font-bold text-[#171717] mb-1.5 relative z-10">{st.title}</h3>
              <p className="text-xs text-[#686868] leading-relaxed relative z-10">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Screen Selector */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setActiveScreen('pos')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeScreen === 'pos'
                ? 'bg-[#171717] text-white shadow-xs'
                : 'bg-white text-[#686868] border border-[#E3E3DD] hover:text-[#171717]'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>POS Checkout Terminal</span>
          </button>

          <button
            onClick={() => setActiveScreen('qr')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeScreen === 'qr'
                ? 'bg-[#171717] text-white shadow-xs'
                : 'bg-white text-[#686868] border border-[#E3E3DD] hover:text-[#171717]'
            }`}
          >
            <QrCode className="w-3.5 h-3.5 text-emerald-400" />
            <span>Link Remote Scanner</span>
          </button>

          <button
            onClick={() => setActiveScreen('stickers')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeScreen === 'stickers'
                ? 'bg-[#171717] text-white shadow-xs'
                : 'bg-white text-[#686868] border border-[#E3E3DD] hover:text-[#171717]'
            }`}
          >
            <Printer className="w-3.5 h-3.5 text-amber-500" />
            <span>Bulk A4 Barcode Printer</span>
          </button>
        </div>

        {/* Big Product Screen View */}
        <div className="space-y-6">
          <BrowserChrome
            title={screens[activeScreen].title}
            url={screens[activeScreen].url}
            className="apple-window-shadow"
          >
            <div className="relative aspect-[16/9] w-full bg-[#FAF9F5]">
              <Image
                src={screens[activeScreen].image}
                alt={screens[activeScreen].title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1400px) 100vw, 1300px"
              />
            </div>
          </BrowserChrome>

          <div className="p-4 rounded-xl bg-white border border-[#E3E3DD] text-xs text-[#686868] flex items-start gap-3">
            <span className="font-mono text-emerald-600 font-bold">✓ VERIFIED:</span>
            <span>{screens[activeScreen].caption}</span>
          </div>
        </div>

        {/* Feature Grid & Zero Hardware Advantage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-2xl bg-white border border-[#E3E3DD]">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4E8] text-[#8C6A23] flex items-center justify-center mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#171717] mb-2">Zero Dedicated Scanner Costs</h3>
            <p className="text-xs text-[#686868] leading-relaxed">
              Don&apos;t spend ₹5,000 to ₹12,000 on proprietary wireless barcode guns. Any staff member can open our lightweight web app and scan items using their Android or iPhone camera.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E3E3DD]">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4E8] text-[#8C6A23] flex items-center justify-center mb-4">
              <Printer className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#171717] mb-2">24 Labels Per A4 Sheet</h3>
            <p className="text-xs text-[#686868] leading-relaxed">
              Print peel-and-stick barcode tags on ordinary office printers. Filter by today&apos;s upload batch or print only sarees that are currently in stock.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E3E3DD]">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4E8] text-[#8C6A23] flex items-center justify-center mb-4">
              <Scissors className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#171717] mb-2">Service Add-Ons & Udhar</h3>
            <p className="text-xs text-[#686868] leading-relaxed">
              Attach tailoring and finishing services directly to specific sarees in the bill. Maintain walk-in customer credit balances with one-click collection reminders.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-[#E3E3DD]">
          <div>
            <h4 className="text-base font-bold text-[#171717]">Want to test the mobile barcode scanner live?</h4>
            <p className="text-xs text-[#686868] mt-0.5">We will generate a pairing QR code on our screen during the demo for your phone.</p>
          </div>

          <Link
            href="#demo-enquiry"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#171717] text-white hover:bg-[#176B50] transition-colors"
          >
            <span>{product.ctaLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
