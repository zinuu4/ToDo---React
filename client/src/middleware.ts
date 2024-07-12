import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import { Locales } from '@/shared/types';
import { verifyToken } from '@/shared/utils';
import { routes } from '@/shared/routes';

export const locales: Locales[] = ['en', 'fr', 'ro', 'zh', 'es'];
export const defaultLocale = 'en';

function getLocale(request: Request): string {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get('accept-language');
  if (acceptLanguage) {
    headers.set('accept-language', acceptLanguage.replaceAll('_', '-'));
  }

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return match(languages, locales, defaultLocale);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = getLocale(request);
  const accessToken = request.cookies.get('accessToken')?.value;

  const userData = await verifyToken(accessToken);

  // prettier-ignore
  if (
    (userData && (pathname.includes(routes.login.path) || pathname.includes(routes.registration.path)))
  ) {
    return NextResponse.redirect(
      new URL(`/${locale}${routes.todos.path}`, request.url),
    );
  }

  // prettier-ignore
  if (
    (!userData && (pathname.includes(routes.todos.path) || pathname.includes(routes.profile.path)))
  ) {
    return NextResponse.redirect(
      new URL(`/${locale}${routes.login.path}`, request.url),
    );
  }

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  // if (
  //   [
  //     '/manifest.json',
  //     '/favicon.ico',
  //     // Your other files in `public`
  //   ].includes(pathname)
  // )
  //   return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
