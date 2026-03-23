import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FadeInUp } from "@/components/animations";
import { ChevronLeft, ChevronRight, Sparkles, BookOpen } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { MotionDiv } from "./ServiceDetailClient";

const techLogoMap: Record<string, string> = {
  openai: "/images/tech-logos/openai.svg",
  meta: "/images/tech-logos/meta.svg",
  instagram: "/images/tech-logos/instagram.svg",
  tiktok: "/images/tech-logos/tiktok.svg",
  youtube: "/images/tech-logos/youtube.svg",
  whatsapp: "/images/tech-logos/whatsapp.svg",
  anthropic: "/images/tech-logos/anthropic.svg",
  telegram: "/images/tech-logos/telegram.svg",
  python: "/images/tech-logos/python.svg",
  nodedotjs: "/images/tech-logos/nodedotjs.svg",
  nextdotjs: "/images/tech-logos/nextdotjs.svg",
  comfyui: "/images/tech-logos/comfyui.svg",
  ffmpeg: "/images/tech-logos/ffmpeg.svg",
  elevenlabs: "/images/tech-logos/elevenlabs.svg",
  vercel: "/images/tech-logos/vercel.svg",
  googleads: "/images/tech-logos/googleads.svg",
  remotion: "/images/tech-logos/remotion.svg",
};

const allServices = [
  { id: "automatizacion-contenido", title: "Automatización de Contenido" },
  { id: "publicidad-ia", title: "Publicidad con IA" },
  { id: "asistentes-virtuales", title: "Asistentes Virtuales" },
  { id: "desarrollo-ia", title: "Desarrollo con IA" },
  { id: "automatizacion-procesos", title: "Automatización de Procesos" },
];

const serviceBanners: Record<string, string> = {
  "automatizacion-contenido": "/images/cs-banner-3.jpg",
  "publicidad-ia": "/images/cs-banner-5.jpg",
  "asistentes-virtuales": "/images/cs-banner-2.jpg",
  "desarrollo-ia": "/images/cs-banner-4.jpg",
  "automatizacion-procesos": "/images/cs-banner-1.jpg",
};

const serviceTechStack: Record<string, { name: string; icon: string }[]> = {
  "automatizacion-contenido": [
    { name: "Claude", icon: "anthropic" },
    { name: "ChatGPT", icon: "openai" },
    { name: "ComfyUI", icon: "comfyui" },
    { name: "Instagram", icon: "instagram" },
    { name: "TikTok", icon: "tiktok" },
    { name: "YouTube", icon: "youtube" },
    { name: "FFmpeg", icon: "ffmpeg" },
    { name: "Remotion", icon: "remotion" },
  ],
  "publicidad-ia": [
    { name: "Meta", icon: "meta" },
    { name: "Google Ads", icon: "googleads" },
    { name: "ChatGPT", icon: "openai" },
    { name: "ComfyUI", icon: "comfyui" },
    { name: "Instagram", icon: "instagram" },
    { name: "TikTok", icon: "tiktok" },
  ],
  "asistentes-virtuales": [
    { name: "WhatsApp", icon: "whatsapp" },
    { name: "Telegram", icon: "telegram" },
    { name: "Claude", icon: "anthropic" },
    { name: "ElevenLabs", icon: "elevenlabs" },
    { name: "Next.js", icon: "nextdotjs" },
  ],
  "desarrollo-ia": [
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Vercel", icon: "vercel" },
    { name: "Claude", icon: "anthropic" },
    { name: "ChatGPT", icon: "openai" },
    { name: "Python", icon: "python" },
  ],
  "automatizacion-procesos": [
    { name: "Claude", icon: "anthropic" },
    { name: "Python", icon: "python" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "WhatsApp", icon: "whatsapp" },
  ],
};

const serviceFeatures: Record<string, string[]> = {
  "automatizacion-contenido": [
    "Generación de carruseles con IA",
    "Videos y Reels automáticos",
    "Publicación multiplataforma",
    "Repurposing de contenido",
    "Identidad de marca preservada",
    "Gestión multicuenta",
  ],
  "publicidad-ia": [
    "Generación de creatividades con IA",
    "Análisis automático de campañas",
    "Optimización de CPA y ROAS",
    "A/B testing automatizado",
    "Gestión multicuenta",
    "Reportes inteligentes",
  ],
  "asistentes-virtuales": [
    "Bot de WhatsApp 24/7",
    "Asistente telefónico con IA",
    "Integración con CRM",
    "Respuestas personalizadas",
    "Escalado a humanos",
    "Voz clonada natural",
  ],
  "desarrollo-ia": [
    "Apps web con IA integrada",
    "Plataformas SaaS",
    "Marketplaces",
    "Dashboards inteligentes",
    "APIs y microservicios",
    "Deploy en Vercel/AWS",
  ],
  "automatizacion-procesos": [
    "Workflows automatizados",
    "Scraping inteligente",
    "Procesamiento de documentos",
    "Integración entre sistemas",
    "Alertas y notificaciones",
    "Reportes automáticos",
  ],
};

const serviceRelatedCases: Record<string, string[]> = {
  "automatizacion-contenido": ["pulse", "soyandina", "curator", "loyalz"],
  "publicidad-ia": ["loop", "savannah", "hamilton", "snowflake"],
  "asistentes-virtuales": ["remax", "loyalz", "hamilton", "terra"],
  "desarrollo-ia": ["loop", "spacepal", "snowflake", "hamilton"],
  "automatizacion-procesos": ["terra", "remax", "pulse", "curator"],
};

const caseStudyImages: Record<string, string> = {
  hamilton: "/images/cs-banner-1.jpg",
  terra: "/images/cs-banner-2.jpg",
  savannah: "/images/cs-banner-3.jpg",
  snowflake: "/images/cs-banner-4.jpg",
  loop: "/images/cs-banner-5.jpg",
  spacepal: "/images/cs-banner-1.jpg",
  remax: "/images/cs-banner-2.jpg",
  pulse: "/images/cs-banner-4.jpg",
  soyandina: "/images/cs-banner-3.jpg",
  curator: "/images/cs-banner-4.jpg",
  loyalz: "/images/cs-banner-2.jpg",
};

interface ServiceDetailProps {
  slug: string;
}

export async function ServiceDetail({ slug }: ServiceDetailProps) {
  const t = await getTranslations(`serviceDetail.${slug}`);
  const tCommon = await getTranslations("serviceDetail.common");
  const tCaseStudies = await getTranslations("caseStudies");
  const techStack = serviceTechStack[slug] || [];
  const features = serviceFeatures[slug] || [];
  const relatedCases = serviceRelatedCases[slug] || [];
  const currentIndex = allServices.findIndex((s) => s.id === slug);
  const prevSlug = allServices[(currentIndex - 1 + allServices.length) % allServices.length].id;
  const nextSlug = allServices[(currentIndex + 1) % allServices.length].id;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--color-cream)] pt-32 pb-16 overflow-hidden">
        <div className="max-w-[var(--container-max-width)] mx-auto px-6 w-full">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[1/1] sm:aspect-[3/2] md:aspect-[16/6] rounded-[28px] overflow-hidden"
          >
            <Image
              src={serviceBanners[slug]}
              alt={t("title")}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ filter: "brightness(0.85) saturate(1.75)" }}
              priority
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.35) 30%, transparent 55%)" }} />

            {/* Back button */}
            <Link
              href="/"
              className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/90 backdrop-blur-sm text-sm font-medium text-[var(--color-charcoal)] hover:bg-white transition-colors shadow-sm"
            >
              {tCommon("backToHome")}
            </Link>

            {/* Prev / Next */}
            <div className="absolute top-5 right-5 z-10 flex items-center gap-2">
              <Link
                href={`/servicios/${prevSlug}`}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 text-[var(--color-charcoal)]" />
              </Link>
              <Link
                href={`/servicios/${nextSlug}`}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5 text-[var(--color-charcoal)]" />
              </Link>
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 z-10">
              <h1 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-normal leading-[1.1] text-white mb-2 md:mb-3">
                {t("title")}
              </h1>
              <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
                {t("heroDescription")}
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Problem */}
      <section className="pt-12 pb-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto space-y-20">
          <FadeInUp>
            <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div>
                <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                  {tCommon("problemLabel")}
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-[2.5rem] leading-[1.2] font-normal mb-6">
                  {t("problemTitle")}
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                  <p>{t("problemP1")}</p>
                  <p>{t("problemP2")}</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* How we solve it */}
          <FadeInUp delay={0.1}>
            <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div>
                <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                  {tCommon("solutionLabel")}
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-[2.5rem] leading-[1.2] font-normal mb-6">
                  {t("solutionTitle")}
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                  <p>{t("solutionP1")}</p>
                  <p>{t("solutionP2")}</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* How it works */}
          <FadeInUp delay={0.2}>
            <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div>
                <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                  {tCommon("processLabel")}
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-[2.5rem] leading-[1.2] font-normal mb-6">
                  {t("processTitle")}
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                  <p>{t("processP1")}</p>
                  <p>{t("processP2")}</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Stats */}
      <section className="pt-12 pb-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <FadeInUp>
            <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div>
                <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                  {tCommon("resultsLabel")}
                </span>
              </div>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="rounded-3xl bg-[var(--color-cream-dark)] px-7 py-6"
                    >
                      <div className="font-display text-4xl md:text-5xl font-normal mb-2 text-[var(--color-charcoal)]">
                        {t(`stat${n}Value`)}
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {t(`stat${n}Label`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Features & Tech Stack */}
      <section className="pt-12 pb-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto space-y-20">
          {/* Features */}
          {features.length > 0 && (
            <FadeInUp>
              <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
                <div>
                  <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                    {tCommon("featuresLabel")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {features.map((feature) => (
                    <span
                      key={feature}
                      className="h-[38px] px-5 text-[14px] font-medium rounded-[10px] whitespace-nowrap flex items-center text-[var(--color-charcoal)] bg-[var(--color-cream-dark)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInUp>
          )}

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <FadeInUp delay={0.1}>
              <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
                <div>
                  <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                    {tCommon("techStackLabel")}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {techStack.map((tool) => {
                    const logoSrc = techLogoMap[tool.icon];
                    return (
                      <MotionDiv
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2.5 h-[42px] px-5 rounded-[12px] bg-[var(--color-cream-dark)] border border-[var(--color-border)]"
                      >
                        {logoSrc ? (
                          <img
                            src={logoSrc}
                            alt={tool.name}
                            className="w-[18px] h-[18px] shrink-0 object-contain"
                          />
                        ) : (
                          <Sparkles className="w-[18px] h-[18px] shrink-0 text-[var(--color-charcoal)]" />
                        )}
                        <span className="text-[14px] font-medium text-[var(--color-charcoal)] whitespace-nowrap">
                          {tool.name}
                        </span>
                      </MotionDiv>
                    );
                  })}
                </div>
              </div>
            </FadeInUp>
          )}
        </div>
      </section>

      {/* Testimonial */}
      <section className="pt-12 pb-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <FadeInUp>
            <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div>
                <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                  {tCommon("testimonialLabel")}
                </span>
              </div>
              <blockquote>
                <p className="font-display text-2xl md:text-3xl lg:text-[2.5rem] font-normal leading-snug text-[var(--color-charcoal)] mb-8">
                  &ldquo;{t("testimonialQuote")}&rdquo;
                </p>
                <footer>
                  <p className="text-[var(--color-charcoal)] font-medium text-sm mb-1">{t("testimonialAuthor")}</p>
                  <p className="text-[var(--color-text-secondary)] text-xs">{t("testimonialRole")}</p>
                </footer>
              </blockquote>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCases.length > 0 && (
        <section className="py-20 px-6 bg-[var(--color-cream)]">
          <div className="max-w-[var(--container-max-width)] mx-auto">
            <FadeInUp>
              <div className="text-center mb-14">
                <BookOpen className="w-10 h-10 text-[var(--color-brown-muted)] mx-auto mb-5" strokeWidth={1.5} />
                <h2 className="font-display text-3xl md:text-4xl font-normal text-[var(--color-charcoal)]">
                  {tCommon("relatedTitle")}
                </h2>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
                {relatedCases.map((csId) => (
                  <Link key={csId} href={`/case-studies/${csId}`} className="shrink-0 w-[68vw] max-w-[260px] snap-start md:w-auto md:max-w-none">
                    <MotionDiv
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      className="group bg-[var(--color-cream-dark)] rounded-[24px] p-3 pb-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 cursor-pointer"
                    >
                      <div className="aspect-[4/3] relative overflow-hidden rounded-[16px]">
                        <Image
                          src={caseStudyImages[csId]}
                          alt={csId}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{ filter: "brightness(0.85) saturate(1.75)" }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-lg md:text-xl font-medium tracking-tight leading-tight text-white drop-shadow-md">
                            {csId.charAt(0).toUpperCase() + csId.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="pt-3 px-1">
                        <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed line-clamp-2">
                          {tCaseStudies(`${csId}.description`)}
                        </p>
                      </div>
                    </MotionDiv>
                  </Link>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>
      )}
    </>
  );
}

export default ServiceDetail;
