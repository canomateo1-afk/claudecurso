import type { Metadata } from "next";
import { Suspense } from "react";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import Client from "./crear-app-con-iaClient";

const baseUrl = "https://claudecurso.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Crear App con IA sin Programar — Vibe Coding en 30 Días | ClaudeCurso",
    description: "Construí tu primera app, SaaS o plataforma usando Claude, Cursor y Vercel. Sin saber programar. De idea a producto publicado en 30 días.",
    keywords: ["crear app con ia", "vibe coding", "crear saas con ia", "curso desarrollo app ia", "claude cursor"],
    alternates: {
      canonical: `${baseUrl}/${locale}/crear-app-con-ia`,
      languages: {
        en: `${baseUrl}/en/crear-app-con-ia`,
        es: `${baseUrl}/es/crear-app-con-ia`,
        "x-default": `${baseUrl}/en/crear-app-con-ia`,
      },
    },
    openGraph: {
      title: "Crear App con IA sin Programar — Vibe Coding en 30 Días | ClaudeCurso",
      description: "Construí tu primera app, SaaS o plataforma usando Claude, Cursor y Vercel. Sin saber programar. De idea a producto publicado en 30 días.",
      url: `${baseUrl}/${locale}/crear-app-con-ia`,
      images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
  };
}


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [{"@type": "Question", "name": "¿Necesito saber programar?", "acceptedAnswer": {"@type": "Answer", "text": "No. El vibe coding con IA te permite construir apps sin escribir código manualmente. La IA lo escribe — vos lo dirigís."}}, {"@type": "Question", "name": "¿Qué tipo de apps puedo construir?", "acceptedAnswer": {"@type": "Answer", "text": "Landing pages, SaaS, marketplaces, herramientas internas, dashboards, bots, APIs."}}, {"@type": "Question", "name": "¿Cuánto tiempo lleva?", "acceptedAnswer": {"@type": "Answer", "text": "Con 5 a 8 horas semanales, en 30 días tenés tu primera app publicada."}}, {"@type": "Question", "name": "¿Qué pasa cuando termino?", "acceptedAnswer": {"@type": "Answer", "text": "Seguís con acceso de por vida al contenido y la comunidad."}}],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Crear App con IA — Vibe Coding",
  description: "Construí tu primera app, SaaS o plataforma con IA. Sin saber programar. De idea a producto publicado en 30 días con Claude, Cursor y Vercel.",
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
