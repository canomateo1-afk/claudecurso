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

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Client />
    </Suspense>
  );
}
