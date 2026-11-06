import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Shield,
  UserCheck,
  Microscope,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const pillars = [
  {
    icon: Microscope,
    title: "Evidence-Informed Practice",
    description:
      "All assessments and therapies draw upon validated musculoskeletal literature, ensuring scientific safety and physiological effectiveness.",
  },
  {
    icon: UserCheck,
    title: "Direct Doctor Consultations",
    description:
      "You work directly with Dr. Vaibhav Ashok Farande (PT). Every session involves hands-on assessment and personal guidance—never delegated to unverified assistants.",
  },
  {
    icon: Shield,
    title: "Ethical & Transparent Care",
    description:
      "We do not promise unrealistic overnight 'cures.' We explain your diagnosis clearly, outline achievable milestones, and prioritize long-term joint health.",
  },
  {
    icon: Sparkles,
    title: "Hygienic & Private Setting",
    description:
      "Equipped with dedicated private treatment cubicles, single-use sterile dry needles, and sanitized treatment stations for your comfort and dignity.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-brand-forest text-brand-ivory border-b border-brand-gold/30 relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A45C_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Clinical Commitment"
          title="Why Entrust Your Health to Farande Physiotherapy?"
          description="In an era of rushed treatments, we prioritize clinical thoroughness, patient dignity, and durable functional restoration."
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-brand-dark/70 rounded-2xl p-7 border border-brand-gold/25 hover:border-brand-gold transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-ivory">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center gap-2 text-xs text-brand-gold-light">
                  <CheckCircle className="w-4 h-4 text-brand-gold" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
