import type { Metadata } from "next";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Appointment Enquiry",
  description:
    "Contact Farande Physiotherapy Clinic in Amravati. Book an appointment consultation via WhatsApp or call +91 70300 89050. Located in Maltekdi near Kali Mata Temple.",
};

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20">
      {/* Header */}
      <section className="pb-16 border-b border-[#E7DDCA]">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-3">
              Contact & Directions
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-dark font-normal leading-[1.15]">
              We Are Here to Help You Move Freely Again.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-brand-muted leading-relaxed">
              Enquire about appointment slots, ask a clinical question, or visit our clinic in Amravati. We prioritize quick, personal responses directly on WhatsApp.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Details + Interactive WhatsApp Form */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Clinic Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest block">
                  Clinic Information
                </span>
                <h2 className="font-serif text-3xl font-bold text-brand-dark">
                  Farande Physiotherapy Clinic
                </h2>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Led by Dr. Vaibhav Ashok Farande (PT), providing personalized physical therapy in a clean, professional, and private clinic setting.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone & WhatsApp */}
                <div className="p-6 rounded-2xl bg-brand-white border border-[#EADBCC] shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-forest">
                      <Phone className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-muted uppercase font-semibold">
                        Call or Message
                      </p>
                      <a
                        href={`tel:${clinicInfo.phone}`}
                        className="text-base font-bold text-brand-forest hover:text-brand-gold transition-colors"
                      >
                        {clinicInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-brand-muted">
                    Our direct WhatsApp line for consultations and appointment queries.
                  </p>
                </div>

                {/* Address */}
                <div className="p-6 rounded-2xl bg-brand-white border border-[#EADBCC] shadow-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-forest shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-brand-muted uppercase font-semibold">
                        Clinic Address
                      </p>
                      <p className="text-sm font-semibold text-brand-charcoal">
                        {clinicInfo.address.line1}
                      </p>
                      <p className="text-xs text-brand-muted">
                        {clinicInfo.address.landmark}, {clinicInfo.address.area}
                      </p>
                      <p className="text-xs text-brand-muted">
                        {clinicInfo.address.city}, {clinicInfo.address.state} – {clinicInfo.address.postalCode}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="p-6 rounded-2xl bg-brand-white border border-[#EADBCC] shadow-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-forest shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-brand-muted uppercase font-semibold">
                        Consultation Timings
                      </p>
                      <p className="text-sm font-semibold text-brand-charcoal">
                        Monday – Saturday
                      </p>
                      <p className="text-xs text-brand-muted">
                        Morning: 9:00 AM – 2:00 PM
                      </p>
                      <p className="text-xs text-brand-muted">
                        Evening: 2:30 PM – 8:00 PM
                      </p>
                      <p className="text-xs text-amber-800 font-semibold pt-1">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety / Verification Note */}
              <div className="p-5 rounded-2xl bg-brand-forest text-brand-ivory border border-brand-gold/30 text-xs space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-brand-gold">
                  <ShieldCheck className="w-4 h-4" />
                  Appointment Process Transparency
                </div>
                <p className="text-brand-cream/80 leading-relaxed font-light">
                  Enquiries connect directly to Dr. Vaibhav Farande via WhatsApp. We will discuss your symptoms and coordinate a mutually confirmed time slot before your visit.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Appointment Message Builder */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Google Maps Embed Section */}
      <section className="py-16 bg-[#F3EDE2] border-t border-[#E7DDCA]">
        <Container>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
              Find Our Clinic
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-dark">
              Google Maps Location & Driving Directions
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1">
              Convenient access from all parts of Amravati. Located near the prominent landmark of Kali Mata Temple in Maltekdi.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#DECDB5] shadow-luxury min-h-[420px] bg-white flex flex-col">
            <iframe
              title="Farande Physiotherapy Clinic Amravati Location Map"
              src="https://maps.google.com/maps?q=Sabnis+Plot+Near+Kali+Mata+Temple+Maltekdi+Amravati+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] grayscale-[15%] contrast-[105%]"
            />
            <div className="bg-brand-white p-4 sm:p-6 border-t border-[#DECDB5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div>
                <p className="font-semibold text-brand-dark text-sm">
                  Farande Physiotherapy Clinic
                </p>
                <p className="text-brand-muted">
                  Shop No. 3, Mahakali Enclave, Sabnis Plot, Maltekdi, Amravati – 444606
                </p>
              </div>
              <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-forest text-brand-ivory font-semibold hover:bg-brand-dark transition-colors self-start sm:self-auto shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-brand-gold" />
                Get Driving Directions
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
