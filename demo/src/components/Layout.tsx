import { Suspense, useEffect, useRef, useState } from 'react';

import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router';

import { meta } from '../lib/meta';
import { usePageMeta } from '../lib/usePageMeta';
import { CHANGELOG_URL, CHARTS_URL, MAINTAINER_URL, NPM_URL, REPO_URL } from '../site';

import PageFallback from './PageFallback';
import ThemeSwitcher from './ThemeSwitcher';

const NAV = [
  { to: '/docs', label: 'Docs' },
  { to: '/components', label: 'Components' },
  { to: '/effects', label: 'Effects' },
  { to: '/utilities', label: 'Utilities' },
  { to: '/icons', label: 'Icons' },
];

function Layout() {
  const { pathname, hash } = useLocation();
  // Open only for the page it was opened on, so following a link closes it.
  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null);
  const menuOpen = menuOpenOn === pathname;
  const mainRef = useRef<HTMLElement>(null);
  const firstRenderRef = useRef(true);

  const navigate = useNavigate();

  usePageMeta();

  // Old hash routes (/#/docs) clicked while the site is already open.
  useEffect(() => {
    if (hash.startsWith('#/')) {
      void navigate(hash.slice(1), { replace: true });
    }
  }, [hash, navigate]);

  // A new page starts at its top, or at the anchor the link named, with focus
  // moved into the content so keyboard and screen reader users land there too.
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      if (!hash) {
        return;
      }
    } else {
      mainRef.current?.focus({ preventScroll: true });
    }
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const closeMenu = () => setMenuOpenOn(null);

  return (
    <div className="site">
      <a className="site-skip" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <nav className={menuOpen ? 'cyber-nav cyber-nav--open' : 'cyber-nav'} aria-label="Main">
          <Link to="/" className="cyber-nav__brand" onClick={closeMenu}>
            Cybercore
          </Link>

          <button
            type="button"
            className="cyber-nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label="Menu"
            onClick={() => setMenuOpenOn(menuOpen ? null : pathname)}
          >
            <span className="cyber-nav__toggle-bar" />
            <span className="cyber-nav__toggle-bar" />
            <span className="cyber-nav__toggle-bar" />
          </button>

          <div id="site-menu" className="cyber-nav__menu">
            <ul className="cyber-nav__links">
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className="cyber-nav__link" onClick={closeMenu}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="cyber-nav__actions">
              <ThemeSwitcher />
              <a className="cyber-btn cyber-btn--sm" href={REPO_URL}>
                GitHub
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main id="main" className="site-main" tabIndex={-1} ref={mainRef}>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="site-footer">
        <div className="site-wrap site-footer__inner">
          <div>
            <p className="site-footer__brand">Cybercore CSS</p>
            <p className="site-footer__line">
              AI-maintained by <a href={MAINTAINER_URL}>developerz.ai</a>. MIT licensed.
            </p>
            <p className="site-footer__line">v{meta.version}, the build this site runs on.</p>
          </div>
          <nav aria-label="Project">
            <ul className="site-footer__links">
              <li>
                <a href={REPO_URL}>GitHub</a>
              </li>
              <li>
                <a href={NPM_URL}>npm</a>
              </li>
              <li>
                <a href={CHANGELOG_URL}>Changelog</a>
              </li>
              <li>
                <a href={CHARTS_URL}>cybercore-charts</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
