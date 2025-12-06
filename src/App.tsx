import { useState, useEffect, useRef, useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InitialLoader from './components/InitialLoader';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import TeamsPage from './pages/TeamsPage';
import ProjectIdeaPage from './pages/ProjectIdeaPage';
import CodeSprintPage from './pages/CodeSprintPage';
import NeuroComputingPage from './pages/NeuroComputingPage';
import MediaPage from './pages/MediaPage';

// Map routes to page names for the loader
const routeToPageName: Record<string, string> = {
  '/': 'HOME',
  '/projects': 'PROJECTS',
  '/events': 'EVENTS',
  '/about': 'ABOUT',
  '/team': 'TEAM',
  '/apply': 'APPLY',
  '/codesprint': 'CODE_SPRINT',
  '/neuro-computing': 'NEURO_COMPUTING',
  '/media': 'MEDIA',
};

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();
  const isFirstRender = useRef(true);
  const previousPath = useRef(location.pathname);

  // Get current page name from route
  const currentPageName = useMemo(() => {
    return routeToPageName[location.pathname] || 'HOME';
  }, [location.pathname]);

  // Handle page transitions - show loader on route change
  useEffect(() => {
    // Skip the initial render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Only trigger if path actually changed
    if (previousPath.current !== location.pathname) {
      previousPath.current = location.pathname;

      // Show loader and hide content
      setShowContent(false);
      setShowLoader(true);

      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleLoadingFinish = () => {
    setShowLoader(false);
    setShowContent(true);
  };

  // Show loader
  if (showLoader) {
    return <InitialLoader onFinish={handleLoadingFinish} pageName={currentPageName} />;
  }

  return (
    <AnimatePresence mode="wait">
      {showContent && (
        <motion.div
          key="app-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="min-h-screen bg-white flex flex-col"
        >
          <Navbar />

          <main className="flex-grow">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/team" element={<TeamsPage />} />
              <Route path="/apply" element={<ProjectIdeaPage />} />
              <Route path="/codesprint" element={<CodeSprintPage />} />
              <Route path="/neuro-computing" element={<NeuroComputingPage />} />
              <Route path="/media" element={<MediaPage />} />
            </Routes>
          </main>

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;


