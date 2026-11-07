import React from "react";
import Image from "next/image";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  GraduationCap,
  BookOpen,
  HeartHandshake,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export function DoctorIntro() {
  return (
    <section className="py-20 lg:py-28 bg-[#F4EEE3] border-b border-[#E3D6C1]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Doctor Portrait Presentation Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-2xl overflow-hidden bg-brand-dark border border-brand-gold/50 shadow-luxury p-6 text-center space-y-6">
                {/* Doctor Photograph */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-brand-gold/40 bg-[#14342B] group">
                  <Image
                    src="/images/doctor/dr-vaibhav-farande.jpg"
                    alt="Dr. Vaibhav Ashok Farande PT - Consultant Physiotherapist"
                    width={408}
                    height={612}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-brand-dark/90 text-brand-gold-light text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-brand-gold/30">
                    BPT + MPT (Sports)
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block">
                    Chief Consultant &amp; Founder
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-ivory">
                    {clinicInfo.doctorName}
                  </h3>
                  <p className="text-sm font-medium text-brand-gold-light">
                    {clinicInfo.doctorDegree}
                  </p>
                  <p className="text-xs text-brand-cream/70 pt-0.5">
                    {clinicInfo.doctorResearchAffiliation}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs">
                  <a
                    href={clinicInfo.social.researchGate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-forest text-brand-ivory border border-brand-gold/30 hover:border-brand-gold hover:text-white transition-all font-medium text-xs"
                  >
                    ResearchGate Profile
                    <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
                  </a>

                  <Button
                    href={clinicInfo.whatsappUrl}
                    isExternal
                    variant="whatsapp"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-1" />
                    Enquire
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Biography & Practice Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              Meet Your Consultant
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-dark leading-[1.16] tracking-tight">
              A Rigorous, Evidence-Informed Clinical Approach.
            </h2>

            <p className="text-base sm:text-lg text-brand-charcoal/90 leading-relaxed font-normal">
              At <strong>Farande Physiotherapy Clinic</strong>, care is guided personally by <strong>Dr. Vaibhav Ashok Farande (PT)</strong>. Holding <em>BPT + MPT (Sports)</em> qualifications and actively engaged in clinical research with the <em>School of Health Sciences at Garden City University</em>, Dr. Farande combines sports rehabilitation precision with genuine patient empathy.
            </p>

            <blockquote className="p-4 sm:p-5 rounded-xl bg-brand-white border-l-4 border-brand-gold text-brand-charcoal italic font-serif text-base sm:text-lg leading-relaxed shadow-sm">
              &ldquo;Our ultimate goal is not to keep you dependent on ongoing clinic sessions, but to rebuild your musculoskeletal resilience so you can live, work, and move without hesitation.&rdquo;
            </blockquote>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-charcoal">
                  <strong>Formal Qualifications:</strong> Bachelor of Physiotherapy (BPT) &amp; Master of Physiotherapy (MPT - Sports), providing specialized clinical expertise in athletic rehabilitation, biomechanics, and targeted manual therapy.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-charcoal">
                  <strong>Academic Research:</strong> Active postgraduate researcher investigating physiological mechanisms and clinical recovery protocols in tendinopathies and spine mechanics.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-charcoal">
                  <strong>Direct Personal Care:</strong> You are never passed on to untrained assistants; each assessment and hands-on session is personally delivered by Dr. Vaibhav Farande.
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/about" variant="primary" size="md">
                Full Profile &amp; Credentials
              </Button>
              <Button
                href={clinicInfo.whatsappUrl}
                isExternal
                variant="whatsapp"
                size="md"
              >
                Discuss Your Symptoms on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
