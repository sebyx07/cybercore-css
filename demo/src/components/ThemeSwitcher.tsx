import { useId } from 'react';

import { titleCase } from '../lib/meta';
import { THEMES, useTheme } from '../lib/theme';

/**
 * Lists whatever themes the framework build declares with `[data-theme]`.
 * Renders nothing while the framework ships a single theme.
 */
function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();
  const id = useId();

  if (THEMES.length < 2) {
    return null;
  }

  return (
    <div className="site-theme">
      <label className="site-theme__label" htmlFor={id}>
        Theme
      </label>
      <select
        id={id}
        className="cyber-select site-theme__select"
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
      >
        {THEMES.map((name) => (
          <option key={name} value={name}>
            {titleCase(name)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ThemeSwitcher;
