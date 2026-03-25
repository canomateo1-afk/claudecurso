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

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Client />
    </Suspense>
  );
}
