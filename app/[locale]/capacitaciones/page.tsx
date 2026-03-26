import type { Metadata } from "next";
import { Suspense } from "react";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import Client from "./capacitacionesClient";

const baseUrl = "https://claudecurso.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Capacitaciones de IA para Empresas — Programa a Medida | ClaudeCurso",
    description: "Capacitá a tu equipo en inteligencia artificial en 2 semanas. Programa personalizado con casos reales de tu industria. +50 empresas capacitadas.",
    keywords: ["capacitaciones ia", "capacitacion inteligencia artificial empresas", "taller ia empresas", "curso ia equipos"],
    alternates: {
      canonical: `${baseUrl}/${locale}/capacitaciones`,
      languages: {
        en: `${baseUrl}/en/capacitaciones`,
        es: `${baseUrl}/es/capacitaciones`,
        "x-default": `${baseUrl}/en/capacitaciones`,
      },
    },
    openGraph: {
      title: "Capacitaciones de IA para Empresas — Programa a Medida | ClaudeCurso",
      description: "Capacitá a tu equipo en inteligencia artificial en 2 semanas. Programa personalizado con casos reales de tu industria. +50 empresas capacitadas.",
      url: `${baseUrl}/${locale}/capacitaciones`,
      images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
  };
}


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [{"@type": "Question", "name": "¿Para cuántas personas es el programa?", "acceptedAnswer": {"@type": "Answer", "text": "Desde equipos de 3 hasta empresas de 200+. El programa se adapta al tamaño y las necesidades de cada organización."}}, {"@type": "Question", "name": "¿Es presencial o remoto?", "acceptedAnswer": {"@type": "Answer", "text": "Los dos. Adaptamos el formato a lo que funcione mejor para tu empresa."}}, {"@type": "Question", "name": "¿Cuánto tiempo llevan las sesiones?", "acceptedAnswer": {"@type": "Answer", "text": "Sesiones de 2 a 3 horas, 2 o 3 veces por semana. En 2 semanas completamos el programa base."}}, {"@type": "Question", "name": "¿Cuánto cuesta?", "acceptedAnswer": {"@type": "Answer", "text": "Depende del tamaño del equipo y el alcance. Agenda una llamada y te damos una propuesta detallada."}}],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Capacitaciones de IA para Empresas",
  description: "Programa de capacitación en inteligencia artificial a medida para empresas. 2 semanas, casos reales de tu industria, seguimiento post-capacitación.",
  provider: { "@type": "Organization", name: "ClaudeCurso", url: "https://claudecurso.com" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {/* SSR content for crawlers */}
      <section className="sr-only">
        <h1>Capacitaciones de Inteligencia Artificial para Empresas — Programa a Medida</h1>
        <p>
          ClaudeCurso ofrece programas de capacitación en inteligencia artificial diseñados a medida para empresas de cualquier
          tamaño e industria. Desde equipos de 3 personas hasta organizaciones de 200+ colaboradores, adaptamos el contenido,
          los ejemplos y los ejercicios prácticos a los casos reales de tu industria. En solo 2 semanas, tu equipo va a dominar
          las herramientas de IA más relevantes para su trabajo diario.
        </p>
        <p>
          Nuestras capacitaciones de IA están disponibles en formato presencial y remoto — nos adaptamos a lo que funcione
          mejor para tu empresa. Las sesiones duran entre 2 y 3 horas, se realizan 2 o 3 veces por semana, e incluyen
          ejercicios prácticos con las herramientas que tu equipo va a usar después. No es teoría abstracta: cada módulo
          tiene aplicaciones concretas que los participantes pueden implementar inmediatamente en su trabajo.
        </p>
        <p>
          Ya hemos capacitado a más de 50 empresas en Latinoamérica con resultados medibles: equipos que reducen horas de
          trabajo manual, departamentos que mejoran la calidad de sus entregables y organizaciones que adoptan IA de forma
          estratégica y sostenible. Cada programa incluye seguimiento post-capacitación para asegurar la adopción efectiva
          de las herramientas. Agenda una llamada y te armamos una propuesta personalizada con contenido, cronograma y precios.
        </p>
        <h2>Preguntas Frecuentes sobre Capacitaciones de IA</h2>
        <h3>¿Para cuántas personas es el programa?</h3>
        <p>Desde equipos de 3 hasta empresas de 200+. El programa se adapta al tamaño y las necesidades de cada organización.</p>
        <h3>¿Es presencial o remoto?</h3>
        <p>Los dos. Adaptamos el formato a lo que funcione mejor para tu empresa.</p>
        <h3>¿Cuánto tiempo llevan las sesiones?</h3>
        <p>Sesiones de 2 a 3 horas, 2 o 3 veces por semana. En 2 semanas completamos el programa base.</p>
        <h3>¿Cuánto cuesta?</h3>
        <p>Depende del tamaño del equipo y el alcance. Agenda una llamada y te damos una propuesta detallada.</p>
        <h2>¿Por qué elegir ClaudeCurso para capacitar a tu equipo?</h2>
        <ul>
          <li>Programa 100% personalizado a tu industria</li>
          <li>Presencial o remoto — nos adaptamos a vos</li>
          <li>Equipos de 3 a 200+ personas</li>
          <li>2 semanas de programa base con sesiones prácticas</li>
          <li>+50 empresas capacitadas en LATAM</li>
          <li>Seguimiento post-capacitación incluido</li>
          <li>Casos y ejercicios reales de tu negocio</li>
          <li>Resultados medibles desde la primera semana</li>
        </ul>
      </section>
      <Suspense fallback={null}>
        <Client />
      </Suspense>
    </>
  );
}
