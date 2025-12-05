import { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Eligibility from './components/Eligibility';
import Timeline from './components/Timeline';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Cpu className="w-8 h-8 text-blue-600" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">NEXUS Club</span>
                <span className="text-xs text-gray-600">Google AI Innovation Lab</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</button>
              <button onClick={() => scrollToSection('why-join')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Why Join?</button>
              <button onClick={() => scrollToSection('timeline')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Timeline</button>
              <button
                onClick={() => scrollToSection('register')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium"
              >
                Apply Now
              </button>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium">About</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium">Projects</button>
              <button onClick={() => scrollToSection('why-join')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium">Why Join?</button>
              <button onClick={() => scrollToSection('timeline')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium">Timeline</button>
              <button
                onClick={() => scrollToSection('register')}
                className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all text-center font-medium"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Eligibility />
        <Timeline />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
