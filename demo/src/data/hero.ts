import { icon } from './icon';

/**
 * The console on the home page. Framework classes only: the site's own
 * stylesheet does not touch anything inside it.
 */
export const HERO_PANEL = `<div class="cyber-neon-border">
  <div class="cyber-card cyber-card--holo">
    <div class="cyber-card__header">
      <span class="cyber-card__icon">${icon('chip', 24)}</span>
      <span class="cyber-card__title">Deck status</span>
      <span class="cyber-card__badge">LIVE</span>
    </div>

    <div class="cyber-terminal cyber-scanlines cyber-mb-md">
      <div class="cyber-terminal__header">
        <span class="cyber-terminal__dot cyber-terminal__dot--red"></span>
        <span class="cyber-terminal__dot cyber-terminal__dot--yellow"></span>
        <span class="cyber-terminal__dot cyber-terminal__dot--green"></span>
        <span class="cyber-terminal__title">deck://boot</span>
      </div>
      <div class="cyber-terminal__body">
        <div class="cyber-terminal__line"><span class="cyber-terminal__prompt">$</span><span class="cyber-terminal__command">npm install cybercore-css</span></div>
        <div class="cyber-terminal__line cyber-terminal__line--success">added 1 package</div>
        <div class="cyber-terminal__line cyber-terminal__line--info">javascript shipped: 0 bytes</div>
        <div class="cyber-terminal__line"><span class="cyber-terminal__prompt">$</span><span class="cyber-terminal__cursor"></span></div>
      </div>
    </div>

    <div class="cyber-flex cyber-justify-between cyber-mb-xs">
      <span class="cyber-font-mono cyber-text-secondary">Uplink</span>
      <span class="cyber-font-mono cyber-text-cyan">82%</span>
    </div>
    <div class="cyber-progress cyber-mb-md" role="progressbar" aria-label="Uplink" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100">
      <div class="cyber-progress__bar" style="width: 82%"></div>
    </div>

    <div class="cyber-flex cyber-justify-between cyber-mb-xs">
      <span class="cyber-font-mono cyber-text-secondary">Heat</span>
      <span class="cyber-font-mono cyber-text-magenta">46%</span>
    </div>
    <div class="cyber-progress cyber-progress--magenta cyber-mb-md" role="progressbar" aria-label="Heat" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100">
      <div class="cyber-progress__bar" style="width: 46%"></div>
    </div>

    <div class="cyber-flex cyber-flex-wrap cyber-items-center cyber-gap-sm">
      <span class="cyber-badge cyber-badge--online">Online</span>
      <span class="cyber-badge cyber-badge--yellow">3 alerts</span>
      <span class="cyber-badge cyber-badge--chrome">Sector 7</span>
    </div>
  </div>
</div>`;
