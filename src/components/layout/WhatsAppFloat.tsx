"use client";

import React, { useState } from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { MessageSquare, X } from "lucide-react";

export function WhatsAppFloat() {
  const [isDismissed, setIsDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 group">
      {/* Tooltip prompt (dismissible or shown on hover) */}
      {!isDismissed && (
        <div className="hidden md:flex items-center gap-2 bg-brand-white text-brand-dark px-4 py-2.5 rounded-2xl shadow-luxury border border-brand-gold/30 text-xs animate-in fade-in slide-in-from-right-4 duration-300">
          <div>
            <p className="font-semibold text-brand-forest">Have questions?</p>
            <p className="text-brand-muted text-[11px]">Chat directly on WhatsApp</p>
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-brand-muted/60 hover:text-brand-dark p-0.5 ml-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={clinicInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp with Farande Physiotherapy Clinic (+91 70300 89050)"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 relative focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-0" />
        <MessageSquare className="w-7 h-7 fill-white stroke-none relative z-10" />
      </a>
    </div>
  );
}

