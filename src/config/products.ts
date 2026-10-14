export interface ProductCapability {
  title: string;
  description: string;
  tag?: string;
}

export interface ProductDefinition {
  id: "storefront" | "retail-management" | "barcode-pos" | "gst-billing";
  categoryLabel: string;
  badge: string;
  name: string;
  headline: string;
  description: string;
  summaryQuote: string;
  accentColor: string;
  accentSoft: string;
  primaryScreenshot: {
    src: string;
    alt: string;
    caption: string;
    aspectRatio: string;
  };
  supportingScreenshots: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  verifiedCapabilities: ProductCapability[];
  technicalHighlights: string[];
  ctaLabel: string;
  appUrlConfigurable: string;
  appUrlLabel: string;
  isIntegratedWithSuites: boolean;
  standaloneCapable: boolean;
}

export const productsData: ProductDefinition[] = [
  {
    id: "storefront",
    categoryLabel: "E-Commerce & Digital Catalogue",
    badge: "Product 01",
    name: "Online Storefront",
    headline: "Your shop, open beyond the counter.",
    description:
      "Present your entire product catalogue online, allowing local shoppers and customers across India to discover collections, check availability, order via UPI or Cash on Delivery, and choose between home delivery or in-store pickup.",
    summaryQuote: "A rich digital storefront with authentic Banarasi aesthetics, festive campaign banners, and live order tracking.",
    accentColor: "#176B50",
    accentSoft: "#EAF4EE",
    primaryScreenshot: {
      src: "/images/products/storefront/storefront_checkout_full.png",
      alt: "Shree Banarasi Sarees full storefront checkout interface showing order summary, delivery method, and payment selection",
      caption: "Real customer checkout screen with dual fulfillment modes (Home Delivery & Samastipur Store Pickup).",
      aspectRatio: "1921 / 2755",
    },
    supportingScreenshots: [
      {
        src: "/images/products/storefront/storefront_customer_modal.png",
        alt: "Customer Account login modal with Google authentication and handcrafted saree showroom backdrop",
        caption: "One-click Google login modal with account order history and custom saree requests.",
      },
      {
        src: "/images/products/storefront/storefront_categories_grid.png",
        alt: "Collection showcase featuring Sudathi Gold, Bestsellers, Essentials, and Ready-to-wear sarees",
        caption: "Curated collection landing cards designed for festive campaigns and everyday elegance.",
      },
      {
        src: "/images/products/storefront/storefront_sarees_of_india.png",
        alt: "Sarees of India regional categories featuring Bandhani, Paithani, Kanjivaram, and Banarasi Sarees",
        caption: "Regional handloom navigation honoring Indian textile craftsmanship.",
      },
    ],
    verifiedCapabilities: [
      {
        title: "Omnichannel Delivery & Store Pickup",
        description: "Customers can choose doorstep courier delivery or walk in to pick up their order at the local counter.",
      },
      {
        title: "Multi-Tiered Category Architecture",
        description: "Organize products by fabric (Katan Silk, Chanderi, Organza), occasion (Bridal, Festive, Office), or region.",
      },
      {
        title: "UPI & COD Payment Routing",
        description: "Accept instant UPI via WhatsApp payment links, Cash on Delivery, or cards with automated order balance tracking.",
      },
      {
        title: "Automated Push Notification Alerts",
        description: "Direct customer phone push notifications for order placement, packaging, dispatch, and festival flash sales.",
      },
    ],
    technicalHighlights: [
      "Next.js App Router with server-rendered catalogue pages",
      "Instant fuzzy search across weave names, colors, and SKU codes",
      "PWA mobile install support for regular store patrons",
      "Direct Supabase realtime integration for live stock checks",
    ],
    ctaLabel: "Explore Storefront Demo",
    appUrlConfigurable: "https://shreebanarasisarees.in", // Central configuration for deployed storefront
    appUrlLabel: "Visit Live Storefront",
    isIntegratedWithSuites: true,
    standaloneCapable: true,
  },
  {
    id: "retail-management",
    categoryLabel: "Operations & Admin Command Center",
    badge: "Product 02",
    name: "Retail Command Center",
    headline: "One clearer view of your business.",
    description:
      "A comprehensive back-office operational dashboard designed for retail store owners. Track real-time omnichannel revenue, monitor warehouse valuation across 600+ items, manage weaver procurement liabilities, and audit cashier registers without spreadsheets.",
    summaryQuote: "Centralized operations command: omnichannel fulfillment, inventory valuation, weaver ledger liabilities, and cashier audits.",
    accentColor: "#800020",
    accentSoft: "#F7ECEF",
    primaryScreenshot: {
      src: "/images/products/retail-management/sbs_command_center_dashboard.png",
      alt: "SBS Terminal Command Center showing real-time revenue, order pipeline, net profit, and stock alerts",
      caption: "SBS Terminal Command Center: live revenue breakdown, 8-stage omnichannel pipeline, and inventory valuation.",
      aspectRatio: "1920 / 1080",
    },
    supportingScreenshots: [
      {
        src: "/images/products/retail-management/stock_inventory_valuation.png",
        alt: "Stock Inventory register showing ₹9.91 Lakhs retail asset valuation, purchase costs, and stock counts",
        caption: "Inventory valuation: real-time purchase cost (₹4.35L) vs retail value (₹9.91L) with low-stock alerts.",
      },
      {
        src: "/images/products/retail-management/instore_pos_sales_ledger.png",
        alt: "In-Store and POS sales ledger tracking cash receipts, Udhar dues, and net profit margins",
        caption: "POS Sales Ledger: tracks walk-in receipts, Udhar (customer dues), and cashier transaction splits.",
      },
      {
        src: "/images/products/retail-management/weavers_ledger_audit.png",
        alt: "Weavers Ledger Account tracking procurement from Kashi Silk Factory and artisan payout logs",
        caption: "Weavers Ledger: procurement logs and UPI payouts for Banaras handloom weaver clusters.",
      },
      {
        src: "/images/products/retail-management/customer_crm_registry.png",
        alt: "Customer Registry showing in-store and online customer spend history and Shree Rewards passbook",
        caption: "Customer CRM: unified profiles across 24 in-store and 15 online customers with loyalty tiers.",
      },
    ],
    verifiedCapabilities: [
      {
        title: "Real-Time Stock Asset Valuation",
        description: "Calculates total inventory investment at purchase cost versus total retail potential, highlighting stock at risk.",
      },
      {
        title: "8-Stage Order Fulfillment Pipeline",
        description: "Move orders seamlessly from Placed → Confirmed → Processing → Packed → Shipped → Out for Delivery → Delivered.",
      },
      {
        title: "Weavers & Vendor Procurement Ledger",
        description: "Built-in accounting for artisan procurement, credit liabilities, and UPI settlement logs for textile clusters.",
      },
      {
        title: "Customer Directory & Udhar Tracking",
        description: "Maintains customer transaction history, average ticket size, and in-store credit balances (उधार खाता).",
      },
    ],
    technicalHighlights: [
      "Vite + React 19 architecture with strict TypeScript types",
      "Live Supabase Postgres data syncing with optimistic updates",
      "CSV & Excel bulk import/export for stock reconciliations",
      "Role-based cashier audit logs with attendant identification",
    ],
    ctaLabel: "Request Retail Command Demo",
    appUrlConfigurable: "", // Placeholder for demo environment URL
    appUrlLabel: "Launch Admin Preview",
    isIntegratedWithSuites: true,
    standaloneCapable: true,
  },
  {
    id: "barcode-pos",
    categoryLabel: "Point of Sale & Barcode Scanning",
    badge: "Product 03",
    name: "Barcode POS & Mobile Scanner",
    headline: "From scan to sale, with less friction.",
    description:
      "A fast, touch-friendly billing counter designed for busy shop floors. Look up items instantly with physical USB laser scanners or link any smartphone camera as a wireless barcode reader in two seconds using an on-screen QR code.",
    summaryQuote: "Eliminates billing delays at the counter while automatically printing A4 barcode stickers for your stock.",
    accentColor: "#B38628",
    accentSoft: "#FAF4E8",
    primaryScreenshot: {
      src: "/images/products/barcode-pos/pos_checkout_terminal.png",
      alt: "Checkout Terminal POS Billing interface showing product catalogue, cart items, payment modes, and tailoring addon",
      caption: "Checkout Terminal: instant product lookups, walk-in customer selection, tailoring addon, and instant bill finalization.",
      aspectRatio: "1920 / 1080",
    },
    supportingScreenshots: [
      {
        src: "/images/products/barcode-pos/link_remote_scanner_qr.png",
        alt: "Link Remote Scanner QR code pairing modal with session ID S-QYEIH",
        caption: "Link Remote Scanner: scan the dynamic QR code with any smartphone to stream scans directly to the counter.",
      },
      {
        src: "/images/products/barcode-pos/bulk_a4_barcode_printer.png",
        alt: "Bulk A4 Barcode Printer preview showing 24 sticker labels per sheet with dashed cutting lines",
        caption: "Bulk A4 Barcode Sticker Generator: prints 24 labels per sheet (3x8 grid) on any standard office printer.",
      },
      {
        src: "/images/products/barcode-pos/mobile_scanner_app_screen.png",
        alt: "Mobile scanner web app interface requesting camera access for instant barcode decoding",
        caption: "Zero-hardware scanning: lightweight PWA scanner runs in Chrome or Safari on any mobile phone.",
      },
    ],
    verifiedCapabilities: [
      {
        title: "Wireless Smartphone Scanner Pairing",
        description: "Turn staff smartphones into wireless handheld barcode scanners instantly via WebRTC/Supabase channels.",
      },
      {
        title: "Bulk A4 Barcode Sticker Generator",
        description: "Generate 24 peel-and-stick barcode labels per A4 sheet with SKU names and cut lines on ordinary printers.",
      },
      {
        title: "Flexible Payment & Udhar Splits",
        description: "Accept split payments across Cash, UPI, and Card, or record partial payments with outstanding customer dues.",
      },
      {
        title: "Add-On Services Integration",
        description: "Attach value-added services such as Fall & Pico, Custom Blouse Tailoring, or Gift Packaging to line items.",
      },
    ],
    technicalHighlights: [
      "Hardware laser scanner keyboard wedge event listeners",
      "@zxing/library in-browser video barcode decoding engine",
      "Real-time WebSocket session bridging between desktop POS and phone",
      "Single-click thermal or A4 receipt printing with Hindi item names",
    ],
    ctaLabel: "Try Barcode POS Demo",
    appUrlConfigurable: "", // Placeholder for POS app URL
    appUrlLabel: "Open POS Interface",
    isIntegratedWithSuites: true,
    standaloneCapable: true,
  },
  {
    id: "gst-billing",
    categoryLabel: "Tax Compliance & Invoicing",
    badge: "Product 04",
    name: "BillToPrint GST Suite",
    headline: "Professional invoices. Without the complexity.",
    description:
      "A dedicated invoicing application built for Indian retail compliance. Issues paise-precise tax invoices or clean retail cash memos, calculates CGST, SGST, and IGST across 36 Indian states, formats amounts into Indian numbering words, and prints pixel-perfect A4 documents.",
    summaryQuote: "Paise-precise integer GST engine with A4 portrait printable layouts, offline IndexedDB storage, and PDF downloads.",
    accentColor: "#176B50",
    accentSoft: "#EAF4EE",
    primaryScreenshot: {
      src: "/images/products/gst-billing/gst_invoicing_app_screen.png",
      alt: "BillToPrint Invoicing Suite login counter with high-end luxury Banarasi styling",
      caption: "BillToPrint: dedicated retail billing counter with staff access controls and luxury brand styling.",
      aspectRatio: "1440 / 900",
    },
    supportingScreenshots: [
      {
        src: "/images/products/gst-billing/sample_receipt_bilingual.png",
        alt: "Sample retail sales slip showing bilingual Hindi item names (मधुबनी साड़ी) and Rs 4,166 total",
        caption: "Bilingual print support: handles regional language product descriptions alongside standard tax summaries.",
      },
    ],
    verifiedCapabilities: [
      {
        title: "Paise-Precise Integer GST Engine",
        description: "Eliminates floating-point rounding errors by calculating all taxes, discounts, and line splits in integer paise.",
      },
      {
        title: "Intra-State vs Inter-State Tax Routing",
        description: "Automatically routes between CGST + SGST (Intra-State UP) and IGST (Inter-State) based on customer Place of Supply.",
      },
      {
        title: "Registered GST vs Unregistered Cash Memo",
        description: "Easily toggles between formal Tax Invoices with GSTIN/HSN summaries and clean Cash Memos for unregistered small shops.",
      },
      {
        title: "A4 Printable & Client-Side PDF Generation",
        description: "Generates Banarasi luxury maroon `#800020` and gold A4 invoices with one-click print, PDF download, and WhatsApp share.",
      },
    ],
    technicalHighlights: [
      "Pure tested mathematical engine with 10+ Vitest tax scenario test cases",
      "Indian numbering system words engine (Lakhs & Crores formatting)",
      "IndexedDB offline resilience with JSON backup/restore exports",
      "Proportional bill-level discount distribution across different tax slabs",
    ],
    ctaLabel: "Explore Invoicing Demo",
    appUrlConfigurable: "", // Placeholder for BillToPrint deployment
    appUrlLabel: "View BillToPrint Preview",
    isIntegratedWithSuites: true,
    standaloneCapable: true,
  },
];
