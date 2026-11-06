"use client";

import React, { useState } from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { MessageSquare, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("Back Pain / Spine Discomfort");
  const [preferredSlot, setPreferredSlot] = useState("Morning (9:00 AM – 2:00 PM)");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Hello Dr. Vaibhav Farande,\n`;
    text += `I would like to enquire about a physiotherapy appointment at Farande Physiotherapy Clinic.\n\n`;
    if (name.trim()) text += `*Name:* ${name.trim()}\n`;
    if (phone.trim()) text += `*Contact:* ${phone.trim()}\n`;
    if (concern) text += `*Primary Concern:* ${concern}\n`;
    if (preferredSlot) text += `*Preferred Time:* ${preferredSlot}\n`;
    if (message.trim()) text += `*Notes/Symptoms:* ${message.trim()}\n`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-brand-white rounded-3xl p-8 sm:p-10 border border-brand-gold/40 shadow-luxury space-y-6">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-1">
          WhatsApp Direct Enquiry
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
          Schedule Your Clinical Consultation
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
          Fill in your details below to generate a pre-formatted WhatsApp message directly to Dr. Vaibhav Farande.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5"
          >
            Your Full Name <span className="text-amber-800">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-[#DECDB5] text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/60 focus:border-brand-gold transition-all"
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
            className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-[#DECDB5] text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/60 focus:border-brand-gold transition-all"
          />
        </div>

        {/* Primary Concern / Service */}
        <div>
          <label
            htmlFor="concern"
            className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5"
          >
            Primary Reason for Consultation
          </label>
          <select
            id="concern"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-[#DECDB5] text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/60 focus:border-brand-gold transition-all"
          >
            <option value="Back Pain / Spine Discomfort">Back Pain & Spine Care</option>
            <option value="Sports Injury Rehabilitation">Sports Injury Rehabilitation</option>
            <option value="Dry Needling Therapy">Dry Needling Consultation</option>
            <option value="Neck Pain & Cervical Stiffness">Neck Pain & Cervical Stiffness</option>
            <option value="Joint Mobilization (Knee / Shoulder)">Joint Mobilization (Knee / Shoulder)</option>
            <option value="Neuro Physiotherapy (Stroke / Nerve)">Neuro Physiotherapy</option>
            <option value="Posture Correction & Ergonomics">Posture Correction & Desk Ergonomics</option>
            <option value="General Physical Therapy Consultation">General Physical Assessment</option>
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
            className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-[#DECDB5] text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/60 focus:border-brand-gold transition-all"
          >
            <option value="Morning (9:00 AM – 2:00 PM)">Morning: 9:00 AM – 2:00 PM</option>
            <option value="Evening (2:30 PM – 8:00 PM)">Evening: 2:30 PM – 8:00 PM</option>
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
            placeholder="e.g. Pain in lower back radiating down the leg for 2 weeks..."
            className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-[#DECDB5] text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/60 focus:border-brand-gold transition-all resize-none"
          />
        </div>

        {/* Submit to WhatsApp */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba59] active:scale-[0.99] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            Send Enquiry via WhatsApp (+91 70300 89050)
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="pt-2 text-center">
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
