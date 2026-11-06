import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  isExternal = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-brand-forest text-brand-white hover:bg-brand-dark shadow-sm hover:shadow-luxury focus:ring-brand-forest",
    secondary:
      "bg-brand-cream text-brand-forest hover:bg-[#e4dcce] border border-[#d8cfbe] focus:ring-brand-forest",
    gold:
      "bg-brand-gold text-brand-dark hover:bg-[#b8954e] shadow-gold font-semibold focus:ring-brand-gold",
    outline:
      "bg-transparent text-brand-forest border border-brand-forest/30 hover:border-brand-forest hover:bg-brand-forest/5 focus:ring-brand-forest",
    ghost:
      "bg-transparent text-brand-forest hover:bg-brand-cream/60 focus:ring-brand-forest",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20ba59] shadow-md hover:shadow-lg focus:ring-[#25D366]",
  };

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

