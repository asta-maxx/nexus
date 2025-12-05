import { useState } from 'react';
import { Send, Lightbulb, Rocket, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProjectIdeaPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectTitle: '',
        description: '',
        techStack: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Project Proposal: ${formData.projectTitle}`);
        const body = encodeURIComponent(
            `Project Proposal - NEXUS Club

Full Name: ${formData.name}
Email: ${formData.email}
Project Title: ${formData.projectTitle}

Project Description:
${formData.description}

Proposed Tech Stack: ${formData.techStack || 'Not specified'}
`
        );

        window.location.href = `mailto:tjallenmatthew@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const benefits = [
        {
            icon: Rocket,
            title: 'Launch Your Ideas',
            description: 'Turn your innovative concepts into real-world AI/ML projects with our support.'
        },
        {
            icon: Users,
            title: 'Expert Mentorship',
            description: 'Get guidance from experienced faculty and industry professionals.'
        },
        {
            icon: Lightbulb,
            title: 'Resources & Tools',
            description: 'Access to Google Cloud credits, computing resources, and cutting-edge tools.'
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
                        <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
                        <span className="text-xs md:text-sm font-semibold text-white">Got an Innovative Idea?</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                        Have a <span className="text-yellow-300">Project Idea</span>?
                    </h1>

                    <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8 px-4">
                        Submit your AI/ML project proposal and bring your innovative ideas to life with NEXUS. We provide mentorship, resources, and a collaborative environment.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {['AI/ML Projects', 'Computer Vision', 'NLP', 'Cloud Computing'].map((tag, idx) => (
                            <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-gray-100 text-center">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <benefit.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 md:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            Submit Your Project Proposal
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
                            Fill out the form below to share your project idea. Our team will review it and get back to you within 48 hours.
                        </p>
                    </div>

                    {submitted ? (
                        <div className="bg-green-50 rounded-2xl p-8 md:p-12 text-center border border-green-100">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Email App Opened!</h3>
                            <p className="text-gray-600 mb-6">
                                Your email app should have opened with the proposal details. Send the email to complete your submission.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Submit another proposal
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-strong border border-gray-100"
                        >
                            <div className="space-y-5 md:space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm md:text-base"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm md:text-base"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="projectTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Project Title *
                                    </label>
                                    <input
                                        type="text"
                                        id="projectTitle"
                                        name="projectTitle"
                                        value={formData.projectTitle}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm md:text-base"
                                        placeholder="e.g., AI-Powered Healthcare Diagnosis System"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Project Description *
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={6}
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none text-sm md:text-base"
                                        placeholder="Describe your project idea in detail. Include the problem you're solving, your proposed solution, expected outcomes, and potential impact..."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="techStack" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Proposed Tech Stack <span className="text-gray-400 font-normal">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="techStack"
                                        name="techStack"
                                        value={formData.techStack}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm md:text-base"
                                        placeholder="e.g., TensorFlow, PyTorch, Vertex AI, Python, React..."
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 md:py-5 rounded-xl transition-all flex items-center justify-center gap-2 text-base md:text-lg shadow-lg hover:shadow-xl"
                                    >
                                        <Send className="w-5 h-5" />
                                        Submit Proposal
                                    </button>
                                </div>

                                <p className="text-center text-xs md:text-sm text-gray-500">
                                    By submitting, your email app will open with the proposal details pre-filled.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                        Want to learn more about our projects?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Check out our ongoing research projects and see what the NEXUS community is building.
                    </p>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-all shadow-sm"
                    >
                        View Current Projects
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default ProjectIdeaPage;
