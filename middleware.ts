import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'never',  // no /es/ prefix in URLs
});

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};
