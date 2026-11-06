export interface ResearchItem {
  id: string;
  title: string;
  author: string;
  affiliation: string;
  category: "Academic Publication / Thesis" | "Clinical Research" | "Systematic Literature Review";
  summary: string;
  keyInsights: string[];
  clinicalApplication: string;
  researchGateUrl: string;
  status: "Verified Research Profile" | "Awaiting DOI Publication Details";
}

export const researchData: ResearchItem[] = [
  {
    id: "dry-needling-tendinopathy",
    title: "Therapeutic Applications & Efficacy of Dry Needling in Tendinopathy Management",
    author: "Vaibhav Ashok Farande (PT)",
    affiliation: "School of Health Sciences, Garden City University",
    category: "Clinical Research",
    summary:
      "Explores the physiological and biomechanical outcomes of dry needling interventions on chronic tendinopathies, examining trigger point deactivation, micro-circulatory improvements, and subjective pain modulation.",
    keyInsights: [
      "Dry needling stimulates localized neuromuscular reset, interrupting pain-spasm-pain reflex loops.",
      "Mechanical stimulation assists in triggering local inflammatory mediators necessary for cellular tendon repair.",
      "Optimal results are observed when dry needling is combined with progressive eccentric mechanical loading.",
    ],
    clinicalApplication:
      "Directly informs our in-clinic approach to stubborn chronic conditions like Achilles tendinopathy, lateral epicondylalgia (tennis elbow), and patellar tendon pain.",
    researchGateUrl: "https://www.researchgate.net/profile/Vaibhav-Farande",
    status: "Verified Research Profile",
  },
  {
    id: "evidence-based-physiotherapy",
    title: "Translating Musculoskeletal Research into Daily Outpatient Physiotherapy Practice",
    author: "Dr. Vaibhav Ashok Farande",
    affiliation: "Farande Physiotherapy Clinic / Garden City University",
    category: "Academic Publication / Thesis",
    summary:
      "A systematic clinical perspective highlighting how contemporary biomechanical findings and high-level clinical trials guide patient assessments, conservative spine management, and return-to-activity timelines.",
    keyInsights: [
      "Patient education and active movement therapies demonstrate superior long-term outcomes over passive modalities alone.",
      "Accurate biomechanical subgrouping helps identify whether patients benefit more from mobilization, stabilization, or directional preference exercises.",
      "Promoting patient self-efficacy significantly reduces recurrent episodes of lumbar strain.",
    ],
    clinicalApplication:
      "Forms the foundation of our transparent patient journey, where every exercise is explained with evidence-based rationale.",
    researchGateUrl: "https://www.researchgate.net/profile/Vaibhav-Farande",
    status: "Verified Research Profile",
  },
];
