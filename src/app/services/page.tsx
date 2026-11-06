import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Physiotherapy Services & Treatments",
  description:
    "Explore comprehensive physiotherapy services at Farande Physiotherapy Clinic in Amravati: back pain relief, dry needling, sports injury rehab, neuro therapy, and manual joint mobilization.",
};

// Icon resolver helper
const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-brand-gold" />,
  Activity: <Activity className="w-6 h-6 text-brand-gold" />,
  Target: <Target className="w-6 h-6 text-brand-gold" />,
  Brain: <Brain className="w-6 h-6 text-brand-gold" />,
  Sparkles: <Sparkles className="w-6 h-6 text-brand-gold" />,
  Layers: <Layers className="w-6 h-6 text-brand-gold" />,
  Bandage: <Bandage className="w-6 h-6 text-brand-gold" />,
  Compass: <Compass className="w-6 h-6 text-brand-gold" />,
  Dumbbell: <Dumbbell className="w-6 h-6 text-brand-gold" />,
  Zap: <Zap className="w-6 h-6 text-brand-gold" />,
  Maximize2: <Maximize2 className="w-6 h-6 text-brand-gold" />,
  Radio: <Radio className="w-6 h-6 text-brand-gold" />,
  Sun: <Sun className="w-6 h-6 text-brand-gold" />,
};

const categories = [
  "Spine & Pain Relief",
  "Specialized Therapies",
  "Rehabilitation & Movement",
  "Clinical Modalities",
] as const;

export default function ServicesPage() {
  return (
    <div className="py-12 lg:py-20">
      {/* Header */}
      <section className="pb-16 border-b border-[#E7DDCA]">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-3">
              Clinical Specializations
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-dark font-normal leading-[1.15]">
              Evidence-Informed Physiotherapy Services
            </h1>
            <p className="mt-6 text-base sm:text-lg text-brand-muted leading-relaxed">
              Every therapeutic modality at Farande Physiotherapy Clinic is prescribed following an in-depth clinical evaluation. We combine hands-on manual techniques, targeted neuromuscular stimulation, and progressive exercise therapy to achieve lasting physical recovery.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grouped by Categories */}
      <section className="py-16 space-y-20">
        <Container className="space-y-20">
          {categories.map((category) => {
            const categoryServices = servicesData.filter(
              (s) => s.category === category
            );

            return (
              <div key={category} className="space-y-8">
                <div className="border-b border-[#DECDB5] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest">
                      Category
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mt-1">
                      {category}
                    </h2>
                  </div>
                  <span className="text-xs text-brand-muted">
                    {categoryServices.length} Treatment Modalities
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {categoryServices.map((service) => (
                    <Card
                      key={service.id}
                      variant="ivory"
                      className="flex flex-col justify-between group hover:border-brand-gold"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-xl bg-brand-forest/10 border border-brand-forest/15 flex items-center justify-center transition-colors group-hover:bg-brand-forest group-hover:text-brand-gold">
                            {iconMap[service.icon] || (
                              <Activity className="w-6 h-6 text-brand-gold" />
                            )}
                          </div>
                          {service.requiresConfirmation && (
                            <Badge variant="pending">Pending Confirmation</Badge>
                          )}
                        </div>

                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark group-hover:text-brand-forest transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-sm text-brand-muted leading-relaxed">
                          {service.shortDescription}
                        </p>

                        <div className="pt-2">
                          <span className="text-[11px] font-semibold text-brand-charcoal uppercase tracking-wider block mb-2">
                            Key Indications:
                          </span>
                          <ul className="space-y-1 text-xs text-brand-charcoal/80">
                            {service.conditionsTreated.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-[#EFE5D5] flex items-center justify-between">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-forest group-hover:text-brand-gold transition-colors"
                        >
                          Full Details & Protocol
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* WhatsApp Consultation Banner */}
      <section className="py-16 bg-[#F3EDE2] border-t border-[#E7DDCA]">
        <Container className="text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
            Unsure which service suits your condition?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-dark">
            Speak Directly with Dr. Vaibhav Farande
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-muted leading-relaxed">
            Every clinical presentation is unique. Send a quick message describing your discomfort, and we will guide you on the ideal assessment approach.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href={clinicInfo.whatsappUrl}
              isExternal
              variant="whatsapp"
              size="lg"
            >
              <MessageSquare className="w-5 h-5 mr-1.5" />
              Chat on WhatsApp (+91 70300 89050)
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
