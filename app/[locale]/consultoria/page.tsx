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

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Client />
    </Suspense>
  );
}
