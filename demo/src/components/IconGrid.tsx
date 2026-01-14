import { useState, useMemo, useCallback } from 'react';

import { icons, getRegisteredByCategory } from '../../../src/icons/registry';
import { getVariants } from '../../../src/icons/utils';

import Icon from './Icon';

import type { IconCategory, IconColor, IconVariant } from '../../../src/icons/types';

/**
 * All available icon categories
 */
const CATEGORIES: IconCategory[] = [
  'navigation',
  'actions',
  'media',
  'communication',
  'data',
  'security',
  'tech',
  'files',
  'status',
  'social',
];

/**
 * All available icon colors
 */
const COLORS: IconColor[] = ['current', 'cyan', 'magenta', 'yellow', 'green'];

/**
 * All available icon variants
 */
const VARIANTS: IconVariant[] = ['outline', 'solid', 'duotone', 'glitch'];

export interface IconGridProps {
  /** Filter icons by category */
  category?: IconCategory | 'all';
  /** Default color for all icons */
  defaultColor?: IconColor;
  /** Default variant for all icons */
  defaultVariant?: IconVariant;
  /** Default size for all icons */
  defaultSize?: number;
  /** Show filter controls */
  showFilters?: boolean;
  /** Show search input */
  showSearch?: boolean;
  /** Callback when an icon is clicked */
  onIconClick?: (iconName: string) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * IconGrid component for displaying icons in a filterable grid layout
 *
 * @example
 * <IconGrid showFilters showSearch />
 * <IconGrid category="tech" defaultColor="cyan" />
 * <IconGrid onIconClick={(name) => console.log('Clicked:', name)} />
 */
function IconGrid({
  category: initialCategory = 'all',
  defaultColor = 'cyan',
  defaultVariant = 'outline',
  defaultSize = 32,
  showFilters = true,
  showSearch = true,
  onIconClick,
  className = '',
}: IconGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<IconCategory | 'all'>(initialCategory);
  const [selectedColor, setSelectedColor] = useState<IconColor>(defaultColor);
  const [selectedVariant, setSelectedVariant] = useState<IconVariant>(defaultVariant);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  // Get all icons or filter by category
  const allIcons = useMemo(() => {
    if (selectedCategory === 'all') {
      return Object.values(icons);
    }
    return getRegisteredByCategory(selectedCategory);
  }, [selectedCategory]);

  // Filter icons by search query
  const filteredIcons = useMemo(() => {
    if (!searchQuery.trim()) {
      return allIcons;
    }

    const query = searchQuery.toLowerCase().trim();
    return allIcons.filter(
      (icon) =>
        icon.name.toLowerCase().includes(query) ||
        icon.description.toLowerCase().includes(query) ||
        icon.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [allIcons, searchQuery]);

  // Get categories with icon counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: Object.keys(icons).length };
    CATEGORIES.forEach((cat) => {
      counts[cat] = getRegisteredByCategory(cat).length;
    });
    return counts;
  }, []);

  // Handle icon click - copy name to clipboard
  const handleIconClick = useCallback(
    (iconName: string) => {
      // Copy to clipboard
      void navigator.clipboard.writeText(iconName).then(() => {
        setCopiedIcon(iconName);
        setTimeout(() => setCopiedIcon(null), 2000);
      });

      // Call external handler if provided
      if (onIconClick) {
        onIconClick(iconName);
      }
    },
    [onIconClick]
  );

  // Handle keyboard events for icon items
  const handleIconKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, iconName: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleIconClick(iconName);
      }
    },
    [handleIconClick]
  );

  return (
    <div className={`icon-grid ${className}`}>
      {/* Filters */}
      {showFilters && (
        <div className="icon-grid__filters">
          {/* Category filter */}
          <fieldset className="icon-grid__filter-group">
            <legend className="cyber-label">Category</legend>
            <div className="icon-grid__category-pills">
              <button
                className={`cyber-badge ${selectedCategory === 'all' ? 'cyber-badge--cyan' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All ({categoryCounts.all})
              </button>
              {CATEGORIES.map((cat) =>
                categoryCounts[cat] > 0 ? (
                  <button
                    key={cat}
                    className={`cyber-badge ${selectedCategory === cat ? 'cyber-badge--cyan' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat} ({categoryCounts[cat]})
                  </button>
                ) : null
              )}
            </div>
          </fieldset>

          {/* Color filter */}
          <fieldset className="icon-grid__filter-group">
            <legend className="cyber-label">Color</legend>
            <div className="icon-grid__color-pills">
              {COLORS.map((color) => (
                <button
                  key={color}
                  className={`icon-grid__color-btn ${selectedColor === color ? 'icon-grid__color-btn--active' : ''}`}
                  style={
                    {
                      '--btn-color':
                        color === 'current'
                          ? 'var(--color-text-primary)'
                          : `var(--cyber-${color}-500)`,
                    } as React.CSSProperties
                  }
                  onClick={() => setSelectedColor(color)}
                  title={color}
                >
                  <span className="icon-grid__color-dot" />
                  <span className="cyber-mono">{color}</span>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Variant filter */}
          <fieldset className="icon-grid__filter-group">
            <legend className="cyber-label">Variant</legend>
            <div className="icon-grid__variant-pills">
              {VARIANTS.map((variant) => (
                <button
                  key={variant}
                  className={`cyber-badge ${selectedVariant === variant ? 'cyber-badge--cyan' : ''}`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {/* Search */}
      {showSearch && (
        <div className="icon-grid__search">
          <input
            type="text"
            className="cyber-input"
            placeholder="Search icons by name, description, or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="icon-grid__search-clear cyber-btn cyber-btn--ghost cyber-btn--sm"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
        </div>
      )}

      {/* Results count */}
      <div className="icon-grid__info">
        <span className="cyber-mono">
          {filteredIcons.length} icon{filteredIcons.length !== 1 ? 's' : ''} found
        </span>
        {copiedIcon && (
          <span className="icon-grid__copied cyber-text-green cyber-mono">
            Copied "{copiedIcon}" to clipboard
          </span>
        )}
      </div>

      {/* Icons grid */}
      <div className="icon-grid__grid">
        {filteredIcons.length === 0 ? (
          <div className="icon-grid__empty">
            <p className="cyber-mono">No icons found matching "{searchQuery}"</p>
            <button
              className="cyber-btn cyber-btn--outline cyber-btn--sm"
              onClick={() => setSearchQuery('')}
            >
              Clear search
            </button>
          </div>
        ) : (
          filteredIcons.map((icon) => {
            const availableVariants = getVariants(icon.name);
            const hasSelectedVariant = availableVariants.includes(selectedVariant);

            return (
              <button
                key={icon.name}
                type="button"
                className={`icon-grid__item ${hoveredIcon === icon.name ? 'icon-grid__item--hovered' : ''}`}
                onMouseEnter={() => setHoveredIcon(icon.name)}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={() => handleIconClick(icon.name)}
                onKeyDown={(e) => handleIconKeyDown(e, icon.name)}
                title={`${icon.name}: ${icon.description}`}
              >
                <div className="icon-grid__icon-wrapper">
                  <Icon
                    name={icon.name}
                    size={defaultSize}
                    color={selectedColor}
                    variant={hasSelectedVariant ? selectedVariant : 'outline'}
                  />
                </div>
                <span className="icon-grid__icon-name cyber-mono">{icon.name}</span>
                {!hasSelectedVariant && selectedVariant !== 'outline' && (
                  <span className="icon-grid__variant-badge cyber-mono">outline only</span>
                )}
              </button>
            );
          })
        )}
      </div>

      {/* Inline styles for the component */}
      <style>{`
        .icon-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .icon-grid__filters {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          padding: var(--space-md);
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border-default);
          border-radius: var(--radius-md);
        }

        .icon-grid__filter-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          border: none;
          padding: 0;
          margin: 0;
        }

        .icon-grid__filter-group legend {
          padding: 0;
          margin-bottom: var(--space-xs);
        }

        .icon-grid__category-pills,
        .icon-grid__variant-pills {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2xs);
        }

        .icon-grid__category-pills .cyber-badge,
        .icon-grid__variant-pills .cyber-badge {
          cursor: pointer;
          text-transform: capitalize;
          transition: all var(--duration-fast);
        }

        .icon-grid__category-pills .cyber-badge:hover,
        .icon-grid__variant-pills .cyber-badge:hover {
          border-color: var(--cyber-cyan-500);
        }

        .icon-grid__color-pills {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
        }

        .icon-grid__color-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          padding: var(--space-2xs) var(--space-xs);
          background: transparent;
          border: 1px solid var(--color-border-default);
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: var(--text-xs);
          transition: all var(--duration-fast);
          text-transform: capitalize;
        }

        .icon-grid__color-btn:hover {
          border-color: var(--btn-color);
        }

        .icon-grid__color-btn--active {
          border-color: var(--btn-color);
          background: color-mix(in srgb, var(--btn-color) 15%, transparent);
        }

        .icon-grid__color-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--btn-color);
        }

        .icon-grid__search {
          display: flex;
          gap: var(--space-sm);
        }

        .icon-grid__search .cyber-input {
          flex: 1;
        }

        .icon-grid__search-clear {
          flex-shrink: 0;
        }

        .icon-grid__info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: var(--text-sm);
          color: var(--color-text-muted);
        }

        .icon-grid__copied {
          animation: fade-in-out 2s ease-in-out;
        }

        @keyframes fade-in-out {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }

        .icon-grid__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: var(--space-sm);
        }

        .icon-grid__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2xs);
          padding: var(--space-md);
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border-default);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--duration-fast);
          text-align: center;
        }

        .icon-grid__item:hover,
        .icon-grid__item--hovered {
          border-color: var(--cyber-cyan-500);
          background: color-mix(in srgb, var(--cyber-cyan-500) 5%, var(--color-bg-secondary));
          transform: translateY(-2px);
        }

        .icon-grid__item:active {
          transform: translateY(0);
        }

        .icon-grid__item:focus-visible {
          outline: 2px solid var(--cyber-cyan-500);
          outline-offset: 2px;
        }

        .icon-grid__icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
        }

        .icon-grid__icon-name {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          text-align: center;
          word-break: break-all;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .icon-grid__variant-badge {
          font-size: 9px;
          color: var(--color-text-muted);
          padding: 2px 4px;
          background: var(--color-bg-tertiary);
          border-radius: var(--radius-sm);
        }

        .icon-grid__empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-xl);
          color: var(--color-text-muted);
        }

        @media (max-width: 640px) {
          .icon-grid__grid {
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          }

          .icon-grid__item {
            padding: var(--space-sm);
          }

          .icon-grid__icon-name {
            font-size: 10px;
          }

          .icon-grid__search {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default IconGrid;
