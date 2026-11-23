import { docsBundle } from '../lib/docs';

/**
 * Source of demo/public/og.png: demo/scripts/make-og.mjs screenshots this
 * route at 1200 by 630. Not linked from the site and not in the sitemap.
 */
function OgCard() {
  return (
    <div className="site-og">
      <div className="site-og__copy">
        <p className="cyber-nav__brand">Cybercore</p>
        <p className="site-og__title">
          Cyberpunk interfaces in <span className="cyber-text-cyan">pure CSS</span>
        </p>
        <p className="site-og__lead">
          Neon components, glitch effects, design tokens. No JavaScript.
        </p>
      </div>
      {/* Markup comes from the docs data files in this repo, never from users. */}
      <div className="site-og__panel" dangerouslySetInnerHTML={{ __html: docsBundle.heroPanel }} />
    </div>
  );
}

export default OgCard;
