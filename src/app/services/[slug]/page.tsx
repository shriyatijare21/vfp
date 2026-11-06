import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  ArrowLeft,
  ChevronRight,
  Info,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Farande Physiotherapy Clinic`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} in Amravati | Farande Physiotherapy`,
      description: service.shortDescription,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Related services from same or different categories
  const relatedServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 4);

  // Custom pre-filled message for this exact service
  const serviceWhatsAppMessage = `Hello Dr. Farande, I would like to enquire about an appointment for ${service.title} at Farande Physiotherapy Clinic.`;
  const serviceWhatsAppUrl = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
    serviceWhatsAppMessage
  )}`;

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Clinical Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Service Hero Header */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-[#102B24] via-[#14342B] to-[#173D32] text-brand-ivory border-b border-brand-gold/30">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="gold">{service.category}</Badge>
              {service.requiresConfirmation && (
                <Badge variant="pending">
                  <Info className="w-3 h-3 mr-1" />
                  Clinical Modality (Requires Clinic Confirmation)
                </Badge>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.15]">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-brand-cream/80 leading-relaxed font-light">
              {service.shortDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-14 sm:py-20 bg-[#FBF8F2]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Full Clinical Narrative */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Overview */}
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest block">
                  Clinical Overview
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
                  Understanding This Intervention
                </h2>
                <p className="text-base sm:text-lg text-brand-charcoal/90 leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Conditions Treated */}
              <div className="bg-brand-white rounded-2xl p-7 sm:p-9 border border-[#DECDB5] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-1">
                    Indications
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-dark">
                    Conditions &amp; Symptoms Addressed
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1">
                    This therapeutic approach is commonly indicated for individuals experiencing:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.conditionsTreated.map((condition, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-brand-ivory/60 border border-[#EFE7D8]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-brand-charcoal font-medium">
                        {condition}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Therapeutic Benefits */}
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest block">
                  Expected Outcomes
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-dark">
                  Therapeutic Benefits &amp; Goals
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.keyBenefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-brand-cream/60 border border-[#E0D3BF] space-y-2"
                    >
                      <div className="w-7 h-7 rounded-full bg-brand-forest text-brand-gold flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-brand-charcoal font-medium leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="p-7 sm:p-9 rounded-2xl bg-brand-forest text-brand-ivory border border-brand-gold/30 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block">
                  Patient Journey
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  What to Expect During Your Session
                </h3>
                <p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed font-light">
                  {service.whatToExpect}
                </p>
                <div className="pt-2 text-xs text-brand-gold-light flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Dedicated one-on-one session with Dr. Vaibhav Farande</span>
                </div>
              </div>

              {/* Confirmation disclaimer if pending */}
              {service.requiresConfirmation && (
                <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed space-y-1">
                  <p className="font-semibold flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-700" />
                    Clinical Equipment Notice
                  </p>
                  <p className="text-amber-800">
                    This therapeutic modality was listed in clinic promotional documentation. Please check with Dr. Vaibhav Farande on WhatsApp to confirm real-time availability and scheduling at our Amravati premises.
                  </p>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar: Quick WhatsApp Booking & Clinic Details */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              {/* WhatsApp Appointment Card */}
              <div className="bg-brand-white rounded-3xl p-7 border border-brand-gold/40 shadow-luxury space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-1">
                    Direct Booking
                  </span>
                  <h3 className="font-serif text-xl font-bold text-brand-dark">
                    Enquire About This Treatment
                  </h3>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    Have questions about {service.title}? Speak directly with Dr. Vaibhav Farande on WhatsApp.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    href={serviceWhatsAppUrl}
                    isExternal
                    variant="whatsapp"
                    size="lg"
                    className="w-full justify-center shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Enquire on WhatsApp
                  </Button>

                  <Button
                    href={`tel:${clinicInfo.phone}`}
                    isExternal
                    variant="outline"
                    size="md"
                    className="w-full justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2 text-brand-forest" />
                    Call {clinicInfo.phoneDisplay}
                  </Button>
                </div>

                <div className="pt-4 border-t border-[#EFE5D5] space-y-2.5 text-xs text-brand-charcoal">
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                    <span>Mon–Sat: 9 AM–2 PM &amp; 2:30 PM–8 PM</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                    <span>Maltekdi, Near Kali Mata Temple, Amravati</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-brand-cream/60 rounded-2xl p-6 border border-[#E0D3BF] space-y-4">
                <h4 className="font-serif text-base font-bold text-brand-dark">
                  Other Services
                </h4>
                <ul className="space-y-2 text-xs">
                  {relatedServices.map((rel) => (
                    <li key={rel.id}>
                      <Link
                        href={`/services/${rel.slug}`}
                        className="text-brand-forest hover:text-brand-gold transition-colors font-medium flex items-center justify-between group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {rel.title}
                        </span>
                        <ChevronRight className="w-3 h-3 text-brand-muted" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-[#DCCDB7]">
                  <Link
                    href="/services"
                    className="text-xs text-brand-gold hover:underline font-semibold flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" /> View all services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
