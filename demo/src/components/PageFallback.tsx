/** Shown while a page's code is still loading. Shaped like a page header. */
function PageFallback() {
  return (
    <div className="site-page site-fallback" role="status" aria-label="Loading page">
      <div className="cyber-skeleton cyber-skeleton--title" />
      <div className="cyber-skeleton cyber-skeleton--text" />
      <div className="cyber-skeleton cyber-skeleton--text" />
    </div>
  );
}

export default PageFallback;
