import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h1 className="logo">Zerin Shaima Meem</h1>

        <nav className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

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

      {isOpen && (
        <nav className="mobile-menu">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
