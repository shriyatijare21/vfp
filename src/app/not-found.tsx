import React from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft, MessageSquare, HeartPulse } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 bg-gradient-to-b from-brand-ivory via-[#F5EFE4] to-brand-cream/60">
      <Container className="text-center max-w-2xl px-4">
        {/* Clinic Crest Symbol */}
        <div className="w-16 h-16 mx-auto rounded-full bg-brand-forest text-brand-gold flex items-center justify-center border border-brand-gold/40 shadow-md mb-6">
          <HeartPulse className="w-8 h-8 stroke-[1.8]" />
        </div>

        {/* Status Indicator */}
        <span className="inline-block px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-forest font-semibold text-xs uppercase tracking-widest mb-4">
          Error 404 &bull; Clinical Resource Not Found
        </span>

        {/* Editorial Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-dark tracking-tight mb-4">
          We Couldn&apos;t Locate That Page
        </h1>

        <p className="text-sm sm:text-base text-brand-muted leading-relaxed max-w-lg mx-auto mb-8">
          The link you followed may be outdated, or the clinical service may have been reorganized. Please use the options below to find what you need or connect directly with our clinic.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <Button href="/" variant="primary" size="md" className="w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" />
            Return to Homepage
          </Button>

          <Button href="/services" variant="outline" size="md" className="w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All 13 Services
          </Button>

          <Button
            href={clinicInfo.whatsappUrl}
            isExternal
            variant="whatsapp"
            size="md"
            className="w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            WhatsApp Clinic
          </Button>
        </div>

        {/* Immediate Assistance Box */}
        <div className="bg-brand-white p-6 rounded-2xl border border-brand-gold/30 shadow-sm max-w-md mx-auto text-xs text-brand-charcoal space-y-2">
          <p className="font-semibold text-brand-forest">
            Need urgent guidance or appointment enquiry?
          </p>
          <p className="text-brand-muted">
            Call our clinic helpline at{" "}
            <a
              href={`tel:${clinicInfo.phone}`}
              className="text-brand-forest font-bold hover:underline"
            >
              {clinicInfo.phoneDisplay}
            </a>{" "}
            or visit us at Sabnis Plot, Maltekdi, Amravati.
          </p>
        </div>
      </Container>
    </div>
  );
}

