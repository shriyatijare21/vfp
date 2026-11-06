import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  HeartHandshake,
  Microscope,
  ShieldCheck,
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

          {/* Right Column: 3 Pillars with Editorial Hierarchy */}
          <div className="lg:col-span-5 space-y-4">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-brand-white border border-[#EADBCC] shadow-sm hover:border-brand-gold/60 transition-all duration-300 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-cream text-brand-forest flex items-center justify-center border border-[#DECDB5]">
                  <HeartHandshake className="w-4 h-4 text-brand-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark">
                  Unhurried One-on-One Attention
                </h3>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed pl-12">
                Every consultation is conducted directly with Dr. Vaibhav Farande. We take the time needed to thoroughly palpate, assess, and explain your condition.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-brand-white border border-[#EADBCC] shadow-sm hover:border-brand-gold/60 transition-all duration-300 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-cream text-brand-forest flex items-center justify-center border border-[#DECDB5]">
                  <Microscope className="w-4 h-4 text-brand-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark">
                  Evidence-Informed Methodology
                </h3>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed pl-12">
                We apply published clinical protocols in dry needling and biomechanics from Garden City University research, ensuring every movement has therapeutic merit.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-brand-white border border-[#EADBCC] shadow-sm hover:border-brand-gold/60 transition-all duration-300 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-cream text-brand-forest flex items-center justify-center border border-[#DECDB5]">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark">
                  Medical Hygiene &amp; Privacy
                </h3>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed pl-12">
                Equipped with private treatment cubicles and strict single-use sterile disposable needles for dry needling, maintaining the highest clinical sanitization standards.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
