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

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Client />
    </Suspense>
  );
}
