import type { Metadata } from "next";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  GraduationCap,
  Heart,
  Shield,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Vaibhav Farande & Our Clinic",
  description:
    "Learn about Dr. Vaibhav Ashok Farande (PT), BPT, postgraduate researcher at Garden City University, and the evidence-based care philosophy at Farande Physiotherapy Clinic in Amravati.",
};

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20">
      {/* Page Header */}
      <section className="pb-16 border-b border-[#E7DDCA]">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-3">
              About Dr. Vaibhav Farande & The Clinic
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-dark font-normal leading-[1.15]">
              Dedicated to Compassionate, Evidence-Informed Physical Rehabilitation.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-brand-muted leading-relaxed">
              At Farande Physiotherapy Clinic, we believe every individual deserves caring, unhurried, and scientifically grounded physical therapy that addresses the true mechanical causes of discomfort.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Doctor Bio Section */}
      <section className="py-16 lg:py-24 border-b border-[#E7DDCA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Doctor Portrait & Quick Credential Card */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="bg-brand-cream/80 rounded-3xl p-8 border border-[#DECDB5] shadow-luxury text-center space-y-6">
                <div className="relative w-48 h-48 mx-auto rounded-full bg-gradient-to-tr from-brand-forest to-[#225042] flex items-center justify-center border-4 border-brand-gold/60 shadow-md">
                  <UserCheck className="w-24 h-24 text-brand-gold-light stroke-[1.2]" />
                  <span className="absolute bottom-2 text-[10px] bg-brand-dark/90 text-brand-gold-light px-3 py-0.5 rounded-full font-medium">
                    Dr. Vaibhav Ashok Farande
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                    Consultant Physiotherapist
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark">
                    Dr. Vaibhav Ashok Farande
                  </h2>
                  <p className="text-sm font-medium text-brand-forest">
                    {clinicInfo.doctorDegree}
                  </p>
                  <p className="text-xs text-brand-muted pt-1">
                    {clinicInfo.doctorResearchAffiliation}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DECDB5] flex flex-col gap-2 text-xs">
                  <a
                    href={clinicInfo.social.researchGate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-white text-brand-forest border border-[#D5C6AF] hover:border-brand-gold hover:text-brand-dark transition-all font-medium"
                  >
                    ResearchGate Profile
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

            {/* Right Biography & Principles */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest block">
                  Professional Background
                </span>
                <h3 className="font-serif text-3xl font-bold text-brand-dark">
                  Academic Rigor Meets Compassionate Practice
                </h3>
                <p className="text-base text-brand-charcoal/90 leading-relaxed">
                  Dr. Vaibhav Ashok Farande (PT) earned his <strong>Bachelor of Physiotherapy (BPT)</strong> degree, establishing a comprehensive clinical foundation in musculoskeletal assessment, kinesiology, neuro-rehabilitation, and exercise physiology.
                </p>
                <p className="text-base text-brand-charcoal/90 leading-relaxed">
                  Driven by a commitment to advancing physical therapy standards, he is actively engaged in postgraduate research at the <strong>School of Health Sciences, Garden City University</strong>. His research investigates the therapeutic efficacy and neuro-mechanical response of interventions such as <strong>dry needling in tendinopathy</strong>.
                </p>
              </div>

              {/* Verified Credentials Highlights */}
              <div className="bg-brand-white rounded-2xl p-6 border border-[#E5DAC8] shadow-sm space-y-4">
                <h4 className="font-serif text-lg font-bold text-brand-dark flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-brand-gold" />
                  Verified Educational & Research Qualifications
                </h4>
                <ul className="space-y-3 text-sm text-brand-charcoal">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Bachelor of Physiotherapy (BPT):</strong> Comprehensive undergraduate medical training covering anatomy, biomechanics, pathology, orthopedics, neurology, and clinical physical therapy.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Postgraduate Researcher:</strong> School of Health Sciences, Garden City University, exploring evidence-based physical therapies for tendinous and myofascial conditions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Clinical Special Interest:</strong> Spinal biomechanics, dry needling, sports injury rehabilitation, and functional movement restoration.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Clinic Mission & Core Philosophy */}
              <div className="space-y-4 pt-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest block">
                  Clinic Vision
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-dark">
                  &ldquo;The Caring Hands You Deserve&rdquo;
                </h3>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  Too often, physical therapy is reduced to passive heat pads or hasty five-minute appointments. At Farande Physiotherapy Clinic, we reject assembly-line healthcare. Every patient consultation in our Amravati clinic is an unhurried clinical investigation into posture, movement mechanics, and muscular balance.
                </p>
              </div>

              {/* 3 Core Clinical Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-brand-white p-5 rounded-xl border border-[#EADBCC]">
                  <Shield className="w-6 h-6 text-brand-gold mb-2" />
                  <h5 className="font-serif text-base font-bold text-brand-dark mb-1">
                    Evidence First
                  </h5>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Protocols driven by science and verified research, not speculation.
                  </p>
                </div>

                <div className="bg-brand-white p-5 rounded-xl border border-[#EADBCC]">
                  <Heart className="w-6 h-6 text-brand-gold mb-2" />
                  <h5 className="font-serif text-base font-bold text-brand-dark mb-1">
                    Patient-Centered
                  </h5>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Care designed around your daily functional goals and comfort.
                  </p>
                </div>

                <div className="bg-brand-white p-5 rounded-xl border border-[#EADBCC]">
                  <Sparkles className="w-6 h-6 text-brand-gold mb-2" />
                  <h5 className="font-serif text-base font-bold text-brand-dark mb-1">
                    Lasting Strength
                  </h5>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Empowering patients with home strategies to prevent recurrence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Amravati Community CTA Banner */}
      <section className="py-16 bg-[#F3EDE2]">
        <Container className="text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
            Visit Us in Amravati
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-dark">
            Experience Compassionate, Dedicated Physical Therapy.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-muted leading-relaxed">
            Conveniently situated in Maltekdi near Kali Mata Temple, Amravati. Connect with us on WhatsApp to discuss your symptoms or schedule a convenient consultation slot.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href={clinicInfo.whatsappUrl}
              isExternal
              variant="whatsapp"
              size="lg"
            >
              <MessageSquare className="w-5 h-5 mr-1.5" />
              WhatsApp Consultation Enquiry
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              View Clinic Location & Hours
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
