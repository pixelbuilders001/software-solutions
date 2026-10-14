import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/config/site';
import { 
  Building, 
  MapPin, 
  Boxes, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  Store,
  Layers
} from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="py-20 md:py-32 bg-[#FFFFFF] border-y border-[#E3E3DD] scroll-mt-16">
      <Container>
        <SectionHeading
          category="Real-World Proof"
          badgeVariant="maroon"
          title="Built around the realities of retail."
          description="Most software is built in meeting rooms. This suite was created, tested, and actively utilized on the showroom floor of Shree Banarasi Sarees."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Real Showroom Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E3E3DD] shadow-xl bg-[#FAF9F5]">
              <Image
                src="/images/case-study/shree_banarasi_store_interior.png"
                alt="Shree Banarasi Sarees showroom featuring authentic handlooms, wooden looms, and rich handcrafted silk sarees"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span>Samastipur, Bihar & Varanasi Handloom Clusters</span>
                </div>
                <h3 className="text-xl font-bold font-serif">Shree Banarasi Sarees</h3>
                <p className="text-xs text-white/80 mt-1">
                  A multi-generational legacy in authentic Banarasi weaves, bridal attire, and handcrafted silk textiles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Operating Facts */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-[#F8F8F5] border border-[#E3E3DD]">
              <h3 className="text-sm font-bold text-[#800020] uppercase tracking-wider mb-2">
                Authentic Retail Deployment
              </h3>
              <p className="text-sm text-[#171717] leading-relaxed">
                Rather than relying on abstract assumptions, every button, workflow step, and print document was built to solve practical day-to-day bottlenecks inside a working Indian saree business:
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F7ECEF] text-[#800020] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171717]">614 Real Products in Catalogue</h4>
                    <p className="text-xs text-[#686868] mt-0.5 leading-relaxed">
                      Categorized by specific handloom fabrics (Katan Silk, Organza, Chanderi) and monitored with real-time low-stock threshold triggers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F7ECEF] text-[#800020] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171717]">Direct Varanasi Weaver Procurement</h4>
                    <p className="text-xs text-[#686868] mt-0.5 leading-relaxed">
                      Audits procurement lots and UPI payouts for artisan partners like Kashi Silk Factory in Uttar Pradesh.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F7ECEF] text-[#800020] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171717]">In-Store Udhar & Walk-in Records</h4>
                    <p className="text-xs text-[#686868] mt-0.5 leading-relaxed">
                      Tracks customer credit balances alongside instant Cash and UPI payments directly on the counter terminal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F7ECEF] text-[#800020] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171717]">Doorstep Delivery & Store Pickup</h4>
                    <p className="text-xs text-[#686868] mt-0.5 leading-relaxed">
                      Shoppers across India order online, while local patrons can select in-store pickup at Rudauli Chowk, Harpur Aloth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://shreebanarasisarees.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#800020] text-white hover:bg-[#580016] transition-colors"
              >
                <span>Visit Live Shree Banarasi Sarees Storefront</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Real Customer Engagement Snapshots (Push Notifications & Tracking) */}
        <div className="border-t border-[#E3E3DD] pt-12">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-[#171717]">
              Omnichannel Customer Touchpoints in Action
            </h3>
            <p className="text-xs text-[#686868] mt-1 leading-relaxed">
              Authentic customer notifications captured from live Android and mobile browser sessions during festive campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#F8F8F5] rounded-2xl border border-[#E3E3DD] p-4 flex flex-col items-center">
              <div className="relative h-72 w-36 rounded-xl overflow-hidden border border-[#E3E3DD] shadow-md bg-black mb-3">
                <Image
                  src="/images/case-study/order_confirmed_push.jpeg"
                  alt="Order confirmed push notification on mobile phone"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-bold text-[#171717]">Order Confirmed Alert</span>
              <span className="text-[11px] text-[#686868] text-center mt-0.5">
                Instant order #SBS-ORD status push to customer smartphone
              </span>
            </div>

            <div className="bg-[#F8F8F5] rounded-2xl border border-[#E3E3DD] p-4 flex flex-col items-center">
              <div className="relative h-72 w-36 rounded-xl overflow-hidden border border-[#E3E3DD] shadow-md bg-black mb-3">
                <Image
                  src="/images/case-study/chhat_puja_offer_push.jpeg"
                  alt="Chhat Puja festive offer push notification on mobile phone"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-bold text-[#171717]">Festive Campaign Push</span>
              <span className="text-[11px] text-[#686868] text-center mt-0.5">
                50% Chhat Puja promotional campaign with hero banner preview
              </span>
            </div>

            <div className="bg-[#F8F8F5] rounded-2xl border border-[#E3E3DD] p-4 flex flex-col items-center">
              <div className="relative h-72 w-36 rounded-xl overflow-hidden border border-[#E3E3DD] shadow-md bg-white mb-3">
                <Image
                  src="/images/case-study/order_tracking_step.jpeg"
                  alt="Order tracking step showing transit facility"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-bold text-[#171717]">Live Logistics Tracking</span>
              <span className="text-[11px] text-[#686868] text-center mt-0.5">
                48 KM to go milestone through Tajpur & Patna transit hub
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
