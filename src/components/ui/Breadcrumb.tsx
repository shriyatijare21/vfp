import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="py-4 border-b border-[#EADBCC]/60 bg-brand-cream/30">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-muted">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-brand-forest transition-colors font-medium"
          >
            <Home className="w-3.5 h-3.5 text-brand-gold" />
            <span>Home</span>
          </Link>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-brand-muted/50 shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-brand-forest transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-brand-charcoal font-semibold truncate">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </Container>
    </div>
  );
}
