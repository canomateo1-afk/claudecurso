"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Plus, CornerDownRight } from "lucide-react";
import { Button, DotGrid, SectionLabel } from "@/components/ui";
import { Marquee } from "@/components/animations";
import { cn } from "@/lib/utils";

export interface LandingVariant {
  title1: string;
  title2: string;
  titleHighlight: string;
  subtitle: string;
}

export interface LandingStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface LandingStat {
  value: string;
  label: string;
}

export interface LandingFAQ {
  question: string;
  answer: string;
}

export interface LandingTemplateProps {
  variant: LandingVariant;
  trustBadge?: string;
  marqueeLabel?: string;
  processSectionLabel?: string;
  processTitle: string;
  processSubtitle: string;
  steps: LandingStep[];
  differentialLabel: string;
  differentialTitle: string;
  differentialTitleHighlight: string;
  differentialDesc: string;
  stats: LandingStat[];
  faqs: LandingFAQ[];
  calLink: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  heroImage?: string;
}

const logos = [
  { name: "CALIFORNIA", style: "font-bold tracking-widest" },
  { name: "venice.", style: "font-normal" },
  { name: "theo", style: "font-display italic" },
  { name: "Amsterdam", style: "font-normal" },
  { name: "Hamilton", style: "font-normal" },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[var(--color-cream-dark)] rounded-lg overflow-hidden">
      <button onClick={onClick} className="w-full flex items-center justify-between p-6 text-left">
        <span className="font-medium pr-4">{question}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} className="shrink-0"><Plus className="w-5 h-5" /></motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}>
            <p className="px-6 pb-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function LandingTemplate({
  variant, trustBadge = "Hemos ayudado a más de 100 negocios", marqueeLabel = "Marcas que trabajan con nosotros:",
  processSectionLabel = "Cómo funciona",
  processTitle, processSubtitle, steps, differentialLabel, differentialTitle, differentialTitleHighlight, differentialDesc,
  stats, faqs, calLink, ctaPrimary, ctaSecondary = "Cómo funciona", heroImage = "/images/flower.png",
}: LandingTemplateProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const activeStep = steps[activeTab];
  const calNamespace = calLink.split("/").pop() ?? "";

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex flex-col bg-[var(--color-warm-white)] pt-24">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mb-6">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[var(--color-brown-muted)] text-[var(--color-brown-muted)]" />)}</div>
            <span className="text-sm text-[var(--color-text-secondary)]">{trustBadge}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-normal leading-[1.1] max-w-[800px] mb-6">
            <span>{variant.title1}</span><br />
            <span>{variant.title2} <span className="font-light italic text-[var(--color-brown-muted)]">{variant.titleHighlight}</span>.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-[var(--color-text-secondary)] max-w-[600px] leading-relaxed mb-8">{variant.subtitle}</motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-4">
            <Button calLink={calLink}>{ctaPrimary}</Button>
            <Button variant="secondary" href="#proceso" icon="play">{ctaSecondary}</Button>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="w-full max-w-[var(--container-max-width)] mx-auto px-6 mb-8">
          <div className="relative aspect-[2.5/1] rounded-[var(--radius-3xl)] overflow-hidden group cursor-pointer">
            <Image src={heroImage} alt="" fill sizes="(max-width: 768px) 100vw, 1200px" className="object-cover transition-transform duration-700 group-hover:scale-105 z-0" priority />
            <DotGrid rows={9} cols={23} dotSize={12} gap={48} animated={true} className="z-10" />
          </div>
        </motion.div>
        <div className="py-8">
          <div className="max-w-[var(--container-max-width)] mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
              <p className="text-sm text-[var(--color-text-muted)] whitespace-nowrap shrink-0 md:pr-16 text-center md:text-left">{marqueeLabel}</p>
              <div className="flex-1 overflow-hidden">
                <Marquee speed={30} pauseOnHover>
                  {logos.map((logo) => (
                    <span key={logo.name} className={`text-xl md:text-2xl text-[var(--color-text-muted)]/40 hover:text-[var(--color-text-muted)] transition-colors whitespace-nowrap ${logo.style}`}>
                      {logo.name === "Hamilton" && <span className="mr-1">✱</span>}{logo.name}
                    </span>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="py-24 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>{processSectionLabel}</SectionLabel>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-tight mb-4" dangerouslySetInnerHTML={{ __html: processTitle }} />
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[var(--color-text-secondary)] max-w-[700px] mx-auto leading-relaxed">{processSubtitle}</motion.p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-2">
              {steps.map((step, index) => (
                <motion.button key={step.number} onClick={() => setActiveTab(index)} onMouseEnter={() => setActiveTab(index)} onFocus={() => setActiveTab(index)}
                  className={cn("w-full text-left py-4 px-6 rounded-xl transition-all duration-300 flex items-baseline", activeTab === index ? "bg-[var(--color-cream-dark)]" : "hover:bg-[var(--color-cream-dark)]/50")}
                  whileHover={{ x: activeTab === index ? 0 : 4 }}>
                  <span className={cn("font-display text-[clamp(2rem,5vw,3.5rem)] transition-colors duration-300", activeTab === index ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)]/40")}>{step.title}</span>
                  <sup className={cn("text-sm ml-1 transition-colors duration-300", activeTab === index ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)]/40")}>{step.number}</sup>
                </motion.button>
              ))}
            </div>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <div className="relative aspect-[4/3] w-full max-w-[520px] mx-auto lg:mx-0 rounded-[var(--radius-3xl)] overflow-hidden mb-6">
                    <Image src={activeStep.image} alt={activeStep.title} fill className="object-cover" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{activeStep.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">{activeStep.description}</p>
                  <button data-cal-namespace={calNamespace} data-cal-link={calLink} data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}' className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-brown)] transition-colors cursor-pointer">
                    <CornerDownRight className="w-4 h-4" />Agenda una llamada gratis
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-24 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <SectionLabel>{differentialLabel}</SectionLabel>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-tight">
                {differentialTitle} <span className="font-light italic text-[var(--color-brown-muted)]">{differentialTitleHighlight}</span>.
              </motion.h2>
            </div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[var(--color-text-secondary)] leading-relaxed md:pt-12">{differentialDesc}</motion.p>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-[2rem] overflow-hidden">
            <div className="relative min-h-[320px] md:min-h-[380px] flex items-center justify-center p-6 md:p-10">
              <Image src="/images/stats-bg.png" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
              <div className="relative z-10 w-full max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {stats.map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl p-6 md:p-8 text-center bg-white/20 shadow-lg">
                      <div className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-light text-white mb-2 tracking-tight leading-tight">{stat.value}</div>
                      <p className="text-white/80 text-sm leading-relaxed">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div>
              <SectionLabel>Preguntas Frecuentes</SectionLabel>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-normal leading-tight mb-4">Tus preguntas respondidas.</motion.h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                ¿Todavía tenés dudas?{" "}
                <button data-cal-namespace={calNamespace} data-cal-link={calLink} data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}' className="underline cursor-pointer hover:text-[var(--color-brown)] transition-colors">Agenda una llamada gratis</button>{" "}y te explicamos todo.
              </p>
            </div>
            <div className="space-y-2">
              {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
