"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

const variants = {
  a: { title1: "Capacitá a tu equipo en IA", title2: "en", titleHighlight: "2 semanas", subtitle: "Programa intensivo para empresas. Tu equipo aprende a usar IA en su trabajo diario — con casos reales de tu industria." },
  b: { title1: "Tu equipo con IA:", title2: "más productivo desde la", titleHighlight: "primera semana", subtitle: "Capacitación práctica y personalizada para empresas. No teoría — herramientas que usan desde el día uno." },
  c: { title1: "Las empresas que ganan hoy", title2: "tienen equipos que saben usar", titleHighlight: "inteligencia artificial", subtitle: "Capacitamos a tu equipo con un programa a medida. Casos reales de tu industria, resultados desde la primera sesión." },
};

const steps = [
  { number: "01", title: "Diagnóstico", description: "Entendemos el nivel actual de tu equipo, las herramientas que usan y los procesos donde la IA puede generar más impacto.", image: "/images/service-discover-v2.png" },
  { number: "02", title: "Programa", description: "Diseñamos un programa a medida para tu empresa: módulos, casos de uso específicos de tu industria, y métricas de éxito.", image: "/images/service-build.png" },
  { number: "03", title: "Capacitación", description: "Sesiones en vivo (presenciales o remotas). Práctica con herramientas reales aplicadas a sus tareas diarias.", image: "/images/service-optimize.png" },
  { number: "04", title: "Seguimiento", description: "Acompañamos al equipo durante 30 días post-capacitación para asegurar que aplican lo aprendido y medir resultados.", image: "/images/service-train.png" },
];

const stats = [
  { value: "2 semanas", label: "Para tener tu equipo operando con IA" },
  { value: "A medida", label: "Casos reales de tu industria" },
  { value: "30 días", label: "De seguimiento post-capacitación incluido" },
];

const faqs = [
  { question: "¿Para cuántas personas es el programa?", answer: "Desde equipos de 3 hasta empresas de 200+. El programa se adapta al tamaño y las necesidades de cada organización." },
  { question: "¿Es presencial o remoto?", answer: "Los dos. Adaptamos el formato a lo que funcione mejor para tu empresa. Muchos clientes prefieren un híbrido." },
  { question: "¿Qué herramientas aprende el equipo?", answer: "Depende del rol. Ejecutivos: estrategia con IA. Marketing: generación de contenido. Operaciones: automatización. Cada área tiene su propio módulo." },
  { question: "¿Cuánto tiempo llevan las sesiones?", answer: "Sesiones de 2 a 3 horas, 2 o 3 veces por semana. En 2 semanas completamos el programa base." },
  { question: "¿Cómo medimos el resultado?", answer: "Definimos métricas de éxito antes de arrancar: horas ahorradas, tareas automatizadas, adopción de herramientas. Al finalizar entregamos un informe." },
  { question: "¿Cuánto cuesta?", answer: "Depende del tamaño del equipo y el alcance. Agenda una llamada y te damos una propuesta detallada." },
];

function CapacitacionesContent() {
  const searchParams = useSearchParams();
  const vKey = (searchParams.get("v") as "a" | "b" | "c") || "a";
  const variant = variants[vKey] || variants.a;

  return (
    <>
      <Navigation />
      <main>
        <LandingTemplate
          variant={variant}
          marqueeLabel="Empresas que capacitamos:"
          processSectionLabel="El programa"
          processTitle='De diagnóstico a equipo <span class="font-light italic text-[var(--color-brown-muted)]">operando con IA</span>.'
          processSubtitle="Cuatro etapas para llevar a tu equipo de cero a usar IA en su trabajo diario."
          steps={steps}
          differentialLabel="Capacitación a medida"
          differentialTitle="Casos reales de"
          differentialTitleHighlight="tu industria"
          differentialDesc="No enseñamos IA genérica. Analizamos tu empresa, tus procesos y tus herramientas, y diseñamos un programa con ejemplos y ejercicios de tu industria específica."
          stats={stats}
          faqs={faqs}
          calLink="mateo-cano/capacitaciones-ia"
          ctaPrimary="Quiero capacitar a mi equipo"
        />
        <CTA
          trustBadge="Más de 50 empresas capacitadas"
          title="Tu equipo con IA, en 2 semanas."
          description="Agenda una llamada y diseñamos el programa ideal para tu empresa."
          formTitle="¿Listo para capacitar a tu equipo?"
          formSubtitle="30 minutos para entender tu empresa y armar una propuesta a medida."
          scheduleButton="Quiero capacitar a mi equipo"
          calLink="mateo-cano/capacitaciones-ia"
        />
      </main>
      <Footer />
    </>
  );
}

export default function CapacitacionesPage() {
  return <Suspense fallback={null}><CapacitacionesContent /></Suspense>;
}
