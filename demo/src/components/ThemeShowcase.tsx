import { meta, titleCase } from '../lib/meta';
import { DEFAULT_THEME, THEMES, useTheme } from '../lib/theme';

import CodeBlock from './CodeBlock';

// The accents and surfaces a theme is most likely to move.
const SWATCH_PATTERN =
  /^--(cyber-(cyan|magenta|yellow|green)-500|color-(bg|text)-(primary|secondary))$/;
const SWATCHES = meta.tokens.filter((token) => SWATCH_PATTERN.test(token.name));

function themeSnippet(theme: string): string {
  if (theme === DEFAULT_THEME) {
    return `<!-- The default theme needs no attribute -->
<html lang="en">`;
  }
  return `<html lang="en" data-theme="${theme}">`;
}

const OVERRIDE_SNIPPET = `/* Your stylesheet, loaded after Cybercore */
:root {
  --cyber-cyan-500: #7df9ff;
  --font-display: "Orbitron", system-ui, sans-serif;
}`;

/** Theme picker with live swatches. Falls back to token overrides when one theme ships. */
function ThemeShowcase() {
  const [theme, setTheme] = useTheme();
  const hasThemes = THEMES.length > 1;

  return (
    <div className="site-themes">
      <div>
        {hasThemes && (
          <div className="site-themes__picker" role="group" aria-label="Theme">
            {THEMES.map((name) => (
              <button
                key={name}
                type="button"
                className={name === theme ? 'cyber-btn cyber-btn--filled' : 'cyber-btn'}
                aria-pressed={name === theme}
                onClick={() => setTheme(name)}
              >
                {titleCase(name)}
              </button>
            ))}
          </div>
        )}
        <ul className="site-swatches">
          {SWATCHES.map((token) => (
            <li key={token.name} className="site-swatch">
              <span className="site-swatch__chip" style={{ background: `var(${token.name})` }} />
              <code>{token.name}</code>
            </li>
          ))}
        </ul>
      </div>
      {hasThemes ? (
        <CodeBlock code={themeSnippet(theme)} language="html" title="HTML" />
      ) : (
        <CodeBlock code={OVERRIDE_SNIPPET} language="css" title="CSS" />
      )}
    </div>
  );
}

export default ThemeShowcase;
