import type { Metadata } from "next";
import Link from "next/link";
import { researchData } from "@/data/research";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
  ExternalLink,
  GraduationCap,
  CheckCircle2,
  Microscope,
  BookOpen,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  FileText,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Research & Evidence-Based Practice | Amravati",
  description:
    "Explore the academic research and evidence-informed methodology of Dr. Vaibhav Ashok Farande (PT) and Farande Physiotherapy Clinic in Amravati.",
  alternates: {
    canonical: "https://farandephysio.in/research",
  },
  openGraph: {
    title: "Research & Evidence-Based Care | Farande Physiotherapy Clinic",
    description:
      "Investigating dry needling in tendinopathies, musculoskeletal loading, and evidence-informed physical therapy.",
    url: "https://farandephysio.in/research",
  },
};

export default function ResearchPage() {
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: "Research & Science" }]} />

      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#102B24] via-[#14342B] to-[#173D32] text-brand-ivory border-b border-brand-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
              <Microscope className="w-3.5 h-3.5 text-brand-gold" />
              Scholarly Inquiry &amp; Evidence
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.14]">
              Evidence-Based Physiotherapy in Practice.
            </h1>

            <p className="text-base sm:text-xl text-brand-cream/80 leading-relaxed font-light pt-2">
              We reject clinical guesswork and unsupported medical trends. Our therapeutic protocols are grounded in contemporary biomechanical literature, neuromuscular research, and academic rigor.
            </p>
          </div>
        </Container>
      </section>

      {/* Academic Profile Spotlight */}
      <section className="py-16 bg-[#FBF8F2] border-b border-[#E7DDCA]">
        <Container>
          <div className="bg-brand-white rounded-3xl p-8 sm:p-12 border border-[#DECDB5] shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-forest">
                  <GraduationCap className="w-4 h-4 text-brand-gold" />
                  Academic Profile &amp; Affiliation
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
                  Dr. Vaibhav Ashok Farande (PT)
                </h2>

                <p className="text-sm sm:text-base text-brand-charcoal/90 leading-relaxed">
                  Holding a <strong>Bachelor of Physiotherapy (BPT)</strong> degree and active as a postgraduate researcher within the <strong>School of Health Sciences at Garden City University</strong>, Dr. Farande is dedicated to the systematic investigation of musculoskeletal disorders and neuromuscular intervention efficacy.
                </p>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  His ongoing scholarly investigations focus specifically on the physiological mechanisms and practical outcomes of <em>dry needling for tendinopathy</em>, examining how micro-stimulation interrupts chronic pain feedback loops, promotes localized angiogenesis, and accelerates collagen remodeling in stubborn tendinous tissues.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={clinicInfo.social.researchGate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-forest text-brand-ivory text-xs font-semibold uppercase tracking-wider hover:bg-brand-dark transition-all shadow-sm"
                  >
                    View Verified ResearchGate Profile
                    <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
                  </a>

                  <Button href="/about" variant="outline" size="sm">
                    Read Doctor Biography &rarr;
                  </Button>
                </div>
              </div>

              {/* Research Focus Card */}
              <div className="lg:col-span-4 bg-brand-cream/80 rounded-2xl p-6 border border-[#DECDB5] space-y-4 text-xs">
                <div className="flex items-center gap-2 pb-2 border-b border-[#D8C7AF] text-brand-forest font-semibold uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-brand-gold" />
                  Primary Investigation Topics
                </div>
                <ul className="space-y-3 text-brand-charcoal">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                    <span>Dry Needling Mechanisms in Chronic Tendinopathy Management</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                    <span>Conservative Spine Biomechanics &amp; PIVD Mechanical Unloading</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                    <span>Eccentric Mechanical Loading &amp; Tendon Collagen Remodeling</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                    <span>Myofascial Trigger Point Neuromodulation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Research Investigations Detail */}
      <section className="py-16 lg:py-20 bg-[#F4EEE3] border-b border-[#E3D6C1]">
        <Container className="space-y-10">
          <div className="max-w-3xl text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
              Clinical Papers &amp; Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-dark leading-tight">
              Current Research Inquiries &amp; Methodology
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
              How academic inquiry directly shapes the clinical protocols delivered to patients in our Amravati clinic.
            </p>
          </div>

          <div className="space-y-8">
            {researchData.map((item) => (
              <Card
                key={item.id}
                variant="ivory"
                className="space-y-6 hover:border-brand-gold transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EFE5D5]">
                  <Badge variant="forest">{item.category}</Badge>
                  <span className="text-xs text-brand-muted">
                    Academic Center: {item.affiliation}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-brand-forest mb-4">
                    Investigator: {item.author}
                  </p>
                  <p className="text-sm text-brand-charcoal/90 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="bg-brand-cream/60 rounded-xl p-5 sm:p-6 border border-[#DECDB5] space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest block">
                    Core Insights &amp; Scientific Findings:
                  </span>
                  <ul className="space-y-2.5 text-xs text-brand-charcoal">
                    {item.keyInsights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-xs text-brand-muted">
                  <strong className="text-brand-charcoal">Direct In-Clinic Application:</strong>{" "}
                  {item.clinicalApplication}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Evidence-Based Care Matters */}
      <section className="py-16 bg-[#102B24] text-brand-ivory border-b border-brand-gold/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block">
              Patient Protection
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
              Why Research-Grounded Care Protects You
            </h2>

            <p className="text-sm sm:text-base text-brand-cream/80 leading-relaxed font-light">
              By adhering strictly to high-level musculoskeletal research, we protect our patients from ineffective passive modalities and unnecessary invasive procedures. You receive only treatments that have demonstrated legitimate therapeutic benefit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="p-4 rounded-xl bg-brand-forest/60 border border-brand-gold/25 space-y-1">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                  Safety First
                </span>
                <p className="text-xs text-brand-cream/70">
                  Careful screening for contraindications before any needling or mobilization.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-forest/60 border border-brand-gold/25 space-y-1">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                  Dosed Loading
                </span>
                <p className="text-xs text-brand-cream/70">
                  Exercise prescriptions calibrated scientifically to tissue healing capacity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-forest/60 border border-brand-gold/25 space-y-1">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                  Measurable Milestones
                </span>
                <p className="text-xs text-brand-cream/70">
                  Objective range of motion and strength metrics tracking your functional gains.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Consultation Enquiry CTA */}
      <section className="py-16 bg-[#FBF8F2]">
        <Container className="text-center max-w-2xl space-y-6">
          <h2 className="font-serif text-3xl font-normal text-brand-dark">
            Discuss Your Condition with Dr. Farande
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Have questions about how evidence-based physical therapy applies to your specific pain or injury? Connect with Dr. Vaibhav Farande on WhatsApp.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button
              href={clinicInfo.whatsappUrl}
              isExternal
              variant="whatsapp"
              size="lg"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Ask on WhatsApp (+91 70300 89050)
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Clinic Contact &amp; Hours
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
