import { Calendar, Clock, MapPin, Users, Video, Sparkles, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function EventsPage() {
    const upcomingEvents = [
        {
            title: '#NexusCodeSprint',
            date: '1st January 2026',
            time: 'All Day',
            location: 'Online',
            type: 'Virtual',
            description: 'The 30-day Git coding challenge. Clone, run, modify, compete — your coding arena awaits!',
            featured: true,
            link: '/codesprint',
        },
        {
            title: 'Neuro-Computing Winter 2026 Cohort',
            date: 'January 2026',
            time: 'Jan - April 2026',
            location: 'Hybrid',
            type: 'In-Person',
            description: 'Join the elite BCI research squads. Build the interface between Human Biology and Machines.',
            featured: true,
            link: '/neuro-computing',
        },
        {
            title: 'Projects Orientation',
            date: '9th December 2025',
            time: '2:00 PM - 2:30 PM',
            location: 'TBD',
            type: 'In-Person',
            description: 'Introduction to NEXUS Club projects, overviews, and team formation.',
            featured: false,
        },
    ];

    const pastEvents = [
        {
            title: 'Orientation - Importance of Choosing a Domain',
            date: 'October 2025',
            image: '/images/events/e1.jpeg', // Add your image
            // attendees: 50, // Uncomment to show participants
        },
        {
            title: 'Gemini Art Forge',
            date: 'October 2025',
            image: '/images/events/e2.jpeg', // Add your image
            // attendees: 40, // Uncomment to show participants
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-google-yellow-bg border border-google-yellow/10 mb-6">
                        <Sparkles className="w-4 h-4 text-google-yellow" />
                        <span className="text-sm font-medium text-google-yellow">Workshops, Talks & More</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
                        Events & Activities
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay updated with our workshops, seminars, and community events.
                    </p>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-medium text-gray-900 mb-8">
                        Upcoming Events
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {upcomingEvents.map((event, index) => (
                            <div
                                key={index}
                                className={`card-google overflow-hidden ${event.featured ? 'lg:col-span-2 ring-2 ring-google-blue/20' : ''
                                    }`}
                            >
                                {event.featured && (
                                    <div className="bg-google-blue text-white px-4 py-2 text-sm font-medium flex items-center gap-2">
                                        <Star className="w-4 h-4" />
                                        Featured Event
                                    </div>
                                )}

                                <div className={`p-6 ${event.featured ? 'lg:flex lg:gap-8' : ''}`}>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-medium text-gray-900 mb-2">{event.title}</h3>
                                        <p className="text-gray-600 mb-4">{event.description}</p>

                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <Calendar className="w-4 h-4 text-google-blue" />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <Clock className="w-4 h-4 text-google-blue" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500">
                                                {event.type === 'Virtual' ? (
                                                    <Video className="w-4 h-4 text-google-blue" />
                                                ) : (
                                                    <MapPin className="w-4 h-4 text-google-blue" />
                                                )}
                                                <span>{event.location}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex items-center gap-3">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${event.type === 'Virtual'
                                                ? 'bg-google-green-bg text-google-green'
                                                : 'bg-google-blue-bg text-google-blue'
                                                }`}>
                                                {event.type}
                                            </span>

                                            {('link' in event) && event.link && (
                                                <Link
                                                    to={event.link}
                                                    className="inline-flex items-center gap-1 px-4 py-1.5 bg-google-blue hover:bg-google-blue-hover text-white text-xs font-medium rounded-full transition-all"
                                                >
                                                    Register
                                                    <ArrowRight className="w-3 h-3" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-medium text-gray-900 mb-8">
                        Past Events
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pastEvents.map((event, index) => (
                            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                                    {('image' in event) && event.image ? (
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img
                                                src="/images/logo.png"
                                                alt={event.title}
                                                className="w-12 h-12 object-contain opacity-30"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-gray-900 mb-2">{event.title}</h3>
                                    <div className="flex items-center justify-between text-gray-500 text-sm">
                                        <span>{event.date}</span>
                                        {/* Uncomment attendees in pastEvents array to show */}
                                        {('attendees' in event) && (
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                <span>{(event as { attendees: number }).attendees}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-normal text-gray-900 mb-4">
                        Want to Stay Updated?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Join our community to receive updates about upcoming events and workshops.
                    </p>
                    <Link
                        to="/projects"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-google-blue hover:bg-google-blue-hover text-white font-medium rounded-md transition-all shadow-sm hover:shadow-google"
                    >
                        Join NEXUS Club
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default EventsPage;
