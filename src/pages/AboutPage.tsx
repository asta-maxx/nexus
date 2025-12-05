import { Target, Users, Award, Cpu, Code, Rocket, Heart, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function AboutPage() {
    const values = [
        { icon: Target, title: 'Innovation', description: 'Pushing the boundaries of AI/ML to solve real-world problems.', color: 'blue' },
        { icon: Users, title: 'Collaboration', description: 'Working together to achieve greater outcomes as a community.', color: 'red' },
        { icon: Heart, title: 'Inclusivity', description: 'Welcoming students of all skill levels and backgrounds.', color: 'yellow' },
        { icon: Globe, title: 'Impact', description: 'Creating technology that makes a positive difference.', color: 'green' },
    ];

    const achievements = [
        { number: '8+', label: 'Research Projects' },
        { number: '15+', label: 'Active Members' },
        { number: '10+', label: 'Industry Mentors' },
        { number: '2', label: 'GPU Workstations' },
    ];

    const infrastructure = [
        { title: 'NVIDIA RTX A4000', specs: '16GB VRAM', description: 'High-performance GPU for deep learning.' },
        { title: 'NVIDIA RTX 5090', specs: '32GB VRAM', description: 'Next-gen GPU for demanding AI research.' },
    ];

    const colorClasses: Record<string, { bg: string; icon: string }> = {
        blue: { bg: 'bg-google-blue-bg', icon: 'text-google-blue' },
        red: { bg: 'bg-google-red-bg', icon: 'text-google-red' },
        yellow: { bg: 'bg-google-yellow-bg', icon: 'text-google-yellow' },
        green: { bg: 'bg-google-green-bg', icon: 'text-google-green' },
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-google-blue-bg border border-google-blue/10 mb-6">
                        <span className="text-sm font-medium text-google-blue">Est. 2025</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-2">
                        About NEXUS
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 mb-2 tracking-wide">
                        <span className="font-medium">N</span>etwork for <span className="font-medium">EX</span>ploration and <span className="font-medium">U</span>nified <span className="font-medium">S</span>kills
                    </p>
                    <p className="text-lg text-blue-600 font-semibold mb-4 italic">
                        "Imagine. Create. Innovate."
                    </p>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        The premier AI/ML research community at the Google AI Innovation Lab.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-normal text-gray-900 mb-6">
                                Bridging Academia and Industry
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                NEXUS Club is a student-driven innovation hub within the Google AI Innovation Lab.
                                Our mission is to bridge the gap between academic learning and industry-ready skills
                                by providing hands-on experience with cutting-edge AI/ML technologies.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                In collaboration with <span className="text-google-blue font-medium">Google Cloud</span>, we offer students the opportunity to work on
                                real-world research projects, access high-performance computing resources, and
                                learn from industry experts.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
                            <div className="text-center">
                                <img
                                    src="/images/logo.png"
                                    alt="NEXUS Club Logo"
                                    className="w-32 h-32 mx-auto object-contain mb-4"
                                />
                                <p className="text-lg font-medium text-gray-900 mb-1">Google AI Innovation Lab</p>
                                <p className="text-blue-600 font-semibold italic">"Imagine. Create. Innovate."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">
                        Our Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            const colors = colorClasses[value.color];
                            return (
                                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg ${colors.bg} flex items-center justify-center`}>
                                        <Icon className={`w-6 h-6 ${colors.icon}`} />
                                    </div>
                                    <h3 className="font-medium text-gray-900 mb-2">{value.title}</h3>
                                    <p className="text-gray-500 text-sm">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">
                        By the Numbers
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-normal text-google-blue mb-2">{item.number}</div>
                                <div className="text-gray-500 text-sm">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">
                        Our Infrastructure
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {infrastructure.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                                <div className="w-12 h-12 bg-google-green-bg rounded-lg flex items-center justify-center mb-4">
                                    <Cpu className="w-6 h-6 text-google-green" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                                <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded mb-2">
                                    {item.specs}
                                </span>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-google-blue-bg rounded-xl p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center overflow-hidden p-2">
                                    <img src="/images/GC.png" alt="Google Cloud" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Powered by</p>
                                    <p className="text-xl font-medium text-gray-900">Google Cloud Platform</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-5 h-5 text-google-green" />
                                <span>Official Partnership</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-16 h-16 bg-google-blue-bg rounded-full flex items-center justify-center mx-auto mb-6">
                        <Rocket className="w-8 h-8 text-google-blue" />
                    </div>
                    <h2 className="text-3xl font-normal text-gray-900 mb-4">
                        Ready to Join Us?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Become part of our innovative community and start building the future today.
                    </p>
                    <Link
                        to="/projects"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-google-blue hover:bg-google-blue-hover text-white font-medium rounded-md transition-all shadow-sm hover:shadow-google"
                    >
                        View Open Projects
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
