# Farande Physiotherapy Clinic — Official Marketing Website

> **"The caring hands you deserve."**  
> A boutique, editorial-grade marketing website for **Farande Physiotherapy Clinic**, located in Amravati, Maharashtra, India. Led by **Dr. Vaibhav Ashok Farande (PT)**, BPT + MPT (Sports), consultant sports and musculoskeletal physiotherapist.

---

## 1. Project Overview

This website serves as the primary digital presence and appointment enquiry channel for Farande Physiotherapy Clinic. Designed with a warm, clinical, boutique aesthetic (Deep Forest Green, Warm Ivory, and Champagne Gold), it presents the clinic's 13 evidence-informed physiotherapy modalities, research initiatives, facilities, and direct WhatsApp consultation booking.

- **Client:** Farande Physiotherapy Clinic
- **Chief Consultant:** Dr. Vaibhav Ashok Farande (PT), BPT + MPT (Sports)
- **Clinic Address:** Shop No. 3, Mahakali Enclave, Sabnis Plot, Near Kali Mata Temple, Maltekdi, Amravati, Maharashtra – 444606, India
- **Helpline & WhatsApp:** `+91 70300 89050`
- **Consultation Hours:** Monday – Saturday: 9:00 AM – 2:00 PM & 2:30 PM – 8:00 PM (Sunday: Closed / Prior appointment)
- **Target Production Domain:** `https://farandephysio.in` (Domain purchase pending)
- **Live Preview URL:** `https://vfpcom.vercel.app`
- **GitHub Repository:** [https://github.com/shriyatijare21/vfp.git](https://github.com/shriyatijare21/vfp.git)

---

## 2. Technology Stack & Architecture

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, React Server Components & Static Site Generation)
- **Language:** TypeScript 5.6 (Strict Type Checking)
- **Styling:** Tailwind CSS 3.4 with custom boutique color tokens (`brand-forest`, `brand-gold`, `brand-ivory`, `brand-cream`, `brand-charcoal`)
- **Typography:** Next.js Google Fonts optimization (`Cormorant Garamond` serif headings + `Plus Jakarta Sans` body)
- **Icons:** Lucide React
- **Animations:** Framer Motion (restrained, accessible transitions)
- **Architecture Pattern:** Zero-backend, serverless architecture. Patient appointment enquiries compile into WhatsApp click-to-chat links (`wa.me`), eliminating server database storage, patient privacy risks, and backend maintenance costs.

---

## 3. Route Map & Pages

| Route | Purpose & Content | Status |
|---|---|:---:|
| `/` | **Homepage:** Hero with value proposition, Doctor spotlight, Services preview, Treatment journey, Practice care principles, Research feature, Maltekdi location, and appointment CTAs. | Complete |
| `/about` | **About Doctor & Clinic:** Dr. Vaibhav Farande's academic and sports background (BPT + MPT Sports, Garden City University), practice philosophy, 4 clinical pillars, and care standards. | Complete |
| `/services` | **Physiotherapy Services:** Comprehensive catalog of 13 modalities with interactive category filter tabs, clinical indications, expected outcomes, and per-service WhatsApp enquiry CTAs. | Complete |
| `/services/[slug]` | **Service Detail Views:** Static generation for all 13 services (e.g. `/services/dry-needling`, `/services/back-pain-relief`), structured clinical overview, protocol walkthrough, and sticky booking sidebar. | Complete |
| `/facilities` | **Facilities & Equipment:** Treatment plinths, electrotherapy modalities, single-use needle hygiene protocols, and transparent notice of pending advanced equipment. | Complete |
| `/research` | **Academic Research:** Academic profile, tendinopathy dry-needling research spotlight, Garden City University scholar affiliation, and direct ResearchGate profile integration. | Complete |
| `/contact` | **Contact & Location:** Maltekdi clinic address, consultation hours, telephone helpline, interactive Google Maps embed, and pre-formatted WhatsApp enquiry compiler. | Complete |
| `/_not-found` | **Custom 404:** Brand-aligned page not found fallback with direct navigation back to services or WhatsApp assistance. | Complete |
| `/sitemap.xml` | **Dynamic Sitemap:** Automatically generated sitemap with 19 verified URLs and change frequencies. | Complete |
| `/robots.txt` | **Search Engine Rules:** Open indexing directives with sitemap pointer and API disallow. | Complete |

---

## 4. Local Installation & Development

### Prerequisites
- **Node.js:** v18.17.0 or newer (Tested on Node v22.17.1)
- **npm:** v9.0.0 or newer (Tested on npm 11.4.2)
- **Git**

### Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shriyatijare21/vfp.git
   cd vfp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Verify TypeScript and Linting:**
   ```bash
   npx tsc --noEmit
   npm run lint
   ```

5. **Test Production Build:**
   ```bash
   npm run build
   npm run start
   ```

---

## 5. Vercel Deployment Instructions

The project is built specifically for seamless deployment on [Vercel](https://vercel.com). Because the website uses a client-side WhatsApp enquiry workflow, **no external databases or backend environment variables are required**.

### Step-by-Step Deployment:

1. Sign in to your [Vercel Dashboard](https://vercel.com).
2. Click **"Add New..."** &rarr; **"Project"**.
3. Under *Import Git Repository*, select your GitHub account and pick `shriyatijare21/vfp`.
4. Configure the project settings:
   - **Framework Preset:** `Next.js` (detected automatically)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` (or leave default)
   - **Output Directory:** `.next` (or leave default)
   - **Install Command:** `npm install` (or leave default)
5. **Environment Variables:** None required for core functionality.
6. Click **"Deploy"**.
7. Vercel will build the application in ~45 seconds and issue a temporary staging preview URL (e.g., `https://vfp-xxx.vercel.app`).

---

## 6. Post-Domain Purchase Configuration (`farandephysio.in`)

When the official domain `farandephysio.in` is registered, follow these steps to connect it to Vercel:

1. **Add Domain in Vercel:**
   - In your Vercel project dashboard, go to **Settings** &rarr; **Domains**.
   - Enter `farandephysio.in` and `www.farandephysio.in`.
2. **Configure DNS Records at your Registrar:**
   - **A Record:** `@` points to `76.76.21.21`
   - **CNAME Record:** `www` points to `cname.vercel-dns.com`
3. **Automatic SSL/TLS:** Vercel automatically generates and renews a free Let's Encrypt SSL certificate.
4. **Google Search Console Verification:**
   - Open [Google Search Console](https://search.google.com/search-console).
   - Add property `https://farandephysio.in`.
   - Submit the sitemap at `https://farandephysio.in/sitemap.xml`.

---

## 7. Client Asset Handover & Image Replacement Guide

Until real high-resolution photographs are supplied by Dr. Vaibhav Farande, the website utilizes crisp, branded SVG placeholders. Replace the placeholders with actual photography using the specifications below:

| Asset Name | Target File Path | Recommended Dimensions | Content Description |
|---|---|---|---|
| **Doctor Portrait** | `public/images/doctor/dr-vaibhav-farande.jpg` | 800 × 1000 px (4:5 portrait) | Professional, high-resolution portrait of Dr. Vaibhav Ashok Farande in clinic or white coat. |
| **Clinic Interior** | `public/images/clinic/reception-interior.jpg` | 1200 × 900 px (4:3) | Clean, well-lit photograph of the consultation room, reception, or treatment plinths. |
| **Hero Graphic** | `public/images/hero/hero-treatment.jpg` | 1200 × 900 px (4:3) | Hands-on physical therapy session or modern spine care setup. |
| **Social OG Banner** | `public/images/hero/clinic-og.jpg` | 1200 × 630 px (1.91:1) | Branded social preview card for WhatsApp, Facebook, LinkedIn previews. |

*See [`public/images/README.md`](public/images/README.md) and the comprehensive [`docs/image-assets-register.md`](docs/image-assets-register.md) for full permissions and copyright audit details.*

---

## 8. Client Approval Checklist (For Dr. Vaibhav Farande)

Prior to the final production launch on `farandephysio.in`, please obtain explicit written confirmation on the following 10 items:

- [ ] **1. Professional Doctor Portrait:** Approval of final portrait photograph for About and Homepage hero.
- [ ] **2. Clinic Interior & Exterior Photos:** Supply actual photographs of the Maltekdi clinic facility.
- [ ] **3. Treatment Photographs:** Real in-clinic session photos (manual therapy, dry needling, rehab).
- [ ] **4. Decompression Therapy Confirmation:** Confirm whether motorized spinal decompression traction is operational on-site to remove the "Pending Confirmation" badge.
- [ ] **5. Radial Shockwave (ESWT) Confirmation:** Confirm operational availability of acoustic shockwave therapy.
- [ ] **6. Class IV Laser Confirmation:** Confirm operational availability of photobiomodulation / laser equipment.
- [ ] **7. Official Clinic Email Address:** Confirm official contact email (currently default placeholder `contact@farandephysio.in`).
- [ ] **8. Consultation Hours:** Confirm exact opening and lunch closure timings (currently Monday–Saturday 9:00 AM – 2:00 PM & 2:30 PM – 8:00 PM).
- [ ] **9. Google Business Profile URL:** Supply verified Google Maps place link to replace search query coordinates.
- [ ] **10. Medical Content & Bio Sign-Off:** Final doctor approval of service indications, academic bio, and ethical healthcare disclaimers.

---

## 9. Security & Privacy Assurance

- **Zero-Storage Architecture:** No patient names, phone numbers, or symptom details are submitted to or stored on any server or database.
- **Client-Side WhatsApp Compiler:** The contact form acts strictly as a URL generator formatting WhatsApp API parameters directly in the user's browser.
- **Safe External Links:** All external resources (ResearchGate, Justdial, Google Maps, WhatsApp) include `rel="noopener noreferrer"`.
- **Zero Third-Party Tracking Scripts:** No unvetted analytics, tracking pixels, or invasive tracking cookies.

---

## 10. License & Maintenance

&copy; 2026 Farande Physiotherapy Clinic. All rights reserved.  
Developed by Freelance Engineering Team.
