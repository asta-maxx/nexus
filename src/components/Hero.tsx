import { Rocket, Cpu, Users, Award } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
              Open for All CSE Students
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Launch Your AI Career<br />
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              with Real-World Projects
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            The NEXUS Club at the Google AI Innovation Lab, in collaboration with Google Cloud,
            invites CSE students to join advanced AI/ML research.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Use as Mini/Micro Project</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Build Resume & GitHub Portfolio</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Access RTX A4000 & RTX 5090 GPUs</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Get Mentored by Experts</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Projects & Apply
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export default Hero;
