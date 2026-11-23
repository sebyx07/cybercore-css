import { useEffect } from 'react';

import { useLocation } from 'react-router';

import { normalizePath } from '../routes';
import { SITE_NAME, SITE_URL } from '../site';

import { ROUTES } from './entries';

function setMeta(selector: string, value: string): void {
  document.head.querySelector(selector)?.setAttribute('content', value);
}

/** Keeps title, description, canonical and social tags in step with the route. */
export function usePageMeta(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalizePath(pathname);
    const route = ROUTES.find((candidate) => candidate.path === path);
    const title = route?.title ?? `Page not found | ${SITE_NAME}`;
    const url = `${SITE_URL}${path === '/' ? '/' : `${path}/`}`;

    document.title = title;
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[property="og:url"]', url);
    if (route) {
      setMeta('meta[name="description"]', route.description);
      setMeta('meta[property="og:description"]', route.description);
      setMeta('meta[name="twitter:description"]', route.description);
    }
    document.head.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
    setMeta('meta[name="robots"]', route ? 'index, follow' : 'noindex');
  }, [pathname]);
}
