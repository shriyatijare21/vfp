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
    "Farande Physiotherapy Clinic in Amravati, Maharashtra. Led by Dr. Vaibhav Ashok Farande (PT), providing evidence-based care for back pain, sports injuries, dry needling, neuro rehab, and posture correction.",
  keywords: [
    "Physiotherapy in Amravati",
    "Best Physiotherapist Amravati",
    "Dr Vaibhav Farande",
    "Farande Physiotherapy Clinic",
    "Back Pain Relief Amravati",
    "Dry Needling Amravati",
    "Sports Injury Rehabilitation",
    "Neuro Physiotherapy Amravati",
    "Maltekdi Physiotherapy",
  ],
  authors: [{ name: "Dr. Vaibhav Ashok Farande" }],
  creator: "Farande Physiotherapy Clinic",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://farandephysio.in",
    siteName: clinicInfo.name,
    title: `${clinicInfo.name} — ${clinicInfo.tagline}`,
    description:
      "Evidence-informed physical therapy, pain relief, and athletic rehabilitation in Amravati, Maharashtra.",
    images: [
      {
        url: "/images/hero/clinic-og.jpg",
        width: 1200,
        height: 630,
        alt: clinicInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: clinicInfo.name,
    description: clinicInfo.tagline,
  },
  robots: {
    index: true,
    follow: true,
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
        <SchemaJsonLd />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
