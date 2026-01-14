import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: 'var(--space-xl)',
      }}
    >
      <h1
        className="cyber-glitch"
        data-text="404"
        style={{
          fontSize: 'clamp(6rem, 20vw, 12rem)',
          color: 'var(--cyber-magenta-500)',
          marginBottom: 'var(--space-md)',
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: 'var(--text-xl)',
          color: 'var(--cyber-chrome-300)',
          marginBottom: 'var(--space-lg)',
          maxWidth: '40ch',
        }}
      >
        Signal lost. The page you're looking for doesn't exist in this sector.
      </p>
      <Link to="/" className="cyber-btn">
        Return to Base
      </Link>
    </div>
  );
}

export default NotFound;
