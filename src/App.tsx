import { useState, useEffect } from 'react';
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

function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  // Check if this is a first-time visit in this session
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('nexus_loaded');
    if (hasLoaded) {
      setIsFirstLoad(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingFinish = () => {
    sessionStorage.setItem('nexus_loaded', 'true');
    setIsFirstLoad(false);
    setShowContent(true);
  };

  // Show loader on first visit
  if (isFirstLoad) {
    return <InitialLoader onFinish={handleLoadingFinish} />;
  }

  return (
    <AnimatePresence mode="wait">
      {showContent && (
        <motion.div
          key="app-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
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
