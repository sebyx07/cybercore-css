import ModuleGallery from '../components/ModuleGallery';
import { GROUP_LABEL } from '../data/entries';
import { ENTRIES } from '../lib/entries';

import '../styles/all-modules.scss';

import type { ModuleGroup } from '../data/types';

const LEAD: Record<ModuleGroup, string> = {
  components:
    'Each component is plain HTML plus classes. Open one for its variants, states, markup to copy and the ARIA it expects.',
  effects:
    'Overlays and text treatments that set the mood. Every animated effect stops under prefers-reduced-motion.',
  utilities:
    'Single-purpose classes built on the same tokens as the components. Layout, spacing and text ship in the default bundle. The rest load as Sass modules.',
};

function ModuleIndex({ group }: { group: ModuleGroup }) {
  return (
    <article className="site-page">
      <header className="site-page__header">
        <h1 className="site-page__title">{GROUP_LABEL[group]}</h1>
        <p className="site-page__lead">{LEAD[group]}</p>
      </header>
      <ModuleGallery entries={ENTRIES[group]} />
    </article>
  );
}

export default ModuleIndex;
