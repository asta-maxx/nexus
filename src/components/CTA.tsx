import { Rocket, Award, AlertCircle } from 'lucide-react';

function CTA() {
  return (
    <section id="register" className="py-20 bg-gradient-to-br from-blue-600 to-green-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Rocket className="w-20 h-20 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Selected students will receive certificates and can use project outcomes for academics and placements.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl mb-8">
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0">
              <AlertCircle className="w-8 h-8 text-orange-500" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Important Note</h3>
              <p className="text-gray-700">
                After registrations please check your mail for updates.
              </p>
            </div>
          </div>

          <a
            href="https://forms.gle/QWQW2rrqDpexe9vr6"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Rocket className="w-6 h-6 mr-2" />
            Access the Registration Form
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Award className="w-10 h-10 mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">Certificates</h4>
            <p className="text-blue-50 text-sm">Recognition for completion</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Award className="w-10 h-10 mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">Portfolio Boost</h4>
            <p className="text-blue-50 text-sm">Real projects for your resume</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Award className="w-10 h-10 mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">Academic Credit</h4>
            <p className="text-blue-50 text-sm">Use for mini/micro projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
