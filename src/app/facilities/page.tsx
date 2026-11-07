import type { Metadata } from "next";
import Image from "next/image";
import { facilitiesData } from "@/data/equipment";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
  ShieldCheck,
  CheckCircle2,
  Info,
  MessageSquare,
  Sparkles,
  MapPin,
  AlertCircle,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facilities & Equipment | Farande Physiotherapy Clinic Amravati",
  description:
    "Explore the clinical environment, hygiene standards, and therapeutic equipment at Farande Physiotherapy Clinic in Amravati.",
  alternates: {
    canonical: "https://farandephysio.in/facilities",
  },
  openGraph: {
    title: "Clinic Facilities & Hygiene | Farande Physiotherapy Clinic Amravati",
    description:
      "Private treatment cubicles, sterile single-use dry needling, and electrotherapy equipment in Amravati.",
    url: "https://farandephysio.in/facilities",
  },
};

export default function FacilitiesPage() {
  const verifiedFacilities = facilitiesData.filter(
    (f) => f.status !== "Offering Pending Confirmation"
  );
  const pendingModalities = facilitiesData.filter(
    (f) => f.status === "Offering Pending Confirmation"
  );

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: "Facilities & Equipment" }]} />

      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#102B24] via-[#14342B] to-[#173D32] text-brand-ivory border-b border-brand-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Environment &amp; Equipment Standards
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.14]">
              A Calm, Hygienic Space for Restorative Care.
            </h1>

            <p className="text-base sm:text-xl text-brand-cream/80 leading-relaxed font-light pt-2">
              We maintain high clinical standards of cleanliness, patient confidentiality, and physical comfort. Discover our facility layout, treatment equipment, and safety procedures in Amravati.
            </p>
          </div>
        </Container>
      </section>

      {/* Transparency Guarantee Banner */}
      <section className="py-6 bg-[#F5EFE4] border-b border-[#E3D6C1]">
        <Container>
          <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-brand-white border border-[#DECDB5] text-xs sm:text-sm text-brand-charcoal">
            <Info className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Patient Transparency Guarantee:</strong> We do not publish artificial stock photos or pretend generic imagery depicts our exact clinic. Below is an honest account of our verified clinical features and safety protocols at Sabnis Plot, Maltekdi. Any specialized modalities requiring pre-scheduling or confirmation are marked clearly.
            </p>
          </div>
        </Container>
      </section>

      {/* Clinic Environment Visual Spotlight */}
      <section className="py-16 bg-[#FBF8F2] border-b border-[#E7DDCA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Architectural Placeholder Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-brand-gold/40 shadow-luxury bg-[#102B24] group">
                <Image
                  src="/images/placeholders/clinic-interior.svg"
                  alt="Architectural schematic layout of treatment cubicles and rehabilitation suites at Farande Physiotherapy Clinic Amravati"
                  width={640}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-brand-dark/90 p-3 rounded-xl border border-brand-gold/30 text-xs text-brand-ivory flex items-center justify-between">
                  <span className="font-medium">
                    Shop No. 3, Mahakali Enclave, Maltekdi
                  </span>
                  <span className="text-[11px] text-brand-gold-light">
                    Private Cubicles
                  </span>
                </div>
              </div>
            </div>

            {/* Environment Overview Copy */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-semibold uppercase tracking-wider">
                <Building className="w-3.5 h-3.5 text-brand-gold" />
                Clinic Atmosphere
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
                Designed for Dignity, Privacy, and Focused Rehabilitation
              </h2>

              <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                Farande Physiotherapy Clinic is designed to provide a quiet sanctuary away from high-stress hospital wards. Acoustic privacy during consultation allows for transparent communication of symptoms, while private cubicles ensure you feel comfortable throughout hands-on manual procedures.
              </p>

              <div className="space-y-2.5 pt-1 text-xs text-brand-charcoal">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Ergonomic treatment couches with adjustable heights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Calm, distraction-free environment for individual sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Central Amravati location near Kali Mata Temple</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Verified Clinic Features */}
      <section className="py-16 lg:py-20 bg-[#F4EEE3] border-b border-[#E3D6C1]">
        <Container>
          <div className="max-w-3xl mb-12 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
              Verified Facilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-dark leading-tight">
              Active Clinical Features &amp; Equipment
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
              These facilities are fully established at our Amravati premises and utilized daily in patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verifiedFacilities.map((item) => (
              <Card
                key={item.id}
                variant="ivory"
                className="flex flex-col justify-between space-y-6 hover:border-brand-gold transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest">
                      {item.category}
                    </span>
                    <Badge variant="forest">{item.status}</Badge>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-dark">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-brand-charcoal uppercase tracking-wider block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-2 text-xs text-brand-charcoal">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Strict Hygiene & Sterile Safety Protocols */}
      <section className="py-16 bg-[#102B24] text-brand-ivory border-b border-brand-gold/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-brand-forest text-brand-gold flex items-center justify-center mx-auto border border-brand-gold/40 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
              Our Medical Hygiene &amp; Needle Safety Standard
            </h2>

            <p className="text-sm sm:text-base text-brand-cream/80 leading-relaxed font-light">
              Patient safety is paramount. Every dry needling procedure utilizes single-use, pre-sterilized medical-grade filiform needles opened directly in front of the patient and disposed of immediately in regulated puncture-proof biohazard sharps containers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="p-4 rounded-xl bg-brand-forest/60 border border-brand-gold/25 space-y-1">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                  100% Single-Use
                </span>
                <p className="text-xs text-brand-cream/70">
                  Sterile filiform needles discarded immediately after each session.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-forest/60 border border-brand-gold/25 space-y-1">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                  Antiseptic Prep
                </span>
                <p className="text-xs text-brand-cream/70">
                  Skin cleansing using medical isopropyl alcohol prior to needle insertion.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-forest/60 border border-brand-gold/25 space-y-1">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                  Sanitized Couches
                </span>
                <p className="text-xs text-brand-cream/70">
                  Disinfection of all contact surfaces systematically between patients.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Offerings Pending Confirmation Section */}
      <section className="py-16 bg-[#FBF8F2] border-b border-[#E7DDCA]">
        <Container>
          <div className="max-w-3xl mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
              <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
              Specialized Modalities Under Verification
            </div>
            <h2 className="font-serif text-3xl font-bold text-brand-dark">
              Advanced Clinical Offerings Pending Schedule Confirmation
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-brand-muted">
              These advanced therapeutic systems are documented in clinic literature. Please check directly with Dr. Farande on WhatsApp to confirm real-time availability and scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pendingModalities.map((item) => (
              <Card
                key={item.id}
                variant="ivory"
                className="flex flex-col justify-between border-amber-200/80 bg-amber-50/30 space-y-4"
              >
                <div className="space-y-3">
                  <Badge variant="pending" className="text-[10px]">
                    Offering Pending Confirmation
                  </Badge>
                  <h3 className="font-serif text-xl font-bold text-brand-dark">
                    {item.name}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-200/60 text-[11px] text-amber-800">
                  * Availability subject to confirmation upon enquiry.
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 bg-[#F4EEE3]">
        <Container className="text-center max-w-2xl space-y-6">
          <h2 className="font-serif text-3xl font-normal text-brand-dark">
            Have Questions About Our Clinic Environment?
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            We are glad to discuss accessibility, appointment timings, or specific hygiene measures to ensure you feel completely at ease.
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
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions to Maltekdi
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
