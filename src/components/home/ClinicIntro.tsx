import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function ClinicIntro() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF8F2] border-b border-[#E7DDCA]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Editorial Statement & Clinic Ethos */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/15 text-brand-forest text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Our Clinical Philosophy
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-dark leading-[1.18] tracking-tight">
              &ldquo;The caring hands you deserve.&rdquo;{" "}
              <span className="block text-xl sm:text-2xl lg:text-3xl font-light italic text-brand-muted mt-2">
                A calm, respectful environment where patient listening comes first.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-brand-charcoal/90 leading-relaxed font-normal pt-2">
              Farande Physiotherapy Clinic was founded in Amravati with a singular purpose: to deliver compassionate, scientifically validated physical therapy free from the rush of crowded hospital corridors.
            </p>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Whether you are struggling with chronic lower back disc discomfort (PIVD), rehabilitating an athletic tendon injury, or seeking to correct postural strain from sedentary desk work, our clinical process pairs detailed biomechanical analysis with genuine personal empathy.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-forest hover:text-brand-gold transition-colors group"
              >
                <span>Read Our Full Story &amp; Clinical Ethos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-gold" />
              </Link>
            </div>
          </div>

          {/* Right Column: Genuine Clinic Reception Photography & Core Care Ethos */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#DECDB5] shadow-luxury bg-brand-forest group">
              <Image
                src="/images/clinic/clinic-reception.jpg"
                alt="Patient reception and consultation lounge at Farande Physiotherapy Clinic, Amravati"
                width={1600}
                height={1066}
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-brand-dark/90 backdrop-blur-sm p-3 rounded-xl border border-brand-gold/30 text-xs text-brand-ivory flex items-center justify-between">
                <div>
                  <p className="font-semibold text-brand-ivory text-xs">Clinic Reception &amp; Waiting Lounge</p>
                  <p className="text-[11px] text-brand-cream/70">Shop No. 3, Mahakali Enclave, Maltekdi</p>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-gold px-2 py-0.5 rounded bg-brand-forest border border-brand-gold/30">
                  Amravati
                </span>
              </div>
            </div>

            {/* Editorial Care Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="border-l-2 border-brand-gold/60 pl-3 space-y-1">
                <h3 className="font-serif text-sm font-bold text-brand-dark">
                  Direct Doctor Consultation
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Care is conducted directly by Dr. Vaibhav Farande, BPT + MPT (Sports).
                </p>
              </div>

              <div className="border-l-2 border-brand-gold/60 pl-3 space-y-1">
                <h3 className="font-serif text-sm font-bold text-brand-dark">
                  Private Treatment Setting
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Dedicated cubicles for comfortable, confidential manual therapy sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

