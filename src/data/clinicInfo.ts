export interface ClinicInfo {
  name: string;
  doctorName: string;
  doctorTitle: string;
  doctorDegree: string;
  doctorBio: string;
  doctorResearchAffiliation: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappMessage: string;
  whatsappUrl: string;
  email: string;
  address: {
    line1: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  timing: {
    regular: string;
    sunday: string;
    note: string;
  };
  googleMapsUrl: string;
  googleMapsEmbed: string;
  social: {
    researchGate: string;
    instagram: string;
    linkedIn: string;
    justdial: string;
  };
}

const defaultMessage = "Hello, I would like to enquire about an appointment at Farande Physiotherapy Clinic.";

export const clinicInfo: ClinicInfo = {
  name: "Farande Physiotherapy Clinic",
  doctorName: "Dr. Vaibhav Ashok Farande",
  doctorTitle: "Consultant Physiotherapist",
  doctorDegree: "BPT (Bachelor of Physiotherapy)",
  doctorBio:
    "Dr. Vaibhav Ashok Farande (PT) is an evidence-informed physiotherapist dedicated to restoring movement, relieving musculoskeletal pain, and helping individuals regain active, fulfilling lives. Combining clinical expertise with ongoing academic research, he offers personalized, compassionate rehabilitation tailored to each patient's individual needs.",
  doctorResearchAffiliation: "School of Health Sciences, Garden City University (Postgraduate Researcher)",
  tagline: "The caring hands you deserve.",
  phone: "+917030089050",
  phoneDisplay: "+91 70300 89050",
  whatsappNumber: "917030089050",
  whatsappMessage: defaultMessage,
  whatsappUrl: `https://wa.me/917030089050?text=${encodeURIComponent(defaultMessage)}`,
  email: "contact@farandephysio.in", // Placeholder awaiting client custom email
  address: {
    line1: "Shop No. 3, Mahakali Enclave",
    landmark: "Near Kali Mata Temple, Sabnis Plot",
    area: "Maltekdi",
    city: "Amravati",
    state: "Maharashtra",
    postalCode: "444606",
    country: "India",
    fullFormatted:
      "Shop No. 3, Mahakali Enclave, Sabnis Plot, Near Kali Mata Temple, Maltekdi, Amravati, Maharashtra - 444606",
  },
  timing: {
    regular: "Monday – Saturday: 9:00 AM – 2:00 PM & 2:30 PM – 8:00 PM",
    sunday: "Closed",
    note: "Consultations by prior appointment are recommended to ensure dedicated attention.",
  },
  googleMapsUrl: "https://maps.google.com/?q=Farande+Physiotherapy+Clinic+Amravati",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.674516348425!2d77.7554!3d20.9320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU1JzU1LjIiTiA3N8KwNDUnMTkuNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
  social: {
    researchGate: "https://www.researchgate.net/profile/Vaibhav-Farande",
    instagram: "https://www.instagram.com/p/Dc7gP24An2F/",
    linkedIn: "https://in.linkedin.com/in/dr-vaibhav-farande-pt-440056252",
    justdial: "https://www.justdial.com/Amravati/Farande-Physiotherapy-Clinic-Near-Kali-Mata-Temple-Maltekdi/9999PX721-X721-260816171626-F5F6_BZDET",
  },
};
