"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinicInfo } from "@/data/clinicInfo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Menu, X, Phone, MessageSquare, HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Clinic & Doctor" },
  { href: "/services", label: "Services" },
  { href: "/facilities", label: "Facilities & Equipment" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact & Location" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-brand-ivory/95 backdrop-blur-md shadow-sm border-b border-[#E7DDCA]"
          : "bg-brand-ivory/85 backdrop-blur-sm border-b border-transparent"
      )}
    >
      {/* Top micro announcement bar */}
      <div className="bg-brand-forest text-brand-ivory text-xs py-1.5 px-3 sm:px-4">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="hidden sm:inline font-light tracking-wide truncate">
              {clinicInfo.tagline}
            </span>
            <span className="sm:hidden font-light text-[11px] truncate">
              Amravati, Maharashtra &bull; Mon–Sat
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-xs shrink-0">
            <a
              href={`tel:${clinicInfo.phone}`}
              className="flex items-center gap-1.5 text-brand-gold-light hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span className="font-medium text-[11px] sm:text-xs">
                {clinicInfo.phoneDisplay}
              </span>
            </a>
            <span className="text-white/30 hidden md:inline">|</span>
            <span className="hidden md:inline text-white/70 text-[11px]">
              9:00 AM – 2:00 PM &amp; 2:30 PM – 8:00 PM
            </span>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <Container className="flex items-center justify-between h-18 sm:h-20">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          aria-label="Farande Physiotherapy Clinic - Return to homepage"
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-xl p-1"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-forest text-brand-gold flex items-center justify-center border border-brand-gold/40 shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
            <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-brand-forest leading-none group-hover:text-brand-dark transition-colors">
              Farande
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.14em] sm:tracking-[0.16em] uppercase text-brand-gold font-semibold mt-0.5">
              Physiotherapy Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs xl:text-sm font-medium transition-colors duration-200 py-1 border-b-2 tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm",
                  isActive
                    ? "text-brand-forest border-brand-gold font-semibold"
                    : "text-brand-charcoal/80 border-transparent hover:text-brand-forest hover:border-brand-gold/50"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 sm:gap-3">
          <Button
            href={clinicInfo.whatsappUrl}
            isExternal
            variant="whatsapp"
            size="sm"
            className="hidden xl:inline-flex"
            aria-label="Enquire on WhatsApp (+91 70300 89050)"
          >
            <MessageSquare className="w-4 h-4 mr-1.5 fill-white" />
            WhatsApp
          </Button>

          <Button
            href={clinicInfo.whatsappUrl}
            isExternal
            variant="gold"
            size="sm"
            className="shadow-sm"
            aria-label="Enquire for clinic appointment on WhatsApp"
          >
            Enquire Appointment
          </Button>
        </div>

        {/* Mobile menu toggle & quick action */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
          <a
            href={clinicInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire on WhatsApp (+91 70300 89050)"
            className="sm:hidden p-2 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-brand-forest hover:bg-brand-cream/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="lg:hidden bg-brand-ivory border-b border-[#E7DDCA] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    isActive
                      ? "bg-brand-forest text-brand-white font-semibold"
                      : "text-brand-charcoal hover:bg-brand-cream/60"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[#E7DDCA] flex flex-col gap-2.5">
              <Button
                href={clinicInfo.whatsappUrl}
                isExternal
                variant="whatsapp"
                className="w-full justify-center py-3 text-xs"
              >
                <MessageSquare className="w-4 h-4 mr-2 fill-white" />
                Chat on WhatsApp (+91 70300 89050)
              </Button>
              <Button
                href={`tel:${clinicInfo.phone}`}
                isExternal
                variant="outline"
                className="w-full justify-center py-3 text-xs"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Clinic Directly
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
