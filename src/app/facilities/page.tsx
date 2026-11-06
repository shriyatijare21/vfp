import type { Metadata } from "next";
import { facilitiesData } from "@/data/equipment";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  CheckCircle2,
  Info,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Clinic Facilities & Clinical Modalities",
  description:
    "Explore the clinical environment, hygiene standards, and therapeutic equipment at Farande Physiotherapy Clinic in Amravati.",
};

export default function FacilitiesPage() {
  return (
    <div className="py-12 lg:py-20">
      {/* Header */}
      <section className="pb-16 border-b border-[#E7DDCA]">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-3">
              Environment & Technology
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-dark font-normal leading-[1.15]">
              A Calm, Hygienic Space for Restorative Care
            </h1>
            <p className="mt-6 text-base sm:text-lg text-brand-muted leading-relaxed">
              We maintain high clinical standards of cleanliness, patient confidentiality, and physical comfort. Discover our facility layout, treatment equipment, and safety procedures.
            </p>
          </div>
        </Container>
      </section>

      {/* Transparency Note */}
      <section className="py-8 bg-brand-cream/50 border-b border-[#E7DDCA]">
        <Container>
          <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-charcoal/80 bg-brand-white p-4 sm:p-5 rounded-2xl border border-[#DECDB5]">
            <Info className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Patient Transparency Guarantee:</strong> We do not publish fake photographs or pretend that generic AI images represent our exact facility. The features below describe our actual clinical layout and equipment protocols in Amravati. Any specialized modalities under seasonal deployment or requiring pre-scheduling are marked clearly.
            </p>
          </div>
        </Container>
      </section>

      {/* Facilities & Equipment Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilitiesData.map((item) => {
              const isPending = item.status === "Offering Pending Confirmation";

              return (
                <Card
                  key={item.id}
                  variant="ivory"
                  className="flex flex-col justify-between space-y-6 hover:border-brand-gold"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest">
                        {item.category}
                      </span>
                      <Badge variant={isPending ? "pending" : "forest"}>
                        {item.status}
                      </Badge>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-brand-dark">
                      {item.name}
                    </h3>

                    <p className="text-sm text-brand-muted leading-relaxed">
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

                  {isPending && (
                    <div className="pt-4 border-t border-[#EFE5D5] text-[11px] text-amber-800">
                      * Please confirm with Dr. Farande on WhatsApp for current availability of this specialized modality.
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Hygiene Commitment Section */}
      <section className="py-16 bg-[#F3EDE2] border-t border-[#E7DDCA]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-brand-forest text-brand-gold flex items-center justify-center mx-auto border border-brand-gold/40 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-dark">
              Our Clinical Hygiene Standard
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Every dry needling procedure utilizes single-use, pre-sterilized medical-grade needles disposed of immediately in sharps containers. Treatment beds and contact surfaces are sanitized systematically between every consultation.
            </p>
            <div className="pt-4">
              <Button
                href={clinicInfo.whatsappUrl}
                isExternal
                variant="whatsapp"
                size="md"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Ask a Question on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
