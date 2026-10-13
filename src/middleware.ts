import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Coincide con la raíz y todas las rutas con prefijos de idioma, omitiendo archivos estáticos y de Next.js
  matcher: ['/', '/(es|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
