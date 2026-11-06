"use client";

import React, { useState } from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { servicesData } from "@/data/services";
import { MessageSquare, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("Back Pain Relief & Spine Care");
  const [preferredSlot, setPreferredSlot] = useState("Morning: 9:00 AM – 2:00 PM");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Group services for the select dropdown
  const spineServices = servicesData.filter((s) => s.category === "Spine & Pain Relief");
  const specializedServices = servicesData.filter((s) => s.category === "Specialized Therapies");
  const rehabServices = servicesData.filter((s) => s.category === "Rehabilitation & Movement");
  const modalityServices = servicesData.filter((s) => s.category === "Clinical Modalities");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage("Please enter your name before continuing.");
      const inputEl = document.getElementById("name");
      if (inputEl) inputEl.focus();
      return;
    }

    setErrorMessage(null);

    let text = `Hello Dr. Vaibhav Farande,\n`;
    text += `I would like to enquire about an appointment at Farande Physiotherapy Clinic.\n\n`;
    text += `*Patient Name:* ${name.trim()}\n`;
    if (phone.trim()) text += `*Contact Number:* ${phone.trim()}\n`;
    if (concern) text += `*Interested Service / Condition:* ${concern}\n`;
    if (preferredSlot) text += `*Preferred Timing:* ${preferredSlot}\n`;
    if (message.trim()) text += `*Symptoms / Notes:* ${message.trim()}\n`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-brand-white rounded-3xl p-7 sm:p-10 border border-brand-gold/40 shadow-luxury space-y-6">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-1">
          WhatsApp Direct Enquiry
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
          Schedule Your Clinical Consultation
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
          Fill in your details below to compile a personalized message directly to Dr. Vaibhav Farande.
        </p>
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="flex items-center gap-2 p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-medium"
        >
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5"
          >
            Your Full Name <span className="text-amber-700">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            aria-required="true"
            aria-invalid={!!errorMessage}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errorMessage) setErrorMessage(null);
            }}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-[#DECDB5] text-brand-dark text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/60 focus:border-brand-gold transition-all"
          />
        </div>

        {/* Contact Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5"
          >
            Your Phone Number (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-[#DECDB5] text-brand-dark text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/60 focus:border-brand-gold transition-all"
          />
        </div>

        {/* Primary Concern / Service */}
        <div>
          <label
            htmlFor="concern"
            className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5"
          >
            Service / Treatment of Interest
          </label>
          <select
            id="concern"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-[#DECDB5] text-brand-dark text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/60 focus:border-brand-gold transition-all"
          >
            <optgroup label="Spine & Pain Relief">
              {spineServices.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Specialized Therapies">
              {specializedServices.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Rehabilitation & Movement">
              {rehabServices.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Clinical Modalities">
              {modalityServices.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} {s.requiresConfirmation ? "(Subject to confirmation)" : ""}
                </option>
              ))}
            </optgroup>
            <optgroup label="General & Other">
              <option value="General Physical Therapy Consultation">
                General Physical Therapy Consultation
              </option>
              <option value="Unsure / Need Clinical Assessment">
                Unsure / Need Clinical Assessment
              </option>
            </optgroup>
          </select>
        </div>

        {/* Preferred Time Window */}
        <div>
          <label
            htmlFor="preferredSlot"
            className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5"
          >
            Preferred Timing Window
          </label>
          <select
            id="preferredSlot"
            value={preferredSlot}
            onChange={(e) => setPreferredSlot(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-[#DECDB5] text-brand-dark text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/60 focus:border-brand-gold transition-all"
          >
            <option value="Morning: 9:00 AM – 2:00 PM">Morning: 9:00 AM – 2:00 PM</option>
            <option value="Evening: 2:30 PM – 8:00 PM">Evening: 2:30 PM – 8:00 PM</option>
            <option value="Any Available Slot">Any Available Slot</option>
          </select>
        </div>

        {/* Symptoms / Notes */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5"
          >
            Brief Description of Symptoms (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="e.g. Lower back pain with morning stiffness for the past 2 weeks..."
            className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-[#DECDB5] text-brand-dark text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/60 focus:border-brand-gold transition-all resize-none"
          />
        </div>

        {/* Submit to WhatsApp */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba59] active:scale-[0.99] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
          >
            <MessageSquare className="w-5 h-5 fill-white shrink-0" />
            <span>Send Enquiry via WhatsApp (+91 70300 89050)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>

        {/* Transparency Reassurance Banner */}
        <div className="pt-2 p-3 rounded-xl bg-brand-ivory/50 border border-[#DECDB5] flex items-start gap-2 text-[11px] text-brand-muted leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
          <p>
            <strong>Privacy &amp; Security:</strong> This form formats an enquiry message and opens it in your official WhatsApp application. No health data is stored online or submitted to any server database.
          </p>
        </div>

        <div className="pt-1 text-center">
          <a
            href={clinicInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-muted hover:text-brand-forest underline decoration-brand-gold/60"
          >
            Or skip the form and open standard WhatsApp chat directly &rarr;
          </a>
        </div>
      </form>
    </div>
  );
}