import React from "react";
import { Container } from "@/components/ui/Container";
import {
  ShieldCheck,
  Check,
  X,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const comparisons = [
  {
    feature: "Consultation Length",
    conventional: "5–10 minute rushed evaluation",
    farande: "Unhurried, dedicated 1-on-1 assessment",
  },
  {
    feature: "Treating Clinician",
    conventional: "Often handed off to unverified assistants",
    farande: "Exclusively Dr. Vaibhav Farande (PT), BPT",
  },
  {
    feature: "Therapeutic Focus",
    conventional: "Passive temporary relief (heat pads & quick machines)",
    farande: "Root-cause manual release & active progressive strengthening",
  },
  {
    feature: "Long-Term Goal",
    conventional: "Perpetual clinic visit dependency",
    farande: "Patient empowerment, ergonomic education & prevention",
  },
  {
    feature: "Hygiene Standard",
    conventional: "Variable sanitization between appointments",
    farande: "Strict medical sanitization & single-use sterile needles",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#102B24] text-brand-ivory border-b border-brand-gold/30 relative overflow-hidden">
      {/* Decorative ambient aura */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Brand Guarantee & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              The Clinical Difference
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Why Entrust Your Health to Farande Physiotherapy?
            </h2>

            <p className="text-sm sm:text-base text-brand-cream/80 leading-relaxed font-light">
              We reject assembly-line healthcare. When you are in pain, you deserve a clinician who listens to your complete medical history, investigates your movement mechanics, and treats you with genuine respect.
            </p>

            <div className="p-6 rounded-2xl bg-brand-forest/60 border border-brand-gold/30 space-y-3">
              <div className="flex items-center gap-2.5 text-brand-gold font-serif text-lg font-bold">
                <ShieldCheck className="w-5 h-5" />
                Our Clinical Commitment
              </div>
              <p className="text-xs text-brand-cream/85 leading-relaxed font-light">
                No false promises of &ldquo;miracle overnight cures.&rdquo; We deliver transparent, scientifically validated rehabilitation aimed at lasting tissue resilience and pain-free living.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
              >
                Learn More About Our Clinical Standards &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Comparative Table */}
          <div className="lg:col-span-7 bg-brand-forest/70 rounded-3xl p-6 sm:p-8 border border-brand-gold/40 shadow-2xl backdrop-blur-sm">
            <div className="pb-4 border-b border-white/10 mb-4 flex items-center justify-between text-xs">
              <span className="font-semibold text-brand-gold uppercase tracking-wider">
                Standard Comparison
              </span>
              <span className="text-[11px] text-brand-cream/60">
                Ethical Healthcare Model
              </span>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-brand-dark/60 border border-white/5 space-y-2 hover:border-brand-gold/30 transition-colors"
                >
                  <span className="text-xs font-semibold text-brand-ivory uppercase tracking-wider block">
                    {item.feature}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {/* Conventional */}
                    <div className="flex items-start gap-2 text-brand-cream/50">
                      <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item.conventional}</span>
                    </div>

                    {/* Farande Standard */}
                    <div className="flex items-start gap-2 text-brand-gold-light font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item.farande}</span>
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
