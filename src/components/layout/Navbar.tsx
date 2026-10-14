"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { productsData } from '@/config/products';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ShoppingBag, 
  LayoutDashboard, 
  ScanBarcode, 
  ReceiptText, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productIcons: Record<string, React.ReactNode> = {
    storefront: <ShoppingBag className="w-4 h-4 text-[#176B50]" />,
    'retail-management': <LayoutDashboard className="w-4 h-4 text-[#800020]" />,
    'barcode-pos': <ScanBarcode className="w-4 h-4 text-[#B38628]" />,
    'gst-billing': <ReceiptText className="w-4 h-4 text-[#176B50]" />,
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-md border-b border-[#E3E3DD] shadow-xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#171717] text-white flex items-center justify-center font-bold text-sm tracking-tighter group-hover:bg-[#176B50] transition-colors">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#171717] text-base sm:text-lg leading-tight tracking-tight">
                {siteConfig.brandWordmark.prefix}
              </span>
              <span className="text-[10px] uppercase font-semibold text-[#686868] tracking-widest leading-none">
                {siteConfig.brandWordmark.suffix}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#171717] hover:text-[#176B50] rounded-lg transition-colors cursor-pointer"
                aria-expanded={productsDropdownOpen}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 p-2 bg-white rounded-2xl border border-[#E3E3DD] shadow-xl animate-in fade-in duration-150 z-50">
                  <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#9A9A92]">
                    The Four Applications
                  </div>
                  <div className="space-y-1">
                    {productsData.map((prod) => (
                      <Link
                        key={prod.id}
                        href={`#${prod.id}`}
                        onClick={() => setProductsDropdownOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8F8F5] transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-[#EFEFEA] group-hover:bg-white group-hover:shadow-xs transition-all shrink-0">
                          {productIcons[prod.id]}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#171717] group-hover:text-[#176B50] transition-colors">
                            {prod.name}
                          </div>
                          <div className="text-xs text-[#686868] line-clamp-1">
                            {prod.headline}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#integrated-workflow"
              className="px-3 py-2 text-sm font-medium text-[#4A4A45] hover:text-[#171717] rounded-lg transition-colors"
            >
              Workflow
            </Link>

            <Link
              href="#case-study"
              className="px-3 py-2 text-sm font-medium text-[#4A4A45] hover:text-[#171717] rounded-lg transition-colors"
            >
              Real Proof
            </Link>

            <Link
              href="#capabilities"
              className="px-3 py-2 text-sm font-medium text-[#4A4A45] hover:text-[#171717] rounded-lg transition-colors"
            >
              Capabilities
            </Link>

            <Link
              href="#faq"
              className="px-3 py-2 text-sm font-medium text-[#4A4A45] hover:text-[#171717] rounded-lg transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappPrefillMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-[#176B50] bg-[#EAF4EE] hover:bg-[#DDF0E4] px-3.5 py-2 rounded-full border border-[#CDE5D8] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </Link>

            <Link
              href="#demo-enquiry"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#171717] text-white hover:bg-[#176B50] shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171717] hover:bg-[#EFEFEA] rounded-xl md:hidden transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-[#E3E3DD] px-4 pt-4 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#9A9A92] px-2">
              The Applications
            </div>
            <div className="grid grid-cols-1 gap-1">
              {productsData.map((prod) => (
                <Link
                  key={prod.id}
                  href={`#${prod.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F8F8F5] transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-[#EFEFEA]">
                    {productIcons[prod.id]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#171717]">{prod.name}</div>
                    <div className="text-xs text-[#686868]">{prod.categoryLabel}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="border-t border-[#E3E3DD] pt-3 space-y-1">
              <Link
                href="#integrated-workflow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#171717] rounded-lg hover:bg-[#F8F8F5]"
              >
                Integrated Workflow
              </Link>
              <Link
                href="#case-study"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#171717] rounded-lg hover:bg-[#F8F8F5]"
              >
                Shree Banarasi Sarees Case Study
              </Link>
              <Link
                href="#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#171717] rounded-lg hover:bg-[#F8F8F5]"
              >
                Feature Matrix
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#171717] rounded-lg hover:bg-[#F8F8F5]"
              >
                FAQ
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappPrefillMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-[#176B50] bg-[#EAF4EE] border border-[#CDE5D8]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp: {siteConfig.contact.phoneDisplay}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
