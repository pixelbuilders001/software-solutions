"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BrowserChrome } from '@/components/ui/BrowserChrome';
import { productsData } from '@/config/products';
import { 
  LayoutDashboard, 
  Check, 
  ArrowRight, 
  Boxes, 
  Receipt, 
  Users, 
  FileText,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';

export const RetailManagementShowcase: React.FC = () => {
  const product = productsData.find((p) => p.id === 'retail-management')!;
  const [activeTab, setActiveTab] = useState<'dashboard' | 'inventory' | 'sales' | 'weavers' | 'crm'>('dashboard');

  const views = {
    dashboard: {
      image: "/images/products/retail-management/sbs_command_center_dashboard.png",
      title: "SBS Command Center — Real-Time Operations",
      caption: "Real-time command center: omnichannel revenue tracking (₹44,980+), net profit (₹26,875), and 8-stage order pipeline.",
      url: "https://admin.shreebanarasisarees.in/dashboard",
      metric: "₹44,980.6 Revenue Recorded",
    },
    inventory: {
      image: "/images/products/retail-management/stock_inventory_valuation.png",
      title: "Inventory Register & ₹9.91L Valuation",
      caption: "Live stock audit: 614 products, 588 units, purchase cost ₹4.35L vs retail asset valuation of ₹9.91 Lakhs.",
      url: "https://admin.shreebanarasisarees.in/inventory",
      metric: "614 Handcrafted Sarees Catalogued",
    },
    sales: {
      image: "/images/products/retail-management/instore_pos_sales_ledger.png",
      title: "In-Store & POS Sales Ledger",
      caption: "Complete audit of walk-in store transactions, tax receipts, cashier audits, and outstanding Udhar dues.",
      url: "https://admin.shreebanarasisarees.in/pos-sales",
      metric: "53.1% Realized Net Margin",
    },
    weavers: {
      image: "/images/products/retail-management/weavers_ledger_audit.png",
      title: "Weavers & Artisan Procurement Ledger",
      caption: "Tracks wholesale procurement and UPI payouts to handloom clusters like Kashi Silk Factory in Varanasi.",
      url: "https://admin.shreebanarasisarees.in/weavers-ledger",
      metric: "Direct Weaver UPI Settlements",
    },
    crm: {
      image: "/images/products/retail-management/customer_crm_registry.png",
      title: "Customer Directory & Shree Rewards",
      caption: "Unified CRM tracking 39 customer profiles across in-store walk-ins and online orders with average ticket values.",
      url: "https://admin.shreebanarasisarees.in/customers",
      metric: "39 Unified Profiles Tracked",
    },
  };

  return (
    <section id="retail-management" className="py-20 md:py-32 bg-[#FFFFFF] border-y border-[#E3E3DD] scroll-mt-16">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F7ECEF] text-[#800020] border border-[#E8CCD5] mb-4">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Product 02 · Admin Command Center</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12]">
            {product.headline}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#686868] leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Interactive View Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#E3E3DD] scrollbar-none">
          {(
            [
              { id: 'dashboard', label: 'Command Center', icon: LayoutDashboard },
              { id: 'inventory', label: 'Stock Valuation (₹9.91L)', icon: Boxes },
              { id: 'sales', label: 'In-Store Sales Ledger', icon: Receipt },
              { id: 'weavers', label: 'Weavers & Procurement', icon: FileText },
              { id: 'crm', label: 'Customer CRM', icon: Users },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#800020] text-white shadow-xs'
                    : 'bg-[#F8F8F5] text-[#686868] hover:text-[#171717] hover:bg-[#EFEFEA]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Large Stage Display */}
        <div className="space-y-6">
          <BrowserChrome
            title={views[activeTab].title}
            url={views[activeTab].url}
            className="apple-window-shadow"
          >
            <div className="relative aspect-[16/9] w-full bg-[#FAF9F5]">
              <Image
                src={views[activeTab].image}
                alt={views[activeTab].title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1400px) 100vw, 1300px"
              />
            </div>
          </BrowserChrome>

          {/* Contextual Annotation Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8F8F5] border border-[#E3E3DD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-[#800020] uppercase tracking-wider">
                Verified In-App Functionality
              </div>
              <p className="text-sm text-[#171717] font-medium mt-0.5">
                {views[activeTab].caption}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E3E3DD] text-xs font-bold text-[#171717] shrink-0">
              <TrendingUp className="w-3.5 h-3.5 text-[#176B50]" />
              <span>{views[activeTab].metric}</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-12 border-t border-[#E3E3DD]">
          {product.verifiedCapabilities.map((cap, i) => (
            <div key={i} className="p-5 rounded-2xl bg-[#F8F8F5] border border-[#E3E3DD]">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E3E3DD] text-[#800020] flex items-center justify-center font-bold text-xs mb-3 shadow-2xs">
                0{i + 1}
              </div>
              <h3 className="text-sm font-bold text-[#171717] mb-1.5">{cap.title}</h3>
              <p className="text-xs text-[#686868] leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-[#F7ECEF] border border-[#E8CCD5]">
          <div>
            <h4 className="text-base font-bold text-[#800020]">Ready to streamline your shop&apos;s back office?</h4>
            <p className="text-xs text-[#686868] mt-0.5">Test real inventory valuation and order pipelines configured for your store.</p>
          </div>

          <Link
            href="#demo-enquiry"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#800020] text-white hover:bg-[#580016] transition-colors"
          >
            <span>{product.ctaLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
