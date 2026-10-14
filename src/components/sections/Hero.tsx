"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { BrowserChrome } from '@/components/ui/BrowserChrome';
import { siteConfig } from '@/config/site';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Store, ScanBarcode, Receipt, ShoppingCart } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8F8F5]">
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#171717 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Soft warm vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#176B50]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Hero Copy */}
        <div className="text-center max-w-4xl mx-auto mb-14 md:mb-20">
          {/* Trust Statement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E3E3DD] shadow-xs text-xs font-semibold text-[#171717] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#176B50] animate-pulse" />
            <span>Built and tested in a real retail business</span>
            <span className="text-[#9A9A92]">·</span>
            <span className="text-[#686868] hidden sm:inline">Shree Banarasi Sarees</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#171717] leading-[1.08] text-balance"
          >
            Your business. <br className="hidden sm:inline" />
            <span className="text-[#176B50]">Better connected.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg sm:text-xl text-[#686868] max-w-2xl mx-auto leading-relaxed text-balance font-normal"
          >
            From everyday billing and barcode scanning to inventory valuation and your own online store—practical software built for growing Indian retailers.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <Link
              href="#demo-enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#171717] text-white hover:bg-[#176B50] shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#171717] hover:bg-[#EFEFEA] border border-[#E3E3DD] shadow-xs transition-colors"
            >
              <span>Explore the Products</span>
              <ChevronRight className="w-4 h-4 text-[#686868]" />
            </Link>
          </motion.div>

          {/* Micro Trust Bullets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#686868]"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#176B50]" />
              <span>4 Standalone & Integratable Apps</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#176B50]" />
              <span>No Expensive Hardware Required</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#176B50]" />
              <span>Tested on 600+ Real SKUs</span>
            </span>
          </motion.div>
        </div>

        {/* Sophisticated Hero Visual Composition */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Main Central Stage: SBS Terminal Command Center */}
          <div className="relative z-20 rounded-2xl apple-window-shadow border border-[#E3E3DD] overflow-hidden bg-white">
            <BrowserChrome 
              title="SBS Command Center — Omnichannel Fulfillment & Inventory Valuation"
              url="https://admin.shreebanarasisarees.in/dashboard"
            >
              <div className="relative aspect-[16/9] w-full bg-[#FAF9F5]">
                <Image
                  src="/images/products/retail-management/sbs_command_center_dashboard.png"
                  alt="SBS Terminal Command Center dashboard showing live revenue, orders pipeline, net profit, and inventory metrics"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </BrowserChrome>
          </div>

          {/* Left Layer: Storefront Checkout Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute -left-12 -bottom-10 z-30 w-72 rounded-2xl border border-[#E3E3DD] shadow-2xl overflow-hidden bg-white"
          >
            <div className="bg-[#171717] text-white px-3 py-2 flex items-center justify-between text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <ShoppingCart className="w-3.5 h-3.5 text-[#238B6B]" />
                <span>Online Storefront</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">LIVE STORE</span>
            </div>
            <div className="relative h-96 w-full bg-white">
              <Image
                src="/images/products/storefront/storefront_checkout_full.png"
                alt="Shree Banarasi Sarees mobile checkout screen"
                fill
                className="object-cover object-top"
                sizes="300px"
              />
            </div>
          </motion.div>

          {/* Right Layer: In-Store POS & Wireless Scanner Sync */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute -right-10 -bottom-8 z-30 w-80 rounded-2xl border border-[#E3E3DD] shadow-2xl overflow-hidden bg-white"
          >
            <div className="bg-[#800020] text-white px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <ScanBarcode className="w-3.5 h-3.5 text-amber-300" />
                <span>Barcode POS Counter</span>
              </div>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">REMOTE SYNC</span>
            </div>
            <div className="relative h-64 w-full bg-white">
              <Image
                src="/images/products/barcode-pos/pos_checkout_terminal.png"
                alt="In-store point of sale checkout terminal"
                fill
                className="object-cover object-top"
                sizes="320px"
              />
            </div>
            <div className="p-3 bg-[#FAF8F5] border-t border-[#E3E3DD] text-[11px] text-[#686868] flex items-center justify-between">
              <span>Wireless phone scanner active</span>
              <span className="font-mono font-bold text-[#171717]">S-QYEIH</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
