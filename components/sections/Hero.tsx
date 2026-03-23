"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex flex-col bg-[var(--color-warm-white)] pt-24">
      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mb-6"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[var(--color-brown-muted)] text-[var(--color-brown-muted)]"
              />
            ))}
          </div>
          <span className="text-sm text-[var(--color-text-secondary)]">
            {t("trustBadge")}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-normal leading-[1.1] max-w-[800px] mb-6"
        >
          <span className="whitespace-nowrap">{t("titleLine1")}</span>
          <br />
          <span className="whitespace-nowrap">{t("titleLine2")}</span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          <span className="whitespace-nowrap">{t("titleLine3Start")} <span className="font-light italic text-[var(--color-brown-muted)]">{t("titleHighlight")}</span>{t("titleLine3End")}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[var(--color-text-secondary)] max-w-[600px] leading-relaxed mb-8"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button calLink="mateo-cano/construye-y-automatiza-con-ia">
            {t("ctaPrimary")}
          </Button>
          <Button variant="secondary" href="#how-we-work" icon="play">
            {t("ctaSecondary")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
