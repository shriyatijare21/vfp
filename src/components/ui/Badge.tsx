import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "gold" | "forest" | "cream" | "outline" | "pending";
  className?: string;
}

export function Badge({
  children,
  variant = "gold",
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    gold: "bg-brand-gold/15 text-brand-dark border-brand-gold/40 border",
    forest: "bg-brand-forest/10 text-brand-forest border-brand-forest/20 border",
    cream: "bg-brand-cream text-brand-charcoal border-[#ded5c2] border",
    outline: "bg-transparent text-brand-muted border-brand-muted/30 border",
    pending: "bg-amber-50 text-amber-800 border-amber-300 border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

