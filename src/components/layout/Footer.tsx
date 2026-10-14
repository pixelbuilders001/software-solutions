import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { productsData } from '@/config/products';
import { ShieldCheck, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171717] text-[#A0A09B] border-t border-[#2A2A26] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#2A2A26]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white text-[#171717] flex items-center justify-center font-bold text-sm tracking-tighter">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg tracking-tight">
                  {siteConfig.brandWordmark.prefix}
                </span>
                <span className="text-[10px] uppercase font-semibold text-[#A0A09B] tracking-widest leading-none">
                  {siteConfig.brandWordmark.suffix}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#888882] max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#888882]">
              <ShieldCheck className="w-4 h-4 text-[#238B6B] shrink-0" />
              <span>Developed and continuously proven in real retail operations.</span>
            </div>
          </div>

          {/* The Four Applications */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Applications
            </h3>
            <ul className="space-y-2.5 text-sm">
              {productsData.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`#${prod.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {prod.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Proof */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#integrated-workflow" className="hover:text-white transition-colors">
                  Integrated Workflow
                </Link>
              </li>
              <li>
                <Link href="#case-study" className="hover:text-white transition-colors">
                  Shree Banarasi Sarees
                </Link>
              </li>
              <li>
                <Link href="#capabilities" className="hover:text-white transition-colors">
                  Feature Matrix
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  Retailer FAQ
                </Link>
              </li>
              <li>
                <Link href="#demo-enquiry" className="hover:text-white transition-colors font-medium text-emerald-400">
                  Book a Live Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#238B6B] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.location}, {siteConfig.contact.state}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#238B6B] shrink-0" />
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#238B6B] shrink-0" />
                <a 
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappPrefillMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Direct Enquiry
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#238B6B] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#686862]">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>

          <p>
            Built around real retail requirements for businesses throughout India.
          </p>
        </div>
      </div>
    </footer>
  );
};
