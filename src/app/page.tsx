import React from "react";
import { Hero } from "@/components/home/Hero";
import { ClinicIntro } from "@/components/home/ClinicIntro";
import { DoctorIntro } from "@/components/home/DoctorIntro";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TreatmentJourney } from "@/components/home/TreatmentJourney";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ResearchSpotlight } from "@/components/home/ResearchSpotlight";
import { LocationSection } from "@/components/home/LocationSection";
import { AppointmentCta } from "@/components/home/AppointmentCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClinicIntro />
      <DoctorIntro />
      <ServicesGrid />
      <TreatmentJourney />
      <WhyChooseUs />
      <ResearchSpotlight />
      <LocationSection />
      <AppointmentCta />
    </>
  );
}
