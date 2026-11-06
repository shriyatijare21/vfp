export interface FacilityItem {
  id: string;
  name: string;
  category: "Facility" | "Therapeutic Modality" | "Hygiene & Comfort";
  description: string;
  highlights: string[];
  status: "Verified Clinic Feature" | "Available Clinical Modality" | "Offering Pending Confirmation";
}

export const facilitiesData: FacilityItem[] = [
  {
    id: "consultation-cubicles",
    name: "Private Assessment & Treatment Cubicles",
    category: "Facility",
    description:
      "Comfortable, discreet treatment areas designed to ensure patient privacy and dignity during physical examinations, manual therapy, and rehabilitation sessions.",
    highlights: [
      "Ergonomic treatment couches with adjustable heights",
      "Calm, distraction-free environment for individual sessions",
      "Complete acoustic and visual patient privacy",
    ],
    status: "Verified Clinic Feature",
  },
  {
    id: "hygiene-sterilization",
    name: "Medical Hygiene & Needle Safety Protocols",
    category: "Hygiene & Comfort",
    description:
      "Strict clinical hygiene and sanitization standards, ensuring single-use sterile filiform needles for dry needling, regular disinfection of couches, and sanitized contact surfaces.",
    highlights: [
      "Strict single-use, pre-sterilized dry needling disposables",
      "Medical-grade surface disinfection between patients",
      "Clean, well-ventilated treatment rooms",
    ],
    status: "Verified Clinic Feature",
  },
  {
    id: "electrotherapy-unit",
    name: "Clinical Electrotherapy Station (IFT & TENS)",
    category: "Therapeutic Modality",
    description:
      "Multi-waveform electro-physical modalities used to relieve acute muscular spasms, modulate neural pain transmission, and reduce joint inflammation.",
    highlights: [
      "Interferential Current (IFT) therapy for deep joint pain",
      "Transcutaneous Electrical Nerve Stimulation (TENS)",
      "Targeted pain gate neuromodulation",
    ],
    status: "Available Clinical Modality",
  },
  {
    id: "active-rehab-zone",
    name: "Active Exercise & Functional Rehabilitation Zone",
    category: "Facility",
    description:
      "Dedicated space equipped with clinical resistance bands, posture grids, balance boards, and mobility tools for progressive physical retraining.",
    highlights: [
      "Therapeutic resistance bands and suspension trainers",
      "Proprioception and balance retraining equipment",
      "Functional movement screening tools",
    ],
    status: "Verified Clinic Feature",
  },
  {
    id: "decompression-station",
    name: "Motorized Spinal Decompression & Traction System",
    category: "Therapeutic Modality",
    description:
      "Automated distraction equipment designed to gently offload lumbar and cervical intervertebral discs and decompress spinal nerve roots.",
    highlights: [
      "Customizable cervical and lumbar distraction cycles",
      "Gradual smooth tension ramp-up for patient comfort",
    ],
    status: "Offering Pending Confirmation",
  },
  {
    id: "shockwave-device",
    name: "Extracorporeal Shockwave Unit (ESWT)",
    category: "Therapeutic Modality",
    description:
      "High-energy acoustic impulse technology for recalcitrant tendinopathies, calcifications, and chronic soft-tissue conditions.",
    highlights: [
      "Stimulates deep cellular angiogenesis and revascularization",
      "Non-surgical option for stubborn plantar fasciitis and tennis elbow",
    ],
    status: "Offering Pending Confirmation",
  },
  {
    id: "laser-system",
    name: "Photobiomodulation / Laser Therapy Device",
    category: "Therapeutic Modality",
    description:
      "Deep-penetrating light wavelength delivery designed to accelerate cellular adenosine triphosphate (ATP) production and ease chronic joint inflammation.",
    highlights: [
      "Targeted cellular photobiomodulation",
      "Non-invasive and completely painless application",
    ],
    status: "Offering Pending Confirmation",
  },
];
