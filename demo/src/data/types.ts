import type { ModuleMeta } from '../lib/meta-types';

export type ModuleGroup = ModuleMeta['group'];

export interface Example {
  /** Anchor id, unique on its page. */
  id: string;
  title: string;
  /** One or two sentences. Backticks become inline code. */
  description?: string;
  /**
   * The markup, and the only copy of it. The preview renders this exact
   * string and the code block prints it, so what people copy is what they saw.
   */
  html: string;
  /**
   * Behaviour the example needs, when CSS cannot do it alone. Shown under the
   * markup and run against the preview as written.
   */
  js?: string;
}

export interface AriaNote {
  /** `role="tablist"`, `aria-expanded`, … */
  attribute: string;
  /** Which element carries it. */
  on: string;
  why: string;
}

export interface KeyboardNote {
  keys: string;
  action: string;
}

export interface ModuleDoc {
  slug: string;
  name: string;
  /** One sentence for index cards, the page lead and the meta description. */
  summary: string;
  /** `no-js` renders a "pure CSS" marker, `needs-js` a note that state needs script. */
  behaviour?: 'no-js' | 'needs-js';
  examples: Example[];
  /**
   * Markup for index cards, when the first example would not make a good
   * thumbnail (an overlay that starts closed, for instance).
   */
  thumbnail?: string;
  /** Plain-language guidance. Backticks become inline code. */
  accessibility?: string[];
  aria?: AriaNote[];
  keyboard?: KeyboardNote[];
}

/** A doc entry joined with what the build found in the SCSS. */
export interface ModuleEntry {
  group: ModuleGroup;
  slug: string;
  name: string;
  summary: string;
  doc?: ModuleDoc;
  module?: ModuleMeta;
}

/** What `virtual:cybercore-docs` hands the app: docs with every icon already rendered. */
export interface DocsBundle {
  docs: Record<ModuleGroup, ModuleDoc[]>;
  heroPanel: string;
  iconCount: number;
  /** A row of icon SVGs for the home page. */
  iconSample: string;
  chartSample: string;
}
