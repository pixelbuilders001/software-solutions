import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { productsData } from '@/config/products';
import { ArrowRight, ShoppingBag, LayoutDashboard, ScanBarcode, ReceiptText, Check } from 'lucide-react';

export const ProductOverview: React.FC = () => {
  const icons = {
    storefront: <ShoppingBag className="w-5 h-5 text-[#176B50]" />,
    'retail-management': <LayoutDashboard className="w-5 h-5 text-[#800020]" />,
    'barcode-pos': <ScanBarcode className="w-5 h-5 text-[#B38628]" />,
    'gst-billing': <ReceiptText className="w-5 h-5 text-[#176B50]" />,
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-[#E3E3DD]">
      <Container>
        <SectionHeading
          category="The Software Suite"
          title="Four focused tools. One cohesive standard."
          description="Every business is structured differently. Use each application independently as a focused solution, or combine them for end-to-end retail clarity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product, idx) => (
            <div
              key={product.id}
              className="flex flex-col justify-between bg-[#F8F8F5] rounded-2xl border border-[#E3E3DD] p-6 hover:border-[#D1D1C7] hover:shadow-md transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E3E3DD] shadow-xs">
                    {icons[product.id]}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#9A9A92]">
                    {product.badge}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#176B50] mb-1">
                  {product.categoryLabel}
                </div>
                <h3 className="text-xl font-bold text-[#171717] mb-2 tracking-tight group-hover:text-[#176B50] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-[#686868] leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6 border-t border-[#E3E3DD] pt-4">
                  {product.verifiedCapabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4A4A45]">
                      <Check className="w-3.5 h-3.5 text-[#176B50] shrink-0 mt-0.5" />
                      <span>{cap.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`#${product.id}`}
                className="inline-flex items-center justify-between text-xs font-semibold text-[#171717] hover:text-[#176B50] pt-3 border-t border-[#E3E3DD] group-hover:translate-x-0.5 transition-transform"
              >
                <span>View {product.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
