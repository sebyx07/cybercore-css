import { Link } from 'react-router';

import type { ModuleEntry } from '../data/types';

interface ModuleGalleryProps {
  entries: ModuleEntry[];
  /** Heading level of each card title. */
  as?: 'h2' | 'h3';
}

function thumbnailOf(entry: ModuleEntry): string | undefined {
  return entry.doc?.thumbnail ?? entry.doc?.examples[0]?.html;
}

/** Live previews of each module. The whole card is one link to its page. */
function ModuleGallery({ entries, as: Heading = 'h2' }: ModuleGalleryProps) {
  return (
    <ul className="site-gallery">
      {entries.map((entry) => {
        const thumbnail = thumbnailOf(entry);
        return (
          <li key={entry.slug} className="site-tile">
            {thumbnail ? (
              <div
                className="site-tile__preview"
                // The preview is a picture of the component: not focusable, not announced.
                inert
                aria-hidden="true"
                // Markup comes from the docs data files in this repo, never from users.
                dangerouslySetInnerHTML={{ __html: thumbnail }}
              />
            ) : (
              <div className="site-tile__preview site-tile__preview--empty" aria-hidden="true">
                {entry.module?.classes.length ?? 0} classes
              </div>
            )}
            <div className="site-tile__body">
              <Heading className="site-tile__title">
                <Link to={`/${entry.group}/${entry.slug}`} className="site-tile__link">
                  {entry.name}
                </Link>
              </Heading>
              <p className="site-tile__text">{entry.summary}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ModuleGallery;
