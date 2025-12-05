import { useState } from 'react';
import { ChevronDown, Rocket, Award, AlertCircle, Calendar, Clock, GraduationCap, Lightbulb, Code, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
    id: number;
    title: string;
    description: string;
    areas: string[];
    tools: string[];
}

function ProjectsPage() {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: 'AI-Powered Campus Knowledge Assistant',
            description: 'Campus chatbot trained on institution-specific datasets for automated Q&A.',
            areas: ['NLP', 'LLMs', 'Fine-Tuning', 'Backend'],
            tools: ['Vertex AI (PaLM 2 / Gemini)', 'Dialogflow CX', 'Google Cloud Storage', 'BigQuery', 'Cloud Run', 'Firestore']
        },
        {
            id: 2,
            title: 'Advanced Threat Detection using Machine Learning',
            description: 'Real-time cybersecurity threat detection system leveraging ML on network traffic and logs.',
            areas: ['Cybersecurity', 'ML', 'Anomaly Detection', 'Cloud Security'],
            tools: ['Vertex AI AutoML', 'BigQuery ML', 'Cloud Armor', 'Chronicle Security Operations', 'Pub/Sub', 'Dataflow']
        },
        {
            id: 3,
            title: 'Vision-Language Model for Medical Image Captioning',
            description: 'Generate descriptive captions for medical imaging (X-rays, MRIs) using multimodal AI.',
            areas: ['Computer Vision', 'NLP', 'Healthcare AI', 'Deep Learning'],
            tools: ['Vertex AI (Vision API, Custom Models)', 'Cloud Healthcare API', 'TensorFlow on Vertex AI', 'Cloud Storage', 'BigQuery']
        },
        {
            id: 4,
            title: 'Real-Time Sentiment Analysis for Social Media',
            description: 'Stream processing pipeline to analyze and visualize sentiment from social media feeds in real-time.',
            areas: ['NLP', 'Streaming Data', 'Analytics', 'Data Visualization'],
            tools: ['Natural Language API', 'Pub/Sub', 'Dataflow', 'BigQuery', 'Looker Studio / Data Studio', 'Cloud Functions']
        },
        {
            id: 5,
            title: 'Predictive Maintenance for IoT Devices',
            description: 'ML-based system to predict equipment failures using IoT sensor data.',
            areas: ['IoT', 'Time Series Analysis', 'Predictive ML', 'Edge Computing'],
            tools: ['Vertex AI (AutoML Tables, Forecasting)', 'IoT Core', 'Pub/Sub', 'Dataflow', 'BigQuery', 'Cloud Functions']
        },
        {
            id: 6,
            title: 'Automated Document Processing System',
            description: 'Extract, classify, and process structured data from unstructured documents (PDFs, scanned images).',
            areas: ['OCR', 'NLP', 'Document AI', 'Automation'],
            tools: ['Document AI', 'Vision API', 'Natural Language API', 'Cloud Storage', 'Cloud Functions', 'Firestore']
        },
        {
            id: 7,
            title: 'Personalized Recommendation Engine',
            description: 'Build a scalable recommendation system for e-commerce or content platforms using collaborative filtering.',
            areas: ['Recommendation Systems', 'ML', 'Big Data', 'APIs'],
            tools: ['Vertex AI (Recommendations AI)', 'BigQuery ML', 'Dataflow', 'Cloud Run', 'Firestore']
        },
        {
            id: 8,
            title: 'Generative AI for Creative Content',
            description: 'Create applications for text, image, or code generation using generative models (Gemini, Imagen).',
            areas: ['Generative AI', 'Creative Tech', 'Multimodal AI', 'API Integration'],
            tools: ['Vertex AI (Gemini Pro, Imagen)', 'Cloud Storage', 'Cloud Run', 'Firebase', 'App Engine']
        }
    ];

    const events = [
        { title: 'Registration Deadline', date: '8th December 2025', highlight: true },
        { title: 'Orientation Session', date: '9th December 2025', highlight: false },
        { title: 'Project Kick-Off', date: 'Mid-December 2025', highlight: false },
    ];

    const toggleProject = (id: number) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-google-red-bg border border-google-red/10 mb-6">
                        <span className="text-sm font-medium text-google-red">Open for All CSE Students</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
                        Research Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join advanced AI/ML research projects in collaboration with{' '}
                        <span className="text-google-blue font-medium">Google Cloud</span>.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-medium text-gray-900 mb-8">
                        Approved Research Projects
                    </h2>

                    <div className="space-y-4">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`card-google overflow-hidden transition-all ${expandedProject === project.id ? 'shadow-google-hover' : ''
                                    }`}
                            >
                                <button
                                    onClick={() => toggleProject(project.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                                >
                                    <div className="flex items-start space-x-4">
                                        <span className="flex-shrink-0 w-10 h-10 bg-google-blue text-white rounded-lg flex items-center justify-center font-medium">
                                            {project.id}
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-medium text-gray-900 mb-1">{project.title}</h3>
                                            <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.areas.map((area, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                                                    >
                                                        {area}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`flex-shrink-0 ml-4 transition-transform duration-200 ${expandedProject === project.id ? 'rotate-180' : ''
                                        }`}>
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    </div>
                                </button>

                                {expandedProject === project.id && (
                                    <div className="px-6 pb-5 pt-2 bg-gray-50 border-t border-gray-100">
                                        <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                                            <Code className="w-4 h-4 text-google-blue" />
                                            Google Cloud Tools
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools.map((tool, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-lg"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Propose Your Own Idea */}
                    <div className="mt-12 bg-gradient-to-r from-google-blue-bg to-purple-50 rounded-xl p-8 border border-google-blue/10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-6 h-6 text-google-blue" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">Have Your Own Project Idea?</h3>
                                    <p className="text-gray-600">
                                        Don't see a project that fits you? We welcome innovative ideas from students!
                                        Propose your own AI/ML project and we'll help you bring it to life.
                                    </p>
                                </div>
                            </div>
                            <Link
                                to="/apply"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-google-blue hover:bg-google-blue-hover text-white font-medium rounded-lg transition-all whitespace-nowrap"
                            >
                                Submit Your Idea
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">
                        Why Join?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Award, title: 'Academic Credit', desc: 'Use for Mini/Micro Projects', color: 'blue' },
                            { icon: Rocket, title: 'Career Boost', desc: 'Build your portfolio', color: 'red' },
                            { icon: GraduationCap, title: 'Certificates', desc: 'Recognition for completion', color: 'yellow' },
                            { icon: Lightbulb, title: 'Expert Mentorship', desc: 'Learn from professionals', color: 'green' },
                        ].map((item, idx) => {
                            const colors: Record<string, string> = {
                                blue: 'bg-google-blue-bg text-google-blue',
                                red: 'bg-google-red-bg text-google-red',
                                yellow: 'bg-google-yellow-bg text-google-yellow',
                                green: 'bg-google-green-bg text-google-green',
                            };
                            return (
                                <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg ${colors[item.color]} flex items-center justify-center`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Eligibility & Timeline */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Eligibility */}
                        <div className="card-google p-6">
                            <h2 className="text-xl font-medium text-gray-900 mb-6 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-google-green" />
                                Eligibility Criteria
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { icon: GraduationCap, title: 'All CSE Students', desc: '1st through 4th year CSE students' },
                                    { icon: Lightbulb, title: 'Interest & Passion', desc: 'Enthusiasm for AI/ML, CV, NLP, or Cybersecurity' },
                                    { icon: Code, title: 'Basic Python', desc: 'Recommended but not mandatory' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-gray-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">{item.title}</h3>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Timeline - Innovative Design */}
                        <div className="card-google p-6 relative overflow-hidden">
                            <h2 className="text-xl font-medium text-gray-900 mb-8 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-google-blue" />
                                Key Dates
                            </h2>

                            {/* Vertical Timeline */}
                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-google-blue via-google-yellow to-google-green"></div>

                                <div className="space-y-6">
                                    {events.map((event, index) => {
                                        const colors = ['google-blue', 'google-yellow', 'google-green'];
                                        const bgColors = ['google-blue-bg', 'google-yellow-bg', 'google-green-bg'];
                                        const color = colors[index % colors.length];
                                        const bgColor = bgColors[index % bgColors.length];

                                        return (
                                            <div key={index} className="relative flex items-start gap-4 pl-2">
                                                {/* Timeline Node */}
                                                <div className={`relative z-10 w-7 h-7 rounded-full bg-${color} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>

                                                {/* Content Card */}
                                                <div className={`flex-1 bg-${bgColor} rounded-lg p-4 border border-${color}/20 relative`}>
                                                    {/* Arrow */}
                                                    <div className={`absolute left-0 top-3 -translate-x-full w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-${bgColor}`}></div>

                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h3 className="font-semibold text-gray-900">{event.title}</h3>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <Calendar className={`w-4 h-4 text-${color}`} />
                                                                <span className="text-sm font-medium text-gray-600">{event.date}</span>
                                                            </div>
                                                        </div>
                                                        {event.highlight && (
                                                            <span className="bg-google-red text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                                                                DEADLINE
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {/* Future Node */}
                                    <div className="relative flex items-start gap-4 pl-2">
                                        <div className="relative z-10 w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center ring-4 ring-white">
                                            <Rocket className="w-3 h-3 text-white" />
                                        </div>
                                        <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200 border-dashed">
                                            <h3 className="font-semibold text-gray-500">Your Journey Begins...</h3>
                                            <p className="text-sm text-gray-400 mt-1">Join us and shape the future of AI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration CTA */}
            <section className="py-16 bg-google-blue-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-google">
                        <Rocket className="w-8 h-8 text-google-blue" />
                    </div>
                    <h2 className="text-3xl font-normal text-gray-900 mb-4">
                        Ready to Apply?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        Selected students will receive certificates and can use project outcomes for academics and placements.
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 text-sm mb-8">
                        <AlertCircle className="w-4 h-4 text-google-blue" />
                        <span>After registration, check your email for updates.</span>
                    </div>

                    <div className="block">
                        <a
                            href="https://forms.gle/QWQW2rrqDpexe9vr6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-google-blue hover:bg-google-blue-hover text-white font-medium rounded-md transition-all shadow-sm hover:shadow-google text-lg"
                        >
                            <Rocket className="w-5 h-5" />
                            Apply Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProjectsPage;
