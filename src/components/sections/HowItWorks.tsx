import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { UploadCloud, QrCode, ReceiptText } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "Step 01",
      title: "Load Catalogue & Print Barcodes",
      description:
        "Import your existing inventory from an Excel spreadsheet or add items one by one. Generate peel-and-stick barcode stickers (24 labels per A4 page) directly on your office printer.",
      icon: UploadCloud,
    },
    {
      step: "Step 02",
      title: "Open POS & Link Mobile Scanners",
      description:
        "Open the POS counter in any modern web browser. Scan the on-screen session QR code with your sales team's smartphones to instantly turn their phone cameras into wireless barcode readers.",
      icon: QrCode,
    },
    {
      step: "Step 03",
      title: "Ring Up Sales & Issue GST Invoices",
      description:
        "Scan sarees at the billing counter, add custom tailoring services, split payments between Cash and UPI, record customer credit (Udhar), and hand over professional A4 or thermal receipts.",
      icon: ReceiptText,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-[#FFFFFF] border-y border-[#E3E3DD] scroll-mt-16">
      <Container>
        <SectionHeading
          category="Straightforward Onboarding"
          title="Up and running in days, not months."
          description="Designed to fit into existing store routines without replacing your computers, buying costly dedicated scanners, or requiring complex IT setups."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#F8F8F5] border border-[#E3E3DD] relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#176B50] uppercase bg-[#EAF4EE] px-3 py-1 rounded-full border border-[#CDE5D8]">
                      {st.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white border border-[#E3E3DD] flex items-center justify-center text-[#171717] shadow-2xs">
                      <Icon className="w-5 h-5 text-[#176B50]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#171717] mb-3">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#686868] leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3E3DD] text-[11px] text-[#9A9A92] font-medium">
                  Zero special hardware required
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
