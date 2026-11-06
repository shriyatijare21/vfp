import React from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BookOpen, ExternalLink, ArrowRight, FileCheck } from "lucide-react";

export function ResearchSpotlight() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F4EB] border-b border-[#E7DDCA]">
      <Container>
        <div className="bg-brand-cream/70 rounded-3xl border border-[#DECDB5] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-brand-gold" />
                Academic & Clinical Research
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-dark leading-tight">
                Bridging Musculoskeletal Science with Outpatient Care
              </h2>

              <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed max-w-2xl">
                Dr. Vaibhav Ashok Farande actively contributes to academic research through the <strong>School of Health Sciences at Garden City University</strong>. His research investigates the physiological efficacy of <em>dry needling interventions in chronic tendinopathies</em>, directly translating clinical evidence into practical treatment protocols at our Amravati clinic.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/research" variant="primary">
                  Explore Research & Publications
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                <a
                  href={clinicInfo.social.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-forest hover:text-brand-gold transition-colors py-2 px-3"
                >
                  View on ResearchGate
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-4">
              <div className="bg-brand-white rounded-2xl p-6 border border-[#E0D3BF] shadow-luxury space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-forest uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-brand-gold" />
                  Primary Research Topic
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-dark leading-snug">
                  Efficacy of Dry Needling in Tendinopathy Management
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Evaluating neuromuscular trigger point deactivation, local vasodilation, and collagen remodeling in chronic tendon pain.
                </p>
                <div className="pt-2 border-t border-[#F0E8D9] flex items-center justify-between text-[11px] text-brand-charcoal/70">
                  <span>Garden City University</span>
                  <span className="font-medium text-brand-forest">Verified Author</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
