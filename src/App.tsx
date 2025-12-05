import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
  src="/images/logo.png"
  alt="Logo"
  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
 />

              <div className="flex flex-col leading-tight">
                <span className="text-base sm:text-lg font-bold text-gray-900">NEXUS Club</span>
                <span className="text-[10px] sm:text-xs text-gray-600">Google AI Innovation Lab</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'why-join', label: 'Why Join?' },
                { id: 'timeline', label: 'Timeline' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection('register')}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
            <div className="px-4 py-3 space-y-2">

              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'why-join', label: 'Why Join?' },
                { id: 'timeline', label: 'Timeline' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection('register')}
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium text-center"
              >
                Apply Now
              </button>

            </div>
          </div>
        )}
      </nav>

      {/* PAGE CONTENT */}
      <div className="pt-20 sm:pt-24">
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
