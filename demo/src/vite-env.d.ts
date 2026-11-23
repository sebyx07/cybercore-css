/// <reference types="vite/client" />

declare module 'virtual:cybercore-meta' {
  const meta: import('./lib/meta-types').CybercoreMeta;
  export default meta;
}

declare module 'virtual:cybercore-docs' {
  const bundle: import('./data/types').DocsBundle;
  export default bundle;
}
