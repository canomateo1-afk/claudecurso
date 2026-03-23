import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

const validSlugs = ["automatizacion-contenido", "publicidad-ia", "asistentes-virtuales", "desarrollo-ia", "automatizacion-procesos"];

const bannerImages: Record<string, string> = {
  "automatizacion-contenido": "/images/cs-banner-3.jpg",
  "publicidad-ia": "/images/cs-banner-5.jpg",
  "asistentes-virtuales": "/images/cs-banner-2.jpg",
  "desarrollo-ia": "/images/cs-banner-4.jpg",
  "automatizacion-procesos": "/images/cs-banner-1.jpg",
};

export function generateStaticParams() {
  return validSlugs.flatMap((slug) => [
    { slug, locale: "en" },
    { slug, locale: "es" },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!validSlugs.includes(slug)) {
    return {};
  }

  const t = await getTranslations({
    locale,
    namespace: `serviceDetail.${slug}`,
  });

  const title = t("metaTitle");
  const description = t("metaDescription");
  const bannerImage = bannerImages[slug];
  const canonicalUrl = `https://claura-ai.com/${locale}/servicios/${slug}`;
  const alternateLocale = locale === "en" ? "es" : "en";

  return {
    metadataBase: new URL("https://claura-ai.com"),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      locale: locale === "en" ? "en_US" : "es_ES",
      alternateLocale: alternateLocale === "en" ? "en_US" : "es_ES",
      images: [
        {
          url: bannerImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [bannerImage],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": `https://claura-ai.com/en/servicios/${slug}`,
        en: `https://claura-ai.com/en/servicios/${slug}`,
        es: `https://claura-ai.com/es/servicios/${slug}`,
      },
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: `serviceDetail.${slug}`,
  });

  const title = t("metaTitle");
  const description = t("metaDescription");
  const bannerImage = `https://claura-ai.com${bannerImages[slug]}`;
  const pageUrl = `https://claura-ai.com/${locale}/servicios/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    image: bannerImage,
    provider: {
      "@type": "Organization",
      name: "Claura",
      url: "https://claura-ai.com",
    },
    url: pageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <ServiceDetail slug={slug} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
