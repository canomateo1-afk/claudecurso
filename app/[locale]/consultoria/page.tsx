import type { Metadata } from "next";
import { Suspense } from "react";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import Client from "./consultoriaClient";

const baseUrl = "https://claudecurso.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Consultoría de IA para Empresas — Implementación Estratégica | ClaudeCurso",
    description: "Asesoría estratégica para implementar inteligencia artificial en tu negocio. Identificamos las 3 mejores oportunidades de IA con ROI medible desde la primera sesión.",
    keywords: ["consultoría ia", "consultoria inteligencia artificial", "implementar ia empresa", "asesoría ia negocio"],
    alternates: {
      canonical: `${baseUrl}/${locale}/consultoria`,
      languages: {
        en: `${baseUrl}/en/consultoria`,
        es: `${baseUrl}/es/consultoria`,
        "x-default": `${baseUrl}/en/consultoria`,
      },
    },
    openGraph: {
      title: "Consultoría de IA para Empresas — Implementación Estratégica | ClaudeCurso",
      description: "Asesoría estratégica para implementar inteligencia artificial en tu negocio. Identificamos las 3 mejores oportunidades de IA con ROI medible desde la primera sesión.",
      url: `${baseUrl}/${locale}/consultoria`,
      images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
  };
}


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [{"@type": "Question", "name": "¿Para qué tipo de negocios es esta asesoría?", "acceptedAnswer": {"@type": "Answer", "text": "Para empresas de cualquier industria que quieren implementar IA estratégicamente."}}, {"@type": "Question", "name": "¿Cuántas sesiones incluye?", "acceptedAnswer": {"@type": "Answer", "text": "Depende del alcance. Un diagnóstico inicial es una sesión. Un plan completo con acompañamiento es un programa de 4 a 8 semanas."}}, {"@type": "Question", "name": "¿Implementan ustedes o solo asesoran?", "acceptedAnswer": {"@type": "Answer", "text": "Los dos. Podemos quedarnos como asesores estratégicos o implementar directamente."}}, {"@type": "Question", "name": "¿Cuánto cuesta?", "acceptedAnswer": {"@type": "Answer", "text": "Depende del alcance del trabajo. Agenda una llamada y te damos una propuesta clara con entregables y precios definidos."}}],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoría de IA para Empresas",
  description: "Asesoría estratégica para implementar inteligencia artificial en tu negocio. Identificamos las 3 mejores oportunidades con ROI medible.",
  provider: { "@type": "Organization", name: "ClaudeCurso", url: "https://claudecurso.com" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {/* SSR content for crawlers */}
      <section className="sr-only">
        <h1>Consultoría de Inteligencia Artificial para Empresas — Implementación Estratégica</h1>
        <p>
          ¿Sabés que la IA puede transformar tu negocio pero no sabés por dónde empezar? La consultoría de IA de ClaudeCurso
          te da un plan claro y accionable. En la primera sesión identificamos las 3 mejores oportunidades de implementar
          inteligencia artificial en tu empresa con ROI medible. No vendemos humo ni teoría — te mostramos exactamente qué
          automatizar, qué herramientas usar y cuánto vas a ahorrar.
        </p>
        <p>
          Nuestra asesoría de IA funciona para empresas de cualquier industria y tamaño. Un diagnóstico inicial se resuelve
          en una sola sesión donde analizamos tus procesos actuales e identificamos las oportunidades más impactantes. Si
          querés un plan completo con acompañamiento en la implementación, ofrecemos programas de 4 a 8 semanas donde no
          solo diseñamos la estrategia sino que la ejecutamos junto a tu equipo. Podemos quedarnos como asesores estratégicos
          o implementar directamente las soluciones.
        </p>
        <p>
          Lo que nos diferencia es que no somos consultores teóricos — somos implementadores. Conocemos las herramientas,
          sabemos qué funciona y qué no, y tenemos experiencia real implementando IA en decenas de empresas. Desde
          automatización de procesos con n8n y Make hasta agentes con Claude y GPT, pasando por análisis de datos,
          generación de contenido y optimización de operaciones. Agenda una llamada y te mostramos cómo la IA puede
          generar resultados concretos en tu negocio desde la primera semana.
        </p>
        <h2>Preguntas Frecuentes sobre Consultoría de IA</h2>
        <h3>¿Para qué tipo de negocios es esta asesoría?</h3>
        <p>Para empresas de cualquier industria que quieren implementar IA estratégicamente.</p>
        <h3>¿Cuántas sesiones incluye?</h3>
        <p>Depende del alcance. Un diagnóstico inicial es una sesión. Un plan completo con acompañamiento es un programa de 4 a 8 semanas.</p>
        <h3>¿Implementan ustedes o solo asesoran?</h3>
        <p>Los dos. Podemos quedarnos como asesores estratégicos o implementar directamente.</p>
        <h3>¿Cuánto cuesta?</h3>
        <p>Depende del alcance del trabajo. Agenda una llamada y te damos una propuesta clara con entregables y precios definidos.</p>
        <h2>¿Qué incluye la consultoría de IA?</h2>
        <ul>
          <li>Diagnóstico de oportunidades de IA en tu negocio</li>
          <li>Identificación de las 3 mejores oportunidades con ROI medible</li>
          <li>Plan de implementación claro y accionable</li>
          <li>Asesoría estratégica o implementación directa</li>
          <li>Programas de 1 sesión a 8 semanas</li>
          <li>Herramientas: n8n, Make, Claude, GPT y más</li>
          <li>Resultados concretos desde la primera semana</li>
          <li>Aplicable a cualquier industria y tamaño de empresa</li>
        </ul>
      </section>
      <Suspense fallback={null}>
        <Client />
      </Suspense>
    </>
  );
}
