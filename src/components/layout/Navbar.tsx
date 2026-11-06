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

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-brand-ivory/95 backdrop-blur-md shadow-sm border-b border-[#E7DDCA]"
          : "bg-brand-ivory/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      {/* Top micro announcement bar */}
      <div className="bg-brand-forest text-brand-ivory text-xs py-1.5 px-4">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline font-light tracking-wide">
              {clinicInfo.tagline}
            </span>
            <span className="sm:hidden font-light">Amravati, Maharashtra</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${clinicInfo.phone}`}
              className="flex items-center gap-1.5 text-brand-gold-light hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">{clinicInfo.phoneDisplay}</span>
            </a>
            <span className="text-white/30 hidden md:inline">|</span>
            <span className="hidden md:inline text-white/70">
              Mon–Sat: 9 AM–2 PM & 2:30 PM–8 PM
            </span>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Container className="flex items-center justify-between h-20">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-brand-forest text-brand-gold flex items-center justify-center border border-brand-gold/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <HeartPulse className="w-6 h-6 stroke-[1.8]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-forest leading-tight group-hover:text-brand-dark transition-colors">
              Farande
            </span>
            <span className="text-[11px] font-sans tracking-[0.16em] uppercase text-brand-gold font-semibold">
              Physiotherapy Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
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
                  "text-sm font-medium transition-colors duration-200 py-1 border-b-2",
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
        <div className="hidden sm:flex items-center gap-3">
          <Button
            href={clinicInfo.whatsappUrl}
            isExternal
            variant="whatsapp"
            size="sm"
            className="hidden xl:inline-flex"
          >
            <MessageSquare className="w-4 h-4 mr-1" />
            WhatsApp Enquiry
          </Button>

          <Button
            href={clinicInfo.whatsappUrl}
            isExternal
            variant="gold"
            size="sm"
          >
            Enquire Appointment
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            href={clinicInfo.whatsappUrl}
            isExternal
            variant="whatsapp"
            size="sm"
            className="sm:hidden px-3 py-1.5 text-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-brand-forest hover:bg-brand-cream/60 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
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
        <div className="lg:hidden bg-brand-ivory border-b border-[#E7DDCA] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
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
                    "px-3 py-2.5 rounded-lg text-base font-medium transition-colors",
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
                className="w-full justify-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat on WhatsApp (+91 70300 89050)
              </Button>
              <Button
                href={`tel:${clinicInfo.phone}`}
                isExternal
                variant="outline"
                className="w-full justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Clinic Directly
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
