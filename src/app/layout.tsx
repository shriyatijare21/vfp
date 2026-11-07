import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SchemaJsonLd } from "@/components/seo/SchemaJsonLd";
import { clinicInfo } from "@/data/clinicInfo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#173D32",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://farandephysio.in"),
  title: {
    default: `${clinicInfo.name} | Dr. Vaibhav Farande | Amravati`,
    template: `%s | ${clinicInfo.name}`,
  },
  description:
    "Farande Physiotherapy Clinic in Amravati, Maharashtra. Led by Dr. Vaibhav Ashok Farande (PT), BPT + MPT (Sports), providing evidence-informed care for sports injuries, back and neck pain, dry needling, neuro rehab, and posture correction.",
  keywords: [
    "Physiotherapy in Amravati",
    "Physiotherapist in Amravati",
    "Sports Physiotherapy Amravati",
    "Dr Vaibhav Farande",
    "Farande Physiotherapy Clinic",
    "Back Pain Relief Amravati",
    "Dry Needling Amravati",
    "Sports Injury Rehabilitation Amravati",
    "Neuro Physiotherapy Amravati",
    "Maltekdi Physiotherapy",
    "Sabnis Plot Physiotherapy Clinic",
  ],
  authors: [{ name: "Dr. Vaibhav Ashok Farande" }],
  creator: "Farande Physiotherapy Clinic",
  alternates: {
    canonical: "https://farandephysio.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://farandephysio.in",
    siteName: clinicInfo.name,
    title: `${clinicInfo.name} — ${clinicInfo.tagline}`,
    description:
      "Evidence-informed physical therapy, pain relief, and athletic rehabilitation in Amravati, Maharashtra. Led by Dr. Vaibhav Ashok Farande (PT).",
    images: [
      {
        url: "/images/hero/clinic-og.svg",
        width: 1200,
        height: 630,
        alt: `${clinicInfo.name} - Amravati, Maharashtra`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: clinicInfo.name,
    description: clinicInfo.tagline,
    images: ["/images/hero/clinic-og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-brand-ivory text-brand-charcoal font-sans antialiased selection:bg-brand-forest selection:text-brand-gold-light">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-forest focus:text-brand-ivory focus:ring-2 focus:ring-brand-gold focus:rounded-md focus:shadow-xl text-xs font-semibold"
        >
          Skip to main content
        </a>
        <SchemaJsonLd />
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
