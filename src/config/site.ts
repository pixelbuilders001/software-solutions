export interface SiteConfig {
  brandName: string;
  brandTagline: string;
  brandWordmark: {
    prefix: string;
    suffix: string;
  };
  description: string;
  productionUrl: string;
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsappNumber: string; // Centrally configured WhatsApp number
    whatsappPrefillMessage: string;
    email: string;
    location: string;
    state: string;
    country: string;
  };
  demoBooking: {
    enabled: boolean;
    calendarUrl?: string; // e.g. Cal.com or Calendly if configured
    fallbackToWhatsApp: boolean;
  };
  navLinks: Array<{ label: string; href: string }>;
  proofStore: {
    name: string;
    tagline: string;
    establishedLocation: string;
    heritageCluster: string;
    verifiedSareesCatalogued: number;
    inventoryRetailValuation: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "Pixelbuilder Retail OS",
  brandTagline: "Practical software built for growing retail businesses",
  brandWordmark: {
    prefix: "Pixelbuilder",
    suffix: "Retail OS",
  },
  description:
    "From everyday billing and barcode scanning to inventory management and your own online store—four practical, battle-tested business applications built for Indian retail enterprises.",
  productionUrl: "https://pixelbuilder.in", // Configurable production domain placeholder
  contact: {
    phoneDisplay: "+91 95251 04774",
    phoneRaw: "919525104774",
    whatsappNumber: "919525104774",
    whatsappPrefillMessage:
      "Hello! I am interested in scheduling a live demo of the Pixelbuilder Retail Suite for my business.",
    email: "rajeev@pixelbuilder.in",
    location: "Rudauli Chowk, Harpur Aloth, Samastipur",
    state: "Bihar & Uttar Pradesh",
    country: "India",
  },
  demoBooking: {
    enabled: true,
    calendarUrl: "", // Central placeholder for external calendar scheduling
    fallbackToWhatsApp: true,
  },
  navLinks: [
    { label: "Products", href: "#products" },
    { label: "Storefront", href: "#storefront" },
    { label: "Retail Command", href: "#retail-management" },
    { label: "Barcode POS", href: "#barcode-pos" },
    { label: "GST Billing", href: "#gst-billing" },
    { label: "Workflow", href: "#integrated-workflow" },
    { label: "Case Study", href: "#case-study" },
    { label: "FAQ", href: "#faq" },
  ],
  proofStore: {
    name: "Shree Banarasi Sarees",
    tagline: "Authentic Handcrafted Banarasi Sarees & Bridal Weaves",
    establishedLocation: "Samastipur, Bihar",
    heritageCluster: "Varanasi, Uttar Pradesh",
    verifiedSareesCatalogued: 614,
    inventoryRetailValuation: "₹9.91 Lakhs",
  },
};
