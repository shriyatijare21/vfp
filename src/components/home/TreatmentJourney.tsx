import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ClipboardCheck,
  Stethoscope,
  Activity,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Comprehensive Clinical Assessment",
    description:
      "We begin with a detailed physical evaluation—examining joint biomechanics, neuromuscular firing, posture, and pain triggers rather than relying solely on surface symptoms.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Tailored Intervention Plan",
    description:
      "A structured care strategy is curated specifically for your lifestyle and recovery goals, combining hands-on manual techniques, modalities, and symptom relief.",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Progressive Movement & Loading",
    description:
      "Once acute pain is managed, we guide you through supervised active movements, progressive resistance, and stabilization drills to rebuild real tissue tolerance.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Empowerment & Self-Management",
    description:
      "You receive practical ergonomic advice, posture routines, and home exercise guidance so you remain pain-free and avoid recurring episodes.",
    icon: HeartHandshake,
  },
];

export function TreatmentJourney() {
  return (
    <section className="py-20 lg:py-28 bg-brand-ivory border-b border-[#E7DDCA]">
      <Container>
        <SectionHeading
          eyebrow="Our Clinical Process"
          title="The Patient Recovery Journey"
          description="A structured, evidence-based roadmap designed to take you from acute discomfort to confident, pain-free movement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-brand-white rounded-2xl p-7 border border-[#EADBCC] shadow-sm flex flex-col justify-between group hover:border-brand-gold transition-all duration-300"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-brand-gold">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-cream text-brand-forest flex items-center justify-center border border-[#DECDB5] group-hover:bg-brand-forest group-hover:text-brand-gold transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#F2ECE1]">
                  <span className="text-[11px] font-semibold text-brand-forest uppercase tracking-wider">
                    Phase {idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
