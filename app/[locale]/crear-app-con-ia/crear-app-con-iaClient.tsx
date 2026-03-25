"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

const variants = {
  a: { title1: "Construí tu primera app con IA", title2: "en", titleHighlight: "30 días", subtitle: "Sin saber programar. Con Claude, Cursor y las herramientas que usan los mejores developers del mundo hoy." },
  b: { title1: "Vibe coding:", title2: "tu idea convertida en", titleHighlight: "producto real", subtitle: "Aprendé a construir apps, plataformas y SaaS usando IA como tu developer personal. El futuro ya llegó." },
  c: { title1: "De idea a plataforma funcionando,", title2: "sin ser", titleHighlight: "programador", subtitle: "Con las herramientas de IA de hoy, cualquiera puede construir su producto. Te enseñamos cómo." },
};

const steps = [
  { number: "01", title: "Herramientas", description: "Conocés el stack completo: Claude, Cursor, Windsurf, Vercel, Supabase. Las mismas herramientas que usan los mejores developers del mundo.", image: "/images/service-discover-v2.png" },
  { number: "02", title: "Tu primera app", description: "Construís tu primera aplicación funcional desde cero. Landing page, base de datos, autenticación. Todo en una semana.", image: "/images/service-build.png" },
  { number: "03", title: "Tu SaaS", description: "Agregás pagos (Stripe), usuarios, dashboard y las funcionalidades específicas de tu idea. Tu producto, listo para vender.", image: "/images/service-optimize.png" },
  { number: "04", title: "Lanzamiento", description: "Publicás tu producto, configurás el dominio y tenés todo lo que necesitás para conseguir tus primeros usuarios.", image: "/images/service-train.png" },
];

const stats = [
  { value: "30 días", label: "De cero a producto publicado" },
  { value: "0 código manual", label: "La IA escribe, vos dirigís" },
  { value: "Stack completo", label: "Claude + Cursor + Vercel + Supabase + Stripe" },
];

const faqs = [
  { question: "¿Necesito saber programar?", answer: "No. El vibe coding con IA te permite construir apps sin escribir código manualmente. La IA lo escribe — vos lo dirigís." },
  { question: "¿Qué tipo de apps puedo construir?", answer: "Landing pages, SaaS, marketplaces, herramientas internas, dashboards, bots, APIs. Si lo podés describir, lo podés construir." },
  { question: "¿Cuánto tiempo lleva?", answer: "Con 5 a 8 horas semanales, en 30 días tenés tu primera app publicada. Algunos alumnos llegan antes." },
  { question: "¿Puedo construir mi idea específica?", answer: "Sí. El curso incluye mentoría 1-a-1 para ayudarte con tu proyecto específico. No es un curso genérico." },
  { question: "¿Qué pasa cuando termino?", answer: "Seguís con acceso de por vida al contenido y la comunidad. Y si tu app escala, sabés cómo mejorarla." },
];

function CrearAppContent() {
  const searchParams = useSearchParams();
  const vKey = (searchParams.get("v") as "a" | "b" | "c") || "a";
  const variant = variants[vKey] || variants.a;

  return (
    <>
      <Navigation />
      <main>
        <LandingTemplate
          variant={variant}
          marqueeLabel="Alumnos que ya lanzaron su producto:"
          processSectionLabel="Lo que construís"
          processTitle='De idea a app <span class="font-light italic text-[var(--color-brown-muted)]">publicada</span>.'
          processSubtitle="Cuatro etapas que van desde las herramientas hasta tener tu producto live y listo para conseguir usuarios."
          steps={steps}
          differentialLabel="Vibe coding"
          differentialTitle="La IA escribe el código,"
          differentialTitleHighlight="vos creás el producto"
          differentialDesc="Con Claude y Cursor, describís lo que querés y la IA lo construye. Tu rol es el de product manager — decidís qué hacer, la IA lo implementa."
          stats={stats}
          faqs={faqs}
          calLink="mateo-cano/crear-app-con-ia"
          ctaPrimary="Quiero crear mi app"
        />
        <CTA
          trustBadge="Más de 1,500 alumnos en LATAM"
          title="Tu app, publicada en 30 días."
          description="Agenda una llamada y te contamos si podemos ayudarte a construir tu idea."
          formTitle="¿Listo para construir tu app?"
          formSubtitle="30 minutos para entender tu idea y mostrarte el camino."
          scheduleButton="Quiero crear mi app"
          calLink="mateo-cano/crear-app-con-ia"
        />
      </main>
      <Footer />
    </>
  );
}

export default function CrearAppPage() {
  return <Suspense fallback={null}><CrearAppContent /></Suspense>;
}
