import React from "react";
import { clinicInfo } from "@/data/clinicInfo";

export function SchemaJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "Physiotherapy", "LocalBusiness"],
        "@id": "https://farandephysio.in/#clinic",
        name: clinicInfo.name,
        description:
          "Farande Physiotherapy Clinic in Amravati offers evidence-informed physiotherapy, musculoskeletal pain management, sports injury rehabilitation, dry needling, and neuro physiotherapy led by Dr. Vaibhav Ashok Farande (PT).",
        telephone: clinicInfo.phone,
        url: "https://farandephysio.in",
        logo: "https://farandephysio.in/images/hero/clinic-og.svg",
        image: "https://farandephysio.in/images/hero/clinic-og.svg",
        priceRange: "$$",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Digital Payments",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${clinicInfo.address.line1}, ${clinicInfo.address.landmark}, ${clinicInfo.address.area}`,
          addressLocality: clinicInfo.address.city,
          addressRegion: clinicInfo.address.state,
          postalCode: clinicInfo.address.postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "20.9320",
          longitude: "77.7554",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "14:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "14:30",
            closes: "20:00",
          },
        ],
        medicalSpecialty: [
          "Physiotherapy",
          "Musculoskeletal",
          "SportsMedicine",
          "Neurology",
        ],
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Back Pain Relief & Spine Care",
            procedureType: "NonSurgical",
          },
          {
            "@type": "MedicalProcedure",
            name: "Sports Injury Rehabilitation",
            procedureType: "NonSurgical",
          },
          {
            "@type": "MedicalProcedure",
            name: "Dry Needling Therapy",
            procedureType: "NonSurgical",
          },
          {
            "@type": "MedicalProcedure",
            name: "Neuro Physiotherapy",
            procedureType: "NonSurgical",
          },
          {
            "@type": "MedicalProcedure",
            name: "Posture Correction & Ergonomics",
            procedureType: "NonSurgical",
          },
        ],
        founder: {
          "@type": "Person",
          name: clinicInfo.doctorName,
          jobTitle: clinicInfo.doctorTitle,
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "Bachelor of Physiotherapy (BPT)",
          },
        },
      },
      {
        "@type": "Person",
        "@id": "https://farandephysio.in/#doctor",
        name: clinicInfo.doctorName,
        jobTitle: clinicInfo.doctorTitle,
        worksFor: {
          "@id": "https://farandephysio.in/#clinic",
        },
        affiliation: {
          "@type": "EducationalOrganization",
          name: "Garden City University",
          department: "School of Health Sciences",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Bachelor of Physiotherapy (BPT)",
        },
        sameAs: [
          clinicInfo.social.researchGate,
          clinicInfo.social.linkedIn,
          clinicInfo.social.justdial,
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

