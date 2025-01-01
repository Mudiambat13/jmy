import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Importez les nouvelles pages
import TestimonialsPage from './components/Testimonials';
import StatsPage from './components/Stats';
import FAQPage from './components/FAQ';
import ActualitesPage from './pages/ActualitesPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projets" element={<ProjectsPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Nouvelles routes */}
            <Route path="/temoignages" element={<TestimonialsPage />} />
            <Route path="/statistiques" element={<StatsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/actualites" element={<ActualitesPage />}  />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
