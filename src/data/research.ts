export interface ResearchItem {
  id: string;
  title: string;
  author: string;
  affiliation: string;
  category: "Clinical Investigation Focus" | "Biomechanical Literature Inquiry" | "Evidence-Based Rehabilitation";
  summary: string;
  keyInsights: string[];
  clinicalApplication: string;
  researchGateUrl: string;
  status: "Academic Research Profile";
}

export const researchData: ResearchItem[] = [
  {
    id: "dry-needling-tendinopathy",
    title: "Physiological Mechanisms of Dry Needling in Musculoskeletal Tendinopathies",
    author: "Vaibhav Ashok Farande (PT)",
    affiliation: "School of Health Sciences, Garden City University (Postgraduate Scholar)",
    category: "Clinical Investigation Focus",
    summary:
      "Academic inquiry into how targeted trigger point dry needling influences local micro-circulation, modulates neurophysiological pain feedback loops, and aids tissue remodeling when paired with progressive eccentric loading exercises.",
    keyInsights: [
      "Examines how trigger point deactivation alters local sensory nerve sensitivity and muscle guarding.",
      "Studies the role of fine needle stimulation in triggering localized reparative circulatory responses.",
      "Investigates the synergistic benefits when needling interventions are paired with active exercise protocols.",
    ],
    clinicalApplication:
      "Directly informs our in-clinic care for stubborn complaints such as Achilles tendon discomfort, lateral elbow pain (tennis elbow), and patellar tendon strain, ensuring needling is used to facilitate active rehabilitation rather than as an isolated passive treatment.",
    researchGateUrl: "https://www.researchgate.net/profile/Vaibhav-Farande",
    status: "Academic Research Profile",
  },
  {
    id: "evidence-based-physiotherapy",
    title: "Evidence-Informed Conservative Care Pathways for Mechanical Spinal Disorders",
    author: "Dr. Vaibhav Ashok Farande (PT)",
    affiliation: "Farande Physiotherapy Clinic / Garden City University",
    category: "Evidence-Based Rehabilitation",
    summary:
      "Reviewing current clinical trial literature and biomechanical evidence to translate contemporary spine science into practical, unhurried outpatient physiotherapy in Amravati.",
    keyInsights: [
      "Clinical evidence consistently demonstrates that active movement therapies provide superior long-term outcomes compared to passive modalities alone.",
      "Individualized directional preference screening helps guide mechanical unloading for disc-related discomfort.",
      "Patient education and movement confidence play a central role in reducing the recurrence of mechanical back strain.",
    ],
    clinicalApplication:
      "Underpins our consultation process, where patients receive an evidence-informed explanation of their condition and a personalized recovery plan rather than generic, open-ended passive machine treatments.",
    researchGateUrl: "https://www.researchgate.net/profile/Vaibhav-Farande",
    status: "Academic Research Profile",
  },
];
