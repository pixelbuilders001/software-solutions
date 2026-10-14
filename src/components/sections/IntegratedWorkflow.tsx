"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  ArrowRight, 
  ShoppingBag, 
  LayoutDashboard, 
  ScanBarcode, 
  ReceiptText, 
  ArrowDown, 
  CheckCircle2,
  RefreshCw,
  Database,
  Smartphone
} from 'lucide-react';

export const IntegratedWorkflow: React.FC = () => {
  const steps = [
    {
      num: "01",
      name: "Catalogue & Weavers",
      app: "Retail Command",
      desc: "Register incoming stock from artisan clusters (like Varanasi weavers). Auto-generate A4 barcode labels and set MRP, cost, and discount percentages.",
      icon: LayoutDashboard,
      color: "#800020",
    },
    {
      num: "02",
      name: "Customer Discovery",
      app: "Online Storefront",
      desc: "Shoppers browse the live catalogue across India. Place orders for home delivery or reserve for in-store pickup, with automated WhatsApp notifications.",
      icon: ShoppingBag,
      color: "#176B50",
    },
    {
      num: "03",
      name: "Shop Floor Billing",
      app: "Barcode POS",
      desc: "Cashier or sales associate scans saree tags with a barcode laser gun or mobile phone camera. Adds custom tailoring addons and collects payment.",
      icon: ScanBarcode,
      color: "#B38628",
    },
    {
      num: "04",
      name: "GST Audit & Invoice",
      app: "BillToPrint Suite",
      desc: "Generates paise-precise A4 tax invoice or retail cash memo. Synchronizes sales records with the master ledger and updates stock counts in real time.",
      icon: ReceiptText,
      color: "#176B50",
    },
  ];

  return (
    <section id="integrated-workflow" className="py-20 md:py-32 bg-[#F8F8F5] scroll-mt-16">
      <Container>
        <SectionHeading
          category="Architecture & Flow"
          title="Tools that fit the way you work."
          description="A connected operational loop designed for retail reality. The applications can operate together as a synchronized omnichannel ecosystem or function completely independently."
        />

        {/* Visual Workflow Chain */}
        <div className="relative mt-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E3E3DD] p-6 shadow-xs flex flex-col justify-between relative group hover:border-[#176B50] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#9A9A92]">
                        STAGE {step.num}
                      </span>
                      <div 
                        className="p-2 rounded-xl text-white shadow-2xs"
                        style={{ backgroundColor: step.color }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-xs font-semibold uppercase tracking-wider text-[#686868] mb-1">
                      {step.app}
                    </div>
                    <h3 className="text-lg font-bold text-[#171717] mb-2.5">
                      {step.name}
                    </h3>
                    <p className="text-xs text-[#686868] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#E3E3DD] flex items-center justify-between text-[11px] text-[#9A9A92]">
                    <span>Realtime Sync</span>
                    <RefreshCw className="w-3.5 h-3.5 text-[#176B50]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Architectural Transparency: What is shared vs What is standalone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E3E3DD]">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#171717] mb-2">
              <Database className="w-4 h-4 text-[#176B50]" />
              <span>What is Synchronized When Connected</span>
            </div>
            <ul className="space-y-2 text-xs text-[#686868]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#176B50] shrink-0 mt-0.5" />
                <span><strong>Single Source Catalogue:</strong> Product names, MRP, weaver details, and barcodes sync from the admin panel to storefront and POS.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#176B50] shrink-0 mt-0.5" />
                <span><strong>Wireless Camera Scanners:</strong> Smartphone cameras pair in seconds to the POS counter using on-screen session QR codes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#176B50] shrink-0 mt-0.5" />
                <span><strong>Unified Customer Ledger:</strong> In-store walk-in sales and online storefront orders merge into one customer history with Udhar credit balances.</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#171717] mb-2">
              <Smartphone className="w-4 h-4 text-[#800020]" />
              <span>Standalone & Offline Resilience</span>
            </div>
            <ul className="space-y-2 text-xs text-[#686868]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#800020] shrink-0 mt-0.5" />
                <span><strong>Independent Invoicing (BillToPrint):</strong> Can run locally with IndexedDB without external server dependencies for quick offline bills.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#800020] shrink-0 mt-0.5" />
                <span><strong>Zero Lock-in:</strong> If you only need the Barcode POS for counter billing, or only the Online Storefront for cataloguing, use only what your shop needs.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#800020] shrink-0 mt-0.5" />
                <span><strong>CSV Backups:</strong> Export and import full inventory registries and sales books anytime in open CSV/Excel format.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
