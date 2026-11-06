"use client";

import React from "react";
import Image from "next/image";
import { clinicInfo } from "@/data/clinicInfo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageSquare,
  MapPin,
  Clock,
  CheckCircle2,
  Phone,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F2620] via-[#133229] to-[#173D32] text-brand-ivory pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 border-b border-brand-gold/30">
      {/* Decorative background glows & ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C6A45C_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-forest/90 border border-brand-gold/40 text-brand-gold-light text-xs font-medium tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span>{clinicInfo.tagline}</span>
            </div>

            {/* Editorial Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.75rem] font-normal leading-[1.14] tracking-tight text-white">
              Restoring Comfort, Mobility, &amp;{" "}
              <span className="italic font-normal text-brand-gold font-serif">
                Confidence
              </span>{" "}
              in Every Movement.
            </h1>

            {/* Sub-headline copy */}
            <p className="text-sm sm:text-lg text-brand-cream/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Welcome to <strong>Farande Physiotherapy Clinic</strong> in Amravati. Under the personal clinical care of <strong>Dr. Vaibhav Ashok Farande (PT)</strong>, we deliver unhurried, evidence-informed rehabilitation for spinal pain, sports injuries, and neuromuscular mobility.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <Button
                href={clinicInfo.whatsappUrl}
                isExternal
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto shadow-gold py-4 px-8 text-sm font-semibold tracking-wide"
              >
                <MessageSquare className="w-4 h-4 mr-2 fill-white" />
                Enquire via WhatsApp
              </Button>

              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-brand-ivory border-brand-gold/40 hover:bg-brand-gold/15 hover:border-brand-gold py-4 px-7 text-sm font-medium"
              >
                Explore All 13 Services
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>

            {/* Verification / Trust Micro Badges */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-3 bg-brand-dark/40 p-3 rounded-xl border border-white/5">
                <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-brand-ivory uppercase tracking-wider">
                    Evidence-Based Care
                  </p>
                  <p className="text-[11px] text-brand-cream/60">
                    Scientifically guided protocols
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-brand-dark/40 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-brand-ivory uppercase tracking-wider">
                    Dr. Vaibhav Farande
                  </p>
                  <p className="text-[11px] text-brand-cream/60">
                    BPT &bull; Researcher
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-brand-dark/40 p-3 rounded-xl border border-white/5">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-brand-ivory uppercase tracking-wider">
                    Amravati Clinic
                  </p>
                  <p className="text-[11px] text-brand-cream/60">
                    Maltekdi, Near Kali Mata Temple
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold double decorative frame */}
              <div className="absolute -inset-2.5 rounded-3xl border border-brand-gold/30 -rotate-1 pointer-events-none" />

              <div className="relative bg-brand-dark/90 rounded-2xl overflow-hidden border border-brand-gold/50 shadow-2xl p-6 sm:p-7 space-y-6 backdrop-blur-md">
                {/* Visual Graphic Representation */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-brand-gold/30 bg-[#122F26] flex items-center justify-center group">
                  <Image
                    src="/images/placeholders/hero-graphic.svg"
                    alt="Farande Physiotherapy Spine and Neuromuscular Care Illustration"
                    width={500}
                    height={375}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-brand-dark/85 backdrop-blur-md p-2.5 rounded-lg border border-brand-gold/30 flex items-center justify-between text-xs">
                    <span className="text-brand-ivory font-medium">
                      Consultant Physiotherapy
                    </span>
                    <span className="text-brand-gold-light font-semibold text-[11px]">
                      Sabnis Plot, Maltekdi
                    </span>
                  </div>
                </div>

                {/* Doctor Credential Spotlight */}
                <div className="border-t border-white/10 pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-brand-gold font-semibold block">
                        Direct In-Person Consultation
                      </span>
                      <h3 className="font-serif text-xl font-bold text-brand-ivory">
                        {clinicInfo.doctorName}
                      </h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-brand-forest text-brand-gold-light border border-brand-gold/30 font-medium">
                      BPT
                    </span>
                  </div>

                  <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
                    Postgraduate scholar at School of Health Sciences, Garden City University. Special focus on dry needling for tendinopathy &amp; conservative spine recovery.
                  </p>
                </div>

                {/* Quick Consultation Action inside Card */}
                <div className="pt-2 flex items-center justify-between gap-3 text-xs border-t border-white/10">
                  <div className="flex items-center gap-2 text-brand-cream/80">
                    <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span className="text-[11px]">Mon–Sat: 9 AM–2 PM &amp; 2:30–8 PM</span>
                  </div>
                  <a
                    href={`tel:${clinicInfo.phone}`}
                    className="inline-flex items-center gap-1.5 text-brand-gold hover:text-white font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
