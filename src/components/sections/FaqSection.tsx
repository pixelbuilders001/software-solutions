"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Do I need to buy expensive barcode guns or specialized POS hardware?",
      answer:
        "No. You can use standard USB laser scanners (₹800-₹1,500) if you already have them, or use our built-in Link Remote Scanner feature. Simply scan an on-screen QR code with any smartphone to turn its camera into a fast wireless barcode reader at zero hardware expense.",
    },
    {
      question: "What kind of printer is needed for barcode stickers and invoices?",
      answer:
        "Any standard home or office inkjet or laser printer works. The Bulk Barcode Printer generates 24 labels per sheet (3x8 grid) on standard A4 peel-and-stick sticker sheets available in any stationery market. Invoices are strictly formatted for A4 portrait printing and instant PDF generation.",
    },
    {
      question: "Can I use the software if my retail shop is NOT GST registered?",
      answer:
        "Yes, absolutely. BillToPrint includes a native 'Unregistered Seller' toggle that instantly switches documents into clean Retail Bills or Cash Memos without collecting or reporting GST. When you obtain your GSTIN later, you can switch to Tax Invoices in settings without losing any transaction history.",
    },
    {
      question: "Can I use just one application, or do I have to adopt all four?",
      answer:
        "All four applications are built to operate both as standalone tools and as a unified suite. If you only need BillToPrint for counter billing, or only the Online Storefront to take digital orders, you can deploy only what your shop needs today.",
    },
    {
      question: "How does the system handle customer Udhar (store credit) in Indian retail?",
      answer:
        "When closing a bill at the counter, you can record split payments across Cash and UPI and mark remaining amounts as Due (उधार). The customer directory tracks outstanding balances, visit history, and allows cashiers to collect pending dues on their next visit.",
    },
    {
      question: "What happens if our shop's broadband internet disconnects?",
      answer:
        "BillToPrint and the counter terminal use browser-native IndexedDB storage. You can continue creating bills, checking catalogued items, and issuing print slips offline. Your records remain safe on your counter PC and can be backed up as JSON files anytime.",
    },
    {
      question: "Can multiple sales staff scan sarees on the shop floor simultaneously?",
      answer:
        "Yes. Multiple staff members can scan the same counter session QR code on their individual smartphones. As they assist customers in different aisles, every scan streams immediately into the cashier's active checkout screen.",
    },
    {
      question: "How do I migrate my existing stock from Excel into the system?",
      answer:
        "Both the Retail Command Center and BillToPrint feature one-click CSV and Excel import templates. You can upload saree names, categories, fabrics, costs, MRPs, and discount rates in bulk, and the system automatically generates unique barcode identifiers for each SKU.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#F8F8F5] scroll-mt-16">
      <Container size="narrow">
        <SectionHeading
          category="Clear Answers"
          title="Frequently asked questions."
          description="Everything you need to know about hardware requirements, offline reliability, GST configuration, and store onboarding."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E3E3DD] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#171717] hover:text-[#176B50] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className="w-7 h-7 rounded-full bg-[#F8F8F5] border border-[#E3E3DD] flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-[#176B50]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-[#686868]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#686868] leading-relaxed border-t border-[#F2F2EC] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
