import React from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Navigation,
  ExternalLink,
} from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F4EEE3] border-b border-[#E3D6C1]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
            Visit Our Clinic
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-dark leading-tight">
            Centrally Located in Amravati
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
            Easily accessible from across Amravati city. Situated in Maltekdi near the prominent landmark of Kali Mata Temple.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Clinic Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-brand-white rounded-3xl p-7 sm:p-9 border border-[#DECDB5] shadow-luxury">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-1">
                  Clinical Center
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
                  {clinicInfo.name}
                </h3>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-3.5 pt-1">
                <div className="w-10 h-10 rounded-full bg-brand-forest/10 text-brand-forest flex items-center justify-center shrink-0 border border-brand-forest/15">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-semibold text-brand-charcoal text-sm">
                    {clinicInfo.address.line1}
                  </p>
                  <p className="text-xs text-brand-muted">
                    {clinicInfo.address.landmark}, {clinicInfo.address.area}
                  </p>
                  <p className="text-xs text-brand-muted font-medium">
                    {clinicInfo.address.city}, {clinicInfo.address.state} – {clinicInfo.address.postalCode}
                  </p>
                </div>
              </div>

              {/* Consultation Timings */}
              <div className="flex items-start gap-3.5 pt-1">
                <div className="w-10 h-10 rounded-full bg-brand-forest/10 text-brand-forest flex items-center justify-center shrink-0 border border-brand-forest/15">
                  <Clock className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-0.5 text-xs sm:text-sm text-brand-charcoal">
                  <p className="font-semibold">Consultation Timings:</p>
                  <p className="text-brand-muted text-xs">
                    Morning: 9:00 AM – 2:00 PM
                  </p>
                  <p className="text-brand-muted text-xs">
                    Evening: 2:30 PM – 8:00 PM
                  </p>
                  <p className="text-amber-800 font-medium text-xs pt-0.5">
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Phone Helpline */}
              <div className="flex items-start gap-3.5 pt-1">
                <div className="w-10 h-10 rounded-full bg-brand-forest/10 text-brand-forest flex items-center justify-center shrink-0 border border-brand-forest/15">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-semibold text-brand-charcoal text-sm">
                    Appointment Line &amp; Queries
                  </p>
                  <a
                    href={`tel:${clinicInfo.phone}`}
                    className="text-base font-bold text-brand-forest hover:text-brand-gold transition-colors inline-block"
                  >
                    {clinicInfo.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-[#EFE5D5] flex flex-col sm:flex-row gap-3">
              <Button
                href={clinicInfo.whatsappUrl}
                isExternal
                variant="whatsapp"
                size="md"
                className="w-full justify-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Enquire on WhatsApp
              </Button>
              <Button
                href={clinicInfo.googleMapsUrl}
                isExternal
                variant="outline"
                size="md"
                className="w-full justify-center"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Directions
              </Button>
            </div>
          </div>

          {/* Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#DECDB5] shadow-luxury min-h-[380px] bg-brand-cream flex flex-col">
            <iframe
              title="Farande Physiotherapy Clinic Location Map Amravati"
              src="https://maps.google.com/maps?q=Sabnis+Plot+Near+Kali+Mata+Temple+Maltekdi+Amravati+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px", flexGrow: 1 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] contrast-[105%]"
            />
            <div className="bg-brand-white p-3.5 px-6 border-t border-[#DECDB5] flex items-center justify-between text-xs text-brand-charcoal">
              <span className="font-medium truncate pr-2">
                Shop No. 3, Mahakali Enclave, Maltekdi, Amravati
              </span>
              <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-forest font-semibold hover:text-brand-gold transition-colors shrink-0"
              >
                Open in Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
