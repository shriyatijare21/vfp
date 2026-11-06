import type { Metadata } from "next";
import { researchData } from "@/data/research";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ExternalLink,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Evidence-Based Practice",
  description:
    "Explore the academic research and evidence-informed methodology of Dr. Vaibhav Ashok Farande (PT) and Farande Physiotherapy Clinic in Amravati.",
};

export default function ResearchPage() {
  return (
    <div className="py-12 lg:py-20">
      {/* Header */}
      <section className="pb-16 border-b border-[#E7DDCA]">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-3">
              Academic Foundation & Publications
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-dark font-normal leading-[1.15]">
              Evidence-Based Physiotherapy in Practice
            </h1>
            <p className="mt-6 text-base sm:text-lg text-brand-muted leading-relaxed">
              We reject outdated clinical folklore and pseudo-scientific trends. Our treatments are grounded in contemporary biomechanical literature, clinical neuromuscular research, and ongoing academic inquiry.
            </p>
          </div>
        </Container>
      </section>

      {/* Researcher Spotlight */}
      <section className="py-16 border-b border-[#E7DDCA]">
        <Container>
          <div className="bg-brand-white rounded-3xl p-8 sm:p-12 border border-[#E0D3BF] shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-forest">
                  <GraduationCap className="w-4 h-4 text-brand-gold" />
                  Academic Profile
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
                  Dr. Vaibhav Ashok Farande (PT)
                </h2>
                <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                  Holding a <strong>Bachelor of Physiotherapy (BPT)</strong> degree and active as a postgraduate researcher within the <strong>School of Health Sciences at Garden City University</strong>, Dr. Farande is dedicated to the systematic study of musculoskeletal disorders and physical therapy modalities.
                </p>
                <p className="text-sm text-brand-muted leading-relaxed">
                  His ongoing work focuses specifically on the physiological mechanisms and practical outcomes of <em>dry needling for tendinopathy</em>, examining how micro-stimulation interrupts chronic pain feedback loops and promotes local tissue remodeling.
                </p>
                <div className="pt-2">
                  <a
                    href={clinicInfo.social.researchGate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-forest text-brand-ivory text-xs font-semibold uppercase tracking-wider hover:bg-brand-dark transition-all"
                  >
                    View Verified ResearchGate Profile
                    <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-brand-cream/70 rounded-2xl p-6 border border-[#DECDB5] space-y-4 text-xs">
                <h4 className="font-serif text-base font-bold text-brand-dark">
                  Primary Research Areas
                </h4>
                <ul className="space-y-2.5 text-brand-charcoal">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                    <span>Dry Needling Mechanisms in Tendinopathy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                    <span>Conservative Spine Biomechanics & PIVD Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                    <span>Eccentric Mechanical Loading & Tendon Remodeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                    <span>Myofascial Trigger Point Neuromodulation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Research Items */}
      <section className="py-16">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Scholarly Focus"
            title="Current Research Topics & Clinical Inquiries"
            description="How academic investigations directly shape the clinical protocols delivered to patients in Amravati."
            align="left"
          />

          <div className="space-y-8">
            {researchData.map((item) => (
              <Card
                key={item.id}
                variant="ivory"
                className="space-y-6 hover:border-brand-gold"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EFE5D5]">
                  <Badge variant="forest">{item.category}</Badge>
                  <span className="text-xs text-brand-muted">
                    Affiliation: {item.affiliation}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-brand-forest mb-4">
                    Author: {item.author}
                  </p>
                  <p className="text-sm text-brand-charcoal/90 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="bg-brand-cream/60 rounded-xl p-5 border border-[#DECDB5] space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest block">
                    Core Insights & Evidence Findings:
                  </span>
                  <ul className="space-y-2 text-xs text-brand-charcoal">
                    {item.keyInsights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-xs text-brand-muted">
                  <strong className="text-brand-charcoal">How this applies to patient care:</strong>{" "}
                  {item.clinicalApplication}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Patient Education CTA */}
      <section className="py-16 bg-[#F3EDE2] border-t border-[#E7DDCA]">
        <Container className="text-center max-w-2xl">
          <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark font-normal">
            Have Questions About Evidence-Based Care?
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted mt-3 leading-relaxed">
            We are always happy to discuss the scientific rationale behind any recommended exercise or therapy before you begin.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button
              href={clinicInfo.whatsappUrl}
              isExternal
              variant="whatsapp"
            >
              Ask on WhatsApp
            </Button>
            <Button href="/contact" variant="outline">
              Contact Clinic
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
