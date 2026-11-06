import React from "react";
import { Hero } from "@/components/home/Hero";
import { DoctorIntro } from "@/components/home/DoctorIntro";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TreatmentJourney } from "@/components/home/TreatmentJourney";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ResearchSpotlight } from "@/components/home/ResearchSpotlight";
import { LocationSection } from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DoctorIntro />
      <ServicesGrid />
      <TreatmentJourney />
      <WhyChooseUs />
      <ResearchSpotlight />
      <LocationSection />
    </>
  );
}
