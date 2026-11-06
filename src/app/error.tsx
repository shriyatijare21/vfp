"use client";

import React, { useEffect } from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RotateCcw, Home, MessageSquare, AlertTriangle } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors securely without compromising sensitive data
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-brand-ivory">
      <Container className="text-center max-w-xl px-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-300 shadow-sm mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 font-semibold text-xs uppercase tracking-widest mb-4">
          Temporary Display Notice
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
          Something Unexpected Occurred
        </h1>

        <p className="text-sm text-brand-muted leading-relaxed mb-8">
          We encountered an issue rendering this section. You can try refreshing the view, return to our homepage, or message Dr. Vaibhav Farande directly for appointment enquiries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-forest text-brand-white hover:bg-brand-dark font-medium text-sm transition-colors shadow-sm"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Reloading Page
          </button>

          <Button href="/" variant="outline" size="md" className="w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Button>

          <Button
            href={clinicInfo.whatsappUrl}
            isExternal
            variant="whatsapp"
            size="md"
            className="w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat on WhatsApp
          </Button>
        </div>

        <div className="border-t border-[#DECDB5] pt-6 text-xs text-brand-muted">
          <p>Farande Physiotherapy Clinic &bull; Amravati, Maharashtra</p>
          <p className="mt-1">Helpline: {clinicInfo.phoneDisplay}</p>
        </div>
      </Container>
    </div>
  );
}
