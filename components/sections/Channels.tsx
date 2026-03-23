"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const tools = [
  { name: "Claude Code", icon: "/images/tech-logos/claude.svg" },
  { name: "Vercel", icon: "/images/tech-logos/vercel.svg" },
  { name: "Supabase", icon: "/images/tech-logos/supabase.svg" },
  { name: "Stripe", icon: "/images/tech-logos/stripe.svg" },
  { name: "GitHub", icon: "/images/tech-logos/github.svg" },
  { name: "Cursor", icon: "/images/tech-logos/cursor.svg" },
];

export function Channels() {
  const t = useTranslations("channels");
  return (
    <section className="py-12 bg-[var(--color-cream)] border-t border-[rgba(0,0,0,0.06)] overflow-hidden">
      <p className="text-center text-xs font-medium tracking-widest uppercase text-[var(--color-text-muted)] mb-8 px-6">
        {t("label")}
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--color-cream)] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--color-cream)] to-transparent" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex items-center gap-3 mx-8 shrink-0">
              <div className="w-5 h-5 relative shrink-0">
                <Image src={tool.icon} alt={tool.name} fill className="object-contain" />
              </div>
              <span className="text-sm font-medium text-[var(--color-text-secondary)] whitespace-nowrap">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Channels;
