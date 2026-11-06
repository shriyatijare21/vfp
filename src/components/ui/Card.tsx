import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "ivory" | "cream" | "forest" | "glass";
  hoverEffect?: boolean;
  className?: string;
}

export function Card({
  children,
  variant = "ivory",
  hoverEffect = true,
  className,
  ...props
}: CardProps) {
  const variantStyles = {
    ivory: "bg-brand-white text-brand-charcoal border border-[#E9DFCE] shadow-sm",
    cream: "bg-brand-cream/80 text-brand-charcoal border border-[#DECDB5] shadow-sm",
    forest: "bg-brand-forest text-brand-ivory border border-brand-gold/30 shadow-luxury",
    glass: "bg-white/80 backdrop-blur-md text-brand-charcoal border border-white/40 shadow-sm",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 transition-all duration-300",
        variantStyles[variant],
        hoverEffect &&
          "hover:-translate-y-1 hover:shadow-luxury-hover hover:border-brand-gold/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

