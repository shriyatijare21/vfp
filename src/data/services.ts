export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "Spine & Pain Relief" | "Specialized Therapies" | "Rehabilitation & Movement" | "Clinical Modalities";
  shortDescription: string;
  overview: string;
  conditionsTreated: string[];
  keyBenefits: string[];
  whatToExpect: string;
  precautions: string;
  requiresConfirmation?: boolean;
  featured?: boolean;
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "back-pain-relief",
    slug: "back-pain-relief",
    title: "Back Pain Relief & Spine Care",
    category: "Spine & Pain Relief",
    shortDescription:
      "Focused clinical assessment and targeted rehabilitation for acute strains, lumbar stiffness, and disc-related discomfort.",
    overview:
      "Back pain can stem from postural stress, sudden lifting strains, disc irritation, or muscle guarding. Our assessment looks at how your spine moves, which positions relieve your symptoms, and how to gradually restore strength and movement without aggravating the tissue.",
    conditionsTreated: [
      "Lumbar disc herniation and nerve irritation",
      "Sciatica and radiating leg discomfort",
      "Mechanical lower back stiffness",
      "Postural fatigue from prolonged desk sitting",
      "Localized spinal muscular spasms",
    ],
    keyBenefits: [
      "Gradual relief from localized muscular tension",
      "Restoration of comfortable lumbar and thoracic mobility",
      "Targeted strengthening of deep trunk stabilizing muscles",
      "Practical guidance on lifting and workplace movement habits",
    ],
    whatToExpect:
      "Your first consultation begins with a physical assessment testing spinal mobility, neurological reflexes, and muscular tenderness. Hands-on techniques and gentle mobility drills are tailored strictly to your comfort level.",
    precautions:
      "Certain symptoms—such as back pain accompanied by bladder or bowel disturbance, groin numbness, or severe progressive leg weakness—require urgent medical attention. Our initial assessment screens for these indicators to ensure physiotherapy is clinically safe.",
    featured: true,
    icon: "ShieldAlert",
  },
  {
    id: "sports-injury-rehabilitation",
    slug: "sports-injury-rehabilitation",
    title: "Sports Injury Rehabilitation",
    category: "Rehabilitation & Movement",
    shortDescription:
      "Phased, criteria-based recovery pathways for muscle pulls, ligament sprains, and joint overuse injuries.",
    overview:
      "Whether you participate in organized sports or recreational activities, sports injuries require rehabilitation that respects biological healing timelines while rebuilding strength, agility, and joint stability. Recovery focuses on regaining full movement, progressive strength training, and movement retraining.",
    conditionsTreated: [
      "Ligament sprains (ankle, knee, or wrist)",
      "Muscle strains (hamstring, quadriceps, calf)",
      "Meniscal and cartilage joint irritation",
      "Rotator cuff strains and shoulder impingement",
      "Overuse tendinopathies (Achilles, patellar, tennis elbow)",
    ],
    keyBenefits: [
      "Step-by-step loading that respects tissue healing stages",
      "Restoration of joint stability and balance confidence",
      "Movement drills tailored to your sport or daily activity",
      "Identifying underlying movement imbalances to reduce reinjury risk",
    ],
    whatToExpect:
      "Evaluation includes checking joint range of motion, muscle strength, and movement control. Rehabilitation progresses systematically from pain-free mobility exercises to progressive loading and activity-specific drills.",
    precautions:
      "Returning to high-impact sport before rebuilding sufficient strength and joint control increases the risk of recurrence. Progression is guided by functional milestones rather than just the absence of resting pain.",
    featured: true,
    icon: "Activity",
  },
  {
    id: "dry-needling",
    slug: "dry-needling",
    title: "Dry Needling Therapy",
    category: "Specialized Therapies",
    shortDescription:
      "Targeted release of taut muscular trigger points using sterile, single-use filiform needles to relieve stubborn muscle tension.",
    overview:
      "Dry needling involves inserting very fine, solid needles directly into hyperirritable spots in muscular tissue known as myofascial trigger points. The goal is to stimulate a localized neuromuscular response, encourage blood flow, and help release persistent muscular tightness.",
    conditionsTreated: [
      "Chronic myofascial trigger point tension",
      "Deep neck and upper trapezius tightness",
      "Gluteal and piriformis muscle restriction",
      "Tension headaches linked to cervical muscle knots",
      "Muscular guarding associated with tendon overuse",
    ],
    keyBenefits: [
      "Targeted release of deep muscle knots that are hard to reach manually",
      "Easing of localized muscular tenderness and stiffness",
      "Short-term improvement in tissue flexibility",
      "Complements active stretching and strengthening programs",
    ],
    whatToExpect:
      "The clinician palpates the muscle to locate the trigger point. A single-use, sterile needle is gently inserted. You may feel a brief twitch sensation or a dull ache as the muscle responds, followed by gradual muscular relaxation.",
    precautions:
      "Dry needling is not suitable for individuals with needle phobias, active skin infections over the area, or specific bleeding disorders. Mild, temporary soreness for 24 to 48 hours is common and normally resolves quickly.",
    featured: true,
    icon: "Target",
  },
  {
    id: "neuro-physiotherapy",
    slug: "neuro-physiotherapy",
    title: "Neuro Physiotherapy",
    category: "Specialized Therapies",
    shortDescription:
      "Dedicated motor retraining, balance improvement, and functional mobility support for neurological conditions.",
    overview:
      "Neurological rehabilitation supports individuals recovering from conditions affecting the brain, spinal cord, or peripheral nerves. Therapy focuses on repetitive motor learning, functional tasks such as standing and walking, balance confidence, and practical strategies for daily activities.",
    conditionsTreated: [
      "Post-stroke motor recovery and gait retraining",
      "Facial muscle weakness (e.g. Bell's Palsy)",
      "Parkinsonian balance and mobility maintenance",
      "Peripheral nerve compression and weakness",
      "Balance instability and functional transfer difficulties",
    ],
    keyBenefits: [
      "Support for natural neuroplastic motor relearning",
      "Improved balance confidence to help reduce fall risk",
      "Functional practice for sit-to-stand, transfers, and walking",
      "Clear guidance for family members and caregivers",
    ],
    whatToExpect:
      "Sessions are conducted in a calm, supportive setting. The physiotherapist assesses voluntary movement, muscle tone, and balance, then guides task-oriented practice tailored to current ability.",
    precautions:
      "Neurological sessions are paced carefully to prevent excessive physical and cognitive fatigue. Exercises are adapted according to patient safety and resting blood pressure.",
    featured: true,
    icon: "Brain",
  },
  {
    id: "posture-correction",
    slug: "posture-correction",
    title: "Posture Correction & Ergonomics",
    category: "Rehabilitation & Movement",
    shortDescription:
      "Practical assessment and corrective exercises to relieve strain caused by prolonged sitting and desk work.",
    overview:
      "Extended hours spent working on laptops, desks, or mobile devices can lead to muscle fatigue and stiffness in the neck, upper back, and shoulders. Our program combines gentle joint mobility drills, strengthening for postural muscles, and practical ergonomic guidance for your daily workspace.",
    conditionsTreated: [
      "Forward-head posture ('text neck') and upper back ache",
      "Rounded shoulders and pectoral tightness",
      "Mid-back stiffness from long desk hours",
      "Pelvic alignment imbalances contributing to back fatigue",
    ],
    keyBenefits: [
      "Relief from recurring postural tension and fatigue",
      "Better distribution of mechanical loads across the spine",
      "Simple, actionable daily habits for home and office",
      "Practical workstation setup recommendations",
    ],
    whatToExpect:
      "Postural screening identifies which muscle groups are tight and which are weak. You are guided through mobility exercises and targeted strengthening for postural stabilizers.",
    precautions:
      "Posture correction is an active behavioural habit, not an instant passive fix. Rigid external braces are generally discouraged because they can weaken postural muscles if used as a substitute for active movement.",
    icon: "Sparkles",
  },
  {
    id: "joint-mobilization",
    slug: "joint-mobilization",
    title: "Joint Mobilization & Manual Therapy",
    category: "Spine & Pain Relief",
    shortDescription:
      "Hands-on, gentle passive joint glides to ease stiffness, improve range of motion, and reduce movement discomfort.",
    overview:
      "Manual joint mobilization applies precise, gentle passive movements to articular surfaces within comfortable limits. By helping restore natural joint glide and easing surrounding muscle tension, it helps make active movement smoother and less painful.",
    conditionsTreated: [
      "Frozen shoulder (adhesive capsulitis) stiffness",
      "Knee and hip joint tightness from osteoarthritis",
      "Cervical or lumbar facet joint restriction",
      "Joint stiffness following immobilization or cast removal",
      "Ankle stiffness after sprains",
    ],
    keyBenefits: [
      "Reduction of joint stiffness through gentle passive glide",
      "Pain modulation through sensory mechanoreceptor stimulation",
      "Enhanced natural joint fluid circulation",
      "Better preparation for active exercise and daily tasks",
    ],
    whatToExpect:
      "The physiotherapist uses skilled manual contact to gently move the joint within comfortable ranges. Techniques are non-forceful, unhurried, and adapted continuously to patient feedback.",
    precautions:
      "Joint mobilization is performed strictly within safe limits and is avoided in cases of active joint infections, severe osteoporosis, unhealed fractures, or joint hypermobility.",
    icon: "Layers",
  },
  {
    id: "kinesiology-taping",
    slug: "kinesiology-taping",
    title: "Kinesiology Taping",
    category: "Specialized Therapies",
    shortDescription:
      "Application of flexible therapeutic tape to support soft tissues, assist fluid circulation, and provide movement feedback.",
    overview:
      "Kinesiology tape is an elastic cotton tape that stretches to match the movement of human skin. Applied along specific muscle or joint pathways, it provides gentle sensory feedback during movement, supports fatigued tissues, and helps reduce swelling following acute sprains.",
    conditionsTreated: [
      "Acute post-sprain swelling and localized bruising",
      "Kneecap (patellofemoral) tracking awareness",
      "Shoulder postural feedback during overhead tasks",
      "Foot arch and plantar fascial support",
    ],
    keyBenefits: [
      "Continuous sensory feedback without restricting joint motion",
      "Support for fatigued muscles during physical activity",
      "Assistance in managing localized fluid swelling",
      "Breathable, water-resistant application lasting several days",
    ],
    whatToExpect:
      "Skin is cleaned and prepared before applying elastic tape with tension calibrated to your condition. You can continue normal daily activities while wearing it.",
    precautions:
      "Tape should not be applied over open cuts, fragile skin, or in individuals with known skin adhesive allergies. It should be removed immediately if any itching or rash develops.",
    icon: "Bandage",
  },
  {
    id: "iastm",
    slug: "iastm",
    title: "IASTM (Instrument-Assisted Soft Tissue Mobilization)",
    category: "Specialized Therapies",
    shortDescription:
      "Manual technique using ergonomic medical-grade instruments to identify and address soft tissue restrictions.",
    overview:
      "Instrument-Assisted Soft Tissue Mobilization utilizes specially contoured stainless-steel instruments applied over lubricated skin to help detect and address areas of chronic fascial restriction, scar tissue tightness, and tendon discomfort.",
    conditionsTreated: [
      "Chronic Achilles tendon stiffness and thickness",
      "Plantar fasciitis and bottom-of-foot discomfort",
      "Tightness around healed surgical or injury scars",
      "Iliotibial (IT) band tightness and lateral thigh friction",
    ],
    keyBenefits: [
      "Assists in identifying localized fibrous soft tissue restrictions",
      "Stimulates localized micro-circulation to support tissue repair",
      "Supports restoring natural fascial gliding planes",
      "Pairs effectively with progressive eccentric loading exercises",
    ],
    whatToExpect:
      "A soothing emollient is applied to the skin, followed by gentle, rhythmic instrument strokes across the target area to ease tight tissue planes.",
    precautions:
      "Mild, temporary skin redness (petechiae) can occur due to increased localized surface circulation. It is not suitable over active wounds, unhealed surgical sites, or in individuals with unmanaged blood-clotting conditions.",
    icon: "Compass",
  },
  {
    id: "strength-training",
    slug: "strength-training",
    title: "Therapeutic Strength & Conditioning",
    category: "Rehabilitation & Movement",
    shortDescription:
      "Clinically prescribed, supervised resistance exercises to rebuild joint resilience and support long-term physical function.",
    overview:
      "Passive treatments help settle discomfort, but rebuilding strength is what protects joints from recurring strain. Under professional supervision, patients learn progressive exercises using bodyweight, resistance bands, and light weights tailored to their current physical capacity.",
    conditionsTreated: [
      "Muscle weakness following injury, rest, or surgery",
      "Age-related loss of muscle strength (sarcopenia)",
      "Recurrent joint instability or muscular fatigue",
      "Post-operative rehabilitation following arthroscopy or repair",
    ],
    keyBenefits: [
      "Builds muscle capacity to support and offload sensitive joints",
      "Enhances tendon tolerance to everyday physical demands",
      "Boosts confidence in performing daily activities and stairs",
      "Clear, printable home exercise guidelines with safe progressions",
    ],
    whatToExpect:
      "Exercises begin at a comfortable baseline and progress as your strength and confidence build. Correct form is emphasized throughout.",
    precautions:
      "Proper technique and movement control always take priority over the amount of resistance used. Exercises are modified immediately if joint pain occurs during or after exercise.",
    icon: "Dumbbell",
  },
  {
    id: "electrotherapy",
    slug: "electrotherapy",
    title: "Electrotherapy (TENS & IFT)",
    category: "Clinical Modalities",
    shortDescription:
      "Gentle electrical stimulation modalities used to calm sensory pain signals, reduce muscle spasms, and support recovery.",
    overview:
      "Interferential Therapy (IFT) and Transcutaneous Electrical Nerve Stimulation (TENS) deliver gentle rhythmic electrical impulses through comfortable skin pads. These signals help stimulate the body's natural pain-relieving mechanisms and encourage muscle relaxation during acute flare-ups.",
    conditionsTreated: [
      "Acute back or neck muscle spasms",
      "Localized joint discomfort during arthritic flare-ups",
      "Post-injury muscular soreness and guarding",
      "Early-stage pain management to enable gentle movement",
    ],
    keyBenefits: [
      "Non-drug pain relief during acute, sensitive episodes",
      "Helps relax severe involuntary muscle guarding",
      "Mild circulatory stimulation to affected areas",
      "Helps prepare stiff joints for comfortable active movement",
    ],
    whatToExpect:
      "Comfortable gel pads or moist sponge electrodes are placed on the skin. You feel a mild, pleasant tingling sensation that can be adjusted to your exact comfort preference.",
    precautions:
      "Electrotherapy is strictly contraindicated in patients with cardiac pacemakers, active malignancies, over the abdomen during pregnancy, or on skin areas with loss of normal sensation.",
    requiresConfirmation: false,
    icon: "Zap",
  },
  {
    id: "decompression-therapy",
    slug: "decompression-therapy",
    title: "Spinal Decompression & Traction",
    category: "Clinical Modalities",
    shortDescription:
      "Measured mechanical distraction designed to gently unload intervertebral disc spaces and ease spinal nerve compression.",
    overview:
      "Decompression therapy uses motorized distraction to apply measured, gentle traction to the cervical or lumbar spine. The objective is to relieve pressure on compressed discs and spinal nerves, supporting conservative recovery under close clinical supervision.",
    conditionsTreated: [
      "Lumbar or cervical disc protrusions with nerve irritation",
      "Degenerative disc discomfort with nerve pinching",
      "Spinal nerve root compression symptoms",
      "Facet joint compression discomfort",
    ],
    keyBenefits: [
      "Helps decrease mechanical pressure on sensitive spinal nerve roots",
      "Controlled, gradual distraction cycles calibrated to patient tolerance",
      "Provides supported, non-invasive spinal unloading",
    ],
    whatToExpect:
      "The patient lies comfortably on a specialized table with supportive harnesses. Distraction cycles gently pull and relax in calibrated intervals.",
    precautions:
      "**Pending Clinic Confirmation:** This therapeutic modality was noted in clinic promotional documentation. Operational availability at our Amravati premises is pending confirmation with Dr. Farande. When indicated, it is contraindicated in spinal instability, severe osteoporosis, or abdominal aortic aneurysm.",
    requiresConfirmation: true,
    icon: "Maximize2",
  },
  {
    id: "shockwave-therapy",
    slug: "shockwave-therapy",
    title: "Radial Shockwave Therapy",
    category: "Clinical Modalities",
    shortDescription:
      "Acoustic pressure waves directed to stubborn, chronically irritated tendon tissues to stimulate natural healing.",
    overview:
      "Extracorporeal Shockwave Therapy (ESWT) delivers acoustic sound pulses into chronically irritated tissues such as the plantar fascia or Achilles tendon. The pressure waves help stimulate local blood flow and cellular metabolic response in tissues where healing has slowed.",
    conditionsTreated: [
      "Chronic plantar fasciitis recalcitrant to initial conservative care",
      "Stubborn Achilles tendon pain",
      "Calcific shoulder tendinitis",
      "Persistent tennis elbow (lateral epicondylalgia)",
    ],
    keyBenefits: [
      "Helps restart natural healing processes in chronically irritated tendons",
      "Assists in breaking down localized micro-calcifications",
      "Non-surgical option for stubborn tendon complaints",
    ],
    whatToExpect:
      "Gel is applied to the skin, and a handheld applicator delivers acoustic pulses. Sensation is noticeable and can feel mildly tender, but sessions are brief (5 to 10 minutes).",
    precautions:
      "**Pending Clinic Confirmation:** This modality was listed in clinic promotional documentation. Operational availability is pending confirmation with Dr. Farande. When indicated, it is not used over open growth plates in children, near major nerves or blood vessels, or during pregnancy.",
    requiresConfirmation: true,
    icon: "Radio",
  },
  {
    id: "laser-therapy",
    slug: "laser-therapy",
    title: "Class IV Laser / Photobiomodulation",
    category: "Clinical Modalities",
    shortDescription:
      "Focused infrared light energy applied to deep joint and soft tissue structures to assist cellular repair.",
    overview:
      "Photobiomodulation uses specific wavelengths of light energy to penetrate deep into soft tissues. The light energy helps support cellular metabolic processes and calm localized joint and tendon irritation without causing heat or skin damage.",
    conditionsTreated: [
      "Deep joint inflammation and capsular tightness",
      "Acute ligament sprains and tendon strains",
      "Localized neuralgic discomfort",
      "Soft tissue recovery following injury",
    ],
    keyBenefits: [
      "Supports natural cellular energy production (ATP)",
      "Painless, soothing application without discomfort",
      "Can be combined comfortably with manual therapy",
    ],
    whatToExpect:
      "Protective eyewear is worn by both clinician and patient. A handheld wand is smoothly moved over the target area, producing a mild, soothing warmth.",
    precautions:
      "**Pending Clinic Confirmation:** This modality was listed in clinic promotional documentation. Operational availability is pending confirmation with Dr. Farande. When indicated, protective eyewear is mandatory, and the modality is strictly contraindicated over the eyes, thyroid gland, or active tumors.",
    requiresConfirmation: true,
    icon: "Sun",
  },
];
