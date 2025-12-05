import { Cpu, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
  src="/images/logo.png"
  alt="Logo"
  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
 />
              <div>
                <h3 className="text-xl font-bold text-white">NEXUS Club</h3>
                <p className="text-sm text-gray-400">Google AI Innovation Lab</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Department of Computer Science & Engineering<br />
              Empowering students through cutting-edge AI/ML research and real-world project experience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Academic Collaboration</h3>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-3">
                In academic collaboration with <span className="text-blue-400 font-semibold">Google Cloud</span>
              </p>
              <div className="flex items-start space-x-2 text-sm text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>
                  For queries, please contact the CSE department or your assigned faculty coordinator.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 NEXUS Club - Google AI Innovation Lab. All rights reserved.</p>
          <p className="mt-2">Building the future of AI, one project at a time.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
