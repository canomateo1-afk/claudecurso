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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {/* SSR content for crawlers */}
      <section className="sr-only">
        <h1>Aprender Inteligencia Artificial desde Cero — Curso Práctico sin Programar</h1>
        <p>
          ¿Querés aprender inteligencia artificial pero no sabés por dónde empezar? ClaudeCurso ofrece un curso práctico
          de IA desde cero, diseñado especialmente para personas sin experiencia técnica. En 30 días vas a dominar las
          herramientas de IA más importantes del mercado: desde ChatGPT y Claude hasta automatizaciones con n8n y agentes
          inteligentes. Todo sin escribir una sola línea de código.
        </p>
        <p>
          Nuestro curso de IA ya tiene más de 1,500 alumnos en Latinoamérica. El contenido es 100% práctico y asincrónico
          — lo hacés a tu ritmo, cuando podés, con entre 3 y 5 horas semanales. Además incluye mentorías en vivo opcionales
          donde podés hacer preguntas y ver casos reales. Al terminar vas a poder crear automatizaciones para tu negocio,
          generar contenido profesional con IA, usar agentes para investigar y redactar, y saber qué herramienta usar
          para cada problema que enfrentes.
        </p>
        <p>
          El curso incluye acceso de por vida al contenido, actualizaciones constantes con las últimas herramientas de IA,
          comunidad activa de alumnos y garantía de 7 días — si completás los primeros módulos y no ves valor, te devolvemos
          el dinero sin preguntas. No necesitás conocimientos previos de programación, matemáticas ni tecnología. Solo
          necesitás ganas de aprender y un negocio o proyecto donde aplicar lo que aprendas.
        </p>
        <h2>Preguntas Frecuentes sobre el Curso de IA</h2>
        <h3>¿Necesito saber programar?</h3>
        <p>No. El curso está diseñado para personas sin experiencia técnica. Usamos herramientas visuales y prompts — nada de código.</p>
        <h3>¿Qué voy a poder hacer al terminar?</h3>
        <p>Crear automatizaciones para tu negocio, generar contenido con IA, usar agentes para investigar y redactar, y entender qué herramientas usar para cada problema.</p>
        <h3>¿Cuánto tiempo lleva por semana?</h3>
        <p>Entre 3 y 5 horas semanales. El contenido es asincrónico — lo hacés cuando podés — con mentorías en vivo opcionales.</p>
        <h3>¿Qué pasa si no me sirve?</h3>
        <p>Tenés 7 días de garantía. Si completaste los primeros módulos y no ves valor, te devolvemos el dinero sin preguntas.</p>
        <h2>¿Qué incluye el curso de IA?</h2>
        <ul>
          <li>30 días de contenido práctico y asincrónico</li>
          <li>Sin programación — herramientas visuales y prompts</li>
          <li>Automatizaciones, agentes IA y generación de contenido</li>
          <li>Mentorías en vivo opcionales</li>
          <li>+1,500 alumnos en Latinoamérica</li>
          <li>Acceso de por vida y actualizaciones constantes</li>
          <li>Garantía de 7 días — sin riesgo</li>
          <li>Comunidad activa de alumnos</li>
        </ul>
      </section>
      <Suspense fallback={null}>
        <Client />
      </Suspense>
    </>
  );
}
