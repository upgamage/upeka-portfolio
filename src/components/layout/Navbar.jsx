
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import ThemeToggle from '../common/ThemeToggle';
import './Navbar.css';

// Main website navigation items.
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Ventures', path: '/ventures' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  // Controls the mobile navigation menu.
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu after navigation.
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">

        {/* Brand / Logo */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Upeka Gamage - Home"
        >
          <span className="brand-name">Upeka Gamage</span>
        </Link>

        {/* Desktop and mobile navigation links */}
        <div className={`nav-content ${menuOpen ? 'nav-open' : ''}`}>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <div className="nav-actions">
            <ThemeToggle />
          </div>

        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
