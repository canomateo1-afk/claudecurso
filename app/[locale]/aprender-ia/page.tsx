import type { Metadata } from "next";
import { Suspense } from "react";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import Client from "./aprender-iaClient";

const baseUrl = "https://claudecurso.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Aprender IA desde Cero — Curso Práctico sin Programar | ClaudeCurso",
    description: "Aprendé inteligencia artificial desde cero en 30 días. Sin código. Automatizaciones, agentes IA y herramientas prácticas para tu negocio. +1,500 alumnos en LATAM.",
    keywords: ["aprender ia", "curso ia", "cursos de ia", "aprender inteligencia artificial", "ia desde cero"],
    alternates: {
      canonical: `${baseUrl}/${locale}/aprender-ia`,
      languages: {
        en: `${baseUrl}/en/aprender-ia`,
        es: `${baseUrl}/es/aprender-ia`,
        "x-default": `${baseUrl}/en/aprender-ia`,
      },
    },
    openGraph: {
      title: "Aprender IA desde Cero — Curso Práctico sin Programar | ClaudeCurso",
      description: "Aprendé inteligencia artificial desde cero en 30 días. Sin código. Automatizaciones, agentes IA y herramientas prácticas para tu negocio. +1,500 alumnos en LATAM.",
      url: `${baseUrl}/${locale}/aprender-ia`,
      images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
  };
}


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [{"@type": "Question", "name": "¿Necesito saber programar?", "acceptedAnswer": {"@type": "Answer", "text": "No. El curso está diseñado para personas sin experiencia técnica. Usamos herramientas visuales y prompts — nada de código."}}, {"@type": "Question", "name": "¿Qué voy a poder hacer al terminar?", "acceptedAnswer": {"@type": "Answer", "text": "Crear automatizaciones para tu negocio, generar contenido con IA, usar agentes para investigar y redactar, y entender qué herramientas usar para cada problema."}}, {"@type": "Question", "name": "¿Cuánto tiempo lleva por semana?", "acceptedAnswer": {"@type": "Answer", "text": "Entre 3 y 5 horas semanales. El contenido es asincrónico — lo hacés cuando podés — con mentorías en vivo opcionales."}}, {"@type": "Question", "name": "¿Qué pasa si no me sirve?", "acceptedAnswer": {"@type": "Answer", "text": "Tenés 7 días de garantía. Si completaste los primeros módulos y no ves valor, te devolvemos el dinero sin preguntas."}}],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Aprender IA desde Cero",
  description: "Curso práctico de inteligencia artificial desde cero. Sin programar. Automatizaciones, agentes IA y herramientas para tu negocio en 30 días.",
  provider: { "@type": "Organization", name: "ClaudeCurso", url: "https://claudecurso.com" },
};

export default function Page() {
  return (
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Suspense fallback={null}>
      <Client />
    </Suspense>
  );
}
