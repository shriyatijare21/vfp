import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
  ShieldAlert,
  Activity,
  Target,
  Brain,
  Sparkles,
  Layers,
  Bandage,
  Compass,
  Dumbbell,
  Zap,
  Maximize2,
  Radio,
  Sun,
  ArrowRight,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Physiotherapy Services & Treatments",
  description:
    "Explore comprehensive physiotherapy services at Farande Physiotherapy Clinic in Amravati: back pain relief, dry needling, sports injury rehab, neuro therapy, and joint mobilization.",
  openGraph: {
    title: "Physiotherapy Services in Amravati | Farande Physiotherapy Clinic",
    description:
      "Evidence-informed physical therapy, dry needling, and sports rehabilitation led by Dr. Vaibhav Farande (PT).",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-brand-gold" />,
  Activity: <Activity className="w-5 h-5 text-brand-gold" />,
  Target: <Target className="w-5 h-5 text-brand-gold" />,
  Brain: <Brain className="w-5 h-5 text-brand-gold" />,
  Sparkles: <Sparkles className="w-5 h-5 text-brand-gold" />,
  Layers: <Layers className="w-5 h-5 text-brand-gold" />,
  Bandage: <Bandage className="w-5 h-5 text-brand-gold" />,
  Compass: <Compass className="w-5 h-5 text-brand-gold" />,
  Dumbbell: <Dumbbell className="w-5 h-5 text-brand-gold" />,
  Zap: <Zap className="w-5 h-5 text-brand-gold" />,
  Maximize2: <Maximize2 className="w-5 h-5 text-brand-gold" />,
  Radio: <Radio className="w-5 h-5 text-brand-gold" />,
  Sun: <Sun className="w-5 h-5 text-brand-gold" />,
};

const categories = [
  {
    name: "Spine & Pain Relief",
    description:
      "Targeted mechanical interventions and gentle joint glides designed to decompress spinal nerve roots and reduce chronic articular tension.",
  },
  {
    name: "Specialized Therapies",
    description:
      "Evidence-based advanced therapeutic modalities including dry needling trigger point release, neuro-rehabilitation, and myofascial mobilization.",
  },
  {
    name: "Rehabilitation & Movement",
    description:
      "Active movement retraining, athletic injury reconditioning, and postural habit correction designed to build lasting physical resilience.",
  },
  {
    name: "Clinical Modalities",
    description:
      "Electro-physical and auxiliary clinical equipment used to modulate pain gate signaling and accelerate deep tissue healing cycles.",
  },
] as const;

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

      {/* Categorized Services Catalog */}
      <section className="py-16 lg:py-24 space-y-20 bg-[#FBF8F2]">
        <Container className="space-y-20">
          {categories.map((category) => {
            const categoryServices = servicesData.filter(
              (s) => s.category === category.name
            );

            return (
              <div key={category.name} className="space-y-8">
                {/* Category Header */}
                <div className="border-b border-[#DECDB5] pb-5 flex flex-col md:flex-row md:items-end justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-forest">
                      Clinical Focus Area
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
                      {category.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-muted max-w-2xl">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-brand-gold bg-brand-cream/80 px-3 py-1 rounded-full border border-[#DECDB5] self-start md:self-auto">
                    {categoryServices.length} Modalities
                  </span>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {categoryServices.map((service) => {
                    const specificWhatsAppUrl = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Dr. Farande, I would like to enquire about an appointment for ${service.title} at Farande Physiotherapy Clinic.`
                    )}`;

                    return (
                      <Card
                        key={service.id}
                        variant="ivory"
                        className="flex flex-col justify-between group hover:border-brand-gold transition-all duration-300"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl bg-brand-forest/10 border border-brand-forest/15 flex items-center justify-center transition-colors group-hover:bg-brand-forest group-hover:text-brand-gold">
                              {iconMap[service.icon] || (
                                <Activity className="w-5 h-5 text-brand-gold" />
                              )}
                            </div>
                            {service.requiresConfirmation && (
                              <Badge variant="pending" className="text-[10px]">
                                Pending Confirmation
                              </Badge>
                            )}
                          </div>

                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark group-hover:text-brand-forest transition-colors">
                            {service.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                            {service.shortDescription}
                          </p>

                          {/* Indications List */}
                          <div className="pt-2">
                            <span className="text-[11px] font-semibold text-brand-charcoal uppercase tracking-wider block mb-2">
                              Common Indications:
                            </span>
                            <ul className="space-y-1.5 text-xs text-brand-charcoal">
                              {service.conditionsTreated.slice(0, 3).map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Card Actions: Full Protocol & Direct WhatsApp */}
                        <div className="pt-6 mt-6 border-t border-[#EFE5D5] flex flex-col sm:flex-row items-center justify-between gap-3">
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-forest hover:text-brand-gold transition-colors"
                          >
                            Full Protocol &rarr;
                          </Link>

                          <a
                            href={specificWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors"
                          >
                            <MessageSquare className="w-3 h-3 text-emerald-600" />
                            Enquire on WhatsApp
                          </a>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

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
        </Container>
      </section>
    </div>
  );
}
