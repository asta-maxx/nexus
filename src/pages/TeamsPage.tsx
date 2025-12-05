import { Github, Linkedin, Mail, Users, Target, Award, MapPin } from 'lucide-react';

function TeamsPage() {
    const leadership = [
        {
            name: 'Dr. J. Immanuel Johnraja',
            role: 'Head of the Department',
            department: 'Department of Computer Science and Engineering',
            image: '/images/core/Leadership/p1.jpg',
            bio: 'Professor & Head with expertise in IoT, Cloud Computing, Edge Computing, and Cyber Security.',
            skills: ['IoT', 'Cloud Computing', 'Cyber Security', 'Networking'],
            portfolio: '#',
            email: 'immanueljohnraja@karunya.edu',
            linkedin: 'https://in.linkedin.com/in/immanuel-johnraja-jebadurai-0a3795175',
        },
        {
            name: 'Dr. P. Eben Sophia',
            role: 'Assistant Professor & Faculty Coordinator',
            department: 'Department of Computer Science and Engineering',
            image: '/images/core/Leadership/p2.jpg',
            bio: 'Specializing in Medical Image Processing and Artificial Intelligence.',
            skills: ['Medical Image Processing', 'AI', 'Signal Processing', 'IoT'],
            portfolio: '#',
            email: 'ebensophia@karunya.edu',
            linkedin: 'https://www.linkedin.com/in/dr-eben-sophia-paul-81b26a335/',
        },
    ];

    const coreTeam = [
        {
            name: 'Allen Matthew T J',
            role: 'President',
            year: '4th Year',
            image: '/images/core/Team/1.jpg',
            skills: ['Python', 'ML', 'Deep Learning', 'Cybersecurity'],
            bio: 'A strong analytical thinker with experience in machine learning and cybersecurity, focused on building reliable and intelligent systems.',
            portfolio: 'https://allenmatthew.me',
            github: 'https://github.com/asta-maxx',
            linkedin: 'https://www.linkedin.com/in/allenmatthewtj/',
        },
        {
            name: 'Joy James Swamy',
            role: 'Vice-President',
            year: '3rd Year',
            image: '/images/core/Team/2.jpg',
            skills: ['Python', 'Computer Vision', 'Deep Learning'],
            bio: 'Passionate about developing computer vision and deep learning models with a keen interest in solving real-world visual computing challenges.',
            portfolio: '#',
            github: '#',
            linkedin: '#',
        },
        {
            name: 'Lizania Dew K',
            role: 'General Secretary',
            year: '3rd Year',
            image: '/images/core/Team/3.jpeg',
            skills: ['Python', 'Computer Vision', 'Documentation'],
            bio: 'Organized and detail-oriented, with strengths in documentation and computer vision applications across different domains.',
            portfolio: '#',
            github: '#',
            linkedin: '#',
        },
        {
            name: 'Rojal Dhass',
            role: 'Treasurer',
            year: '4th Year',
            image: '/images/core/Team/4.jpg',
            skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
            bio: 'A full-stack developer skilled in modern JavaScript technologies, experienced in building scalable web applications from end to end.',
            portfolio: '#',
            github: '#',
            linkedin: '#',
        },
        {
            name: 'Nikilkumar',
            role: 'Media Head',
            year: '4th Year',
            image: '/images/core/Team/5.jpg',
            skills: ['Photography', 'Videography', 'Adobe Suite'],
            bio: 'Creative visual specialist with professional experience in photography, videography, and digital content creation.',
            portfolio: '#',
            github: '#',
            linkedin: '#',
        },
        {
            name: 'David Paul P',
            role: 'Operations Head',
            year: '3rd Year',
            image: '/images/core/Team/6.jpeg',
            skills: ['Python', 'ML', 'Scikit-learn', 'Pandas'],
            bio: 'Data-driven problem solver with a focus on applied machine learning, model development, and efficient workflow execution.',
            portfolio: '#',
            github: '#',
            linkedin: '#',
        },
        {
            name: 'Jason B',
            role: 'Technical Lead',
            year: '3rd Year',
            image: '/images/core/Team/7.jpg',
            skills: ['Python', 'Computer Vision', 'PyTorch', 'MLOps'],
            bio: 'Technically adept in AI engineering, specializing in computer vision and ML pipeline workflows using modern deep learning tools.',
            portfolio: '#',
            github: '#',
            linkedin: '#',
        },
        {
            name: 'Choppa Sai Akshitha',
            role: 'Creative Head',
            year: '3rd Year',
            image: '/images/core/Team/8.jpeg',
            skills: ['Python', 'ML', 'Design Thinking', 'Figma'],
            bio: 'Combines technical insight with creative design, focusing on user-centric solutions and intuitive visual problem-solving.',
            portfolio: '#',
            github: '#',
            linkedin: '#',
        },
        {
            name: 'Priya Dharshini S',
            role: 'Event Head',
            year: '3rd Year',
            image: '/images/core/Team/9.jpeg',
            skills: ['Event Planning', 'Python', 'Deep Learning'],
            bio: 'Strong communicator with experience in planning structured activities and exploring deep learning concepts and applications.',
            portfolio: '#',
            github: '#',
            linkedin: '#',
        },
        {
            name: 'Dhanya Shriee S',
            role: 'Membership & Engagement',
            year: '3rd Year',
            image: '/images/core/Team/10.jpeg',
            skills: ['JavaScript', 'React', 'Community Building'],
            bio: 'Focused on front-end development and fostering engagement, with a passion for building interactive user experiences.',
            portfolio: '#',
            github: '#',
            linkedin: '#',
        },
    ];

    const handleCardClick = (url: string) => {
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
                <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white shadow-soft border border-gray-100 mb-6 md:mb-8 animate-fade-in-up">
                        <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                        <span className="text-xs md:text-sm font-semibold text-gray-700">Meet the Innovators</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 animate-fade-in-up delay-100">
                        Our <span className="text-blue-600">Team</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 mb-4 md:mb-6 px-4">
                        Passionate students and expert mentors working together to push the boundaries of AI innovation.
                    </p>

                    <div className="flex flex-col items-center gap-1.5 md:gap-2 animate-fade-in-up delay-300">
                        <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-sm md:text-base">Dept. of Computer Science & Engineering</span>
                        </div>
                        <p className="text-gray-500 text-sm md:text-base">Karunya Institute of Technology and Sciences</p>
                    </div>

                    <div className="mt-6 md:mt-8 flex justify-center animate-fade-in-up delay-400">
                        <div className="w-20 md:w-24 h-1 rounded-full bg-blue-600"></div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 md:mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                            <Award className="w-4 h-4" />
                            Leadership & Mentors
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                            Guiding Our Vision
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {leadership.map((member, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardClick(member.portfolio)}
                                className="group bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-gray-100 cursor-pointer"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {/* Large centered image */}
                                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl md:rounded-3xl overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all bg-blue-50 flex items-center justify-center mb-5">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        ) : (
                                            <span className="text-5xl md:text-6xl font-bold text-blue-600">
                                                {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-blue-600 font-semibold text-sm md:text-base mb-1">{member.role}</p>
                                    <p className="text-gray-500 text-xs md:text-sm mb-4">{member.department}</p>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">{member.bio}</p>

                                    <div className="flex flex-wrap justify-center gap-2 mb-5">
                                        {member.skills.map((skill, idx) => (
                                            <span key={idx} className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs md:text-sm font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 w-full pt-5 border-t border-gray-100">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleCardClick(member.linkedin); }}
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-xl bg-[#0077B5] text-white hover:bg-[#006399] transition-all text-sm md:text-base font-medium"
                                        >
                                            <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                                            LinkedIn
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); window.location.href = `mailto:${member.email}`; }}
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all text-sm md:text-base font-medium"
                                        >
                                            <Mail className="w-4 h-4 md:w-5 md:h-5" />
                                            Email
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Team Section */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 md:mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                            <Target className="w-4 h-4" />
                            Student Leaders
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                            Core Team
                        </h2>
                        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
                            Student leaders driving innovation and building the NEXUS community
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {coreTeam.map((member, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardClick(member.portfolio)}
                                className="group bg-white rounded-2xl p-5 md:p-6 shadow-soft hover:shadow-strong border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {/* Centered image */}
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all bg-blue-50 flex items-center justify-center mb-4">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        ) : (
                                            <span className="text-3xl md:text-4xl font-bold text-blue-600">
                                                {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{member.name}</h3>
                                    <p className="font-semibold text-sm md:text-base text-blue-600">{member.role}</p>
                                    <p className="text-gray-500 text-xs md:text-sm mb-3">{member.year}</p>

                                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">{member.bio}</p>

                                    <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4">
                                        {member.skills.map((skill, idx) => (
                                            <span key={idx} className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-2 md:gap-3 w-full pt-4 border-t border-gray-100">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleCardClick(member.github); }}
                                            className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-2 md:py-2.5 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all text-xs md:text-sm font-medium"
                                        >
                                            <Github className="w-4 h-4" />
                                            GitHub
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleCardClick(member.linkedin); }}
                                            className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-2 md:py-2.5 rounded-xl bg-[#0077B5] text-white hover:bg-[#006399] transition-all text-xs md:text-sm font-medium"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                            LinkedIn
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 md:py-16 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-white">
                        {[
                            { value: '15+', label: 'Active Members' },
                            { value: '10+', label: 'Expert Mentors' },
                            { value: '8', label: 'Research Projects' },
                            { value: '100%', label: 'Passion' },
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">{stat.value}</div>
                                <div className="text-blue-100 text-xs md:text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TeamsPage;
