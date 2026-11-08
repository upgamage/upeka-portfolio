
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/layout/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Ventures from './pages/Ventures';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    // Global theme state is available throughout the application.
    <ThemeProvider>

      {/* Enables client-side navigation */}
      <BrowserRouter>

        <Routes>

          {/* All pages share the same Navbar and Footer */}
          <Route element={<MainLayout />}>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/contact" element={<Contact />} />

            {/* Unknown URLs also use the shared layout */}
            <Route path="*" element={<NotFound />} />

          </Route>

        </Routes>

      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
