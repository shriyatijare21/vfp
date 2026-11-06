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
      "Targeted assessment and rehabilitation for acute and chronic spinal discomfort, disc issues, and sciatica.",
    overview:
      "Spinal pain can stem from postural stress, mechanical strain, prolapsed intervertebral discs (PIVD), or muscular imbalances. Our comprehensive approach focuses on detailed postural and biomechanical evaluation, gentle joint mobilization, targeted core stabilization, and patient education to achieve long-term functional relief.",
    conditionsTreated: [
      "Lumbar disc herniation & PIVD",
      "Sciatica and radiating nerve pain",
      "Mechanical lower back pain",
      "Postural strain & cervical pain",
      "Spinal stiffness and muscle spasm",
    ],
    keyBenefits: [
      "Alleviation of nerve irritation and localized tension",
      "Restoration of natural lumbar and cervical mobility",
      "Strengthening of deep postural stabilizers",
      "Ergonomic guidance for desk and daily routines",
    ],
    whatToExpect:
      "Your first session begins with a comprehensive physical assessment, testing spine mobility, neurological indicators, and muscular triggers. Treatment blends hands-on manual techniques with active rehabilitation drills tailored to your comfort level.",
    featured: true,
    icon: "ShieldAlert",
  },
  {
    id: "sports-injury-rehabilitation",
    slug: "sports-injury-rehabilitation",
    title: "Sports Injury Rehabilitation",
    category: "Rehabilitation & Movement",
    shortDescription:
      "Structured recovery pathways for athletes and active individuals recovering from sprains, tears, and overexertion.",
    overview:
      "Whether you are a competitive athlete or a recreational runner, sports injuries require phased rehabilitation that respects tissue healing timelines while restoring strength, agility, and neuromuscular coordination. We guide you from initial inflammation control through return-to-sport testing.",
    conditionsTreated: [
      "Ligament sprains (ACL, PCL, ankle sprains)",
      "Muscle strains and hamstring pulls",
      "Meniscal and cartilage irritation",
      "Rotator cuff strains and shoulder impingement",
      "Tendinopathies (Patellar, Achilles, Tennis Elbow)",
    ],
    keyBenefits: [
      "Phased tissue loading to prevent reinjury",
      "Enhanced joint stability and proprioception",
      "Functional return-to-sport sport-specific drills",
      "Identification and correction of underlying movement deficits",
    ],
    whatToExpect:
      "Assessment includes dynamic movement screening and joint loading evaluations. Rehabilitation progresses systematically through pain modulation, isometric strengthening, eccentric loading, and sports-specific agility drills.",
    featured: true,
    icon: "Activity",
  },
  {
    id: "dry-needling",
    slug: "dry-needling",
    title: "Dry Needling Therapy",
    category: "Specialized Therapies",
    shortDescription:
      "Evidence-guided myofascial trigger point release using fine filiform needles to address deep muscular tension.",
    overview:
      "Dry needling is a specialized clinical intervention targeting taut myofascial trigger points in muscles. Backed by contemporary neuromuscular science and clinical research, it helps release deep persistent knots, improve local blood flow, and reset faulty neuromuscular holding patterns.",
    conditionsTreated: [
      "Chronic myofascial pain syndrome",
      "Deep neck and upper trapezius stiffness",
      "Gluteal and piriformis muscle tightness",
      "Persistent tension-type headaches",
      "Tendinopathy-associated muscular guarding",
    ],
    keyBenefits: [
      "Rapid release of chronic muscular trigger points",
      "Reduction in local pain sensitivity and tenderness",
      "Immediate improvement in localized tissue extensibility",
      "Synergistic benefit when combined with active exercises",
    ],
    whatToExpect:
      "A thorough palpation identifies the exact trigger points. Using single-use, sterile, ultra-fine needles, the clinician gently targets the muscular knot. You may experience a brief localized twitch response followed by muscular relaxation.",
    featured: true,
    icon: "Target",
  },
  {
    id: "neuro-physiotherapy",
    slug: "neuro-physiotherapy",
    title: "Neuro Physiotherapy",
    category: "Specialized Therapies",
    shortDescription:
      "Dedicated motor retraining, balance enhancement, and neuro-rehabilitation for central and peripheral nerve conditions.",
    overview:
      "Neurological conditions demand high neuroplastic focus, repetitive motor relearning, and balance retraining. Our approach supports individuals in reclaiming independence, optimizing functional mobility, and managing spasticity or muscle weakness through compassionate, continuous progression.",
    conditionsTreated: [
      "Stroke (CVA) motor recovery and gait retraining",
      "Facial palsy / Bell's Palsy rehabilitation",
      "Parkinsonian balance and mobility maintenance",
      "Peripheral neuropathies and nerve compression",
      "Vestibular dizziness and equilibrium challenges",
    ],
    keyBenefits: [
      "Promotion of neuroplastic motor pathways",
      "Improvement in balance confidence and fall prevention",
      "Functional transfer training (sit-to-stand, walking)",
      "Dedicated family and caregiver positioning education",
    ],
    whatToExpect:
      "Initial assessment evaluates voluntary control, muscle tone, reflexes, and balance. Therapy incorporates task-oriented motor exercises, sensory re-education, and supportive functional gait training in a secure setting.",
    featured: true,
    icon: "Brain",
  },
  {
    id: "posture-correction",
    slug: "posture-correction",
    title: "Posture Correction & Ergonomics",
    category: "Rehabilitation & Movement",
    shortDescription:
      "Holistic biomechanical rebalancing to reverse desk strain, forward-head posture, and spinal misalignment.",
    overview:
      "Long hours at desks, smartphones, and sedentary work environments place disproportionate loads on cervical and thoracic spinal structures. Our posture correction program integrates postural awareness, thoracic extension exercises, pectoral stretching, and scapular stabilization.",
    conditionsTreated: [
      "Forward head posture ('Tech neck')",
      "Thoracic kyphosis and rounded shoulders",
      "Desk-work related chronic upper back tightness",
      "Pelvic tilts causing compensatory back aches",
    ],
    keyBenefits: [
      "Reduction in recurring cervicogenic headaches and fatigue",
      "Balanced distribution of axial spinal forces",
      "Long-term self-management through daily habit correction",
      "Personalized workspace ergonomic recommendations",
    ],
    whatToExpect:
      "Visual and physical postural screening to map skeletal alignment and muscle dominance. Patients receive targeted mobilizing drills, scapular stabilizing work, and desk adjustment advice.",
    icon: "Sparkles",
  },
  {
    id: "joint-mobilization",
    slug: "joint-mobilization",
    title: "Joint Mobilization & Manual Therapy",
    category: "Spine & Pain Relief",
    shortDescription:
      "Skilled passive joint glide and traction techniques to reduce stiffness, restore range of motion, and reduce pain.",
    overview:
      "Manual joint mobilization applies precise, graded passive movements to articular surfaces. By gently freeing restricted joint capsules and restoring arthrokinematic glide, it relieves joint guarding, decreases compressive pressure, and restores fluid range of motion.",
    conditionsTreated: [
      "Frozen shoulder (Adhesive Capsulitis)",
      "Osteoarthritis of the knee and hip",
      "Facet joint stiffness in cervical or lumbar spine",
      "Post-immobilization joint contractures after cast removal",
      "Ankle stiffness after fractures or sprains",
    ],
    keyBenefits: [
      "Pain relief via mechanoreceptor stimulation",
      "Breakdown of capsular adhesions and tightness",
      "Enhanced production and distribution of synovial fluid",
      "Smooth preparation for active strengthening exercises",
    ],
    whatToExpect:
      "Hands-on gentle oscillation or sustained glides within pain-free or comfortable thresholds. Completely non-invasive, progressive, and patient-centered.",
    icon: "Layers",
  },
  {
    id: "kinesiology-taping",
    slug: "kinesiology-taping",
    title: "Kinesiology Taping",
    category: "Specialized Therapies",
    shortDescription:
      "Elastic therapeutic taping to facilitate muscular function, assist lymphatic drainage, and provide sensory feedback.",
    overview:
      "Kinesiology taping applies elastic cotton tape designed to match the elasticity of human skin. By gently lifting the skin microscopically, it creates space for subcutaneous microcirculation, relieves tension on pain receptors, and provides sensory biofeedback during movement.",
    conditionsTreated: [
      "Acute edema and contusions after sports injuries",
      "Patellofemoral tracking imbalances",
      "Shoulder instability and postural awareness",
      "Plantar fasciitis and arch support",
    ],
    keyBenefits: [
      "Subtle continuous postural and positional biofeedback",
      "Support without restricting functional range of motion",
      "Assistance in fluid drainage and swelling reduction",
      "Water-resistant application lasting several days",
    ],
    whatToExpect:
      "Clean skin preparation followed by tension-calibrated tape application along anatomical muscle lines or lymphatic pathways.",
    icon: "Bandage",
  },
  {
    id: "iastm",
    slug: "iastm",
    title: "IASTM (Instrument Assisted Soft Tissue Mobilization)",
    category: "Specialized Therapies",
    shortDescription:
      "Ergonomic stainless-steel tool techniques to identify and address fascial restrictions and scar tissue.",
    overview:
      "Instrument Assisted Soft Tissue Mobilization utilizes specially contoured medical-grade instruments to detect and treat soft-tissue fibrosis, chronic tendinous scarring, and fascial adhesions. It stimulates localized fibroblast activity and tissue remodeling.",
    conditionsTreated: [
      "Chronic Achilles tendinitis & tendon thickening",
      "Plantar fasciitis and heel spur discomfort",
      "Post-surgical scar tissue remodeling",
      "IT band friction syndrome and thigh tightness",
    ],
    keyBenefits: [
      "Enhanced detection of deep fascial cross-links",
      "Acceleration of cellular collagen remodeling",
      "Restoration of natural fascial gliding planes",
      "Faster recovery when integrated with eccentric loading",
    ],
    whatToExpect:
      "Emollient lotion is applied, followed by gentle, rhythmic strokes of the ergonomic instrument across the target tissue to stimulate healthy circulation.",
    icon: "Compass",
  },
  {
    id: "strength-training",
    slug: "strength-training",
    title: "Therapeutic Strength & Conditioning",
    category: "Rehabilitation & Movement",
    shortDescription:
      "Clinically prescribed resistance exercises to build resilient joints, prevent recurrence, and enhance daily vitality.",
    overview:
      "Passive treatments alleviate pain, but progressive therapeutic resistance is the cornerstone of lasting recovery. Our clinical exercise prescriptions progressively build muscle cross-sectional capacity, tendon tensile tolerance, and bone mineral density safely under supervision.",
    conditionsTreated: [
      "General sarcopenia and age-related muscle loss",
      "Post-operative muscle atrophy (post ACL or arthroscopy)",
      "Generalized deconditioning following illness or prolonged rest",
      "Chronic lower extremity joint instability",
    ],
    keyBenefits: [
      "Long-term resistance against repetitive strain and injury",
      "Enhanced tendon resilience and joint shock-absorption",
      "Increased confidence in everyday physical tasks",
      "Individualized exercise programs with home progression guides",
    ],
    whatToExpect:
      "Gradual resistance using therapeutic bands, bodyweight mechanics, free weights, and functional movement circuits calibrated to current capacity.",
    icon: "Dumbbell",
  },
  {
    id: "electrotherapy",
    slug: "electrotherapy",
    title: "Electrotherapy (TENS & IFT)",
    category: "Clinical Modalities",
    shortDescription:
      "Targeted electro-physical modalities to calm sensory pain signals, ease acute spasms, and improve tissue perfusion.",
    overview:
      "Electrotherapeutic modalities such as Interferential Therapy (IFT) and Transcutaneous Electrical Nerve Stimulation (TENS) deliver gentle rhythmic electrical impulses that activate the pain gate mechanism and stimulate endorphin release.",
    conditionsTreated: [
      "Acute muscular spasm and guarding",
      "Localized arthritic joint flare-ups",
      "Post-traumatic swelling and soreness",
      "Radicular pain symptoms in early stages",
    ],
    keyBenefits: [
      "Non-pharmacological pain relief during acute episodes",
      "Relaxation of severe involuntary muscle spasms",
      "Mild thermal and circulatory enhancement in affected areas",
      "Prepares sensitive joints for comfortable active movement",
    ],
    whatToExpect:
      "Placement of comfortable gel electrodes over the target area. You feel a gentle, pleasant tingling vibration sensation with no sharp discomfort.",
    requiresConfirmation: false,
    icon: "Zap",
  },
  {
    id: "decompression-therapy",
    slug: "decompression-therapy",
    title: "Spinal Decompression & Traction",
    category: "Clinical Modalities",
    shortDescription:
      "Gentle motorized spinal axial unloading designed to decrease intradiscal pressure and relieve compressed nerves.",
    overview:
      "Decompression therapy delivers measured mechanical distraction forces to the spinal column. By creating negative intradiscal pressure, it aims to reduce bulging disc material and open the intervertebral neural foramina.",
    conditionsTreated: [
      "Cervical and lumbar disc protrusions",
      "Degenerative disc disease with nerve compression",
      "Spinal canal stenosis with neurogenic symptoms",
      "Facet joint compressive syndrome",
    ],
    keyBenefits: [
      "Reduction of pressure on compressed spinal nerve roots",
      "Promotion of fluid, oxygen, and nutrient flow into disc spaces",
      "Controlled and quantifiable therapeutic distraction cycles",
    ],
    whatToExpect:
      "You lie comfortably on a specialized traction table with supportive harnesses. The gentle traction cycles are monitored continuously.",
    requiresConfirmation: true, // Marked for client confirmation as requested
    icon: "Maximize2",
  },
  {
    id: "shockwave-therapy",
    slug: "shockwave-therapy",
    title: "Radial Shockwave Therapy",
    category: "Clinical Modalities",
    shortDescription:
      "Acoustic pressure pulses to stimulate angiogenesis and cellular healing in recalcitrant tendinopathies.",
    overview:
      "Extracorporeal Shockwave Therapy (ESWT) delivers focused acoustic pulses that penetrate deep into chronically inflamed tissues. The acoustic energy triggers micro-trauma that re-ignites stalled healing processes, breaks down calcifications, and stimulates new blood vessel formation.",
    conditionsTreated: [
      "Chronic calcific tendinitis of the shoulder",
      "Chronic plantar fasciitis recalcitrant to conservative care",
      "Refractory Achilles tendinopathy",
      "Chronic tennis elbow (lateral epicondylalgia)",
    ],
    keyBenefits: [
      "Stimulation of neo-vascularization in hypo-vascular tendons",
      "Breakdown of micro-calcifications in chronic tendinitis",
      "Substantial pain reduction in chronic non-responsive cases",
    ],
    whatToExpect:
      "Gel is applied, and a handheld applicator delivers acoustic pulses. Sensation is palpable and can feel mildly tender, but sessions are brief (5-10 minutes).",
    requiresConfirmation: true, // Marked for client confirmation as requested
    icon: "Radio",
  },
  {
    id: "laser-therapy",
    slug: "laser-therapy",
    title: "Class IV Laser / Photobiomodulation",
    category: "Clinical Modalities",
    shortDescription:
      "Deep-penetrating light energy to enhance mitochondrial ATP production and accelerate deep tissue repair.",
    overview:
      "Photobiomodulation uses specific wavelengths of light to stimulate cellular chromophores within mitochondria. This increases cellular ATP synthesis, reduces oxidative stress, and accelerates collagen synthesis in strained ligaments and tendons.",
    conditionsTreated: [
      "Deep joint inflammation and capsulitis",
      "Acute ligament sprains and tendon tears",
      "Neuralgia and persistent superficial nerve pain",
      "Post-surgical wound and soft-tissue healing",
    ],
    keyBenefits: [
      "Acceleration of cellular recovery cycles",
      "Reduction of inflammatory cytokine markers",
      "Completely painless, soothing warm therapeutic application",
    ],
    whatToExpect:
      "Protective goggles are worn by both clinician and patient. The laser wand is smoothed across the treatment site, producing a gentle warmth.",
    requiresConfirmation: true, // Marked for client confirmation as requested
    icon: "Sun",
  },
];
