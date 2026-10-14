import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Check, Minus } from 'lucide-react';

export const CapabilityMatrix: React.FC = () => {
  const capabilities = [
    {
      category: "Customer & Sales Channels",
      features: [
        { name: "Public E-Commerce Catalogue", storefront: true, admin: false, pos: false, billing: false },
        { name: "Walk-in Counter POS Terminal", storefront: false, admin: true, pos: true, billing: true },
        { name: "Customer Login & Wishlist", storefront: true, admin: true, pos: false, billing: false },
        { name: "Store Pickup vs Doorstep Courier", storefront: true, admin: true, pos: false, billing: false },
        { name: "Customer Credit / Udhar Ledger", storefront: false, admin: true, pos: true, billing: true },
      ],
    },
    {
      category: "Inventory & Barcode Hardware",
      features: [
        { name: "Real-time Stock Count Tracking", storefront: true, admin: true, pos: true, billing: true },
        { name: "Inventory Valuation (Cost vs Retail)", storefront: false, admin: true, pos: false, billing: false },
        { name: "Bulk A4 Barcode Sticker Printing (3x8)", storefront: false, admin: true, pos: true, billing: false },
        { name: "Smartphone Wireless Scanner Pairing (QR)", storefront: false, admin: true, pos: true, billing: false },
        { name: "Physical USB Laser Scanner Support", storefront: false, admin: true, pos: true, billing: true },
        { name: "Bulk CSV & Excel Catalogue Import", storefront: false, admin: true, pos: false, billing: true },
      ],
    },
    {
      category: "Billing, Tax & Accounting",
      features: [
        { name: "Paise-Precise GST Math Engine", storefront: false, admin: false, pos: false, billing: true },
        { name: "Intra-State (CGST/SGST) & Inter-State (IGST)", storefront: false, admin: false, pos: false, billing: true },
        { name: "Unregistered Retail Cash Memo Mode", storefront: false, admin: true, pos: true, billing: true },
        { name: "A4 PDF Download & Print Layouts", storefront: false, admin: true, pos: true, billing: true },
        { name: "Weaver & Artisan Procurement Ledger", storefront: false, admin: true, pos: false, billing: false },
        { name: "Offline IndexedDB Operation", storefront: false, admin: false, pos: true, billing: true },
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-20 md:py-32 bg-[#F8F8F5] scroll-mt-16">
      <Container>
        <SectionHeading
          category="Feature Comparison"
          title="Verified capabilities across the four applications."
          description="Everything listed below is implemented in production code and verified through real operational workflows."
        />

        <div className="bg-white rounded-2xl border border-[#E3E3DD] shadow-sm overflow-hidden mt-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FAF9F5] border-b border-[#E3E3DD]">
                <tr>
                  <th className="py-4 px-4 sm:px-6 font-bold text-[#171717] w-1/3">
                    Feature / Capability
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-center font-bold text-[#176B50]">
                    Storefront
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-center font-bold text-[#800020]">
                    Retail Command
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-center font-bold text-[#8C6A23]">
                    Barcode POS
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-center font-bold text-[#176B50]">
                    BillToPrint
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E3DD]">
                {capabilities.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-[#F8F8F5]/80">
                      <td
                        colSpan={5}
                        className="py-3 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider text-[#9A9A92]"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feat, featIdx) => (
                      <tr key={featIdx} className="hover:bg-[#FAF9F5]/50 transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 font-medium text-[#171717]">
                          {feat.name}
                        </td>
                        <td className="py-3.5 px-3 sm:px-4 text-center">
                          {feat.storefront ? (
                            <Check className="w-4 h-4 text-[#176B50] mx-auto stroke-[2.5]" />
                          ) : (
                            <Minus className="w-3.5 h-3.5 text-[#D1D1C7] mx-auto" />
                          )}
                        </td>
                        <td className="py-3.5 px-3 sm:px-4 text-center">
                          {feat.admin ? (
                            <Check className="w-4 h-4 text-[#800020] mx-auto stroke-[2.5]" />
                          ) : (
                            <Minus className="w-3.5 h-3.5 text-[#D1D1C7] mx-auto" />
                          )}
                        </td>
                        <td className="py-3.5 px-3 sm:px-4 text-center">
                          {feat.pos ? (
                            <Check className="w-4 h-4 text-[#8C6A23] mx-auto stroke-[2.5]" />
                          ) : (
                            <Minus className="w-3.5 h-3.5 text-[#D1D1C7] mx-auto" />
                          )}
                        </td>
                        <td className="py-3.5 px-3 sm:px-4 text-center">
                          {feat.billing ? (
                            <Check className="w-4 h-4 text-[#176B50] mx-auto stroke-[2.5]" />
                          ) : (
                            <Minus className="w-3.5 h-3.5 text-[#D1D1C7] mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};
