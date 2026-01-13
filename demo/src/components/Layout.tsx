import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="demo-layout">
      <header className="demo-nav-wrapper">
        <nav className="cyber-nav demo-container">
          <NavLink to="/" className="cyber-nav__brand">
            <span className="cyber-text-glow">CYBERCORE</span>
            <span className="cyber-label">CSS</span>
          </NavLink>

          <ul className="cyber-nav__menu">
            <li className="cyber-nav__item">
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
            <li className="cyber-nav__item">
              <NavLink
                to="/components"
                className={({ isActive }) =>
                  `cyber-nav__link ${isActive ? 'cyber-nav__link--active' : ''}`
                }
              >
                Components
              </NavLink>
            </li>
            <li className="cyber-nav__item">
              <NavLink
                to="/effects"
                className={({ isActive }) =>
                  `cyber-nav__link ${isActive ? 'cyber-nav__link--active' : ''}`
                }
              >
                Effects
              </NavLink>
            </li>
            <li className="cyber-nav__item">
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

          <a
            href="https://github.com/your-username/cybercore-css"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-btn cyber-btn--outline cyber-btn--sm"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main className="demo-main">
        <Outlet />
      </main>

      <footer className="demo-footer">
        <div className="demo-container">
          <p className="cyber-mono">CYBERCORE CSS v1.0.0 // Built with pure CSS // MIT License</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
