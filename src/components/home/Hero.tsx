"use client";

import React from "react";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicInfo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  MessageSquare,
  MapPin,
  Clock,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#102B24] via-[#14342B] to-[#173D32] text-brand-ivory pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-brand-gold/20">
      {/* Decorative subtle background aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-medium tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>{clinicInfo.tagline}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-white">
              Restoring Comfort, Mobility, and{" "}
              <span className="italic text-brand-gold font-normal">
                Confidence
              </span>{" "}
              in Every Movement.
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-brand-cream/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Welcome to <strong>Farande Physiotherapy Clinic</strong> in Amravati. Under the clinical leadership of <strong>Dr. Vaibhav Ashok Farande (PT)</strong>, we provide personalized, evidence-informed physical therapy tailored to spinal health, athletic recovery, and chronic pain management.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href={clinicInfo.whatsappUrl}
                isExternal
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto shadow-gold"
              >
                <MessageSquare className="w-5 h-5 mr-1" />
                Enquire via WhatsApp
              </Button>

              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-brand-ivory border-brand-gold/40 hover:bg-brand-gold/15 hover:border-brand-gold"
              >
                Explore Treatments
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Trust highlights grid */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-brand-ivory uppercase tracking-wider">
                    Evidence-Based
                  </p>
                  <p className="text-[11px] text-brand-cream/60">
                    Scientifically guided protocols
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-brand-ivory uppercase tracking-wider">
                    BPT Qualified
                  </p>
                  <p className="text-[11px] text-brand-cream/60">
                    Dr. Vaibhav Farande (PT)
                  </p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-start gap-2.5">
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

          {/* Right Column: Premium Visual Panel */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Elegant frame accent */}
              <div className="absolute -inset-2 rounded-3xl border border-brand-gold/30 -rotate-1 pointer-events-none" />

              <div className="relative bg-brand-forest/90 rounded-2xl overflow-hidden border border-brand-gold/40 shadow-2xl p-6 sm:p-8 space-y-6">
                {/* Header within card */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-sans tracking-[0.16em] uppercase text-brand-gold font-semibold block">
                      Consultant Physiotherapist
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory">
                      {clinicInfo.doctorName}
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-brand-gold/20 text-brand-gold-light border border-brand-gold/30">
                    {clinicInfo.doctorDegree}
                  </span>
                </div>

                {/* Editorial quote */}
                <blockquote className="italic font-serif text-lg text-brand-cream/90 leading-relaxed border-l-2 border-brand-gold pl-4">
                  &ldquo;Our focus is never just easing today’s discomfort; it is about rebuilding resilient, functional movement so you can return to life with joy and confidence.&rdquo;
                </blockquote>

                {/* Quick Info Points */}
                <div className="space-y-3 bg-brand-dark/50 p-4 rounded-xl border border-white/5 text-xs text-brand-cream/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Mon – Sat: 9:00 AM – 2:00 PM & 2:30 PM – 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Shop No. 3, Mahakali Enclave, Maltekdi, Amravati</span>
                  </div>
                </div>

                {/* Action in Card */}
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
                  >
                    Read Dr. Vaibhav’s Full Profile
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
