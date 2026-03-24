"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

const variants = {
  a: { title1: "IA en tu negocio,", title2: "sin perder tiempo", titleHighlight: "aprendiendo", subtitle: "Asesoría estratégica para implementar IA donde más impacto genera. Vos tomás las decisiones, nosotros te mostramos el camino." },
  b: { title1: "Implementá IA en tu negocio", title2: "con una hoja de ruta", titleHighlight: "clara", subtitle: "Sin perderte en herramientas ni modas. Un plan concreto para usar IA donde realmente vale la pena en tu empresa." },
  c: { title1: "¿Cómo usa la IA", title2: "un negocio como el", titleHighlight: "tuyo?", subtitle: "Asesoría personalizada para entender qué IA aplicar, dónde, y cómo. Resultados medibles desde la primera sesión." },
};

const steps = [
  { number: "01", title: "Diagnóstico", description: "Analizamos tu negocio completo: procesos, equipo, herramientas y objetivos. Identificamos las 3 oportunidades de mayor impacto con IA.", image: "/images/service-discover-v2.png" },
  { number: "02", title: "Estrategia", description: "Diseñamos un plan de implementación concreto: qué herramientas usar, en qué orden, con qué métricas de éxito y qué inversión implica.", image: "/images/service-build.png" },
  { number: "03", title: "Implementación", description: "Acompañamos la ejecución del plan. Podemos implementar nosotros, guiar a tu equipo, o una combinación de ambas.", image: "/images/service-optimize.png" },
  { number: "04", title: "Optimización", description: "Medimos resultados, ajustamos lo que no funciona y escalamos lo que sí. La IA no es un proyecto — es un proceso continuo.", image: "/images/service-train.png" },
];

const stats = [
  { value: "3 oportunidades", label: "Identificadas en la primera sesión" },
  { value: "Plan concreto", label: "Con métricas y tiempos definidos" },
  { value: "ROI medible", label: "Desde las primeras semanas" },
];

const faqs = [
  { question: "¿Para qué tipo de negocios es esta asesoría?", answer: "Para empresas de cualquier industria que quieren implementar IA estratégicamente. Desde startups hasta pymes consolidadas." },
  { question: "¿Cuántas sesiones incluye?", answer: "Depende del alcance. Un diagnóstico inicial es una sesión. Un plan completo con acompañamiento es un programa de 4 a 8 semanas." },
  { question: "¿Qué diferencia una buena implementación de IA de una mala?", answer: "Empezar por los procesos correctos. La mayoría implementa IA en lo visible, no en lo que genera más valor. Nosotros identificamos eso primero." },
  { question: "¿Implementan ustedes o solo asesoran?", answer: "Los dos. Podemos quedarnos como asesores estratégicos o implementar directamente. También podemos coordinar con tu equipo técnico." },
  { question: "¿Cuánto cuesta?", answer: "Depende del alcance del trabajo. Agenda una llamada y te damos una propuesta clara con entregables y precios definidos." },
];

function ConsultoriaContent() {
  const searchParams = useSearchParams();
  const vKey = (searchParams.get("v") as "a" | "b" | "c") || "a";
  const variant = variants[vKey] || variants.a;

  return (
    <>
      <Navigation />
      <main>
        <LandingTemplate
          variant={variant}
          marqueeLabel="Empresas que asesoramos:"
          processSectionLabel="Cómo trabajamos"
          processTitle='De diagnóstico a <span class="font-light italic text-[var(--color-brown-muted)]">resultados medibles</span>.'
          processSubtitle="Cuatro etapas para llevar la IA a tu negocio de forma estratégica y con impacto real."
          steps={steps}
          differentialLabel="Asesoría estratégica"
          differentialTitle="Implementamos IA donde"
          differentialTitleHighlight="realmente importa"
          differentialDesc="No te recomendamos herramientas al azar. Empezamos por entender tu negocio y encontrar las 3 oportunidades de mayor impacto. Después construimos el plan."
          stats={stats}
          faqs={faqs}
          calLink="mateo-cano/consultoria-ia"
          ctaPrimary="Quiero asesoría en IA"
        />
        <CTA
          trustBadge="Más de 100 negocios asesorados"
          title="IA en tu negocio, con una hoja de ruta clara."
          description="Agenda una llamada y te mostramos las 3 mejores oportunidades de IA para tu empresa."
          formTitle="¿Listo para implementar IA?"
          formSubtitle="30 minutos para entender tu negocio y mostrarte el camino concreto."
          scheduleButton="Quiero asesoría en IA"
          calLink="mateo-cano/consultoria-ia"
        />
      </main>
      <Footer />
    </>
  );
}

export default function ConsultoriaPage() {
  return <Suspense fallback={null}><ConsultoriaContent /></Suspense>;
}
