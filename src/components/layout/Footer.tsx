"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer className="bg-brand-dark text-brand-ivory border-t border-brand-forest/60">
      {/* Top CTA Banner: Shown on inner pages for conversion, hidden on homepage where AppointmentCta is featured */}
      {!isHomePage && (
        <div className="border-b border-brand-forest/50 py-12 bg-gradient-to-b from-[#14352c] to-brand-dark">
          <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
                Ready to begin your recovery?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-ivory">
                Schedule your clinical consultation today.
              </h3>
              <p className="text-sm text-brand-cream/70 mt-1 max-w-xl">
                Connect directly with Dr. Vaibhav Farande to discuss your symptoms and enquire about available appointment slots.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-gold text-brand-dark font-semibold text-sm hover:bg-[#b5934a] transition-all shadow-gold"
              >
                Enquire via WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${clinicInfo.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-forest/80 text-brand-ivory border border-brand-gold/30 font-medium text-sm hover:bg-brand-forest transition-all"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                {clinicInfo.phoneDisplay}
              </a>
            </div>
          </Container>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="py-16">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Clinic Brand & Doctor Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center border border-brand-gold/40 shrink-0 p-0.5">
                <Image
                  src="/images/logo/clinic-logo.png"
                  alt="Farande Physiotherapy Clinic official logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-brand-ivory block">
                  Farande
                </span>
                <span className="text-[10px] font-sans tracking-[0.18em] uppercase text-brand-gold font-semibold block">
                  Physiotherapy Clinic
                </span>
              </div>
            </div>

            <p className="text-sm text-brand-cream/75 leading-relaxed pt-2">
              Dedicated to compassionate, evidence-informed physical therapy. Led by Dr. Vaibhav Ashok Farande (PT), providing personalized rehabilitation for musculoskeletal pain, sports injuries, and neuro conditions in Amravati.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-brand-gold-light bg-brand-forest/60 px-3 py-1.5 rounded-full border border-brand-gold/20">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                Ethical &amp; Evidence-Informed Practice
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-brand-cream/70">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  About the Doctor
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-brand-gold transition-colors">
                  Facilities &amp; Equipment
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-brand-gold transition-colors">
                  Research &amp; Science
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Focus Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Clinical Offerings
            </h4>
            <ul className="space-y-2 text-sm text-brand-cream/70">
              <li>
                <Link href="/services/back-pain-relief" className="hover:text-brand-gold transition-colors">
                  Back Pain Relief &amp; Spine Care
                </Link>
              </li>
              <li>
                <Link href="/services/sports-injury-rehabilitation" className="hover:text-brand-gold transition-colors">
                  Sports Injury Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="/services/dry-needling" className="hover:text-brand-gold transition-colors">
                  Dry Needling Therapy
                </Link>
              </li>
              <li>
                <Link href="/services/neuro-physiotherapy" className="hover:text-brand-gold transition-colors">
                  Neuro Physiotherapy
                </Link>
              </li>
              <li>
                <Link href="/services/posture-correction" className="hover:text-brand-gold transition-colors">
                  Posture &amp; Ergonomics
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brand-gold hover:underline inline-flex items-center gap-1 text-xs pt-1">
                  View all 13 services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Clinic Details
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-brand-cream/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                <span>
                  {clinicInfo.address.line1}, {clinicInfo.address.landmark},{" "}
                  {clinicInfo.address.area}, {clinicInfo.address.city} – {clinicInfo.address.postalCode}, Maharashtra
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="hover:text-brand-gold transition-colors"
                >
                  {clinicInfo.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-brand-ivory">Mon – Sat:</p>
                  <p className="text-brand-cream/70 text-xs">9:00 AM – 2:00 PM</p>
                  <p className="text-brand-cream/70 text-xs">2:30 PM – 8:00 PM</p>
                  <p className="text-brand-gold-light text-xs mt-1">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* External reference links */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <a
                href={clinicInfo.social.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-gold-light hover:text-white transition-colors"
              >
                ResearchGate Profile <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={clinicInfo.social.justdial}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-gold-light hover:text-white transition-colors"
              >
                Justdial Listing <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Medical Disclaimer & Bottom Bar */}
      <div className="border-t border-brand-forest/50 py-8 bg-[#0D221C] text-xs text-brand-cream/60">
        <Container className="space-y-4">
          <p className="leading-relaxed text-[11px] text-brand-cream/50 border-l-2 border-brand-gold/40 pl-3">
            <strong className="text-brand-cream/80">Ethical Healthcare Disclaimer:</strong> The information, clinical descriptions, and educational materials provided on this website are for general awareness and educational purposes only. They do not constitute formal medical diagnosis, prognosis, or guaranteed clinical outcomes. Treatments such as dry needling, electrotherapy, or exercise therapy are prescribed only after an in-person clinical assessment by a registered physiotherapist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-[11px]">
            <p>
              &copy; {new Date().getFullYear()} Farande Physiotherapy Clinic. All rights reserved.
            </p>
            <p className="text-brand-cream/40">
              Dr. Vaibhav Ashok Farande (PT) &bull; Amravati, Maharashtra, India
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
