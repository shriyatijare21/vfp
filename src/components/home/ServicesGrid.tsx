import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
  ArrowRight,
  Info,
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-brand-gold" />,
  Activity: <Activity className="w-6 h-6 text-brand-gold" />,
  Target: <Target className="w-6 h-6 text-brand-gold" />,
  Brain: <Brain className="w-6 h-6 text-brand-gold" />,
  Sparkles: <Sparkles className="w-6 h-6 text-brand-gold" />,
  Layers: <Layers className="w-6 h-6 text-brand-gold" />,
};

export function ServicesGrid() {
  // Show featured 6 core services on homepage, with link to all 13
  const featuredServices = servicesData.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#F3EDE2] border-b border-[#E3D6C1]">
      <Container>
        <SectionHeading
          eyebrow="Clinical Offerings"
          title="Personalized Care for Every Condition"
          description="We combine skilled manual therapy, neuro-muscular retraining, and progressive exercise therapy to relieve discomfort and restore functional independence."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service) => (
            <Card
              key={service.id}
              variant="ivory"
              className="flex flex-col justify-between group hover:border-brand-gold"
            >
              <div className="space-y-4">
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-forest/10 border border-brand-forest/15 flex items-center justify-center transition-colors group-hover:bg-brand-forest group-hover:text-brand-gold">
                    {iconMap[service.icon] || (
                      <Activity className="w-6 h-6 text-brand-gold" />
                    )}
                  </div>
                  <Badge variant="cream">{service.category}</Badge>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark group-hover:text-brand-forest transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-brand-muted leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Conditions Addressed Bullets */}
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-brand-charcoal uppercase tracking-wider block mb-2">
                    Common Indications:
                  </span>
                  <ul className="space-y-1.5 text-xs text-brand-charcoal/80">
                    {service.conditionsTreated.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Detail Link */}
              <div className="pt-6 mt-6 border-t border-[#EFE5D5] flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-forest group-hover:text-brand-gold transition-colors"
                >
                  Treatment Details
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                {service.requiresConfirmation && (
                  <span
                    title="Offering mentioned in clinical literature; requires verification for local availability."
                    className="inline-flex items-center text-[10px] text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded"
                  >
                    <Info className="w-3 h-3 mr-1" /> Requires Confirmation
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* View All Services Footer Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-brand-forest text-brand-ivory flex flex-col sm:flex-row items-center justify-between gap-6 border border-brand-gold/30">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Looking for a specific treatment or modality?
            </h4>
            <p className="text-xs sm:text-sm text-brand-cream/80 mt-1">
              Explore all 13 specialized physiotherapy modalities, including IASTM, kinesiology taping, electrotherapy, and decompression.
            </p>
          </div>
          <Button href="/services" variant="gold" size="md" className="shrink-0">
            View All 13 Services
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
