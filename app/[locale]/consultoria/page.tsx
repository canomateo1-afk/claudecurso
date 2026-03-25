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
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Suspense fallback={null}>
      <Client />
    </Suspense>
  );
}
