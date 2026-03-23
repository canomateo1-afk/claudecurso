import type { Metadata } from "next";
import { Instrument_Serif, Inter, Halant } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { CalProvider } from "@/components/CalProvider";
import "../globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const halant = Halant({ variable: "--font-halant", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Claude Curso — Programa de 3 meses con IA | by Claura",
    description: "Programa de aceleración de 3 meses para emprendedores. Construí tu negocio con IA. Acceso al stack completo de Claura, mentorías semanales y comunidad activa.",
    keywords: ["Claude Code curso", "aprender Claude Code", "curso IA emprendedor", "automatización IA", "programa aceleración IA"],
    openGraph: {
      title: "Claude Curso — Programa de 3 meses con IA",
      description: "Construí tu negocio con IA en 3 meses. Stack completo de Claura incluido.",
      url: "https://claudecurso.com",
      siteName: "Claude Curso",
      type: "website",
      locale: "es_AR",
      images: [{ url: "https://claudecurso.com/og-image.png", width: 2048, height: 2048, alt: "Claude Curso by Claura" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Claude Curso — Programa de 3 meses con IA",
      images: ["https://claudecurso.com/og-image.png"],
    },
    alternates: { canonical: "https://claudecurso.com" },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${instrumentSerif.variable} ${inter.variable} ${halant.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CalProvider>{children}</CalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
