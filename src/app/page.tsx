import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ProductOverview } from '@/components/sections/ProductOverview';
import { StorefrontShowcase } from '@/components/sections/StorefrontShowcase';
import { RetailManagementShowcase } from '@/components/sections/RetailManagementShowcase';
import { BarcodePosShowcase } from '@/components/sections/BarcodePosShowcase';
import { GstBillingShowcase } from '@/components/sections/GstBillingShowcase';
import { IntegratedWorkflow } from '@/components/sections/IntegratedWorkflow';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { CapabilityMatrix } from '@/components/sections/CapabilityMatrix';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FaqSection } from '@/components/sections/FaqSection';
import { DemoConversionSection } from '@/components/sections/DemoConversionSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F5]">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Product Overview */}
        <ProductOverview />

        {/* 4. Product 1: Online Storefront */}
        <StorefrontShowcase />

        {/* 5. Product 2: Retail Management Command Center */}
        <RetailManagementShowcase />

        {/* 6. Product 3: Barcode POS & Mobile Scanner */}
        <BarcodePosShowcase />

        {/* 7. Product 4: BillToPrint GST Invoicing */}
        <GstBillingShowcase />

        {/* 8. Integrated Retail Workflow */}
        <IntegratedWorkflow />

        {/* 9. Real-World Case Study (Shree Banarasi Sarees) */}
        <CaseStudy />

        {/* 10. Capability Matrix */}
        <CapabilityMatrix />

        {/* 11. How It Works */}
        <HowItWorks />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Demo Conversion & WhatsApp Form */}
        <DemoConversionSection />
      </main>

      {/* 14. Footer */}
      <Footer />
    </div>
  );
}
