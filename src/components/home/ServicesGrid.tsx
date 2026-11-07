"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData, ServiceItem } from "@/data/services";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
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
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
  "All Treatments",
  "Spine & Pain Relief",
  "Specialized Therapies",
  "Rehabilitation & Movement",
  "Clinical Modalities",
] as const;

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All Treatments");

  const filteredServices =
    activeCategory === "All Treatments"
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  // Featured primary service for the showcase card
  const featuredService: ServiceItem =
    filteredServices.find((s) => s.featured) || filteredServices[0];
  
  // Companion list of other services
  const companionServices = filteredServices.filter(
    (s) => s.id !== featuredService.id
  ).slice(0, 5);

  const featuredWhatsAppUrl = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello Dr. Farande, I would like to enquire about ${featuredService.title} at Farande Physiotherapy Clinic.`
  )}`;

  return (
    <section className="py-20 lg:py-28 bg-[#FBF8F2] border-b border-[#E7DDCA]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
            Clinical Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-dark leading-tight">
            Personalized Care for Musculoskeletal Health
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
            From acute spinal strains to athletic recovery, each treatment plan is guided by an individual physical assessment and evidence-informed protocols. Explore our clinical focus areas below.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 border",
                activeCategory === cat
                  ? "bg-brand-forest text-brand-ivory border-brand-forest shadow-sm"
                  : "bg-brand-white text-brand-charcoal/80 border-[#DECDB5] hover:border-brand-gold hover:text-brand-dark"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Featured Detailed Spotlight Card */}
          <div className="lg:col-span-6 bg-brand-white rounded-3xl p-7 sm:p-9 border border-brand-gold/50 shadow-luxury space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#F0E6D6]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-gold flex items-center justify-center shadow-sm">
                  {iconMap[featuredService.icon] || (
                    <Activity className="w-5 h-5 text-brand-gold" />
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold block">
                    Featured Spotlight
                  </span>
                  <Badge variant="cream" className="mt-0.5 text-[10px] py-0.5">
                    {featuredService.category}
                  </Badge>
                </div>
              </div>
              {featuredService.requiresConfirmation && (
                <span className="text-[10px] text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 font-medium">
                  Verify Availability
                </span>
              )}
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
                {featuredService.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed mt-3">
                {featuredService.overview}
              </p>

              {featuredService.slug === "dry-needling" && (
                <div className="relative rounded-2xl overflow-hidden border border-[#DECDB5] mt-4 mb-2 group">
                  <Image
                    src="/images/treatments/dry-needling-procedure.jpg"
                    alt="Clinical dry needling procedure at Farande Physiotherapy Clinic"
                    width={848}
                    height={478}
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-brand-dark/85 px-3 py-1.5 text-[10px] text-brand-ivory flex justify-between items-center">
                    <span>Sterile Trigger Point Dry Needling</span>
                    <span className="text-brand-gold-light">Dr. Vaibhav Farande</span>
                  </div>
                </div>
              )}

              {featuredService.slug === "electrotherapy" && (
                <div className="relative rounded-2xl overflow-hidden border border-[#DECDB5] mt-4 mb-2 group">
                  <Image
                    src="/images/equipment/therapy-equipment.jpg"
                    alt="In-clinic electrotherapy equipment at Farande Physiotherapy Clinic"
                    width={1066}
                    height={800}
                    className="w-full h-44 object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-brand-dark/85 px-3 py-1.5 text-[10px] text-brand-ivory flex justify-between items-center">
                    <span>Active Electrotherapy Station</span>
                    <span className="text-brand-gold-light">Amravati Premises</span>
                  </div>
                </div>
              )}
            </div>

            {/* Conditions Addressed Chips */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-semibold text-brand-charcoal uppercase tracking-wider block">
                Primary Conditions Addressed:
              </span>
              <div className="flex flex-wrap gap-2">
                {featuredService.conditionsTreated.slice(0, 4).map((cond, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cream/60 border border-[#E0D3BF] text-xs text-brand-charcoal font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                    {cond}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Actions */}
            <div className="pt-6 border-t border-[#F0E6D6] flex flex-col sm:flex-row items-center gap-3">
              <Button
                href={featuredWhatsAppUrl}
                isExternal
                variant="whatsapp"
                size="md"
                className="w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Enquire for {featuredService.title.split("&")[0]}
              </Button>

              <Link
                href={`/services/${featuredService.slug}`}
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-forest hover:text-brand-gold transition-colors inline-flex items-center justify-center gap-1.5"
              >
                View Full Protocol
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Companion List of Services */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted block mb-2 px-1">
              Companion Clinical Services in this Category:
            </span>

            {companionServices.map((service) => (
              <div
                key={service.id}
                className="p-5 rounded-2xl bg-brand-white border border-[#EADBCC] hover:border-brand-gold shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-cream/80 text-brand-forest flex items-center justify-center shrink-0 border border-[#DECDB5] group-hover:bg-brand-forest group-hover:text-brand-gold transition-colors mt-0.5">
                    {iconMap[service.icon] || (
                      <Activity className="w-4 h-4 text-brand-gold" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-lg font-bold text-brand-dark group-hover:text-brand-forest transition-colors">
                        {service.title}
                      </h4>
                      {service.requiresConfirmation && (
                        <span className="text-[9px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                          Verify
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-brand-muted line-clamp-2 max-w-md">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-forest group-hover:text-brand-gold transition-colors self-end sm:self-center"
                >
                  Details
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}

            {/* View Full Catalog Link */}
            <div className="pt-2 text-center sm:text-right">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:text-brand-forest transition-colors"
              >
                Browse complete directory of all 13 services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
