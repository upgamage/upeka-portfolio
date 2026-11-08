
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import './MainLayout.css';

function MainLayout() {
  return (
    <div className="app-layout">

      {/* Accessibility: skip directly to the main content */}
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      {/* Shared website navigation */}
      <Navbar />

      {/* Current page is rendered here by React Router */}
      <main id="main-content" className="main-content">
        <Outlet />
      </main>

      {/* Shared website footer */}
      <Footer />

    </div>
  );
}

export default MainLayout;
