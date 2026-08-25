import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'motion/react';
import { ToastProvider } from './context/ToastContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AuroraBackground } from './components/common/AuroraBackground';
import { HomePage } from './pages/HomePage';
import { ImpactPage } from './pages/ImpactPage';
import { ServicesPage } from './pages/ServicesPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll restoration component
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

// Animated route container with fade & slide effect
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.28,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="w-full flex-1"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <ToastProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen relative selection:bg-[#F2A97E]/30 selection:text-[#172940]">
            {/* Ambient Aurora Glow Background with Per-Route Dynamics */}
            <AuroraBackground />

            {/* Sticky Navbar */}
            <Navbar />

            {/* Main Content Area with Route Transition */}
            <main className="flex-1 w-full flex flex-col">
              <AnimatedRoutes />
            </main>

            {/* Master Footer */}
            <Footer />
          </div>
        </BrowserRouter>
      </ToastProvider>
    </HelmetProvider>
  );
}
