"use client";

import { useSearchParams, useParams } from "next/navigation";
import { Suspense } from "react";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

const variants = {
  a: { title1: "Aprendé IA desde cero", title2: "y construí tu primer", titleHighlight: "automatización", subtitle: "El curso que te lleva de no saber nada a tener tus primeras automatizaciones funcionando en 30 días." },
  b: { title1: "La IA no es para técnicos.", title2: "Es para vos, si sabés", titleHighlight: "cómo usarla", subtitle: "Aprendé a usar inteligencia artificial para tu negocio, tu trabajo y tu día a día. Sin código, sin complicaciones." },
  c: { title1: "En 30 días pasás de cero", title2: "a tener sistemas de IA", titleHighlight: "trabajando por vos", subtitle: "Aprendizaje práctico. Cada módulo termina con algo funcionando. No teoría — resultados reales." },
};

const steps = [
  { number: "01", title: "Fundamentos", description: "Entendés cómo funciona la IA, qué herramientas existen y cuáles sirven para tu caso específico. Sin tecnicismos.", image: "/images/service-discover-v2.png" },
  { number: "02", title: "Primeras apps", description: "Construís tus primeros prompts, automatizaciones y flujos de trabajo. Todo con ejercicios prácticos que podés aplicar el mismo día.", image: "/images/service-build.png" },
  { number: "03", title: "Proyectos reales", description: "Aplicás lo aprendido a tu negocio o trabajo. Automatizaciones, agentes, generación de contenido — lo que más valor te genere.", image: "/images/service-optimize.png" },
  { number: "04", title: "Comunidad", description: "Acceso a la comunidad de IA más activa de LATAM. Preguntas, feedback, ideas y mentorías en vivo semanales.", image: "/images/service-train.png" },
];

const stats = [
  { value: "30 días", label: "Para tener tus primeras automatizaciones funcionando" },
  { value: "0 código", label: "No necesitás saber programar" },
  { value: "1,500+", label: "Alumnos en LATAM" },
];

const faqs = [
  { question: "¿Necesito saber programar?", answer: "No. El curso está diseñado para personas sin experiencia técnica. Usamos herramientas visuales y prompts — nada de código." },
  { question: "¿Qué voy a poder hacer al terminar?", answer: "Crear automatizaciones para tu negocio, generar contenido con IA, usar agentes para investigar y redactar, y entender qué herramientas usar para cada problema." },
  { question: "¿Cuánto tiempo lleva por semana?", answer: "Entre 3 y 5 horas semanales. El contenido es asincrónico — lo hacés cuando podés — con mentorías en vivo opcionales." },
  { question: "¿Hay mentoría personalizada?", answer: "Sí. Tenemos sesiones grupales en vivo semanales y acceso a la comunidad donde podés hacer preguntas y recibir feedback." },
  { question: "¿Qué pasa si no me sirve?", answer: "Tenés 7 días de garantía. Si completaste los primeros módulos y no ves valor, te devolvemos el dinero sin preguntas." },
];

function AprenderIAContent() {
  const searchParams = useSearchParams();
  const vKey = (searchParams.get("v") as "a" | "b" | "c") || "a";
  const variant = variants[vKey] || variants.a;

  return (
    <>
      <Navigation />
      <main>
        <LandingTemplate
          variant={variant}
          marqueeLabel="Alumnos que ya están automatizando:"
          processSectionLabel="Lo que aprendés"
          processTitle='De cero a <span class="font-light italic text-[var(--color-brown-muted)]">resultados reales</span>.'
          processSubtitle="Cuatro etapas que van desde los fundamentos hasta tener proyectos reales funcionando en tu negocio."
          steps={steps}
          differentialLabel="Aprendizaje práctico"
          differentialTitle="Cada módulo termina con algo"
          differentialTitleHighlight="funcionando"
          differentialDesc="No enseñamos teoría. Cada clase termina con un ejercicio que podés aplicar el mismo día. Al final del curso, tenés un portfolio de automatizaciones reales."
          stats={stats}
          faqs={faqs}
          calLink="mateo-cano/aprender-ia"
          ctaPrimary="Quiero aprender IA"
        />
        <CTA
          trustBadge="Más de 1,500 alumnos en LATAM"
          title="Empezá a usar IA esta semana."
          description="Agenda una llamada de 30 minutos y te contamos si el curso es para vos."
          formTitle="¿Listo para aprender IA?"
          formSubtitle="Una llamada de 30 minutos para entender tu situación y ver si podemos ayudarte."
          scheduleButton="Quiero aprender IA"
          calLink="mateo-cano/aprender-ia"
        />
      </main>
      <Footer />
    </>
  );
}

export default function AprenderIAPage() {
  return <Suspense fallback={null}><AprenderIAContent /></Suspense>;
}
