import React from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  ExternalLink,
  ArrowRight,
  FileCheck,
  Microscope,
  CheckCircle2,
} from "lucide-react";

export function ResearchSpotlight() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF8F2] border-b border-[#E7DDCA]">
      <Container>
        <div className="bg-brand-cream/80 rounded-3xl border border-[#DECDB5] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-luxury">
          {/* Subtle background crest */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-forest/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-semibold uppercase tracking-wider">
                <Microscope className="w-3.5 h-3.5 text-brand-gold" />
                Evidence-Based Practice
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-dark leading-tight">
                Bridging Academic Science with Daily Outpatient Care
              </h2>

              <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                Physical therapy should never rely on clinical guesswork. Dr. Vaibhav Ashok Farande actively conducts academic research through the <strong>School of Health Sciences at Garden City University</strong>.
              </p>

              <p className="text-sm text-brand-muted leading-relaxed">
                His research investigations explore the neuro-mechanical mechanisms of <em>dry needling in chronic tendinopathies</em>, examining how targeted micro-stimulation deactivates persistent trigger points and accelerates cellular collagen repair.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/research" variant="primary" size="md">
                  Explore Research &amp; Science
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>

                <a
                  href={clinicInfo.social.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-forest hover:text-brand-gold transition-colors py-2 px-3 border border-brand-forest/20 rounded-full hover:border-brand-gold"
                >
                  ResearchGate Profile
                  <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
                </a>
              </div>
            </div>

            {/* Right Scholarly Preview Card */}
            <div className="lg:col-span-5">
              <div className="bg-brand-white rounded-2xl p-7 border border-[#DECDB5] shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0E6D6] text-xs">
                  <span className="font-semibold text-brand-forest uppercase tracking-wider flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-brand-gold" />
                    Academic Research Focus
                  </span>
                  <span className="text-[10px] text-brand-muted font-medium">
                    Garden City University
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-brand-dark leading-snug">
                  Physiological Mechanisms of Dry Needling in Musculoskeletal Tendinopathies
                </h3>

                <p className="text-xs text-brand-muted leading-relaxed">
                  Investigating trigger point neuromuscular interruption, localized vasodilation, and collagen remodeling in chronic tendon pain.
                </p>

                <div className="pt-2 space-y-1.5 border-t border-[#F0E6D6] text-xs text-brand-charcoal">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                    <span>Informs treatment of Achilles, Patellar &amp; Tennis Elbow tendinitis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                    <span>Integrates needle stimulation with progressive eccentric loading</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-brand-muted/80 italic">
                  Investigator: Vaibhav Ashok Farande (PT) &bull; Postgraduate Scholar, School of Health Sciences
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
