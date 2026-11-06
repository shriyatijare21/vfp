import React from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  GraduationCap,
  BookOpen,
  HeartHandshake,
  ExternalLink,
  UserCheck,
} from "lucide-react";

export function DoctorIntro() {
  return (
    <section className="py-20 lg:py-28 bg-brand-ivory border-b border-[#E7DDCA]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Doctor Portrait / Dedicated Visual Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative border */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-brand-gold/40 transform rotate-1 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden bg-brand-cream border border-[#D8CCB8] shadow-luxury p-8 text-center space-y-6">
                {/* Doctor Avatar / Placeholder */}
                <div className="relative w-44 h-44 mx-auto rounded-full bg-gradient-to-tr from-brand-forest to-[#285749] flex items-center justify-center border-4 border-brand-gold/50 shadow-md overflow-hidden">
                  <UserCheck className="w-20 h-20 text-brand-gold-light stroke-[1.2]" />
                  {/* Subtle placeholder indicator */}
                  <span className="absolute bottom-2 text-[10px] bg-brand-dark/80 text-brand-gold-light px-2 py-0.5 rounded-full font-medium">
                    Dr. Vaibhav Farande
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block">
                    Chief Consultant
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-dark">
                    {clinicInfo.doctorName}
                  </h3>
                  <p className="text-sm font-medium text-brand-forest">
                    {clinicInfo.doctorDegree}
                  </p>
                  <p className="text-xs text-brand-muted">
                    {clinicInfo.doctorResearchAffiliation}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DECDB5] flex items-center justify-center gap-3 text-xs">
                  <a
                    href={clinicInfo.social.researchGate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-brand-forest border border-[#D5C6AF] hover:border-brand-gold hover:text-brand-dark transition-all"
                  >
                    ResearchGate Profile
                    <ExternalLink className="w-3 h-3 text-brand-gold" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Bio & Clinical Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              eyebrow="Meet Your Doctor"
              title="A Rigorous, Evidence-Informed Clinical Approach"
              align="left"
              className="mb-6"
            />

            <p className="text-base sm:text-lg text-brand-charcoal/90 leading-relaxed font-normal">
              At <strong>Farande Physiotherapy Clinic</strong>, care is guided by <strong>Dr. Vaibhav Ashok Farande (PT)</strong>. Dr. Farande holds a <em>Bachelor of Physiotherapy (BPT)</em> and is actively engaged as a postgraduate researcher in the <em>School of Health Sciences at Garden City University</em>.
            </p>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              His clinical philosophy balances empathetic patient listening with contemporary musculoskeletal science. With active research interests in targeted modalities such as <strong>dry needling for tendinopathy</strong> and conservative spine rehabilitation, every treatment protocol is grounded in verified clinical rationale.
            </p>

            {/* Key Doctor Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-sm text-brand-charcoal">
                  <strong>Formal Degree:</strong> Bachelor of Physiotherapy (BPT) with extensive practical musculoskeletal and neuro-rehabilitation training.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-sm text-brand-charcoal">
                  <strong>Academic Research:</strong> Active postgraduate scholar investigating the physiological efficacy of dry needling in chronic tendinopathies.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-sm text-brand-charcoal">
                  <strong>One-on-One Attention:</strong> Every patient receives direct personal evaluation and hands-on guidance from Dr. Vaibhav Farande.
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/about" variant="primary">
                Learn More About Dr. Farande
              </Button>
              <Button
                href={clinicInfo.whatsappUrl}
                isExternal
                variant="whatsapp"
              >
                Discuss Your Condition
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
