"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/config/site';
import { 
  Send, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const DemoConversionSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessType: 'Saree & Ethnic Wear Retailer',
    phone: '',
    product: 'All 4 Applications (Connected Suite)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);

  const businessTypes = [
    'Saree & Ethnic Wear Retailer',
    'Boutique / Designer Studio',
    'Garment & Clothing Store',
    'Footwear & Fashion Retail',
    'Wholesaler / Textile Distributor',
    'General Retail / Departmental',
    'Other Small Business',
  ];

  const productOptions = [
    'All 4 Applications (Connected Suite)',
    'Online Storefront (E-Commerce)',
    'Retail Command Center (Admin & Inventory)',
    'Barcode POS & Mobile Scanner',
    'BillToPrint (GST Invoicing & A4 Bills)',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a 10-digit WhatsApp or mobile number.';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateEnquiryText = () => {
    return `*Pixelbuilder Retail Suite Demo Enquiry*
• *Name:* ${formData.name}
• *Business:* ${formData.businessName} (${formData.businessType})
• *Phone:* ${formData.phone}
• *Interested In:* ${formData.product}
${formData.message ? `• *Note:* ${formData.message}` : ''}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const enquiryText = generateEnquiryText();
    setSubmittedSummary(enquiryText);

    // Open WhatsApp directly with prefilled details
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(enquiryText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    if (!submittedSummary) return;
    navigator.clipboard.writeText(submittedSummary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="demo-enquiry" className="py-20 md:py-32 bg-[#FFFFFF] border-t border-[#E3E3DD] scroll-mt-16">
      <Container size="narrow">
        <SectionHeading
          category="Get Started"
          title="Let's find the right setup for your business."
          description="Speak with the team behind the software. We will walk you through live product demonstrations tailored to your specific store workflows."
        />

        <div className="mt-12 bg-[#F8F8F5] rounded-3xl border border-[#E3E3DD] p-6 sm:p-10 shadow-sm">
          {!submittedSummary ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajeev Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#171717] placeholder:text-[#9A9A92] focus:outline-none focus:ring-2 focus:ring-[#176B50] transition ${
                      errors.name ? 'border-red-500' : 'border-[#E3E3DD]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                    Business / Shop Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Shree Banarasi Sarees"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#171717] placeholder:text-[#9A9A92] focus:outline-none focus:ring-2 focus:ring-[#176B50] transition ${
                      errors.businessName ? 'border-red-500' : 'border-[#E3E3DD]'
                    }`}
                  />
                  {errors.businessName && <p className="text-xs text-red-500 mt-1">{errors.businessName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone / WhatsApp */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                    WhatsApp or Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 95251 04774"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#171717] placeholder:text-[#9A9A92] focus:outline-none focus:ring-2 focus:ring-[#176B50] transition ${
                      errors.phone ? 'border-red-500' : 'border-[#E3E3DD]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Business Type */}
                <div>
                  <label htmlFor="businessType" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3E3DD] text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#176B50] transition"
                  >
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Product of Interest */}
              <div>
                <label htmlFor="product" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                  Application You Want to See
                </label>
                <select
                  id="product"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3E3DD] text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#176B50] transition"
                >
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                  Optional Questions or Specific Requirements
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your current billing setup or hardware in place..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3E3DD] text-sm text-[#171717] placeholder:text-[#9A9A92] focus:outline-none focus:ring-2 focus:ring-[#176B50] transition"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#176B50] hover:bg-[#0E4836] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm hover:shadow transition cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Demo Enquiry via WhatsApp</span>
                </button>
                <p className="text-[11px] text-[#686868] text-center mt-2.5">
                  Direct connection with our implementation specialist · No spam guarantee
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-[#EAF4EE] text-[#176B50] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-[#171717] mb-2">
                Enquiry Ready to Dispatch
              </h3>
              <p className="text-xs text-[#686868] max-w-md mx-auto mb-6">
                Your enquiry was prepared for WhatsApp ({siteConfig.contact.phoneDisplay}). If WhatsApp did not open automatically, you can copy the text below and send it directly:
              </p>

              <div className="bg-white p-4 rounded-xl border border-[#E3E3DD] text-left text-xs font-mono text-[#171717] mb-6 max-w-md mx-auto whitespace-pre-line">
                {submittedSummary}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#171717] text-white hover:bg-[#176B50] transition cursor-pointer"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Enquiry Details'}</span>
                </button>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(submittedSummary)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#176B50] text-white hover:bg-[#0E4836] transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Re-open WhatsApp</span>
                </a>

                <button
                  onClick={() => setSubmittedSummary(null)}
                  className="text-xs text-[#686868] hover:text-[#171717] underline py-2.5 px-3 cursor-pointer"
                >
                  Edit Enquiry
                </button>
              </div>
            </div>
          )}

          {/* Direct Contact Card */}
          <div className="mt-8 pt-6 border-t border-[#E3E3DD] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#686868]">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#176B50]" />
              <span>Prefer a phone conversation? Call <strong className="text-[#171717]">{siteConfig.contact.phoneDisplay}</strong></span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-[#9A9A92]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#176B50]" />
              <span>Privacy notice: Your number is strictly used for the demo request.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
