import { Suspense, useState } from 'react';

import { NavLink, Outlet, useLocation } from 'react-router';

import { GROUP_LABEL } from '../data/entries';
import { ENTRIES } from '../lib/entries';
import { CHANGELOG_URL, CHARTS_URL } from '../site';

import PageFallback from './PageFallback';

import type { ModuleGroup } from '../data/types';

const GROUPS: ModuleGroup[] = ['components', 'effects', 'utilities'];

function linkClass({ isActive }: { isActive: boolean }): string {
  return isActive ? 'site-side__link site-side__link--active' : 'site-side__link';
}

/** Sidebar plus content column shared by every documentation page. */
function DocsShell() {
  const { pathname } = useLocation();
  // Open only for the page it was opened on, so following a link closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  return (
    <div className="site-wrap site-docs">
      <aside className="site-side">
        <button
          type="button"
          className="cyber-btn cyber-btn--sm site-side__toggle"
          aria-expanded={open}
          aria-controls="docs-nav"
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          Browse docs
        </button>
        <nav id="docs-nav" className="site-side__nav" aria-label="Documentation" data-open={open}>
          <p className="site-side__heading">Start</p>
          <ul className="site-side__list">
            <li>
              <NavLink to="/docs" end className={linkClass}>
                Getting started
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/theming" className={linkClass}>
                Theming and tokens
              </NavLink>
            </li>
          </ul>

          {GROUPS.map((group) => (
            <div key={group}>
              <p className="site-side__heading">
                <NavLink to={`/${group}`} end className={linkClass}>
                  {GROUP_LABEL[group]}
                </NavLink>
              </p>
              <ul className="site-side__list">
                {ENTRIES[group].map((entry) => (
                  <li key={entry.slug}>
                    <NavLink to={`/${group}/${entry.slug}`} className={linkClass}>
                      {entry.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="site-side__heading">More</p>
          <ul className="site-side__list">
            <li>
              <NavLink to="/icons" className={linkClass}>
                Icons
              </NavLink>
            </li>
            <li>
              <a className="site-side__link" href={CHANGELOG_URL}>
                Changelog
              </a>
            </li>
            <li>
              <a className="site-side__link" href={CHARTS_URL}>
                Used with cybercore-charts
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="site-docs__content">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default DocsShell;
