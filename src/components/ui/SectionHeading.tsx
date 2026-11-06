import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 lg:mb-16",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full",
            isDark
              ? "bg-brand-gold/20 text-brand-gold-light border border-brand-gold/30"
              : "bg-brand-forest/10 text-brand-forest border border-brand-forest/15"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-tight",
          isDark ? "text-brand-ivory" : "text-brand-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-brand-cream/80" : "text-brand-muted"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "h-0.5 w-16 bg-brand-gold mt-6 rounded-full",
          isCenter ? "mx-auto" : "mr-auto"
        )}
      />
    </div>
  );
}

