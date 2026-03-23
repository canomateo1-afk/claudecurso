"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui";

export function Education() {
  const t = useTranslations("education");

  return (
    <section className="py-24 px-6 bg-[var(--color-warm-white)]">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <SectionLabel>{t("sectionLabel")}</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-tight mt-4 mb-6"
            >
              {t("title")}{" "}
              <span className="font-light italic text-[var(--color-brown-muted)]">
                {t("titleHighlight")}
              </span>
              .
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-[480px]"
            >
              {t("description")}
            </motion.p>
            <motion.a
              href="https://claudecurso.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 text-[var(--color-text-primary)] font-medium border-b border-[var(--color-text-primary)] pb-0.5 hover:opacity-70 transition-opacity group"
            >
              {t("cta")}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Right - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🎓", title: t("feature1Title"), desc: t("feature1Desc") },
              { icon: "⚡", title: t("feature2Title"), desc: t("feature2Desc") },
              { icon: "🤝", title: t("feature3Title"), desc: t("feature3Desc") },
              { icon: "🚀", title: t("feature4Title"), desc: t("feature4Desc") },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6 bg-[var(--color-cream)] border border-[var(--color-border)]"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-medium text-[var(--color-text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
