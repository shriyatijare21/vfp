import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
  GraduationCap,
  Heart,
  Shield,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  Stethoscope,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Vaibhav Farande & Our Clinic",
  description:
    "Learn about Dr. Vaibhav Ashok Farande (PT), BPT, postgraduate researcher at Garden City University, and the evidence-informed care philosophy at Farande Physiotherapy Clinic in Amravati.",
  openGraph: {
    title: "About Farande Physiotherapy Clinic | Dr. Vaibhav Farande (PT)",
    description:
      "Compassionate, unhurried, evidence-informed physical therapy in Amravati, Maharashtra.",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: "About Clinic & Doctor" }]} />

      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#102B24] via-[#14342B] to-[#173D32] text-brand-ivory border-b border-brand-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Clinical Leadership &amp; Ethos
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.14]">
              Dedicated to Compassionate, Evidence-Informed Care.
            </h1>

            <p className="text-base sm:text-xl text-brand-cream/80 leading-relaxed font-light pt-2">
              At Farande Physiotherapy Clinic, we believe every individual deserves caring, unhurried, and scientifically grounded physical therapy that addresses the true mechanical causes of discomfort.
            </p>
          </div>
        </Container>
      </section>

      {/* Doctor Editorial Feature Section */}
      <section className="py-16 lg:py-24 bg-[#FBF8F2] border-b border-[#E7DDCA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Doctor Portrait & Verified Credential Plaque */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-2.5 rounded-3xl border-2 border-brand-gold/40 transform rotate-1 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden bg-brand-dark border border-brand-gold/60 shadow-luxury p-6 sm:p-7 text-center space-y-6">
                  {/* Doctor Portrait Image Frame */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-brand-gold/40 bg-[#14342B] group">
                    <Image
                      src="/images/placeholders/doctor-portrait.svg"
                      alt="Dr. Vaibhav Ashok Farande PT - Consultant Physiotherapist"
                      width={400}
                      height={500}
                      priority
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-brand-dark/90 text-brand-gold-light text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-brand-gold/30">
                      BPT Qualified
                    </div>
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold block">
                      Consultant Physiotherapist
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-brand-ivory">
                      {clinicInfo.doctorName}
                    </h2>
                    <p className="text-sm font-medium text-brand-gold-light">
                      {clinicInfo.doctorDegree}
                    </p>
                    <p className="text-xs text-brand-cream/70 pt-0.5">
                      {clinicInfo.doctorResearchAffiliation}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-col gap-2 text-xs">
                    <a
                      href={clinicInfo.social.researchGate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-brand-forest text-brand-ivory border border-brand-gold/30 hover:border-brand-gold hover:text-white transition-all font-medium"
                    >
                      ResearchGate Academic Profile
                      <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
                    </a>

                    <Button
                      href={clinicInfo.whatsappUrl}
                      isExternal
                      variant="whatsapp"
                      size="sm"
                      className="w-full justify-center"
                    >
                      <MessageSquare className="w-4 h-4 mr-1.5" />
                      Enquire on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Biography & Practice Ethos */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest block">
                  Professional Profile
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
                  Academic Rigor Meets Compassionate Clinical Practice
                </h2>
                <p className="text-base sm:text-lg text-brand-charcoal/90 leading-relaxed font-normal">
                  <strong>Dr. Vaibhav Ashok Farande (PT)</strong> completed his <strong>Bachelor of Physiotherapy (BPT)</strong> degree, acquiring extensive clinical foundations in neuro-anatomy, orthopedic evaluation, biomechanics, and manual mobilization.
                </p>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  Driven by a commitment to advancing evidence-informed rehabilitation, he is actively engaged in postgraduate research at the <strong>School of Health Sciences, Garden City University</strong>. His ongoing investigations explore the therapeutic applications and neuromuscular responses of <strong>dry needling in tendinopathy</strong>.
                </p>
              </div>

              {/* Verified Credentials Highlights */}
              <div className="bg-brand-white rounded-2xl p-6 sm:p-7 border border-[#DECDB5] shadow-sm space-y-4">
                <h3 className="font-serif text-lg font-bold text-brand-dark flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-brand-gold" />
                  Verified Educational &amp; Research Foundations
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-brand-charcoal">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Bachelor of Physiotherapy (BPT):</strong> Comprehensive undergraduate clinical medical curriculum covering human anatomy, movement physiology, musculoskeletal therapy, and neurology.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Postgraduate Researcher:</strong> School of Health Sciences, Garden City University, investigating targeted physical modalities and tendinous recovery protocols.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Clinical Practice Focus:</strong> Mechanical spine care (PIVD &amp; sciatica), dry needling therapy, athletic tendinitis recovery, and neuro-functional retraining.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Patient-First Philosophy */}
              <div className="space-y-4 pt-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest block">
                  Patient-First Treatment Model
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-dark">
                  &ldquo;The Caring Hands You Deserve&rdquo;
                </h3>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  Too often in conventional healthcare, physical therapy is hurried—reduced to five minutes of superficial machines without addressing underlying movement dysfunctions.
                </p>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  At Farande Physiotherapy Clinic in Amravati, our consultations are unhurried investigations into your posture, muscle imbalances, and joint biomechanics. We build an active partnership where you understand your condition and feel empowered on the road to lasting relief.
                </p>
              </div>

              {/* 3 Core Clinical Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-brand-white p-5 rounded-2xl border border-[#DECDB5] space-y-2 shadow-sm">
                  <Shield className="w-6 h-6 text-brand-gold mb-1" />
                  <h4 className="font-serif text-base font-bold text-brand-dark">
                    Evidence First
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Treatments based on validated musculoskeletal research, not speculative claims.
                  </p>
                </div>

                <div className="bg-brand-white p-5 rounded-2xl border border-[#DECDB5] space-y-2 shadow-sm">
                  <Heart className="w-6 h-6 text-brand-gold mb-1" />
                  <h4 className="font-serif text-base font-bold text-brand-dark">
                    Personalized Care
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Dedicated one-on-one attention calibrated to your comfort and lifestyle.
                  </p>
                </div>

                <div className="bg-brand-white p-5 rounded-2xl border border-[#DECDB5] space-y-2 shadow-sm">
                  <Sparkles className="w-6 h-6 text-brand-gold mb-1" />
                  <h4 className="font-serif text-base font-bold text-brand-dark">
                    Lasting Strength
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Transitioning you from passive relief to active, self-sustaining physical resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Clinical Consultation Steps Walkthrough */}
      <section className="py-16 lg:py-20 bg-[#F4EEE3] border-b border-[#E3D6C1]">
        <Container>
          <div className="max-w-3xl mb-12 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
              The Clinical Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-dark leading-tight">
              What to Expect at Farande Physiotherapy Clinic
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
              Every step of your visit is designed to be transparent, respectful, and clinically thorough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-brand-white border border-[#DECDB5] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-forest text-brand-gold flex items-center justify-center font-serif text-base font-bold">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark">
                In-Depth Assessment
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                We review your medical history, inspect gait, test joint ranges of motion, and palpate muscular trigger points to isolate the root mechanical issue.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-white border border-[#DECDB5] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-forest text-brand-gold flex items-center justify-center font-serif text-base font-bold">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark">
                Hands-On Therapy
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Personalized manual release, joint mobilization, or dry needling in a clean, private treatment cubicle ensuring complete comfort and dignity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-white border border-[#DECDB5] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-forest text-brand-gold flex items-center justify-center font-serif text-base font-bold">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark">
                Active Self-Management
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                You receive clear, actionable home exercises and desk posture recommendations to ensure your gains continue long after you leave the clinic.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Internal Navigation Link Banner */}
      <section className="py-16 bg-[#102B24] text-brand-ivory border-b border-brand-gold/30">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block">
                Explore Our Work
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                Discover Our Services &amp; Research Foundations
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/70 max-w-xl">
                Learn about the conditions we treat or review Dr. Farande&apos;s academic investigations into dry needling.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button href="/services" variant="gold" size="md">
                Browse Services
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/research" variant="outline" size="md" className="text-white border-brand-gold/40 hover:bg-brand-gold/20">
                Academic Research
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Amravati Location & CTA */}
      <section className="py-16 bg-[#FBF8F2]">
        <Container className="text-center max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block">
            Visit Us in Amravati
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-dark">
            Schedule Your Clinical Consultation Today
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Conveniently situated in Maltekdi near Kali Mata Temple, Amravati. Connect with us directly on WhatsApp to coordinate an appointment slot.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button
              href={clinicInfo.whatsappUrl}
              isExternal
              variant="whatsapp"
              size="lg"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Consultation Enquiry
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <MapPin className="w-4 h-4 mr-2 text-brand-forest" />
              Location &amp; Timings
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
