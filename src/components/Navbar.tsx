import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NoiseBackground } from '@/components/ui/noise-background';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/projects', label: 'Projects' },
        { to: '/events', label: 'Events' },
        { to: '/media', label: 'Media' },
        { to: '/team', label: 'Team' },
        { to: '/about', label: 'About' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-white shadow-google'
            : 'bg-white/80 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <img
                            src="/images/logo.png"
                            alt="NEXUS Club Logo"
                            className="h-10 w-auto object-contain"
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="text-lg font-medium text-gray-900">
                                NEXUS
                            </span>
                            <span className="text-[10px] text-gray-500">
                                AI Innovation Lab
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive
                                        ? 'text-google-blue bg-google-blue/10'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        <Link to="/apply" className="ml-4">
                            <NoiseBackground
                                containerClassName="w-fit p-1.5 rounded-full"
                                gradientColors={[
                                    "rgb(255, 70, 85)",
                                    "rgb(15, 25, 35)",
                                    "rgb(0, 210, 190)",
                                    "rgb(189, 52, 75)",
                                ]}
                                noiseIntensity={0.2}
                                speed={0.1}
                            >
                                <button className="h-full w-full cursor-pointer rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-800 shadow-sm transition-all duration-100 hover:shadow-md active:scale-[0.98]">
                                    Submit Project Idea
                                </button>
                            </NoiseBackground>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute w-full transition-all duration-200 ${mobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
            >
                <div className="bg-white mx-4 rounded-lg shadow-google-lg mt-2 p-2 border border-gray-200">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `block px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive
                                    ? 'bg-google-blue/10 text-google-blue'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/apply"
                        className="block w-full mt-2"
                    >
                        <NoiseBackground
                            containerClassName="w-full p-1.5 rounded-xl"
                            gradientColors={[
                                "rgb(255, 70, 85)",
                                "rgb(15, 25, 35)",
                                "rgb(0, 210, 190)",
                                "rgb(189, 52, 75)",
                            ]}
                            noiseIntensity={0.2}
                            speed={0.1}
                        >
                            <button className="w-full cursor-pointer rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm text-center">
                                Submit Project Idea
                            </button>
                        </NoiseBackground>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
