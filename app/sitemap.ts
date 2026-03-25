import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://claudecurso.com';
  const locales = ['en', 'es'];

  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/book-a-call', priority: 0.7, changeFrequency: 'monthly' as const },
    // Landing pages SEO
    { path: '/aprender-ia', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/crear-app-con-ia', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/capacitaciones', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/consultoria', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/legal/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/legal/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.flatMap(route =>
    locales.map(locale => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
  );
}
