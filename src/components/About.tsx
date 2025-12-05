import { Award, Briefcase, Cpu, Target } from 'lucide-react';

function About() {
  const benefits = [
    {
      icon: Award,
      title: 'Academic Credit',
      description: 'Directly utilize your project work to fulfill Mini-Project or Micro-Project requirements.',
      color: 'blue'
    },
    {
      icon: Briefcase,
      title: 'Career Catalyst',
      description: 'Create a standout portfolio with demonstrable experience in cutting-edge tools like Google Vertex AI, BigQuery, and Cloud Run.',
      color: 'green'
    },
    {
      icon: Cpu,
      title: 'Infrastructure',
      description: 'Get hands-on with our high-performance computing lab featuring NVIDIA RTX A4000 (16GB) and RTX 5090 (32GB) GPUs.',
      color: 'purple'
    },
    {
      icon: Target,
      title: 'Real-World Impact',
      description: 'Solve tangible problems, from campus automation to biomedical research, using industry-standard Google Cloud workflows.',
      color: 'orange'
    }
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' }
  };

  return (
    <section id="why-join" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Join the NEXUS AI Projects?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your academic journey with real-world AI/ML experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colors = colorMap[benefit.color];

            return (
              <div
                key={index}
                className={`bg-white border-2 ${colors.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
