import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="demo-layout">
      <nav className="cyber-nav">
        <NavLink to="/" className="cyber-nav__brand">
          CYBERCORE
        </NavLink>

        <ul className="cyber-nav__links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `cyber-nav__link ${isActive ? 'cyber-nav__link--active' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/components"
              className={({ isActive }) =>
                `cyber-nav__link ${isActive ? 'cyber-nav__link--active' : ''}`
              }
            >
              Components
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/effects"
              className={({ isActive }) =>
                `cyber-nav__link ${isActive ? 'cyber-nav__link--active' : ''}`
              }
            >
              Effects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/docs"
              className={({ isActive }) =>
                `cyber-nav__link ${isActive ? 'cyber-nav__link--active' : ''}`
              }
            >
              Docs
            </NavLink>
          </li>
        </ul>

        <div className="cyber-status">
          <span className="cyber-status__dot" />
          <span>ONLINE</span>
        </div>

        <a
          href="https://github.com/sebyx07/cybercore-css"
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-btn cyber-btn--outline cyber-btn--sm"
        >
          GitHub
        </a>
      </nav>

      <main className="demo-main">
        <Outlet />
      </main>

      <footer className="demo-footer">
        <div className="cyber-container">
          <p className="cyber-mono">CYBERCORE CSS v1.0.0 // Built with pure CSS // MIT License</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
