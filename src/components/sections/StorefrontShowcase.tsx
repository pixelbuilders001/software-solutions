"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BrowserChrome } from '@/components/ui/BrowserChrome';
import { productsData } from '@/config/products';
import { 
  ShoppingBag, 
  ExternalLink, 
  Check, 
  Truck, 
  Store, 
  Bell, 
  CreditCard, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const StorefrontShowcase: React.FC = () => {
  const product = productsData.find((p) => p.id === 'storefront')!;
  const [activeTab, setActiveTab] = useState<'checkout' | 'categories' | 'regional' | 'account'>('checkout');

  const tabContent = {
    checkout: {
      image: "/images/products/storefront/storefront_checkout_full.png",
      title: "Streamlined Omnichannel Checkout",
      caption: "Real customer checkout with Doorstep Delivery vs Rudauli Chowk store pickup options, UPI, and Cash on Delivery.",
      url: "https://shreebanarasisarees.in/checkout",
      aspect: "aspect-[16/10]",
    },
    categories: {
      image: "/images/products/storefront/storefront_categories_grid.png",
      title: "Editorial Collection Cards",
      caption: "High-impact visual categories for Bestsellers, Sudathi Gold, Essentials, and Ready-to-Wear Banarasi sarees.",
      url: "https://shreebanarasisarees.in/collections",
      aspect: "aspect-[16/9]",
    },
    regional: {
      image: "/images/products/storefront/storefront_sarees_of_india.png",
      title: "Sarees of India Weave Architecture",
      caption: "Showcase authentic Indian textile traditions including Bandhani, Paithani, Kanjivaram, and Banarasi.",
      url: "https://shreebanarasisarees.in/sarees-of-india",
      aspect: "aspect-[16/7]",
    },
    account: {
      image: "/images/products/storefront/storefront_customer_modal.png",
      title: "Customer Account & Wishlist Sync",
      caption: "One-click Google authentication allowing shoppers to track orders, save wishlists, and request custom weaves.",
      url: "https://shreebanarasisarees.in/account",
      aspect: "aspect-[16/9]",
    },
  };

  return (
    <section id="storefront" className="py-20 md:py-32 bg-[#F8F8F5] scroll-mt-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Product Narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF4EE] text-[#176B50] border border-[#CDE5D8] mb-4">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Product 01 · E-Commerce</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12]">
              {product.headline}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#686868] leading-relaxed">
              {product.description}
            </p>

            {/* View Selector Tabs */}
            <div className="mt-8 p-1.5 bg-[#EFEFEA] rounded-xl flex flex-wrap gap-1">
              {(['checkout', 'categories', 'regional', 'account'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                    activeTab === key
                      ? 'bg-white text-[#171717] shadow-xs'
                      : 'text-[#686868] hover:text-[#171717]'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            {/* Verified Capabilities */}
            <div className="mt-8 space-y-4">
              {product.verifiedCapabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E3E3DD]">
                  <div className="w-5 h-5 rounded-full bg-[#EAF4EE] text-[#176B50] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171717]">{cap.title}</h4>
                    <p className="text-xs text-[#686868] mt-0.5 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={product.appUrlConfigurable}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#176B50] text-white hover:bg-[#0E4836] shadow-sm transition-all"
              >
                <span>{product.appUrlLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="#demo-enquiry"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:text-[#176B50]"
              >
                <span>Schedule Storefront Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Genuine Product Screenshots Display */}
          <div className="lg:col-span-7 space-y-6">
            <BrowserChrome
              title={tabContent[activeTab].title}
              url={tabContent[activeTab].url}
              className="apple-window-shadow"
            >
              <div className={`relative ${tabContent[activeTab].aspect} w-full bg-[#FAF9F5]`}>
                <Image
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              </div>
            </BrowserChrome>

            {/* Caption & Technical Note */}
            <div className="p-4 rounded-xl bg-white border border-[#E3E3DD] text-xs text-[#686868] flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#176B50] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#171717]">Production Verification: </span>
                {tabContent[activeTab].caption}
              </div>
            </div>

            {/* Supporting Micro-Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E3E3DD]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#171717] mb-1">
                  <Truck className="w-4 h-4 text-[#176B50]" />
                  <span>Real-Time Logistics Alerts</span>
                </div>
                <p className="text-xs text-[#686868]">
                  Automated customer notifications for order confirmation, transit stops (e.g. Tajpur facility), and out-for-delivery milestones.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E3E3DD]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#171717] mb-1">
                  <Store className="w-4 h-4 text-[#176B50]" />
                  <span>Integrated In-Store Pickup</span>
                </div>
                <p className="text-xs text-[#686868]">
                  Customers can buy online and collect at your local store counter, syncing inventory with your physical ledger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
