import React from "react";
import { Container } from "@/components/ui/Container";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const clinicalPrinciples = [
  {
    number: "01",
    title: "Dedicated 1-on-1 Consultation",
    description:
      "Every evaluation and treatment session is conducted directly by Dr. Vaibhav Farande, BPT + MPT (Sports), ensuring complete diagnostic attention without delegation.",
  },
  {
    number: "02",
    title: "Root-Cause Biomechanical Assessment",
    description:
      "We evaluate joint mechanics, movement patterns, and posture to understand why symptoms developed, combining hands-on techniques with targeted movement.",
  },
  {
    number: "03",
    title: "Active, Progressive Rehabilitation",
    description:
      "Combining precision manual therapy with structured exercise loading helps tissues adapt, rebuild load tolerance, and minimize the risk of recurring pain.",
  },
  {
    number: "04",
    title: "Patient Autonomy & Clear Education",
    description:
      "You receive clear explanations of your condition, home exercise guidance, and daily ergonomic advice to build long-term movement independence.",
  },
  {
    number: "05",
    title: "Sterile & Evidence-Informed Protocols",
    description:
      "All invasive modalities such as dry needling utilize single-use, sterile medical-grade needles, adhering to standard clinical safety protocols.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#102B24] text-brand-ivory border-b border-brand-gold/30 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Practice Philosophy */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Clinical Practice Standards
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Our Principles of Patient Care
            </h2>

            <p className="text-sm sm:text-base text-brand-cream/80 leading-relaxed font-light">
              We believe effective physical therapy requires unhurried listening, accurate mechanical assessment, and active patient collaboration. Our practice is built on transparent, responsible rehabilitation.
            </p>

            <div className="p-6 rounded-2xl bg-brand-forest/60 border border-brand-gold/30 space-y-3">
              <div className="flex items-center gap-2.5 text-brand-gold font-serif text-lg font-bold">
                <ShieldCheck className="w-5 h-5" />
                Our Clinical Commitment
              </div>
              <p className="text-xs text-brand-cream/85 leading-relaxed font-light">
                We make no claims of &ldquo;instant overnight cures.&rdquo; Physical recovery follows biological tissue healing times. We provide structured, evidence-informed guidance aimed at restoring functional capacity step-by-step.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
              >
                Read About Dr. Farande&apos;s Clinical Philosophy
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Principles List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="pb-3 border-b border-white/10 mb-6 flex items-center justify-between text-xs">
              <span className="font-semibold text-brand-gold uppercase tracking-wider">
                Practice Standards
              </span>
              <span className="text-[11px] text-brand-cream/60">
                Farande Physiotherapy Clinic &bull; Amravati
              </span>
            </div>

            <div className="space-y-4">
              {clinicalPrinciples.map((item) => (
                <div
                  key={item.number}
                  className="p-5 sm:p-6 rounded-2xl bg-brand-forest/50 border border-brand-gold/25 hover:border-brand-gold/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-xl sm:text-2xl text-brand-gold font-bold leading-none shrink-0 pt-0.5">
                      {item.number}
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-ivory flex items-center gap-2">
                        {item.title}
                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 opacity-80" />
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
