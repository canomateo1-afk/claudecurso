import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
});

export const config = {
  matcher: [
    '/((?!_next|_vercel|favicon\\.ico|og-image\\.png|icon\\.png|robots\\.txt|sitemap\\.xml|images|.*\\..*).*)'
  ],
};
