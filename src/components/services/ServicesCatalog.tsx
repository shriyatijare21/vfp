"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceItem } from "@/data/services";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
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
  CheckCircle2,
  MessageSquare,
  ChevronRight,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServicesCatalogProps {
  services: ServiceItem[];
}

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

const categoryDescriptions: Record<string, string> = {
  "Spine & Pain Relief":
    "Targeted mechanical interventions and gentle joint glides designed to decompress spinal nerve roots and reduce chronic articular tension.",
  "Specialized Therapies":
    "Evidence-based advanced therapeutic modalities including dry needling trigger point release, neuro-rehabilitation, and myofascial mobilization.",
  "Rehabilitation & Movement":
    "Active movement retraining, athletic injury reconditioning, and postural habit correction designed to build lasting physical resilience.",
  "Clinical Modalities":
    "Electro-physical and auxiliary clinical equipment used to modulate pain gate signaling and accelerate deep tissue healing cycles.",
};

export function ServicesCatalog({ services }: ServicesCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "All Modalities", value: "All", count: services.length },
    {
      label: "Spine & Pain Relief",
      value: "Spine & Pain Relief",
      count: services.filter((s) => s.category === "Spine & Pain Relief").length,
    },
    {
      label: "Specialized Therapies",
      value: "Specialized Therapies",
      count: services.filter((s) => s.category === "Specialized Therapies").length,
    },
    {
      label: "Rehabilitation & Movement",
      value: "Rehabilitation & Movement",
      count: services.filter((s) => s.category === "Rehabilitation & Movement").length,
    },
    {
      label: "Clinical Modalities",
      value: "Clinical Modalities",
      count: services.filter((s) => s.category === "Clinical Modalities").length,
    },
  ];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 bg-[#FBF8F2]">
      <Container className="space-y-12">
        {/* Category Filter Controls */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-forest">
            <Filter className="w-3.5 h-3.5 text-brand-gold" />
            <span>Filter by Clinical Focus Area</span>
          </div>

          <div
            role="tablist"
            aria-label="Filter physiotherapy services by category"
            className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
                    isSelected
                      ? "bg-brand-forest text-brand-ivory border-brand-forest shadow-sm"
                      : "bg-brand-white text-brand-charcoal border-[#DECDB5] hover:bg-brand-cream/60 hover:border-brand-gold/50"
                  )}
                >
                  <span>{cat.label}</span>
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.2 rounded-full font-semibold",
                      isSelected
                        ? "bg-brand-gold text-brand-dark"
                        : "bg-brand-cream text-brand-muted"
                    )}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description Banner if single category filtered */}
        {selectedCategory !== "All" && categoryDescriptions[selectedCategory] && (
          <div className="p-5 rounded-2xl bg-brand-cream/50 border border-[#DECDB5] text-xs sm:text-sm text-brand-charcoal max-w-3xl">
            <strong className="text-brand-forest font-serif text-base block mb-1">
              About {selectedCategory}:
            </strong>
            <p className="text-brand-muted leading-relaxed">
              {categoryDescriptions[selectedCategory]}
            </p>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
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
                    {service.requiresConfirmation ? (
                      <Badge variant="pending" className="text-[10px]">
                        Pending Confirmation
                      </Badge>
                    ) : (
                      <Badge variant="gold" className="text-[10px]">
                        {service.category}
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-forest hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                  >
                    <span>Full Protocol</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={specificWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                  >
                    <MessageSquare className="w-3 h-3 text-emerald-600" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

