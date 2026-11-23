/**
 * Shape of `virtual:cybercore-meta`, the framework facts the Vite plugin in
 * demo/vite/cybercore-meta.ts reads from the compiled SCSS at build time.
 */

export interface ThemeMeta {
  name: string;
  /** `color-scheme` the theme declares, when it declares one. */
  colorScheme: string | null;
}

export interface TokenMeta {
  name: string;
  /** Value declared on `:root`. Empty when only themes declare it. */
  value: string;
  /** Values a `[data-theme]` block overrides, by theme name. */
  themes: Record<string, string>;
}

export interface CustomPropertyMeta {
  name: string;
  value: string;
  selector: string;
}

export interface ModuleMeta {
  /** `components/buttons` */
  id: string;
  group: 'components' | 'effects' | 'utilities';
  slug: string;
  /** Classes the module defines, without the leading dot. */
  classes: string[];
  customProperties: CustomPropertyMeta[];
  /** Leading comment block of the SCSS file, banner lines removed. */
  notes: string;
  /** True when `cybercore.scss` (and so the CDN build) includes it. */
  inBundle: boolean;
}

export interface CybercoreMeta {
  version: string;
  /** `core/…` modules `cybercore.scss` loads before anything else, in order. */
  coreModules: string[];
  /** Cascade layer order the bundle declares, lowest priority first. */
  layers: string[];
  css: { bytes: number; gzipBytes: number };
  themes: ThemeMeta[];
  tokens: TokenMeta[];
  /** Every class in the default bundle. */
  bundleClasses: string[];
  modules: ModuleMeta[];
}
