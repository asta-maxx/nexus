import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/events', label: 'Events' },
    { to: '/media', label: 'Media' },
    { to: '/team', label: 'Team' },
    { to: '/about', label: 'About' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img
                src="/images/logo.png"
                alt="NEXUS Club Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">NEXUS</h3>
                <p className="text-xs text-gray-500">AI Innovation Lab</p>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md mb-2">
              Empowering students through cutting-edge AI/ML research and real-world project experience.
            </p>
            <p className="text-gray-500 text-xs">
              Dept. of Computer Science & Engineering
              <br />
              <span className="font-medium">Karunya Institute of Technology and Sciences</span>
            </p>

            {/* Social Links */}
            <div className="flex gap-2 mt-4">
              <a
                href="https://www.linkedin.com/company/nexus-gc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0077B5] hover:border-[#0077B5]/30 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:nexus.karunya@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-google-blue hover:border-google-blue/30 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-medium mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-gray-600 hover:text-google-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h4 className="text-gray-900 font-medium mb-4 text-sm">Partnership</h4>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-3">
                In collaboration with{' '}
                <span className="text-google-blue font-medium">Google Cloud</span>
              </p>
              <div className="flex items-start space-x-2 text-xs text-gray-500">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" />
                <p>Contact the CSE department for queries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-xs text-gray-500">
              © {currentYear} NEXUS Club. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">
              Building the future of AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
