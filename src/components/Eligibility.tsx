import { GraduationCap, Lightbulb, Code, CheckCircle } from 'lucide-react';

function Eligibility() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Eligibility Criteria
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">All CSE Students</h3>
                  <p className="text-gray-600">Open to 1st through 4th year Computer Science & Engineering students</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Interest & Passion</h3>
                  <p className="text-gray-600">Enthusiasm for AI/ML, Computer Vision, NLP, Cybersecurity, or related domains</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Basic Python Knowledge</h3>
                  <p className="text-gray-600">Recommended but not mandatory. Beginners are welcome and will be supported!</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Recruitment Process
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Fill the Project Interest Form</h3>
                  <p className="text-gray-600">Submit your details and project preferences through our online form</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Shortlisting & Review</h3>
                  <p className="text-gray-600">Applications reviewed based on interest alignment and background</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Team Formation</h3>
                  <p className="text-gray-600">Selected students grouped into teams and assigned dedicated mentors</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Project Kick-off</h3>
                  <p className="text-gray-600">Begin guided development with ongoing mentorship and support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eligibility;
