import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import {
  Sparkles,
  MessageSquare,
  AlertCircle,
  MapPin,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Physiotherapy Services & Treatments in Amravati",
  description:
    "Explore 13 comprehensive physiotherapy services at Farande Physiotherapy Clinic in Amravati: back pain relief, dry needling, sports injury rehabilitation, neuro therapy, and joint mobilization.",
  alternates: {
    canonical: "https://farandephysio.in/services",
  },
  openGraph: {
    title: "Physiotherapy Services in Amravati | Farande Physiotherapy Clinic",
    description:
      "Evidence-informed physical therapy, dry needling, and sports rehabilitation led by Dr. Vaibhav Ashok Farande (PT) in Maltekdi, Amravati.",
    url: "https://farandephysio.in/services",
  },
};

export default function ServicesPage() {
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: "Clinical Services" }]} />

      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#102B24] via-[#14342B] to-[#173D32] text-brand-ivory border-b border-brand-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              13 Comprehensive Modalities
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.14]">
              Evidence-Informed Physiotherapy Services.
            </h1>

            <p className="text-base sm:text-xl text-brand-cream/80 leading-relaxed font-light pt-2">
              Every therapeutic modality at Farande Physiotherapy Clinic is prescribed following an in-depth clinical evaluation. We combine hands-on manual techniques, targeted neuromuscular stimulation, and progressive exercise loading.
            </p>
          </div>
        </Container>
      </section>

      {/* Notice on Clinical Transparency */}
      <section className="py-6 bg-[#F5EFE4] border-b border-[#E3D6C1]">
        <Container>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-white border border-[#DECDB5] text-xs text-brand-charcoal">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Medical Transparency Note:</strong> Modalities such as <em>Decompression Therapy</em>, <em>Radial Shockwave (ESWT)</em>, and <em>Class IV Laser</em> are listed in our promotional documentation and are pending formal clinic schedule re-confirmation. We mark them transparently so patients always have accurate, verified expectations before visiting.
            </p>
          </div>
        </Container>
      </section>

      {/* Interactive Filterable Services Catalog */}
      <ServicesCatalog services={servicesData} />

      {/* Direct Doctor Consultation CTA */}
      <section className="py-16 bg-[#F4EEE3] border-t border-[#E3D6C1]">
        <Container className="text-center max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block">
            Personalized Medical Assessment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-dark">
            Unsure Which Treatment Approach You Need?
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Pain is complex, and many conditions involve multiple interacting joints, discs, and muscular holding patterns. Message Dr. Vaibhav Farande on WhatsApp to describe your symptoms and arrange a thorough clinical evaluation.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button
              href={clinicInfo.whatsappUrl}
              isExternal
              variant="whatsapp"
              size="lg"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Discuss Your Symptoms on WhatsApp
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              View Clinic Location in Amravati
            </Button>
          </div>

          <div className="pt-6 border-t border-[#DECDB5]/60 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-muted">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Sabnis Plot, Maltekdi, Amravati</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
