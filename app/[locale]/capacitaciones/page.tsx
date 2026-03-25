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
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Suspense fallback={null}>
      <Client />
    </Suspense>
  );
}
