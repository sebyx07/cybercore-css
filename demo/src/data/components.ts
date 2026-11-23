import { icon } from './icon';

import type { ModuleDoc } from './types';

const buttons: ModuleDoc = {
  slug: 'buttons',
  name: 'Buttons',
  summary: 'Cut-corner neon buttons with a sweep fill on hover, in five colours and three sizes.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'colours',
      title: 'Colours',
      description:
        'Cyan is the default. Use magenta for destructive actions, yellow for caution and green for confirmation.',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-gap-sm">
  <button class="cyber-btn" type="button">Connect</button>
  <button class="cyber-btn cyber-btn--magenta" type="button">Purge</button>
  <button class="cyber-btn cyber-btn--yellow" type="button">Override</button>
  <button class="cyber-btn cyber-btn--green" type="button">Confirm</button>
  <button class="cyber-btn cyber-btn--chrome" type="button">Dismiss</button>
</div>`,
    },
    {
      id: 'styles',
      title: 'Filled and ghost',
      description:
        'One filled button per view marks the primary action. Ghost drops the frame for low-priority actions.',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-gap-sm">
  <button class="cyber-btn cyber-btn--filled" type="button">Deploy</button>
  <button class="cyber-btn" type="button">Save draft</button>
  <button class="cyber-btn cyber-btn--ghost" type="button">Cancel</button>
</div>`,
    },
    {
      id: 'sizes',
      title: 'Sizes',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-items-center cyber-gap-sm">
  <button class="cyber-btn cyber-btn--sm" type="button">Small</button>
  <button class="cyber-btn" type="button">Default</button>
  <button class="cyber-btn cyber-btn--lg" type="button">Large</button>
</div>`,
    },
    {
      id: 'icons',
      title: 'With icons',
      description:
        'Put an inline SVG next to the label. A button with only an icon uses `cyber-btn--icon` and needs an `aria-label`.',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-items-center cyber-gap-sm">
  <button class="cyber-btn" type="button">
    ${icon('download')}
    Download
  </button>
  <button class="cyber-btn cyber-btn--icon" type="button" aria-label="Search">
    ${icon('search')}
  </button>
</div>`,
    },
    {
      id: 'states',
      title: 'Disabled, loading and pressed',
      description:
        'States follow the attributes you already set: `disabled`, `aria-busy="true"` and `aria-pressed="true"`. `cyber-btn--loading` gives the same spinner from a class.',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-gap-sm">
  <button class="cyber-btn" type="button" disabled>Disabled</button>
  <button class="cyber-btn" type="button" aria-busy="true">Syncing</button>
  <button class="cyber-btn" type="button" aria-pressed="true">Stealth on</button>
</div>`,
    },
    {
      id: 'block',
      title: 'Full width',
      html: `<button class="cyber-btn cyber-btn--filled cyber-btn--block" type="button">Establish uplink</button>`,
    },
    {
      id: 'links',
      title: 'Links and groups',
      description:
        'The class works on links. `cyber-btn-group` lines buttons up, and `--attached` joins them.',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-items-center cyber-gap-md">
  <a class="cyber-btn" href="#links">Read the log</a>
  <div class="cyber-btn-group cyber-btn-group--attached" role="group" aria-label="View">
    <button class="cyber-btn" type="button" aria-pressed="true">Grid</button>
    <button class="cyber-btn" type="button" aria-pressed="false">List</button>
  </div>
</div>`,
    },
  ],
  accessibility: [
    'Use `<button type="button">` for actions and `<a href>` for navigation. The class styles both.',
    'An icon-only button needs an `aria-label` that says what it does, such as "Search". Icons next to a text label stay `aria-hidden`.',
    'Prefer the `disabled` attribute. Use `aria-disabled="true"` only when the button must stay focusable, and then ignore its clicks in script.',
    'While `aria-busy="true"` the label stays in the DOM, so screen readers still announce what is loading.',
    'Colour is never the only signal: say "Delete" on a magenta button.',
  ],
  aria: [
    { attribute: 'aria-label', on: 'Icon-only button', why: 'Gives the control a name.' },
    {
      attribute: 'aria-pressed',
      on: 'Toggle button',
      why: 'Announces on or off, and styles the pressed state.',
    },
    {
      attribute: 'aria-busy="true"',
      on: 'Button running an action',
      why: 'Shows the spinner and tells assistive tech work is in progress.',
    },
  ],
  keyboard: [
    { keys: 'Tab', action: 'Moves focus to the button. The focus ring is always visible.' },
    { keys: 'Enter / Space', action: 'Activates a button. Links activate on Enter only.' },
  ],
};

const inputs: ModuleDoc = {
  slug: 'inputs',
  name: 'Inputs',
  summary:
    'Text inputs, textareas, selects, checkboxes, radios and range sliders, with validation states.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'field',
      title: 'Field with label and hint',
      description: '`cyber-field` stacks a label, the control and its helper text.',
      html: `<div class="cyber-field">
  <label class="cyber-field__label" for="handle">Handle</label>
  <input class="cyber-input" id="handle" type="text" autocomplete="username" aria-describedby="handle-hint">
  <p class="cyber-field__hint" id="handle-hint">Shown to other runners on the net.</p>
</div>`,
    },
    {
      id: 'validation',
      title: 'Validation',
      description:
        'Set `aria-invalid="true"` and link the message with `aria-describedby`. The input styles itself from the attribute.',
      html: `<div class="cyber-field">
  <label class="cyber-field__label" for="access-key">Access key</label>
  <input class="cyber-input" id="access-key" type="text" value="0451" aria-invalid="true" aria-describedby="access-key-error">
  <p class="cyber-field__error" id="access-key-error">Key must be 8 characters. This one has 4.</p>
</div>
<div class="cyber-field">
  <label class="cyber-field__label" for="node">Node address</label>
  <input class="cyber-input cyber-input--success" id="node" type="text" value="10.0.7.21" aria-describedby="node-ok">
  <p class="cyber-field__success" id="node-ok">Node reachable.</p>
</div>`,
    },
    {
      id: 'textarea-select',
      title: 'Textarea and select',
      html: `<div class="cyber-field">
  <label class="cyber-field__label" for="protocol">Protocol</label>
  <select class="cyber-select" id="protocol">
    <option>HTTP/3</option>
    <option>WebSocket</option>
    <option>gRPC</option>
  </select>
</div>
<div class="cyber-field">
  <label class="cyber-field__label" for="payload">Payload</label>
  <textarea class="cyber-textarea" id="payload" rows="3"></textarea>
</div>`,
    },
    {
      id: 'choices',
      title: 'Checkbox and radio',
      description:
        'Native inputs inside a label, so clicks, focus and form submission work as usual.',
      html: `<fieldset class="cyber-flex cyber-flex-col cyber-gap-sm">
  <legend class="cyber-field__label">Scan options</legend>
  <label class="cyber-checkbox">
    <input type="checkbox" checked>
    <span class="cyber-checkbox__box"></span>
    <span class="cyber-checkbox__label">Deep scan</span>
  </label>
  <label class="cyber-radio">
    <input type="radio" name="route" checked>
    <span class="cyber-radio__dot"></span>
    <span class="cyber-radio__label">Direct route</span>
  </label>
  <label class="cyber-radio">
    <input type="radio" name="route">
    <span class="cyber-radio__dot"></span>
    <span class="cyber-radio__label">Proxy chain</span>
  </label>
</fieldset>`,
    },
    {
      id: 'range',
      title: 'Range',
      description:
        'The filled part of the track follows `--range-value`. One line of script keeps it in step with the thumb.',
      html: `<div class="cyber-field">
  <label class="cyber-field__label" for="gain">Signal gain</label>
  <input class="cyber-range" id="gain" type="range" min="0" max="100" value="64" style="--range-value: 64%">
</div>`,
      js: `const range = document.querySelector('#gain');

range.addEventListener('input', () => {
  range.style.setProperty('--range-value', range.value + '%');
});`,
    },
    {
      id: 'group',
      title: 'Input with an icon',
      html: `<label class="cyber-field__label" for="query">Search systems</label>
<div class="cyber-input-group">
  <span class="cyber-input-group__addon">${icon('search', 20)}</span>
  <input class="cyber-input" id="query" type="search">
</div>`,
    },
  ],
  accessibility: [
    'Every control needs a visible `<label>` tied to it with `for` and `id`. A placeholder is not a label.',
    'Set `aria-invalid="true"` only after the person leaves the field or submits, never on the first keystroke.',
    'Point `aria-describedby` at the hint and the error, so both are read with the field.',
    'Group related checkboxes or radios in a `<fieldset>` with a `<legend>`.',
    'Add `autocomplete` to personal fields so browsers and password managers can fill them.',
  ],
  aria: [
    {
      attribute: 'aria-invalid="true"',
      on: 'Input, select or textarea',
      why: 'Announces the error state and applies the error style.',
    },
    {
      attribute: 'aria-describedby',
      on: 'The control',
      why: 'Links hint and error text to the field.',
    },
    {
      attribute: 'required',
      on: 'The control',
      why: 'Announced as required. Pair with `cyber-field__label--required` for the visual mark.',
    },
  ],
  keyboard: [
    { keys: 'Tab', action: 'Moves between controls.' },
    { keys: 'Space', action: 'Toggles a checkbox.' },
    {
      keys: 'Arrow keys',
      action: 'Move within a radio group, change a range, or step through select options.',
    },
  ],
};

const switches: ModuleDoc = {
  slug: 'switch',
  name: 'Switch',
  summary: 'An on/off toggle built on a native checkbox, for settings that apply at once.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'basic',
      title: 'Switch',
      html: `<label class="cyber-switch">
  <input type="checkbox" role="switch" checked>
  <span class="cyber-switch__track"></span>
  <span class="cyber-switch__label">Stealth mode</span>
</label>`,
    },
    {
      id: 'variants',
      title: 'Colours, sizes and disabled',
      html: `<div class="cyber-flex cyber-flex-col cyber-gap-sm">
  <label class="cyber-switch cyber-switch--green cyber-switch--sm">
    <input type="checkbox" role="switch" checked>
    <span class="cyber-switch__track"></span>
    <span class="cyber-switch__label">Uplink</span>
  </label>
  <label class="cyber-switch cyber-switch--magenta cyber-switch--lg">
    <input type="checkbox" role="switch" checked>
    <span class="cyber-switch__track"></span>
    <span class="cyber-switch__label">Kill switch</span>
  </label>
  <label class="cyber-switch">
    <input type="checkbox" role="switch" disabled>
    <span class="cyber-switch__track"></span>
    <span class="cyber-switch__label">Locked by admin</span>
  </label>
</div>`,
    },
  ],
  accessibility: [
    'Use a switch for a setting that takes effect immediately. In a form that is submitted, use a checkbox.',
    'Keep `role="switch"` on the input so it is announced as on or off instead of checked or unchecked.',
    'The label text names the setting, not the state: "Stealth mode", not "Enable stealth mode".',
  ],
  aria: [{ attribute: 'role="switch"', on: 'The checkbox input', why: 'Announces on and off.' }],
  keyboard: [{ keys: 'Space', action: 'Toggles the switch.' }],
};

const cards: ModuleDoc = {
  slug: 'cards',
  name: 'Cards',
  summary: 'Cut-corner panels with HUD brackets, a header, body and footer, in four accents.',
  behaviour: 'no-js',
  thumbnail: `<div class="cyber-card">
  <div class="cyber-card__header">
    <h3 class="cyber-card__title">Relay 04</h3>
    <span class="cyber-card__badge">Live</span>
  </div>
  <div class="cyber-card__body">1,284 packets per second.</div>
</div>`,
  examples: [
    {
      id: 'anatomy',
      title: 'Header, body and footer',
      html: `<div class="cyber-card">
  <div class="cyber-card__header">
    <span class="cyber-card__icon">${icon('server', 24)}</span>
    <div>
      <h3 class="cyber-card__title">Relay 04</h3>
      <p class="cyber-card__subtitle">Sector 7 uplink</p>
    </div>
    <span class="cyber-card__badge">Live</span>
  </div>
  <div class="cyber-card__body">
    <p>Routing 1,284 packets per second across three hops.</p>
  </div>
  <div class="cyber-card__footer">
    <button class="cyber-btn cyber-btn--sm" type="button">Open console</button>
  </div>
</div>`,
    },
    {
      id: 'colours',
      title: 'Accents',
      html: `<div class="cyber-grid--3">
  <div class="cyber-card cyber-card--magenta">
    <h3 class="cyber-card__title">Breach</h3>
    <p>Firewall down on node 12.</p>
  </div>
  <div class="cyber-card cyber-card--yellow">
    <h3 class="cyber-card__title">Caution</h3>
    <p>Heat at 82 percent.</p>
  </div>
  <div class="cyber-card cyber-card--green">
    <h3 class="cyber-card__title">Secure</h3>
    <p>All tunnels encrypted.</p>
  </div>
</div>`,
    },
    {
      id: 'variants',
      title: 'Interactive, glow and holo',
      description:
        'An interactive card that goes somewhere should be a link or contain one. `--holo` animates a slow gradient that stops under reduced motion.',
      html: `<div class="cyber-grid--3">
  <a class="cyber-card cyber-card--interactive" href="#variants">
    <h3 class="cyber-card__title">Interactive</h3>
    <p>Lifts on hover and focus.</p>
  </a>
  <div class="cyber-card cyber-card--glow">
    <h3 class="cyber-card__title">Glow</h3>
    <p>A steady neon halo.</p>
  </div>
  <div class="cyber-card cyber-card--holo">
    <h3 class="cyber-card__title">Holo</h3>
    <p>Shifting holographic fill.</p>
  </div>
</div>`,
    },
  ],
  accessibility: [
    'Give each card a heading at the right level for the page outline. `cyber-card__title` styles any heading element.',
    'A clickable card should be an `<a>` or contain one clear link. Do not put a click handler on a `<div>`.',
    'The frame is drawn on a pseudo-element, so focus rings, dropdowns and tooltips inside a card are not clipped.',
  ],
};

const badges: ModuleDoc = {
  slug: 'badges',
  name: 'Badges',
  summary:
    'Compact status tags: colours, filled and ghost styles, counters and presence indicators.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'colours',
      title: 'Colours',
      html: `<div class="cyber-badge-group">
  <span class="cyber-badge">Default</span>
  <span class="cyber-badge cyber-badge--magenta">Critical</span>
  <span class="cyber-badge cyber-badge--yellow">Warning</span>
  <span class="cyber-badge cyber-badge--green">Stable</span>
  <span class="cyber-badge cyber-badge--chrome">Archived</span>
</div>`,
    },
    {
      id: 'styles',
      title: 'Filled, ghost and pill',
      html: `<div class="cyber-badge-group">
  <span class="cyber-badge cyber-badge--filled">Filled</span>
  <span class="cyber-badge cyber-badge--ghost">Ghost</span>
  <span class="cyber-badge cyber-badge--pill">Pill</span>
  <span class="cyber-badge cyber-badge--sm">Small</span>
  <span class="cyber-badge cyber-badge--lg">Large</span>
</div>`,
    },
    {
      id: 'status',
      title: 'Presence and counters',
      description: 'Presence badges add a dot. The text still carries the meaning.',
      html: `<div class="cyber-badge-group">
  <span class="cyber-badge cyber-badge--online">Online</span>
  <span class="cyber-badge cyber-badge--away">Away</span>
  <span class="cyber-badge cyber-badge--busy">Busy</span>
  <span class="cyber-badge cyber-badge--offline">Offline</span>
  <span class="cyber-badge cyber-badge--counter cyber-badge--magenta">12<span class="cyber-sr-only"> unread alerts</span></span>
</div>`,
    },
  ],
  accessibility: [
    'Write the status in words. Colour and dots are extra cues, not the message.',
    'A bare number means nothing to a screen reader. Add hidden context with `cyber-sr-only`, as the counter above does.',
    'A badge is not a button. If it does something, use a button.',
  ],
};

const alerts: ModuleDoc = {
  slug: 'alerts',
  name: 'Alerts',
  summary:
    'Inline system messages for info, success, warning and error, with optional title, actions and dismiss.',
  behaviour: 'no-js',
  thumbnail: `<div class="cyber-flex cyber-flex-col cyber-gap-sm">
  <div class="cyber-alert cyber-alert--success">Uplink established.</div>
  <div class="cyber-alert cyber-alert--error">Authentication failed.</div>
</div>`,
  examples: [
    {
      id: 'variants',
      title: 'Severities',
      html: `<div class="cyber-flex cyber-flex-col cyber-gap-sm">
  <div class="cyber-alert" role="status">Info: firmware 2.4 is ready to install.</div>
  <div class="cyber-alert cyber-alert--success" role="status">Success: uplink established.</div>
  <div class="cyber-alert cyber-alert--warning" role="status">Warning: latency above 200 ms.</div>
  <div class="cyber-alert cyber-alert--error" role="alert">Error: authentication failed. Check your access key.</div>
</div>`,
    },
    {
      id: 'rich',
      title: 'Title, actions and dismiss',
      html: `<div class="cyber-alert cyber-alert--warning" role="status">
  <div class="cyber-alert__body">
    <p class="cyber-alert__title">Session expires in 2 minutes</p>
    <p>Unsaved changes to the route table will be lost.</p>
    <div class="cyber-alert__actions">
      <button class="cyber-btn cyber-btn--sm cyber-btn--yellow" type="button">Stay connected</button>
    </div>
  </div>
  <button class="cyber-alert__close" type="button" aria-label="Dismiss"></button>
</div>`,
    },
  ],
  accessibility: [
    'Use `role="status"` for routine messages and `role="alert"` only for errors that block the person.',
    'The glyph is decoration. Say the severity in the text: "Error: authentication failed".',
    'An alert inserted by script is announced only if its container was already in the page. Mount the wrapper first, then add the text.',
    'Say what happened and what to do next.',
  ],
  aria: [
    {
      attribute: 'role="status"',
      on: 'Info, success and warning alerts',
      why: 'Polite announcement when the content changes.',
    },
    {
      attribute: 'role="alert"',
      on: 'Blocking errors',
      why: 'Interrupts to announce immediately.',
    },
    {
      attribute: 'aria-label="Dismiss"',
      on: '`cyber-alert__close`',
      why: 'Names the icon-only close button.',
    },
  ],
};

const toast: ModuleDoc = {
  slug: 'toast',
  name: 'Toast',
  summary:
    'Transient notifications stacked in a corner. Styling only: your script adds and removes them.',
  behaviour: 'needs-js',
  thumbnail: `<div class="cyber-toast cyber-toast--success">
  <div class="cyber-toast__title">Uplink stable</div>
  <div class="cyber-toast__message">All nodes synced.</div>
</div>`,
  examples: [
    {
      id: 'live',
      title: 'Show a toast',
      description:
        'The region is in the page from the start and empty. Inserting a toast into it is what makes screen readers announce it.',
      html: `<button class="cyber-btn" type="button" id="toast-trigger">Sync nodes</button>

<div class="cyber-toast-region" id="toast-region" role="region" aria-label="Notifications"></div>`,
      js: `const region = document.querySelector('#toast-region');

document.querySelector('#toast-trigger').addEventListener('click', () => {
  const toast = document.createElement('div');
  toast.className = 'cyber-toast cyber-toast--success';
  toast.setAttribute('role', 'status');
  toast.innerHTML = \`
    <div class="cyber-toast__title">Uplink stable</div>
    <div class="cyber-toast__message">All nodes synced.</div>
    <button class="cyber-toast__close" type="button" aria-label="Dismiss"></button>\`;
  toast.querySelector('button').addEventListener('click', () => toast.remove());
  region.append(toast);
  setTimeout(() => toast.remove(), 6000);
});`,
    },
    {
      id: 'variants',
      title: 'Severities',
      description: 'Outside a region a toast is an ordinary block, which is how these are shown.',
      html: `<div class="cyber-flex cyber-flex-col cyber-gap-sm">
  <div class="cyber-toast">
    <div class="cyber-toast__title">Patch available</div>
    <div class="cyber-toast__message">Firmware 2.4 is ready.</div>
  </div>
  <div class="cyber-toast cyber-toast--warning">
    <div class="cyber-toast__title">Signal weak</div>
    <div class="cyber-toast__message">Relay 04 dropped to one bar.</div>
  </div>
  <div class="cyber-toast cyber-toast--error">
    <div class="cyber-toast__title">Upload failed</div>
    <div class="cyber-toast__message">The node refused the connection. Try again.</div>
  </div>
</div>`,
    },
  ],
  accessibility: [
    'Mount `cyber-toast-region` empty, then insert toasts. A live region only announces changes.',
    'Use `role="status"` for routine news and `role="alert"` for errors.',
    'A toast that disappears on a timer must pause on hover and focus, and must never hold the only copy of important information.',
    'Give people enough time: at least five seconds, longer for longer text.',
  ],
  aria: [
    {
      attribute: 'role="region"` + `aria-label',
      on: '`cyber-toast-region`',
      why: 'Makes the stack a landmark people can find.',
    },
    { attribute: 'role="status"', on: 'Each toast', why: 'Polite announcement on insert.' },
    {
      attribute: 'aria-label="Dismiss"',
      on: '`cyber-toast__close`',
      why: 'Names the close button.',
    },
  ],
};

const progress: ModuleDoc = {
  slug: 'progress',
  name: 'Progress',
  summary:
    'Linear, segmented, indeterminate and circular progress indicators driven by one custom property.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'linear',
      title: 'Linear',
      description: 'Set the amount with `--progress-value`, and mirror it in `aria-valuenow`.',
      html: `<div class="cyber-progress" role="progressbar" aria-label="Upload" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="--progress-value: 60%">
  <div class="cyber-progress__bar"></div>
</div>`,
    },
    {
      id: 'colours',
      title: 'Colours and sizes',
      html: `<div class="cyber-flex cyber-flex-col cyber-gap-md">
  <div class="cyber-progress cyber-progress--sm cyber-progress--green" role="progressbar" aria-label="Integrity" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="--progress-value: 90%">
    <div class="cyber-progress__bar"></div>
  </div>
  <div class="cyber-progress cyber-progress--yellow" role="progressbar" aria-label="Heat" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style="--progress-value: 55%">
    <div class="cyber-progress__bar"></div>
  </div>
  <div class="cyber-progress cyber-progress--lg cyber-progress--magenta" role="progressbar" aria-label="Threat level" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="--progress-value: 30%">
    <div class="cyber-progress__bar"></div>
  </div>
</div>`,
    },
    {
      id: 'indeterminate',
      title: 'Indeterminate',
      description: 'When the amount is unknown, leave out `aria-valuenow`.',
      html: `<div class="cyber-progress cyber-progress--indeterminate" role="progressbar" aria-label="Connecting">
  <div class="cyber-progress__bar"></div>
</div>`,
    },
    {
      id: 'segmented',
      title: 'Segmented',
      html: `<div class="cyber-progress cyber-progress--segmented" role="progressbar" aria-label="Setup steps" aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" aria-valuetext="Step 2 of 5">
  <div class="cyber-progress__segment cyber-progress__segment--active"></div>
  <div class="cyber-progress__segment cyber-progress__segment--active"></div>
  <div class="cyber-progress__segment"></div>
  <div class="cyber-progress__segment"></div>
  <div class="cyber-progress__segment"></div>
</div>`,
    },
    {
      id: 'circle',
      title: 'Circular',
      html: `<div class="cyber-progress-circle" role="progressbar" aria-label="Battery" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="--progress-value: 75">
  <svg class="cyber-progress-circle__svg" viewBox="0 0 100 100" aria-hidden="true">
    <circle class="cyber-progress-circle__track" cx="50" cy="50" r="40" />
    <circle class="cyber-progress-circle__bar" cx="50" cy="50" r="40" />
  </svg>
  <span class="cyber-progress-circle__value">75%</span>
</div>`,
    },
  ],
  accessibility: [
    'Add `role="progressbar"` with an `aria-label` that says what is progressing.',
    'Keep `aria-valuenow` in step with `--progress-value`. Omit it for indeterminate progress.',
    'For steps, `aria-valuetext="Step 2 of 5"` reads better than a bare number.',
    'The stripe animation stops under reduced motion. The bar still shows the amount.',
  ],
  aria: [
    {
      attribute: 'role="progressbar"',
      on: 'The outer element',
      why: 'Exposes the bar as progress.',
    },
    {
      attribute: 'aria-valuenow / min / max',
      on: 'The outer element',
      why: 'The current amount and its range.',
    },
    { attribute: 'aria-label', on: 'The outer element', why: 'Names the task.' },
  ],
};

const spinner: ModuleDoc = {
  slug: 'spinner',
  name: 'Spinner',
  summary: 'Loading indicators: a dual ring, bouncing dots and equaliser bars, in five sizes.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'ring',
      title: 'Ring',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-items-center cyber-gap-md" role="status">
  <div class="cyber-spinner cyber-spinner--sm"></div>
  <div class="cyber-spinner"></div>
  <div class="cyber-spinner cyber-spinner--lg cyber-spinner--magenta"></div>
  <div class="cyber-spinner cyber-spinner--single cyber-spinner--green"></div>
  <span class="cyber-sr-only">Loading</span>
</div>`,
    },
    {
      id: 'dots-bars',
      title: 'Dots and bars',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-items-center cyber-gap-lg" role="status">
  <div class="cyber-spinner-dots"><span></span><span></span><span></span></div>
  <div class="cyber-spinner-bars cyber-spinner-bars--yellow"><span></span><span></span><span></span><span></span><span></span></div>
  <span class="cyber-sr-only">Loading</span>
</div>`,
    },
  ],
  accessibility: [
    'A spinner is silent on its own. Wrap it in `role="status"` with hidden text such as "Loading", or put the text next to it.',
    'Set `aria-busy="true"` on the region being loaded, and remove it when the content arrives.',
    'For waits over a few seconds, prefer a skeleton or a progress bar: they say more about what is coming.',
    'Rotation slows or stops under reduced motion.',
  ],
};

const skeleton: ModuleDoc = {
  slug: 'skeleton',
  name: 'Skeleton',
  summary: 'Shimmering placeholders shaped like the content that is loading.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'shapes',
      title: 'Shapes',
      html: `<div class="cyber-flex cyber-items-center cyber-gap-md" aria-hidden="true">
  <div class="cyber-skeleton cyber-skeleton--avatar"></div>
  <div class="cyber-flex-1">
    <div class="cyber-skeleton cyber-skeleton--title"></div>
    <div class="cyber-skeleton cyber-skeleton--text"></div>
    <div class="cyber-skeleton cyber-skeleton--text"></div>
  </div>
</div>`,
    },
    {
      id: 'card',
      title: 'Card layout',
      html: `<div class="cyber-skeleton-card" aria-hidden="true">
  <div class="cyber-skeleton-card__header">
    <div class="cyber-skeleton cyber-skeleton--avatar-sm"></div>
    <div class="cyber-skeleton cyber-skeleton--title"></div>
  </div>
  <div class="cyber-skeleton-card__body">
    <div class="cyber-skeleton cyber-skeleton--text"></div>
    <div class="cyber-skeleton cyber-skeleton--text"></div>
    <div class="cyber-skeleton cyber-skeleton--button"></div>
  </div>
</div>`,
    },
    {
      id: 'animations',
      title: 'Pulse and static',
      html: `<div class="cyber-flex cyber-flex-col cyber-gap-sm" aria-hidden="true">
  <div class="cyber-skeleton cyber-skeleton--text cyber-skeleton--pulse"></div>
  <div class="cyber-skeleton cyber-skeleton--text cyber-skeleton--magenta"></div>
  <div class="cyber-skeleton cyber-skeleton--text cyber-skeleton--no-animation"></div>
</div>`,
    },
  ],
  accessibility: [
    'Hide skeletons from assistive tech with `aria-hidden="true"`. They carry no information.',
    'Mark the container that will receive content with `aria-busy="true"`, and announce completion once through a `role="status"` element.',
    'Match the shape and size of the real content, so nothing jumps when it arrives.',
    'The shimmer stops under reduced motion.',
  ],
};

const tables: ModuleDoc = {
  slug: 'tables',
  name: 'Tables',
  summary:
    'Data tables with striped, bordered and compact variants, sortable headers and a scrolling wrapper.',
  behaviour: 'no-js',
  thumbnail: `<table class="cyber-table cyber-table--striped">
  <thead><tr><th>Runner</th><th>Node</th></tr></thead>
  <tbody>
    <tr><td>ghost</td><td>relay-04</td></tr>
    <tr><td>null_ptr</td><td>relay-11</td></tr>
  </tbody>
</table>`,
  examples: [
    {
      id: 'basic',
      title: 'Table in a scrolling wrapper',
      description:
        'The wrapper scrolls sideways on narrow screens, so it must be focusable and labelled.',
      html: `<div class="cyber-table-wrapper" tabindex="0" role="region" aria-label="Active sessions">
  <table class="cyber-table cyber-table--striped">
    <caption class="cyber-sr-only">Active sessions</caption>
    <thead>
      <tr>
        <th scope="col">Runner</th>
        <th scope="col">Node</th>
        <th scope="col" class="cell-number">Latency</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">ghost_runner</th>
        <td>relay-04</td>
        <td class="cell-number">24 ms</td>
        <td><span class="cell-status cell-status--active">Active</span></td>
      </tr>
      <tr>
        <th scope="row">null_ptr</th>
        <td>relay-11</td>
        <td class="cell-number">187 ms</td>
        <td><span class="cell-status cell-status--pending">Pending</span></td>
      </tr>
      <tr>
        <th scope="row">static_x</th>
        <td>relay-02</td>
        <td class="cell-number">0 ms</td>
        <td><span class="cell-status cell-status--error">Dropped</span></td>
      </tr>
    </tbody>
  </table>
</div>`,
    },
    {
      id: 'sortable',
      title: 'Sortable columns',
      description:
        'Put a button in the header and set `aria-sort` on the `<th>`. The arrow follows the attribute.',
      html: `<table class="cyber-table cyber-table--compact cyber-table--bordered">
  <caption class="cyber-sr-only">Nodes by load</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending"><button type="button">Node</button></th>
      <th scope="col" aria-sort="none"><button type="button">Load</button></th>
    </tr>
  </thead>
  <tbody>
    <tr><td>relay-02</td><td class="cell-number">12%</td></tr>
    <tr><td>relay-04</td><td class="cell-number">64%</td></tr>
  </tbody>
</table>`,
    },
  ],
  accessibility: [
    'Give every table a `<caption>`. Hide it with `cyber-sr-only` if a visible heading already says the same.',
    'Mark headers with `<th scope="col">` and `<th scope="row">`.',
    'A wrapper that scrolls needs `tabindex="0"`, `role="region"` and an `aria-label`, so keyboard users can scroll it.',
    'Sortable headers hold a `<button>`, and the `<th>` carries `aria-sort`.',
    'Status cells say the status in text. The dot is extra.',
  ],
  aria: [
    {
      attribute: 'aria-sort',
      on: 'Sortable `<th>`',
      why: '`ascending`, `descending` or `none`. Drives the arrow.',
    },
    {
      attribute: 'role="region"` + `aria-label` + `tabindex="0"',
      on: '`cyber-table-wrapper`',
      why: 'Makes the scroll area reachable and named.',
    },
  ],
};

const tabs: ModuleDoc = {
  slug: 'tabs',
  name: 'Tabs',
  summary: 'Tab strips with underline, pill, vertical and full-width variants, plus panels.',
  behaviour: 'needs-js',
  examples: [
    {
      id: 'basic',
      title: 'Tabs with panels',
      description:
        'The selected tab is the one with `aria-selected="true"`. The script below is the whole behaviour, including arrow keys.',
      html: `<div class="cyber-tabs" role="tablist" aria-label="Deck sections" id="deck-tabs">
  <button class="cyber-tab" type="button" role="tab" id="tab-status" aria-selected="true" aria-controls="panel-status">Status</button>
  <button class="cyber-tab" type="button" role="tab" id="tab-logs" aria-selected="false" aria-controls="panel-logs" tabindex="-1">Logs</button>
  <button class="cyber-tab" type="button" role="tab" id="tab-keys" aria-selected="false" aria-controls="panel-keys" tabindex="-1">Keys</button>
</div>
<div class="cyber-tabs__panel" role="tabpanel" id="panel-status" aria-labelledby="tab-status" tabindex="0">All subsystems nominal.</div>
<div class="cyber-tabs__panel" role="tabpanel" id="panel-logs" aria-labelledby="tab-logs" tabindex="0" hidden>No new entries since 04:12.</div>
<div class="cyber-tabs__panel" role="tabpanel" id="panel-keys" aria-labelledby="tab-keys" tabindex="0" hidden>2 access keys on file.</div>`,
      js: `const tablist = document.querySelector('#deck-tabs');
const tabs = [...tablist.querySelectorAll('[role="tab"]')];

function select(tab) {
  tabs.forEach((other) => {
    const selected = other === tab;
    other.setAttribute('aria-selected', String(selected));
    other.tabIndex = selected ? 0 : -1;
    document.getElementById(other.getAttribute('aria-controls')).hidden = !selected;
  });
  tab.focus();
}

tablist.addEventListener('click', (event) => {
  const tab = event.target.closest('[role="tab"]');
  if (tab) select(tab);
});

tablist.addEventListener('keydown', (event) => {
  const index = tabs.indexOf(document.activeElement);
  const next = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: tabs.length - 1 }[event.key];
  if (next === undefined) return;
  event.preventDefault();
  select(tabs[(next + tabs.length) % tabs.length]);
});`,
    },
    {
      id: 'pills',
      title: 'Pills, colours and badges',
      html: `<div class="cyber-tabs cyber-tabs--pills" role="tablist" aria-label="Alert filter">
  <button class="cyber-tab cyber-tab--magenta" type="button" role="tab" aria-selected="true">Critical <span class="cyber-tab__badge">3</span></button>
  <button class="cyber-tab cyber-tab--magenta" type="button" role="tab" aria-selected="false" tabindex="-1">Resolved</button>
  <button class="cyber-tab cyber-tab--magenta" type="button" role="tab" aria-selected="false" tabindex="-1" aria-disabled="true">Archived</button>
</div>`,
    },
    {
      id: 'links',
      title: 'As page navigation',
      description:
        'When each tab is a different URL, use links in a `<nav>` and mark the current one with `aria-current="page"`. No tab roles, no script.',
      html: `<nav class="cyber-tabs cyber-tabs--fullwidth" aria-label="Account">
  <a class="cyber-tab cyber-tab--active" href="#links" aria-current="page">Profile</a>
  <a class="cyber-tab" href="#links">Security</a>
  <a class="cyber-tab" href="#links">Billing</a>
</nav>`,
    },
  ],
  accessibility: [
    'Tabs that swap panels in place use `role="tablist"`, `role="tab"` and `role="tabpanel"`. Tabs that navigate are plain links in a `<nav>`.',
    'Only the selected tab is in the Tab order. Arrow keys move between tabs (roving `tabindex`).',
    'Panels that are not shown carry the `hidden` attribute. Each panel is labelled by its tab with `aria-labelledby`.',
    'Make a panel focusable with `tabindex="0"` when it has no focusable content of its own.',
  ],
  aria: [
    {
      attribute: 'role="tablist"` + `aria-label',
      on: '`cyber-tabs`',
      why: 'Groups and names the tabs.',
    },
    {
      attribute: 'aria-selected',
      on: 'Each `cyber-tab`',
      why: 'Marks the current tab and styles it.',
    },
    { attribute: 'aria-controls', on: 'Each tab', why: 'Points at its panel.' },
    { attribute: 'aria-labelledby', on: 'Each panel', why: 'Names the panel after its tab.' },
  ],
  keyboard: [
    { keys: 'Tab', action: 'Enters the strip on the selected tab, then moves on to the panel.' },
    { keys: 'Left / Right', action: 'Selects the previous or next tab, wrapping at the ends.' },
    { keys: 'Home / End', action: 'Selects the first or last tab.' },
  ],
};

const accordion: ModuleDoc = {
  slug: 'accordion',
  name: 'Accordion',
  summary:
    'Collapsible sections built on details and summary, so opening, keyboard and semantics are native.',
  behaviour: 'no-js',
  thumbnail: `<div class="cyber-accordion">
  <details class="cyber-accordion__item" open>
    <summary class="cyber-accordion__trigger">Needs JavaScript?</summary>
    <div class="cyber-accordion__content">No.</div>
  </details>
  <details class="cyber-accordion__item">
    <summary class="cyber-accordion__trigger">Searchable?</summary>
  </details>
</div>`,
  examples: [
    {
      id: 'basic',
      title: 'One open at a time',
      description: 'Sibling `<details>` that share a `name` close each other.',
      html: `<div class="cyber-accordion">
  <details class="cyber-accordion__item" name="deck-faq" open>
    <summary class="cyber-accordion__trigger">Does it need JavaScript?</summary>
    <div class="cyber-accordion__content">No. The browser opens and closes each section.</div>
  </details>
  <details class="cyber-accordion__item" name="deck-faq">
    <summary class="cyber-accordion__trigger">Can several stay open?</summary>
    <div class="cyber-accordion__content">Yes. Remove the shared name attribute.</div>
  </details>
  <details class="cyber-accordion__item" name="deck-faq">
    <summary class="cyber-accordion__trigger">Is the content searchable?</summary>
    <div class="cyber-accordion__content">Yes. Find-in-page opens the section that matches.</div>
  </details>
</div>`,
    },
    {
      id: 'spaced',
      title: 'Spaced, with an accent',
      html: `<div class="cyber-accordion cyber-accordion--spaced cyber-accordion--magenta">
  <details class="cyber-accordion__item">
    <summary class="cyber-accordion__trigger">Incident 0451</summary>
    <div class="cyber-accordion__content">Firewall breach on node 12, contained at 04:12.</div>
  </details>
  <details class="cyber-accordion__item">
    <summary class="cyber-accordion__trigger">Incident 0452</summary>
    <div class="cyber-accordion__content">Relay 04 lost power for 9 seconds.</div>
  </details>
</div>`,
    },
  ],
  accessibility: [
    '`<details>` and `<summary>` announce the expanded state themselves. Do not add `aria-expanded`.',
    'If the accordion sits under a heading, put a heading inside the `<summary>` to keep the page outline.',
    'Keep interactive controls out of the `<summary>`. A click there toggles the section.',
  ],
  keyboard: [
    { keys: 'Tab', action: 'Moves between section headers.' },
    { keys: 'Enter / Space', action: 'Opens or closes the focused section.' },
  ],
};

const dropdown: ModuleDoc = {
  slug: 'dropdown',
  name: 'Dropdown',
  summary:
    'Menu buttons that open from details and summary with no script, or from a class you toggle.',
  thumbnail: `<div class="cyber-dropdown">
  <button class="cyber-dropdown__trigger" type="button">Actions</button>
</div>`,
  examples: [
    {
      id: 'details',
      title: 'Pure CSS, with details',
      description:
        'Opens on click or Enter, closes on a second click. Good for a short list of links.',
      html: `<details class="cyber-dropdown">
  <summary class="cyber-dropdown__trigger">Jump to</summary>
  <ul class="cyber-dropdown__menu">
    <li><a class="cyber-dropdown__item cyber-dropdown__item--active" href="#details" aria-current="page">Overview</a></li>
    <li><a class="cyber-dropdown__item" href="#details">Sessions</a></li>
    <li><a class="cyber-dropdown__item" href="#details">Access keys</a></li>
  </ul>
</details>`,
    },
    {
      id: 'menu',
      title: 'Action menu, with script',
      description:
        'For a menu of actions, toggle `cyber-dropdown--open` and manage focus: arrows move, Esc closes and returns to the trigger.',
      html: `<div class="cyber-dropdown" id="node-menu">
  <button class="cyber-dropdown__trigger" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="node-menu-list">Node actions</button>
  <ul class="cyber-dropdown__menu" id="node-menu-list" role="menu" aria-label="Node actions">
    <li role="none"><button class="cyber-dropdown__item" type="button" role="menuitem" tabindex="-1">Restart</button></li>
    <li role="none"><button class="cyber-dropdown__item" type="button" role="menuitem" tabindex="-1">Rotate keys</button></li>
    <li class="cyber-dropdown__divider" role="separator"></li>
    <li role="none"><button class="cyber-dropdown__item cyber-dropdown__item--danger" type="button" role="menuitem" tabindex="-1">Decommission</button></li>
  </ul>
</div>`,
      js: `const dropdown = document.querySelector('#node-menu');
const trigger = dropdown.querySelector('.cyber-dropdown__trigger');
const items = [...dropdown.querySelectorAll('[role="menuitem"]')];

function setOpen(open) {
  dropdown.classList.toggle('cyber-dropdown--open', open);
  trigger.setAttribute('aria-expanded', String(open));
  // The menu fades in and cannot take focus until that has started.
  if (open) setTimeout(() => items[0].focus(), 50);
}

trigger.addEventListener('click', () => {
  setOpen(!dropdown.classList.contains('cyber-dropdown--open'));
});

dropdown.addEventListener('keydown', (event) => {
  const index = items.indexOf(document.activeElement);
  if (event.key === 'Escape') {
    setOpen(false);
    trigger.focus();
  } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    const step = event.key === 'ArrowDown' ? 1 : -1;
    items[(index + step + items.length) % items.length].focus();
  }
});

// Leaving the menu, or choosing an item, closes it.
dropdown.addEventListener('focusout', (event) => {
  if (!dropdown.contains(event.relatedTarget)) setOpen(false);
});
items.forEach((item) => item.addEventListener('click', () => {
  setOpen(false);
  trigger.focus();
}));`,
    },
  ],
  accessibility: [
    'A list of links is navigation: use the `<details>` form and plain links, with no menu roles.',
    'A list of actions is a menu: `role="menu"` on the list, `role="menuitem"` on each item, `role="none"` on the `<li>`.',
    'The trigger carries `aria-haspopup="menu"` and `aria-expanded`, kept in step with the open class.',
    'Esc closes the menu and returns focus to the trigger. Arrow keys move between items.',
    '`cyber-dropdown--css-only` opens while focus is inside it. It closes as soon as focus leaves, so treat it as a convenience, not as the only way to reach its links.',
  ],
  aria: [
    { attribute: 'aria-expanded', on: 'Trigger button', why: 'Announces open or closed.' },
    { attribute: 'aria-haspopup="menu"', on: 'Trigger button', why: 'Says a menu will open.' },
    {
      attribute: 'role="menu"` / `role="menuitem"',
      on: 'List and its items',
      why: 'Only for action menus.',
    },
  ],
  keyboard: [
    { keys: 'Enter / Space', action: 'Opens the menu from the trigger.' },
    { keys: 'Up / Down', action: 'Moves between menu items.' },
    { keys: 'Esc', action: 'Closes the menu and returns focus to the trigger.' },
  ],
};

const tooltip: ModuleDoc = {
  slug: 'tooltip',
  name: 'Tooltip',
  summary: 'Pure CSS tooltips that appear on hover and on keyboard focus, in four positions.',
  behaviour: 'no-js',
  thumbnail: `<div class="cyber-flex cyber-gap-md">
  <button class="cyber-btn cyber-tooltip" type="button" data-tooltip="Copy link">Copy</button>
  <button class="cyber-btn cyber-tooltip cyber-tooltip--magenta" type="button" data-tooltip="Purge">Purge</button>
</div>`,
  examples: [
    {
      id: 'attribute',
      title: 'From an attribute',
      description:
        'For short labels. Generated content is not announced reliably, so repeat the text in `aria-label`.',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-gap-md cyber-p-lg">
  <button class="cyber-btn cyber-btn--icon cyber-tooltip" type="button" data-tooltip="Copy link" aria-label="Copy link">
    ${icon('link')}
  </button>
  <button class="cyber-btn cyber-tooltip cyber-tooltip--bottom" type="button" data-tooltip="Opens below">Bottom</button>
  <button class="cyber-btn cyber-tooltip cyber-tooltip--end cyber-tooltip--magenta" type="button" data-tooltip="Opens at the end">End</button>
</div>`,
    },
    {
      id: 'element',
      title: 'From an element',
      description:
        'For a description that screen readers should read, link it with `aria-describedby`.',
      html: `<div class="cyber-p-lg">
  <span class="cyber-tooltip">
    <button class="cyber-btn" type="button" aria-describedby="deploy-tip">Deploy</button>
    <span class="cyber-tooltip__content" role="tooltip" id="deploy-tip">Ships the current build to every node.</span>
  </span>
</div>`,
    },
  ],
  accessibility: [
    'A tooltip adds a hint. Never put essential information or interactive content in one.',
    'Tooltips show on focus as well as hover, so the trigger must be focusable: a button, a link or an input.',
    'The attribute form needs the same text in `aria-label`. The element form uses `role="tooltip"` and `aria-describedby`.',
    'The bubble stays open while the pointer is over it, so people using magnification can reach it.',
    'Touch screens have no hover. Anything a touch user needs must be visible without the tooltip.',
  ],
  aria: [
    {
      attribute: 'aria-label',
      on: 'Trigger, attribute form',
      why: 'Carries the tooltip text to assistive tech.',
    },
    {
      attribute: 'aria-describedby',
      on: 'Trigger, element form',
      why: 'Reads the tooltip after the control name.',
    },
    { attribute: 'role="tooltip"', on: '`cyber-tooltip__content`', why: 'Identifies the bubble.' },
  ],
};

const modal: ModuleDoc = {
  slug: 'modal',
  name: 'Modal',
  summary: 'Dialog styling for the native dialog element, or for a backdrop you open with a class.',
  behaviour: 'needs-js',
  thumbnail: `<div class="cyber-modal__header">
  <span class="cyber-modal__title">Purge cache?</span>
</div>
<div class="cyber-modal__body">Clears 1.2 GB.</div>`,
  examples: [
    {
      id: 'dialog',
      title: 'Native dialog',
      description:
        'Preferred. `showModal()` traps focus, closes on Esc and makes the page behind inert. You only return focus to the trigger.',
      html: `<button class="cyber-btn" type="button" id="purge-open">Purge cache</button>

<dialog class="cyber-dialog" id="purge-dialog" aria-labelledby="purge-title">
  <div class="cyber-modal__header">
    <h2 class="cyber-modal__title" id="purge-title">Purge cache?</h2>
    <button class="cyber-modal__close" type="button" aria-label="Close" data-close></button>
  </div>
  <div class="cyber-modal__body">
    <p>This clears 1.2 GB of session data on relay 04. Active sessions stay connected.</p>
  </div>
  <div class="cyber-modal__footer">
    <button class="cyber-btn cyber-btn--ghost" type="button" data-close autofocus>Cancel</button>
    <button class="cyber-btn cyber-btn--magenta" type="button" data-close>Purge cache</button>
  </div>
</dialog>`,
      js: `const dialog = document.querySelector('#purge-dialog');
const opener = document.querySelector('#purge-open');

opener.addEventListener('click', () => dialog.showModal());

dialog.querySelectorAll('[data-close]').forEach((button) => {
  button.addEventListener('click', () => dialog.close());
});

// Esc and the buttons both end here: hand focus back.
dialog.addEventListener('close', () => opener.focus());`,
    },
    {
      id: 'class',
      title: 'Class toggle',
      description:
        'For stacks that cannot use `<dialog>`. Add the dialog roles yourself, move focus in on open, and restore it on close.',
      html: `<button class="cyber-btn" type="button" id="alert-open">Show system alert</button>

<div class="cyber-modal cyber-modal--yellow" id="alert-modal">
  <div class="cyber-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="alert-title">
    <div class="cyber-modal__header">
      <h2 class="cyber-modal__title" id="alert-title">Heat warning</h2>
      <button class="cyber-modal__close" type="button" aria-label="Close" data-close></button>
    </div>
    <div class="cyber-modal__body">
      <p>Core temperature is at 82 percent. Throttle the deck or vent now.</p>
    </div>
    <div class="cyber-modal__footer">
      <button class="cyber-btn cyber-btn--yellow" type="button" data-close>Acknowledge</button>
    </div>
  </div>
</div>`,
      js: `const modal = document.querySelector('#alert-modal');
const opener = document.querySelector('#alert-open');

function close() {
  modal.classList.remove('cyber-modal--open');
  opener.focus();
}

opener.addEventListener('click', () => {
  modal.classList.add('cyber-modal--open');
  // The backdrop fades in and cannot take focus until that has started.
  setTimeout(() => modal.querySelector('[data-close]').focus(), 50);
});

modal.addEventListener('click', (event) => {
  // The backdrop itself, or any element marked data-close.
  if (event.target === modal || event.target.closest('[data-close]')) close();
});

modal.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') close();
});`,
    },
  ],
  accessibility: [
    'Use `<dialog>` with `showModal()` when you can. Focus containment, Esc and the inert page come for free.',
    'Name the dialog with `aria-labelledby` pointing at its title.',
    'On open, focus goes to the first field, or to the safe choice in a destructive confirmation (Cancel above).',
    'On close, return focus to the control that opened the dialog.',
    'With the class toggle you also have to keep Tab inside the dialog. The example above does not, which is one more reason to prefer `<dialog>`.',
    'Open a modal only when the task needs an interruption.',
  ],
  aria: [
    { attribute: 'aria-labelledby', on: 'The dialog', why: 'Names it after its title.' },
    {
      attribute: 'role="dialog"` + `aria-modal="true"',
      on: '`cyber-modal__dialog`, class toggle only',
      why: 'What `<dialog>` provides natively.',
    },
    {
      attribute: 'aria-label="Close"',
      on: '`cyber-modal__close`',
      why: 'Names the icon-only button.',
    },
  ],
  keyboard: [
    { keys: 'Esc', action: 'Closes the dialog.' },
    { keys: 'Tab', action: 'Cycles through the controls inside the dialog.' },
  ],
};

const nav: ModuleDoc = {
  slug: 'nav',
  name: 'Navigation',
  summary:
    'A sticky top bar with brand, links and actions that folds into a menu on small screens.',
  behaviour: 'needs-js',
  examples: [
    {
      id: 'bar',
      title: 'Navigation bar',
      description:
        'The toggle button appears on narrow screens. Its script flips one class and one attribute.',
      html: `<nav class="cyber-nav" aria-label="Example" id="example-nav">
  <a class="cyber-nav__brand" href="#bar">Netwatch</a>
  <button class="cyber-nav__toggle" type="button" aria-expanded="false" aria-controls="example-nav-menu" aria-label="Menu">
    <span class="cyber-nav__toggle-bar"></span>
    <span class="cyber-nav__toggle-bar"></span>
    <span class="cyber-nav__toggle-bar"></span>
  </button>
  <div class="cyber-nav__menu" id="example-nav-menu">
    <ul class="cyber-nav__links">
      <li><a class="cyber-nav__link" href="#bar" aria-current="page">Dashboard</a></li>
      <li><a class="cyber-nav__link" href="#bar">Sessions</a></li>
      <li><a class="cyber-nav__link" href="#bar">Logs</a></li>
    </ul>
    <div class="cyber-nav__actions">
      <span class="cyber-status"><span class="cyber-status__dot"></span>Online</span>
    </div>
  </div>
</nav>`,
      js: `const nav = document.querySelector('#example-nav');
const toggle = nav.querySelector('.cyber-nav__toggle');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('cyber-nav--open');
  toggle.setAttribute('aria-expanded', String(open));
});`,
    },
    {
      id: 'status',
      title: 'Status indicator',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-gap-sm">
  <span class="cyber-status"><span class="cyber-status__dot"></span>Online</span>
  <span class="cyber-status cyber-status--warning"><span class="cyber-status__dot"></span>Degraded</span>
  <span class="cyber-status cyber-status--error"><span class="cyber-status__dot"></span>Down</span>
  <span class="cyber-status cyber-status--offline"><span class="cyber-status__dot"></span>Offline</span>
</div>`,
    },
  ],
  accessibility: [
    'Use a `<nav>` element with an `aria-label`, so it is a named landmark.',
    'Mark the current page with `aria-current="page"`. It styles the link too.',
    'The toggle is a `<button>` with `aria-expanded` and `aria-controls`. Its three bars are decoration, so it needs an `aria-label`.',
    'A sticky bar can cover focused elements. Set `scroll-padding-top` on `html` to its height.',
    'Start the page with a "Skip to content" link before the bar.',
  ],
  aria: [
    { attribute: 'aria-label', on: '`<nav>`', why: 'Names the landmark.' },
    {
      attribute: 'aria-current="page"',
      on: 'The current link',
      why: 'Announces and styles the current page.',
    },
    {
      attribute: 'aria-expanded` + `aria-controls',
      on: '`cyber-nav__toggle`',
      why: 'Ties the button to the menu it opens.',
    },
  ],
};

const breadcrumb: ModuleDoc = {
  slug: 'breadcrumb',
  name: 'Breadcrumb',
  summary: 'A trail of links back up the hierarchy, with slash or chevron separators.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'basic',
      title: 'Breadcrumb',
      html: `<nav class="cyber-breadcrumb" aria-label="Breadcrumb">
  <ol class="cyber-breadcrumb__list">
    <li class="cyber-breadcrumb__item"><a class="cyber-breadcrumb__link" href="#basic">Deck</a></li>
    <li class="cyber-breadcrumb__item"><a class="cyber-breadcrumb__link" href="#basic">Sector 7</a></li>
    <li class="cyber-breadcrumb__item" aria-current="page">Relay 04</li>
  </ol>
</nav>`,
    },
    {
      id: 'chevron',
      title: 'Chevron separators and accents',
      html: `<nav class="cyber-breadcrumb cyber-breadcrumb--chevron cyber-breadcrumb--magenta" aria-label="Incident trail">
  <ol class="cyber-breadcrumb__list">
    <li class="cyber-breadcrumb__item"><a class="cyber-breadcrumb__link" href="#chevron">Incidents</a></li>
    <li class="cyber-breadcrumb__item"><a class="cyber-breadcrumb__link" href="#chevron">2077</a></li>
    <li class="cyber-breadcrumb__item" aria-current="page">Incident 0451</li>
  </ol>
</nav>`,
    },
  ],
  accessibility: [
    'Wrap the trail in `<nav aria-label="Breadcrumb">` and use an ordered list: the order is the meaning. Two trails on one page need two different labels.',
    'The last item is the current page. Mark it with `aria-current="page"` and do not link it.',
    'Separators are drawn in CSS, so they are not read aloud.',
  ],
  aria: [
    { attribute: 'aria-label="Breadcrumb"', on: '`<nav>`', why: 'Names the landmark.' },
    { attribute: 'aria-current="page"', on: 'Last item', why: 'Marks the current page.' },
  ],
};

const pagination: ModuleDoc = {
  slug: 'pagination',
  name: 'Pagination',
  summary:
    'Page links with previous and next, a current page marker and an ellipsis for long ranges.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'basic',
      title: 'Pagination',
      description:
        'On the first page, "Previous" has nowhere to go: drop its `href` and add `aria-disabled="true"`.',
      html: `<nav class="cyber-pagination" aria-label="Pagination">
  <ul class="cyber-pagination__list">
    <li><a class="cyber-pagination__link" aria-disabled="true" aria-label="Previous page">&lt;</a></li>
    <li><a class="cyber-pagination__link" href="#basic" aria-current="page" aria-label="Page 1">1</a></li>
    <li><a class="cyber-pagination__link" href="#basic" aria-label="Page 2">2</a></li>
    <li><a class="cyber-pagination__link" href="#basic" aria-label="Page 3">3</a></li>
    <li><span class="cyber-pagination__ellipsis">…</span></li>
    <li><a class="cyber-pagination__link" href="#basic" aria-label="Page 12">12</a></li>
    <li><a class="cyber-pagination__link" href="#basic" aria-label="Next page">&gt;</a></li>
  </ul>
</nav>`,
    },
    {
      id: 'sizes',
      title: 'Sizes and accents',
      html: `<nav class="cyber-pagination cyber-pagination--sm cyber-pagination--green" aria-label="Log pages">
  <ul class="cyber-pagination__list">
    <li><a class="cyber-pagination__link" href="#sizes" aria-label="Previous page">&lt;</a></li>
    <li><a class="cyber-pagination__link" href="#sizes" aria-label="Page 4">4</a></li>
    <li><a class="cyber-pagination__link" href="#sizes" aria-current="page" aria-label="Page 5">5</a></li>
    <li><a class="cyber-pagination__link" href="#sizes" aria-label="Page 6">6</a></li>
    <li><a class="cyber-pagination__link" href="#sizes" aria-label="Next page">&gt;</a></li>
  </ul>
</nav>`,
    },
  ],
  accessibility: [
    'Wrap the list in `<nav>` with an `aria-label`. With more than one on a page, give each a different label.',
    'Mark the current page with `aria-current="page"`.',
    'A bare "2" or "<" is unclear out of context. Give each link an `aria-label` such as "Page 2" or "Previous page".',
    'A link with nowhere to go loses its `href` and gains `aria-disabled="true"`.',
  ],
  aria: [
    {
      attribute: 'aria-current="page"',
      on: 'Current page link',
      why: 'Announces and styles the current page.',
    },
    { attribute: 'aria-label', on: 'Each link', why: 'Says "Page 2" instead of "2".' },
    {
      attribute: 'aria-disabled="true"',
      on: 'A link without `href`',
      why: 'Announces that it is unavailable.',
    },
  ],
};

const terminal: ModuleDoc = {
  slug: 'terminal',
  name: 'Terminal',
  summary:
    'A console window with a title bar, coloured output lines, a blinking cursor and an input row.',
  behaviour: 'no-js',
  thumbnail: `<div class="cyber-terminal">
  <div class="cyber-terminal__header">
    <span class="cyber-terminal__dot cyber-terminal__dot--red"></span>
    <span class="cyber-terminal__dot cyber-terminal__dot--yellow"></span>
    <span class="cyber-terminal__dot cyber-terminal__dot--green"></span>
    <span class="cyber-terminal__title">relay-04</span>
  </div>
  <div class="cyber-terminal__body">
    <div class="cyber-terminal__line"><span class="cyber-terminal__prompt">$</span><span class="cyber-terminal__command">scan</span></div>
    <div class="cyber-terminal__line cyber-terminal__line--success">126 nodes secure</div>
    <div class="cyber-terminal__line cyber-terminal__line--error">1 node unreachable</div>
  </div>
</div>`,
  examples: [
    {
      id: 'basic',
      title: 'Terminal',
      html: `<div class="cyber-terminal">
  <div class="cyber-terminal__header">
    <span class="cyber-terminal__dot cyber-terminal__dot--red"></span>
    <span class="cyber-terminal__dot cyber-terminal__dot--yellow"></span>
    <span class="cyber-terminal__dot cyber-terminal__dot--green"></span>
    <span class="cyber-terminal__title">relay-04</span>
  </div>
  <div class="cyber-terminal__body">
    <div class="cyber-terminal__line"><span class="cyber-terminal__prompt">$</span><span class="cyber-terminal__command">scan --sector 7</span></div>
    <div class="cyber-terminal__line cyber-terminal__line--output">Scanning 128 nodes</div>
    <div class="cyber-terminal__line cyber-terminal__line--success">126 nodes secure</div>
    <div class="cyber-terminal__line cyber-terminal__line--warning">1 node degraded</div>
    <div class="cyber-terminal__line cyber-terminal__line--error">1 node unreachable</div>
    <div class="cyber-terminal__line"><span class="cyber-terminal__prompt">$</span><span class="cyber-terminal__cursor"></span></div>
  </div>
</div>`,
    },
    {
      id: 'input',
      title: 'With an input row',
      html: `<div class="cyber-terminal cyber-terminal--sm cyber-terminal--glow">
  <div class="cyber-terminal__body" role="log" aria-label="Console output" tabindex="0">
    <div class="cyber-terminal__line cyber-terminal__line--info">Connected to relay-04</div>
  </div>
  <div class="cyber-terminal__input">
    <span class="cyber-terminal__prompt">$</span>
    <input class="cyber-terminal__input-field" type="text" aria-label="Command" placeholder="help">
  </div>
</div>`,
    },
  ],
  accessibility: [
    'A console that prints new lines is a log: `role="log"` on the body announces additions politely.',
    'A body that scrolls needs `tabindex="0"` and a label, so the keyboard can reach it.',
    'Give `cyber-terminal__input-field` an `aria-label`. It has no visible label.',
    'The header dots are decoration. Do not make them the only window controls.',
    'The cursor stops blinking under reduced motion.',
  ],
  aria: [
    {
      attribute: 'role="log"',
      on: '`cyber-terminal__body`',
      why: 'Announces new lines as they arrive.',
    },
    {
      attribute: 'aria-label',
      on: 'Input field and scrolling body',
      why: 'Names controls without visible labels.',
    },
  ],
};

const hud: ModuleDoc = {
  slug: 'hud',
  name: 'HUD',
  summary:
    'Heads-up-display pieces: a bracketed frame with a label, big stat readouts and section dividers.',
  behaviour: 'no-js',
  thumbnail: `<section class="cyber-hud">
  <h3 class="cyber-hud__label">Sector 7</h3>
  <div class="cyber-grid--2">
    <div class="cyber-stat">
      <div class="cyber-stat__value">128</div>
      <div class="cyber-stat__label">Nodes</div>
    </div>
    <div class="cyber-stat cyber-stat--green">
      <div class="cyber-stat__value">99%</div>
      <div class="cyber-stat__label">Uptime</div>
    </div>
  </div>
</section>`,
  examples: [
    {
      id: 'frame',
      title: 'Frame with stats',
      html: `<section class="cyber-hud" aria-labelledby="hud-sector">
  <h3 class="cyber-hud__label" id="hud-sector">Sector 7</h3>
  <div class="cyber-grid--3">
    <div class="cyber-stat">
      <div class="cyber-stat__value">128</div>
      <div class="cyber-stat__label">Nodes online</div>
    </div>
    <div class="cyber-stat cyber-stat--green">
      <div class="cyber-stat__value">99.2%</div>
      <div class="cyber-stat__label">Uptime</div>
      <div class="cyber-stat__delta cyber-stat__delta--up">Up 0.4 points</div>
    </div>
    <div class="cyber-stat cyber-stat--magenta">
      <div class="cyber-stat__value">3</div>
      <div class="cyber-stat__label">Open incidents</div>
      <div class="cyber-stat__delta cyber-stat__delta--down">Down 2</div>
    </div>
  </div>
</section>`,
    },
    {
      id: 'grid',
      title: 'Grid overlay and divider',
      html: `<section class="cyber-hud cyber-hud--grid cyber-hud--yellow" aria-labelledby="hud-heat">
  <h3 class="cyber-hud__label" id="hud-heat">Thermal</h3>
  <p>Core at 82 percent of rated load.</p>
  <hr class="cyber-divider cyber-divider--yellow">
  <p>Vents open. Fans at full speed.</p>
</section>`,
    },
  ],
  accessibility: [
    'A HUD frame that groups content is a `<section>` named by its label through `aria-labelledby`.',
    'Scan and grid overlays are decoration: `aria-hidden="true"` on `cyber-hud__scan`.',
    'A stat needs its caption. Write deltas in words, such as "Up 0.4 points". Arrows and colour alone do not say enough.',
    'Use `<hr>` for the divider, or `role="separator"` on another element.',
  ],
};

export const COMPONENT_DOCS: ModuleDoc[] = [
  buttons,
  inputs,
  switches,
  cards,
  badges,
  alerts,
  toast,
  progress,
  spinner,
  skeleton,
  tables,
  tabs,
  accordion,
  dropdown,
  tooltip,
  modal,
  nav,
  breadcrumb,
  pagination,
  terminal,
  hud,
];
