import React from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  MessageSquare,
  Phone,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";

export function AppointmentCta() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#14352C] to-[#102B24] text-brand-ivory relative overflow-hidden border-b border-brand-gold/30">
      {/* Decorative ambient auras */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            Begin Your Recovery
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.14]">
            Schedule Your Consultation with{" "}
            <span className="italic text-brand-gold font-normal">
              Dr. Vaibhav Farande
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-cream/80 max-w-2xl mx-auto leading-relaxed font-light">
            Take the first step toward better movement and physical comfort. Connect directly on WhatsApp to share your symptoms and arrange a dedicated consultation time in Amravati.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href={clinicInfo.whatsappUrl}
              isExternal
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto shadow-gold py-4 px-8 text-sm font-semibold tracking-wide"
            >
              <MessageSquare className="w-4 h-4 mr-2 fill-white" />
              Chat on WhatsApp (+91 70300 89050)
            </Button>

            <Button
              href={`tel:${clinicInfo.phone}`}
              isExternal
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-brand-ivory border-brand-gold/40 hover:bg-brand-gold/15 hover:border-brand-gold py-4 px-7 text-sm font-medium"
            >
              <Phone className="w-4 h-4 mr-2 text-brand-gold" />
              Call Directly
            </Button>
          </div>

          {/* Reassurance points */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-brand-cream/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Direct Doctor Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>Mon–Sat: 9 AM–2 PM &amp; 2:30–8 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>No Waiting Time with Prior Booking</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
