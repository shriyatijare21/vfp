import React from "react";
import { Container } from "@/components/ui/Container";
import {
  ClipboardCheck,
  Stethoscope,
  Activity,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    phase: "Phase 01",
    title: "Comprehensive Assessment",
    subtitle: "Root-Cause Investigation",
    description:
      "We begin with detailed palpation, joint mobility testing, neural tension testing, and functional posture analysis to identify the exact origin of strain.",
    focusAreas: ["Postural Screening", "Neuromuscular Palpation", "Differential Testing"],
    icon: ClipboardCheck,
  },
  {
    phase: "Phase 02",
    title: "Targeted Manual Intervention",
    subtitle: "Pain Modulation & Decompression",
    description:
      "Application of evidence-based hands-on therapy—such as myofascial dry needling, joint glides, or electrotherapy—to calm acute inflammation and spasm.",
    focusAreas: ["Dry Needling", "Joint Mobilization", "Spasm Relief"],
    icon: Stethoscope,
  },
  {
    phase: "Phase 03",
    title: "Progressive Tissue Loading",
    subtitle: "Rebuilding Active Resilience",
    description:
      "Once acute pain settles, we transition to supervised exercise loading, core stabilization, and tendon strengthening to rebuild genuine physical capacity.",
    focusAreas: ["Eccentric Loading", "Core Stability", "Movement Retraining"],
    icon: Activity,
  },
  {
    phase: "Phase 04",
    title: "Ergonomic Autonomy",
    subtitle: "Prevention & Self-Care",
    description:
      "We equip you with desk ergonomic advice, stretching routines, and home exercise protocols to maintain your gains and permanently avoid recurrence.",
    focusAreas: ["Desk Ergonomics", "Home Routine", "Preventive Habits"],
    icon: HeartHandshake,
  },
];

export function TreatmentJourney() {
  return (
    <section className="py-20 lg:py-28 bg-[#F4EEE3] border-b border-[#E3D6C1] relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
            The Patient Care Pathway
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-dark leading-tight">
            How We Guide You to Full Recovery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
            A structured, 4-phase clinical roadmap designed to transition you safely from acute pain to lasting functional independence.
          </p>
        </div>

        {/* Connected Horizontal Timeline Ribbon */}
        <div className="relative">
          {/* Desktop connecting gold hairline bar */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-gold via-brand-forest to-brand-gold opacity-40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.phase}
                  className="bg-brand-white rounded-2xl p-6 sm:p-7 border border-[#DECDB5] shadow-sm flex flex-col justify-between group hover:border-brand-gold hover:shadow-luxury transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Step Node & Phase Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-brand-forest text-brand-gold flex items-center justify-center font-serif text-lg font-bold border-2 border-brand-gold/60 shadow-sm group-hover:scale-105 transition-transform">
                        {idx + 1}
                      </div>
                      <div className="flex items-center gap-1.5 bg-brand-cream/80 px-2.5 py-1 rounded-full border border-[#DECDB5]">
                        <Icon className="w-3.5 h-3.5 text-brand-gold" />
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
                          {step.phase}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-forest transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[11px] font-medium text-brand-gold uppercase tracking-wider mt-0.5">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-brand-muted leading-relaxed">
                      {step.description}
                    </p>

                    {/* Focus Chips */}
                    <div className="pt-2 border-t border-[#F2ECE1] space-y-1.5">
                      <span className="text-[10px] font-semibold text-brand-charcoal uppercase tracking-wider block">
                        Clinical Focus:
                      </span>
                      {step.focusAreas.map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-brand-charcoal/80">
                          <CheckCircle2 className="w-3 h-3 text-brand-gold shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
