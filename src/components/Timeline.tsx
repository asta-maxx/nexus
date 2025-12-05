import { Calendar, Clock } from 'lucide-react';

function Timeline() {
  const events = [
    {
      title: 'Registration Deadline',
      date: '8th December 2025',
      highlight: true,
      icon: Clock
    },
    {
      title: 'Orientation Session',
      date: '9th December 2025',
      highlight: false,
      icon: Calendar
    },
    {
      title: 'Project Kick-Off',
      date: 'Mid-December 2025',
      highlight: false,
      icon: Calendar
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Key Dates
          </h2>
          <p className="text-xl text-gray-600">
            Mark your calendar for these important milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-green-400"></div>

            <div className="space-y-12">
              {events.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col`}
                  >
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <div className={`bg-white p-6 rounded-xl shadow-lg border-2 ${
                        event.highlight ? 'border-red-400 bg-red-50' : 'border-blue-200'
                      }`}>
                        <h3 className={`text-2xl font-bold mb-2 ${
                          event.highlight ? 'text-red-600' : 'text-gray-900'
                        }`}>
                          {event.title}
                        </h3>
                        <p className={`text-lg ${
                          event.highlight ? 'text-red-700 font-semibold' : 'text-gray-600'
                        }`}>
                          {event.date}
                        </p>
                        {event.highlight && (
                          <span className="inline-block mt-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            DON'T MISS!
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 hidden md:flex ${
                      event.highlight ? 'bg-red-500' : 'bg-blue-600'
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="w-full md:w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
