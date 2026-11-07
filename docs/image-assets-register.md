# Farande Physiotherapy Clinic — Image Assets & Permissions Register

> **Document Status:** Active Audit & Verification Register  
> **Last Updated:** November 2026  
> **Applicable Project:** Farande Physiotherapy Clinic Website (`https://farandephysio.in`)  
> **Governing Principle:** Public accessibility on social platforms or business directories does *not* constitute a legal or commercial license for website integration. All assets must have documented ownership, explicit doctor authorization, and verified patient privacy consent where applicable.

---

## 1. Master Image Inventory & Permissions Table

| Asset Identifier | Intended Placement | Sourced URL / Origin | Apparent Owner / Publisher | Permission Status | Recommended Action |
|---|---|---|---|---|---|
| **Official Clinic Logo** | Navigation Header (`Navbar`), Footer, Favicon & Metadata | Direct Client Asset (Provided by Dr. Farande) | Farande Physiotherapy Clinic | **Client Authorized** | Ready for immediate integration in `public/images/logo/clinic-logo.svg` (or `clinic-logo.png`). |
| **Dr. Vaibhav Ashok Farande (Official Portrait)** | Homepage Doctor Section (`/`) & About Page (`/about`) | Direct Client Asset (Pending) / LinkedIn Profile (`https://in.linkedin.com/in/dr-vaibhav-farande-pt-440056252`) | Dr. Vaibhav Ashok Farande | **Awaiting High-Res Delivery from Doctor** | Maintain clean editorial brand crest in `doctor-portrait.svg` until Dr. Farande delivers the official high-resolution JPEG (`doctor/dr-vaibhav-farande.jpg`). **Do not scrape low-res LinkedIn thumbnail.** |
| **Clinic Signboard / Exterior View** | Contact Page (`/contact`) & Maltekdi Map Section (`/`) | Justdial Listing (`https://www.justdial.com/...`) / Google Maps Listing | Justdial / Google Maps Listing Photographer (Unknown third party) | **Rejected / Usage Rights Unclear** | **Do not integrate third-party directory uploads.** Request high-resolution original photograph of the Shop No. 3 signboard directly from Dr. Farande to place in `clinic/clinic-exterior.jpg`. |
| **Reception & Waiting Area** | Facilities Page (`/facilities`) | Direct Client Asset (Pending) | Farande Physiotherapy Clinic | **Awaiting Delivery from Clinic** | Awaiting original on-site clinic photograph (`clinic/clinic-reception.jpg`). Restrained facility architectural badge currently active. |
| **Consultation & Treatment Plinth Room** | Facilities Page (`/facilities`) & Services Pages | Direct Client Asset (Pending) | Farande Physiotherapy Clinic | **Awaiting Delivery from Clinic** | Awaiting genuine interior photo of consultation plinth (`facilities/physiotherapy-treatment-room.jpg`). |
| **Electrotherapy & Clinical Equipment** | Facilities Page (`/facilities`) & Electrotherapy Service (`/services/electrotherapy`) | Instagram Post (`https://www.instagram.com/p/Dc7gP24An2F/`) | Farande Physiotherapy Clinic Instagram | **Awaiting Doctor Permission Confirmation** | While uploaded to clinic Instagram, re-uploading requires explicit confirmation from Dr. Farande to ensure equipment depicted matches current in-clinic inventory. Once confirmed, place in `equipment/therapy-equipment.jpg`. |
| **Dry Needling Procedure In-Action** | Dry Needling Detail Route (`/services/dry-needling`) | Clinical Demonstration (Pending) | Farande Physiotherapy Clinic / Patient | **Strict Consent Required Before Integration** | Real in-clinic needling photos require documented, signed patient privacy consent under medical ethics standards. Keep text-led editorial walkthrough until consent-verified photograph is delivered (`treatments/dry-needling-procedure.jpg`). |
| **Spine Biomechanical Graphic** | Homepage Hero (`/`) | In-House Custom SVG Vector (`hero-graphic.svg`) | Project Design Team | **Approved & Integrated** | Custom branded vector graphic depicting spinal alignment and evidence protocol. 100% royalty-free, fully owned by project. |
| **Farande Clinic Social Share Banner (OG)** | Social Metadata & Link Previews (WhatsApp, Facebook, Twitter) | In-House Custom SVG/PNG (`clinic-og.svg`) | Project Design Team | **Approved & Integrated** | Branded 1200×630 editorial card featuring official clinic name, tagline (*"The caring hands you deserve"*), and Amravati location. 100% royalty-free. |

---

## 2. Status Classification Summary

### A. Approved and Integrated Assets
1. **`public/images/placeholders/hero-graphic.svg`:** Custom biomechanical vector designed specifically for the clinic's hero section. Fully authorized, 0 third-party copyright dependencies.
2. **`public/images/hero/clinic-og.svg`:** Custom social open-graph card with brand palette (#173D32, #C6A45C, #F8F4EB). Fully authorized.

### B. Images Awaiting Permission / Formal Sign-Off
1. **Instagram Promotional Material (`https://www.instagram.com/p/Dc7gP24An2F/`):**
   - *Status:* Awaiting Dr. Farande's written sign-off confirming that the promotional graphics/photographs on Instagram can be repurposed for the official website.
   - *Resolution:* If confirmed, original high-res source files should be requested rather than using compressed Instagram screenshots.

### C. Images Still Required Directly from Clinic
1. **`public/images/doctor/dr-vaibhav-farande.jpg`:** High-resolution portrait of Dr. Vaibhav Ashok Farande in professional medical attire. (Aspect ratio: 4:5, recommended: 800×1000px).
2. **`public/images/clinic/clinic-exterior.jpg`:** Clear daytime photograph of the clinic entrance and signboard at *Shop No. 3, Mahakali Enclave, Sabnis Plot, Maltekdi*. (Aspect ratio: 4:3, recommended: 1200×900px).
3. **`public/images/clinic/clinic-reception.jpg`:** Welcoming, clean view of the reception and patient seating area. (Aspect ratio: 4:3, recommended: 1200×900px).
4. **`public/images/facilities/physiotherapy-treatment-room.jpg`:** Well-lit view of the private treatment cubicles and ergonomic examination plinths. (Aspect ratio: 4:3, recommended: 1200×900px).
5. **`public/images/equipment/therapy-equipment.jpg`:** Close-up of active clinical electrotherapy devices, exercise resistance tools, and sterile dry needling supplies. (Aspect ratio: 4:3, recommended: 1200×900px).

### D. Images Rejected / Excluded from Website
1. **Justdial & Google Maps User-Uploaded Photos:**
   - *Reason for Rejection:* Images uploaded to public local listings often contain user-generated content, watermarks, compression artifacts, and unverified copyrights. Under strict client-readiness and copyright compliance rules, these have been strictly excluded from the production website.
2. **AI-Generated Synthetic Portraits / Fake Interiors:**
   - *Reason for Rejection:* AI-generated faces or simulated clinic photos violate medical authenticity, undermine patient trust, and contradict Dr. Farande's clinical credibility. Prohibited throughout the project.

---

## 3. Directory Structure & File Naming Conventions

All assets are organized strictly within `public/images/`:

```
public/images/
├── README.md                      # Asset replacement guidelines & dimension specifications
├── hero/
│   ├── clinic-og.svg              # Active verified social card (1200x630)
│   └── hero-treatment.jpg         # [Pending Client Photo] Recommended replacement for hero
├── doctor/
│   └── dr-vaibhav-farande.jpg     # [Pending Client Photo] Professional portrait of Dr. Farande (4:5)
├── clinic/
│   ├── clinic-exterior.jpg        # [Pending Client Photo] Shop No. 3 entrance & signboard (4:3)
│   └── clinic-reception.jpg       # [Pending Client Photo] Waiting area & reception desk (4:3)
├── facilities/
│   └── physiotherapy-treatment-room.jpg # [Pending Client Photo] Private cubicles & plinth (4:3)
├── equipment/
│   └── therapy-equipment.jpg      # [Pending Client Photo] Active clinical modalities (4:3)
├── treatments/
│   └── dry-needling-procedure.jpg # [Pending Client Photo with Consent] Real clinical session
└── placeholders/
    ├── doctor-portrait.svg        # Dignified, restrained placeholder crest for Dr. Farande
    ├── clinic-interior.svg        # Clean architectural placeholder for treatment suites
    └── hero-graphic.svg           # Biomechanical vector for hero presentation
```

---

## 4. Patient Privacy & Clinical Ethics Protocol

1. **Patient Consent:** Any photograph depicting a patient undergoing assessment, dry needling, joint mobilization, or exercise therapy must have a signed written consent form on file at Farande Physiotherapy Clinic before publication.
2. **Facial Privacy:** If written facial release is not explicitly granted, patient faces must be angled away from the camera or blurred to protect healthcare confidentiality.
3. **Medical Truthfulness:** Equipment photographs must show only machinery that is physically installed and operational at the Maltekdi facility.

