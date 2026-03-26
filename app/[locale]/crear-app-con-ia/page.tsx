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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {/* SSR content for crawlers */}
      <section className="sr-only">
        <h1>Crear App con Inteligencia Artificial sin Programar — Vibe Coding en 30 Días</h1>
        <p>
          ¿Tenés una idea para una app pero no sabés programar? Con el curso de Vibe Coding de ClaudeCurso vas a construir
          tu primera aplicación, SaaS o plataforma digital usando inteligencia artificial — sin escribir código manualmente.
          Utilizamos las herramientas más avanzadas del mercado: Claude como asistente de desarrollo, Cursor como editor
          de código inteligente y Vercel para publicar tu app al mundo. En 30 días pasás de idea a producto publicado.
        </p>
        <p>
          El vibe coding es la nueva forma de crear software: vos dirigís y la IA escribe el código. No necesitás experiencia
          previa en programación ni conocimientos técnicos. Podés construir landing pages, plataformas SaaS con suscripciones,
          marketplaces, herramientas internas para tu empresa, dashboards con datos en tiempo real, bots conversacionales y
          APIs personalizadas. Todo con entre 5 y 8 horas semanales de dedicación.
        </p>
        <p>
          El curso incluye acceso de por vida al contenido y actualizaciones constantes, comunidad activa de alumnos que
          están construyendo sus propios proyectos, y soporte directo. Al terminar no solo vas a tener tu primera app
          publicada sino las habilidades para seguir creando productos digitales con IA. El vibe coding está revolucionando
          la forma de crear software y este curso te pone al frente de esa revolución.
        </p>
        <h2>Preguntas Frecuentes sobre Crear Apps con IA</h2>
        <h3>¿Necesito saber programar?</h3>
        <p>No. El vibe coding con IA te permite construir apps sin escribir código manualmente. La IA lo escribe — vos lo dirigís.</p>
        <h3>¿Qué tipo de apps puedo construir?</h3>
        <p>Landing pages, SaaS, marketplaces, herramientas internas, dashboards, bots, APIs.</p>
        <h3>¿Cuánto tiempo lleva?</h3>
        <p>Con 5 a 8 horas semanales, en 30 días tenés tu primera app publicada.</p>
        <h3>¿Qué pasa cuando termino?</h3>
        <p>Seguís con acceso de por vida al contenido y la comunidad.</p>
        <h2>¿Qué incluye el curso de Vibe Coding?</h2>
        <ul>
          <li>De idea a app publicada en 30 días</li>
          <li>Sin programación — la IA escribe el código por vos</li>
          <li>Herramientas: Claude, Cursor, Vercel, Supabase</li>
          <li>Creá SaaS, marketplaces, dashboards y más</li>
          <li>5-8 horas semanales de dedicación</li>
          <li>Acceso de por vida y actualizaciones constantes</li>
          <li>Comunidad activa y soporte directo</li>
        </ul>
      </section>
      <Suspense fallback={null}>
        <Client />
      </Suspense>
    </>
  );
}
