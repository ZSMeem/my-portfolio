import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/achievements", label: "Achievements" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h1 className="logo">
          <Link to="/" className="logo-button">
            Zerin Shaima Meem
          </Link>
        </h1>

        <div className="navbar-end">
          <nav className="nav-links">
            <NavLink to="/" end>
              Home
            </NavLink>
            {links.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-right">
            <button
              type="button"
              className="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={() => setDark((d) => !d)}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav className="mobile-menu">
          <NavLink to="/" end className="mobile-link" onClick={handleLinkClick}>
            Home
          </NavLink>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="mobile-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
