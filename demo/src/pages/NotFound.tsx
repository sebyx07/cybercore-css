import { Link } from 'react-router';

function NotFound() {
  return (
    <article className="site-wrap site-notfound">
      <h1 className="cyber-glitch site-notfound__code" data-text="404">
        404
      </h1>
      <p className="site-page__lead">
        No page at this address. It may have moved when the docs were reorganised.
      </p>
      <div className="cyber-flex cyber-flex-wrap cyber-gap-sm cyber-justify-center">
        <Link to="/" className="cyber-btn cyber-btn--filled">
          Go to home
        </Link>
        <Link to="/components" className="cyber-btn">
          Browse components
        </Link>
      </div>
    </article>
  );
}

export default NotFound;
