import React from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <section className="py-20 lg:py-28 bg-[#F4EDE1] border-b border-[#E3D6C1]">
      <Container>
        <SectionHeading
          eyebrow="Visit Our Clinic"
          title="Centrally Located in Amravati"
          description="We are conveniently located in Maltekdi near Kali Mata Temple, offering easy accessibility, parking, and a calm clinic environment."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Clinic Contact & Visiting Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-brand-white rounded-3xl p-8 sm:p-10 border border-[#E0D3BF] shadow-luxury">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-1">
                  Clinic Location
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
                  {clinicInfo.name}
                </h3>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-3.5 pt-2">
                <div className="w-10 h-10 rounded-full bg-brand-forest/10 text-brand-forest flex items-center justify-center shrink-0 border border-brand-forest/15">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-1">
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

              {/* Hours Block */}
              <div className="flex items-start gap-3.5 pt-2">
                <div className="w-10 h-10 rounded-full bg-brand-forest/10 text-brand-forest flex items-center justify-center shrink-0 border border-brand-forest/15">
                  <Clock className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-brand-charcoal">
                  <p className="font-semibold">Consultation Timings:</p>
                  <p className="text-brand-muted text-xs">
                    Monday – Saturday: 9:00 AM – 2:00 PM & 2:30 PM – 8:00 PM
                  </p>
                  <p className="text-amber-800 font-medium text-xs">
                    Sunday: Closed
                  </p>
                  <p className="text-[11px] text-brand-muted/70 italic pt-1">
                    Prior appointment is advised to avoid waiting times.
                  </p>
                </div>
              </div>

              {/* Contact Phone Block */}
              <div className="flex items-start gap-3.5 pt-2">
                <div className="w-10 h-10 rounded-full bg-brand-forest/10 text-brand-forest flex items-center justify-center shrink-0 border border-brand-forest/15">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-brand-charcoal text-sm">
                    Public Helpline & Appointments
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
            <div className="pt-8 mt-6 border-t border-[#EFE5D5] flex flex-col sm:flex-row gap-3">
              <Button
                href={clinicInfo.whatsappUrl}
                isExternal
                variant="whatsapp"
                className="w-full justify-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Enquire on WhatsApp
              </Button>
              <Button
                href={clinicInfo.googleMapsUrl}
                isExternal
                variant="outline"
                className="w-full justify-center"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Directions
              </Button>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#DECDB5] shadow-luxury min-h-[360px] sm:min-h-[440px] relative bg-brand-cream flex flex-col">
            <iframe
              title="Farande Physiotherapy Clinic Location"
              src="https://maps.google.com/maps?q=Sabnis+Plot+Near+Kali+Mata+Temple+Maltekdi+Amravati+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px", flexGrow: 1 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] contrast-[105%]"
            />
            <div className="bg-brand-white p-3.5 px-6 border-t border-[#DECDB5] flex items-center justify-between text-xs text-brand-charcoal">
              <span className="font-medium">
                Sabnis Plot, Near Kali Mata Temple, Maltekdi, Amravati
              </span>
              <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-forest font-semibold hover:text-brand-gold transition-colors"
              >
                Open in Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
