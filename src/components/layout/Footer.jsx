
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  // Automatically update the copyright year.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="container footer-content">

        {/* Footer brand and introduction */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Upeka Gamage
          </Link>

          <p>
            Software Engineering, Technology & Entrepreneurship.
          </p>
        </div>

        {/* Footer navigation */}
        <div className="footer-navigation">
          <h3>Explore</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/ventures">Ventures</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Venture references */}
        <div className="footer-ventures">
          <h3>Ventures</h3>

          <ul>
            <li><span>Nexora Labs</span></li>
            <li><span>Ceyloris</span></li>
          </ul>
        </div>

      </div>

      {/* Copyright section */}
      <div className="container footer-bottom">
        <p>
          &copy; {currentYear} Upeka Gamage. All rights reserved.
        </p>

        <p>Designed & developed with React.</p>
      </div>

    </footer>
  );
}

export default Footer;
