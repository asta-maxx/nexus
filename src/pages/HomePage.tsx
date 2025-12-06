import { Sparkles, Cpu, Users, Rocket, ArrowRight, Zap, Brain, Code2, CheckCircle, TrendingUp, Globe, MapPin, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import BannerCarousel from '../components/BannerCarousel';

function HomePage() {
    // Banner data - add your images to public/images/banners/
    const banners = [
        {
            id: 1,
            image: '/images/banners/banner1.png',
            title: 'Become a NEXUS Club Trainer',
            description: 'Pro Tip: The best trainers aren’t just smart—they’re fun, approachable, and love seeing others succeed. Are you ready to be that trainer?',
            link: 'https://tally.so/r/wQgep1',
        },
        {
            id: 2,
            image: '/images/banners/banner2.png',
            title: '#NexusCodeSprint — Enter the Arena',
            description: 'Clone, run, modify, compete — your coding arena opens January 1, 2026.',
            link: '/codesprint',
        },
        {
            id: 3,
            image: '/images/banners/banner3.png',
            title: 'NEXUS Neuro-Computing Vertical: Winter 2026',
            description: 'Engineering the interface between human biology and machine intelligence through Hybrid BCI control and Adaptive Neurofeedback.',
            link: '/neuro-computing',
        },
    ];

    const features = [
        {
            icon: Brain,
            title: 'AI/ML Research',
            description: 'Work on cutting-edge artificial intelligence and machine learning projects with industry mentors.',
        },
        {
            icon: Cpu,
            title: 'High-Performance Computing',
            description: 'Access NVIDIA RTX A4000 & RTX 5090 GPUs for training deep learning models.',
        },
        {
            icon: Code2,
            title: 'Google Cloud Platform',
            description: 'Hands-on experience with Vertex AI, BigQuery, Cloud Run, and more GCP services.',
        },
        {
            icon: Users,
            title: 'Expert Mentorship',
            description: 'Get guided by industry professionals and faculty experts throughout your projects.',
        },
    ];

    const stats = [
        { value: '8+', label: 'Active Projects', icon: Rocket },
        { value: '15+', label: 'Student Members', icon: Users },
        { value: '10+', label: 'Industry Mentors', icon: TrendingUp },
        { value: '∞', label: 'Possibilities', icon: Globe },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-28 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-soft border border-gray-100 mb-6 animate-fade-in-up">
                            <Sparkles className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-semibold text-gray-700">Google AI Innovation Lab</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in-up delay-100">
                            Welcome to <span className="text-blue-600">NEXUS</span>
                        </h1>

                        <p className="text-sm md:text-base text-gray-500 mb-2 animate-fade-in-up delay-100 tracking-wide">
                            <span className="font-medium">N</span>etwork for <span className="font-medium">EX</span>ploration and <span className="font-medium">U</span>nified <span className="font-medium">S</span>kills
                        </p>

                        <p className="text-lg md:text-xl text-blue-600 font-semibold mb-8 animate-fade-in-up delay-150 italic">
                            "Imagine. Create. Innovate."
                        </p>

                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up delay-200">
                            Join the premier AI/ML research community. Transform your ideas into
                            real-world solutions with cutting-edge technology.
                        </p>

                        {/* Institution Info */}
                        <div className="flex flex-col items-center gap-2 mb-12 animate-fade-in-up delay-200">
                            <div className="flex items-center gap-2 text-gray-700">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span className="font-semibold">Dept. of Computer Science & Engineering</span>
                            </div>
                            <p className="text-gray-500">Karunya Institute of Technology and Sciences</p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link to="/projects" className="btn-primary gap-2 text-lg">
                                <Rocket className="w-5 h-5" />
                                Explore Projects
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/team" className="btn-secondary gap-2 text-lg">
                                <Users className="w-5 h-5" />
                                Meet Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Happenings Banner Section */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                            <Megaphone className="w-5 h-5 text-blue-600" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">What's Happening</h2>
                    </div>

                    <BannerCarousel banners={banners} autoPlayInterval={5000} />
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-center text-white">
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                            <Zap className="w-4 h-4" />
                            What We Offer
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need to Succeed
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Tools, resources, and mentorship to kickstart your AI/ML journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="card-elevated p-8 group">
                                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Partnership Banner */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center overflow-hidden p-2">
                                <img src="/images/GC.png" alt="Google Cloud" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Powered by</p>
                                <p className="text-xl font-bold text-gray-900">Google Cloud Platform</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-green-100 text-green-700">
                            <CheckCircle className="w-5 h-5" />
                            <span className="font-semibold text-sm">Official Partnership</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-blue-600 flex items-center justify-center shadow-strong animate-float">
                        <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Ready to Shape the Future?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Applications are now open for new projects. Join our community of innovators.
                    </p>
                    <Link to="/projects" className="btn-primary gap-2 text-lg">
                        View Open Projects
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
