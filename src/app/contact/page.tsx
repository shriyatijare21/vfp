import type { Metadata } from "next";
import Image from "next/image";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Appointment Enquiry | Farande Physiotherapy Amravati",
  description:
    "Contact Farande Physiotherapy Clinic in Amravati. Book an appointment consultation via WhatsApp or call +91 70300 89050. Located in Maltekdi near Kali Mata Temple.",
  alternates: {
    canonical: "https://farandephysio.in/contact",
  },
  openGraph: {
    title: "Contact Farande Physiotherapy Clinic | Amravati",
    description:
      "Direct WhatsApp appointment booking, phone helpline, clinic address, and Google Maps directions.",
    url: "https://farandephysio.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: "Contact & Location" }]} />

      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#102B24] via-[#14342B] to-[#173D32] text-brand-ivory border-b border-brand-gold/30">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Direct Communication
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.14]">
              We Are Here to Help You Move Freely Again.
            </h1>

            <p className="text-base sm:text-xl text-brand-cream/80 leading-relaxed font-light pt-2">
              Enquire about appointment slots, ask a clinical question, or visit our clinic in Amravati. We prioritize quick, personal responses directly on WhatsApp with Dr. Vaibhav Farande.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Details + Interactive WhatsApp Form */}
      <section className="py-16 lg:py-24 bg-[#FBF8F2]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Clinic Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest block">
                  Visiting &amp; Helpline
                </span>
                <h2 className="font-serif text-3xl font-bold text-brand-dark">
                  Farande Physiotherapy Clinic
                </h2>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Led by Dr. Vaibhav Ashok Farande (PT), providing personalized physical therapy in a clean, professional, and private clinic setting.
                </p>
              </div>

              {/* Clinic Photos Preview */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-32 rounded-xl overflow-hidden border border-[#DECDB5] group">
                  <Image
                    src="/images/clinic/clinic-exterior.jpg"
                    alt="Farande Physiotherapy Clinic Maltekdi entrance"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-brand-dark/80 px-2 py-1 text-[10px] text-brand-ivory font-medium">
                    Clinic Facade
                  </div>
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden border border-[#DECDB5] group">
                  <Image
                    src="/images/clinic/clinic-reception.jpg"
                    alt="Reception and waiting lounge at Farande Physiotherapy Clinic"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-brand-dark/80 px-2 py-1 text-[10px] text-brand-ivory font-medium">
                    Reception Lounge
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone & WhatsApp */}
                <div className="p-6 rounded-2xl bg-brand-white border border-[#DECDB5] shadow-sm space-y-2.5">
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
                  <p className="text-xs text-brand-muted pl-13">
                    Our direct WhatsApp line for consultations and appointment queries.
                  </p>
                </div>

                {/* Address */}
                <div className="p-6 rounded-2xl bg-brand-white border border-[#DECDB5] shadow-sm space-y-2.5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-forest shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs text-brand-muted uppercase font-semibold">
                        Clinic Address
                      </p>
                      <p className="text-sm font-semibold text-brand-charcoal">
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
                </div>

                {/* Timings */}
                <div className="p-6 rounded-2xl bg-brand-white border border-[#DECDB5] shadow-sm space-y-2.5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-forest shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div className="space-y-0.5 text-xs sm:text-sm text-brand-charcoal">
                      <p className="font-semibold">Consultation Timings</p>
                      <p className="text-brand-muted text-xs">
                        Monday – Saturday
                      </p>
                      <p className="text-brand-muted text-xs">
                        Morning: 9:00 AM – 2:00 PM
                      </p>
                      <p className="text-brand-muted text-xs">
                        Evening: 2:30 PM – 8:00 PM
                      </p>
                      <p className="text-amber-800 font-semibold text-xs pt-1">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety & Booking Note */}
              <div className="p-5 rounded-2xl bg-brand-forest text-brand-ivory border border-brand-gold/30 text-xs space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-brand-gold">
                  <ShieldCheck className="w-4 h-4" />
                  Appointment Process Transparency
                </div>
                <p className="text-brand-cream/80 leading-relaxed font-light">
                  Enquiries connect directly to Dr. Vaibhav Farande via WhatsApp. We will discuss your symptoms and coordinate a confirmed appointment slot before your visit to keep your consultation unhurried and minimize waiting time.
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
      <section className="py-16 bg-[#F4EEE3] border-t border-[#E3D6C1]">
        <Container>
          <div className="max-w-3xl mb-8 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
              Find Our Clinic
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-dark">
              Google Maps Location &amp; Driving Directions
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
