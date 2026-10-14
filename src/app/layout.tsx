import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F8F8F5",
};

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — Modern Retail Management, POS, GST Billing & Online Storefront`,
  description: siteConfig.description,
  keywords: [
    "retail software India",
    "saree shop billing software",
    "barcode POS software",
    "GST invoice generator",
    "retail inventory management",
    "online storefront e-commerce",
    "A4 barcode sticker printing",
    "Shree Banarasi Sarees software",
    "textile ERP India",
    "paise precise GST calculation",
  ],
  authors: [{ name: "Pixelbuilder" }],
  creator: "Pixelbuilder",
  publisher: "Pixelbuilder",
  metadataBase: new URL(siteConfig.productionUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.productionUrl,
    title: `${siteConfig.brandName} — Connected Retail Software Suite`,
    description: siteConfig.description,
    siteName: siteConfig.brandName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brandName} — Retail Suite Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} — Connected Retail Suite`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.brandName,
    operatingSystem: "Web-based (Chrome, Safari, Edge, Mobile Browsers)",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free live demonstration and workflow consultation",
    },
    description: siteConfig.description,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F8F5] text-[#171717] antialiased selection:bg-[#176B50] selection:text-white">
        {children}
      </body>
    </html>
  );
}
