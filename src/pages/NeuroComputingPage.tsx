import { useMemo } from 'react';
import './NeuroComputingPage.css';
import { Cpu, Brain, Zap, Users } from 'lucide-react';

// Generate subtle sakura petals
function generateSakuraPetals(count: number) {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${5 + Math.random() * 90}%`,
        size: 6 + Math.random() * 6,
        delay: Math.random() * 25,
        duration: 18 + Math.random() * 12,
        swayDuration: 4 + Math.random() * 3,
    }));
}

// Generate professional neuron somas
function generateNeurons(count: number) {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${5 + Math.random() * 90}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 6,
        size: 15 + Math.random() * 25,
    }));
}

// Generate subtle floating cells
function generateCells(count: number) {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 30 + Math.random() * 50,
        delay: Math.random() * 10,
        duration: 12 + Math.random() * 8,
    }));
}

function NeuroComputingPage() {
    const sakuraPetals = useMemo(() => generateSakuraPetals(25), []);
    const neurons = useMemo(() => generateNeurons(20), []);
    const bioCells = useMemo(() => generateCells(12), []);

    return (
        <div id="nexus-firewatch-page">
            {/* Global Background Layer */}
            <div className="global-bio-bg">
                <div className="molecular-overlay" />

                <div className="sakura-container global-layer">
                    {sakuraPetals.map((petal) => (
                        <div
                            key={petal.id}
                            className="sakura-petal"
                            style={{
                                left: petal.left,
                                width: petal.size,
                                height: petal.size,
                                animationDelay: `${petal.delay}s, 0s`,
                                animationDuration: `${petal.duration}s, ${petal.swayDuration}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="neural-container global-layer">
                    {neurons.map((neuron) => (
                        <div
                            key={neuron.id}
                            className="neuron-soma"
                            style={{
                                left: neuron.left,
                                top: neuron.top,
                                width: neuron.size,
                                height: neuron.size,
                                animationDelay: `${neuron.delay}s`,
                            }}
                        />
                    ))}
                    <svg className="synapse-svg">
                        <defs>
                            <linearGradient id="synapseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(0, 212, 170, 0)" />
                                <stop offset="50%" stopColor="rgba(0, 212, 170, 0.25)" />
                                <stop offset="100%" stopColor="rgba(0, 212, 170, 0)" />
                            </linearGradient>
                            <linearGradient id="synapseGradPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(139, 127, 211, 0)" />
                                <stop offset="50%" stopColor="rgba(139, 127, 211, 0.2)" />
                                <stop offset="100%" stopColor="rgba(139, 127, 211, 0)" />
                            </linearGradient>
                        </defs>
                        <path d="M 5% 8% Q 15% 5%, 25% 12%" fill="none" stroke="url(#synapseGrad)" strokeWidth="1" className="synapse-line" style={{ animationDelay: '0s' }} />
                        <path d="M 25% 12% Q 40% 18%, 50% 10%" fill="none" stroke="url(#synapseGrad)" strokeWidth="1" className="synapse-line" style={{ animationDelay: '1s' }} />
                        <path d="M 70% 5% Q 80% 12%, 92% 8%" fill="none" stroke="url(#synapseGrad)" strokeWidth="1" className="synapse-line" style={{ animationDelay: '2s' }} />
                        <path d="M 8% 35% Q 20% 40%, 35% 32%" fill="none" stroke="url(#synapseGradPurple)" strokeWidth="1" className="synapse-line" style={{ animationDelay: '3s' }} />
                        <path d="M 60% 38% Q 75% 45%, 88% 35%" fill="none" stroke="url(#synapseGradPurple)" strokeWidth="1" className="synapse-line" style={{ animationDelay: '4s' }} />
                        <path d="M 10% 65% Q 25% 72%, 40% 62%" fill="none" stroke="url(#synapseGrad)" strokeWidth="1" className="synapse-line" style={{ animationDelay: '5s' }} />
                        <path d="M 55% 70% Q 70% 65%, 85% 75%" fill="none" stroke="url(#synapseGrad)" strokeWidth="1" className="synapse-line" style={{ animationDelay: '6s' }} />
                        <path d="M 15% 88% Q 35% 92%, 50% 85%" fill="none" stroke="url(#synapseGradPurple)" strokeWidth="1" className="synapse-line" style={{ animationDelay: '7s' }} />
                        <path d="M 65% 90% Q 78% 85%, 92% 92%" fill="none" stroke="url(#synapseGradPurple)" strokeWidth="1" className="synapse-line" style={{ animationDelay: '8s' }} />
                    </svg>
                </div>

                <div className="cell-container global-layer">
                    {bioCells.map((cell) => (
                        <div
                            key={cell.id}
                            className="bio-cell"
                            style={{
                                left: cell.left,
                                top: cell.top,
                                width: cell.size,
                                height: cell.size,
                                animationDelay: `${cell.delay}s`,
                                animationDuration: `${cell.duration}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Hero Section */}
            <section className="fw-hero">
                <div className="fw-hero-bg">
                    <div className="fw-mountain fw-mountain-1"></div>
                    <div className="fw-mountain fw-mountain-2"></div>
                    <div className="fw-mountain fw-mountain-3"></div>
                </div>
                <div className="fw-hero-content">
                    <span className="fw-badge">
                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                        Winter 2026 Cohort
                    </span>
                    <h1>NEXUS Neuro-Computing Vertical</h1>
                    <p className="fw-tagline">We are building the interface between Human Biology and Machines.</p>
                    <p className="fw-subtitle">
                        NEXUS is recruiting <strong>2 passionate teams</strong> to work on exciting research projects in Brain-Computer Interfacing (BCI).
                    </p>
                    <p className="fw-subtitle" style={{ marginBottom: '8px' }}>
                        <strong>Open to:</strong> 2nd &amp; 3rd Year CSE and Biotech Students
                    </p>
                    <p className="fw-duration">
                        <strong>Duration:</strong> Jan 2026 – April 2026 (Intensive Capstone)
                    </p>
                    <div className="fw-cta-group">
                        <a href="https://forms.google.com/your-form" target="_blank" rel="noopener noreferrer" className="fw-btn fw-btn-primary">
                            Apply Now
                        </a>
                        <a href="#projects" className="fw-btn fw-btn-secondary">
                            View Projects
                        </a>
                    </div>
                </div>
            </section>

            {/* Project Alpha */}
            <section className="fw-section fw-section-dark" id="projects">
                <div className="fw-container">
                    <div className="fw-section-header">
                        <div className="fw-icon-wrapper">
                            <Cpu className="w-10 h-10 text-teal-400" />
                        </div>
                        <h2>PROJECT ALPHA: The Hybrid BCI Controller</h2>
                        <p className="fw-focus">Focus: Robotics, Signal Processing, Assistive Tech</p>
                    </div>

                    <div className="fw-problem-box">
                        <h3>The Problem Statement</h3>
                        <p>
                            Current Brain-Computer Interfaces (BCIs) for motor-impaired individuals are flawed. Pure EEG (Brain) control is noisy and suffers from high latency ({'>'}2s), while pure EMG (Muscle) control fails when muscles fatigue. There is currently no low-cost system that fuses <strong>both</strong> signals effectively to ensure smooth, continuous control of a robotic cursor or wheelchair.
                        </p>
                        <div className="fw-mission">
                            <strong>The Mission:</strong> Build a <strong>Hybrid Adaptive Fusion Engine</strong> that dynamically weights brain and muscle signals in real-time ({'<'}150ms latency) to control a digital cursor with surgical precision.
                        </div>
                    </div>

                    <h3 className="fw-squad-title">Who We're Looking For (Team A)</h3>

                    <div className="fw-cards-grid">
                        <div className="fw-card">
                            <div className="fw-card-header">
                                <span className="fw-role-num">1</span>
                                <div>
                                    <h4>Lead ML Engineer</h4>
                                    <span className="fw-nickname">The Architect</span>
                                </div>
                            </div>
                            <p className="fw-challenge"><strong>What you'll do:</strong> Build the "Fusion Logic" using SVM/LDA classifiers.</p>
                            <h5>What helps:</h5>
                            <ul>
                                <li>Familiarity with <strong>Python (NumPy, Pandas, Scikit-learn)</strong>.</li>
                                <li>Interest in <strong>Matrix Operations</strong> (we'll explore CSP filtering together!).</li>
                                <li>Willingness to read IEEE papers and learn to convert math to code.</li>
                            </ul>
                        </div>

                        <div className="fw-card">
                            <div className="fw-card-header">
                                <span className="fw-role-num">2</span>
                                <div>
                                    <h4>Hardware Integration Specialist</h4>
                                    <span className="fw-nickname">The Builder</span>
                                </div>
                            </div>
                            <p className="fw-challenge"><strong>What you'll do:</strong> Make the code talk to the real world.</p>
                            <h5>What helps:</h5>
                            <ul>
                                <li>Some experience with <strong>ESP32/Arduino</strong> or interest in learning.</li>
                                <li>Basic curiosity about circuits (soldering, grounding, pull-up resistors).</li>
                                <li>Patience for debugging signal noise.</li>
                            </ul>
                        </div>

                        <div className="fw-card">
                            <div className="fw-card-header">
                                <span className="fw-role-num">3</span>
                                <div>
                                    <h4>Simulation Developer</h4>
                                    <span className="fw-nickname">The Visualizer</span>
                                </div>
                            </div>
                            <p className="fw-challenge"><strong>What you'll do:</strong> Prove the code works before we build the hardware.</p>
                            <h5>What helps:</h5>
                            <ul>
                                <li>Experience with <strong>PyGame</strong> or <strong>Unity (C#)</strong> is a plus.</li>
                                <li>Interest in building a 2D "Target Acquisition Task" (moving a cursor to a target).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Beta */}
            <section className="fw-section fw-section-alt">
                <div className="fw-container">
                    <div className="fw-section-header">
                        <div className="fw-icon-wrapper">
                            <Brain className="w-10 h-10 text-purple-400" />
                        </div>
                        <h2>PROJECT BETA: The Neuro-Feedback Loop</h2>
                        <p className="fw-focus">Focus: Mental Health, App Dev, Bio-Hacking</p>
                    </div>

                    <div className="fw-problem-box">
                        <h3>The Problem Statement</h3>
                        <p>
                            Smartwatches and health apps are "Passive Monitors"—they tell you that you are stressed, but they don't help you fix it. This creates a "Nocebo effect" (worrying about stress makes you more stressed). We need an <strong>"Active Closed-Loop System"</strong> that detects physiological stress (Heart Rate + Brainwaves) and <em>automatically</em> alters the digital environment to force the user into a relaxed state.
                        </p>
                        <div className="fw-mission">
                            <strong>The Mission:</strong> Build a real-time "Digital Therapeutic" app that modifies screen visuals, music tempo, and breathing guides based on live biometric feedback.
                        </div>
                    </div>

                    <h3 className="fw-squad-title">Who We're Looking For (Team B)</h3>

                    <div className="fw-cards-grid">
                        <div className="fw-card">
                            <div className="fw-card-header">
                                <span className="fw-role-num">1</span>
                                <div>
                                    <h4>Signal Processing Analyst</h4>
                                    <span className="fw-nickname">The Mathematician</span>
                                </div>
                            </div>
                            <p className="fw-challenge"><strong>What you'll do:</strong> Extract "Calm" from chaos.</p>
                            <h5>What helps:</h5>
                            <ul>
                                <li>Interest in <strong>FFT (Fast Fourier Transform)</strong> and Frequency Analysis.</li>
                                <li>Willingness to learn <strong>Bio-signal libraries</strong> (MNE-Python, HeartPy, or SciPy).</li>
                                <li>Curiosity about Neuroscience (Alpha/Beta waves).</li>
                            </ul>
                        </div>

                        <div className="fw-card">
                            <div className="fw-card-header">
                                <span className="fw-role-num">2</span>
                                <div>
                                    <h4>Frontend/App Developer</h4>
                                    <span className="fw-nickname">The Designer</span>
                                </div>
                            </div>
                            <p className="fw-challenge"><strong>What you'll do:</strong> Create a UI that hypnotizes the brain.</p>
                            <h5>What helps:</h5>
                            <ul>
                                <li>Some experience with <strong>PyQt6 (Python)</strong> OR <strong>React Native</strong>.</li>
                                <li>Interest in creating smooth animations (breathing circles, color gradients) that react to real-time data.</li>
                            </ul>
                        </div>

                        <div className="fw-card">
                            <div className="fw-card-header">
                                <span className="fw-role-num">3</span>
                                <div>
                                    <h4>Biotech Liaison</h4>
                                    <span className="fw-nickname">The Scientist</span>
                                </div>
                            </div>
                            <p className="fw-challenge"><strong>What you'll do:</strong> Ensure our data is medically valid.</p>
                            <h5>What helps:</h5>
                            <ul>
                                <li>Background or interest in <strong>Biotech/Biomedical Engineering</strong>.</li>
                                <li>Curiosity about electrode placement (10-20 system) and skin impedance.</li>
                                <li>Interest in HRV (Heart Rate Variability) metrics.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prerequisites */}
            <section className="fw-section fw-section-dark">
                <div className="fw-container">
                    <div className="fw-section-header">
                        <div className="fw-icon-wrapper">
                            <Zap className="w-10 h-10 text-yellow-400" />
                        </div>
                        <h2>What We Expect</h2>
                        <p className="fw-focus">For All Applicants</p>
                    </div>

                    <div className="fw-prereq-list">
                        <div className="fw-prereq-item">
                            <span className="fw-prereq-num">1</span>
                            <div>
                                <strong>Availability:</strong> Be available for <strong>Virtual Sprints (Jan)</strong> and <strong>Hardware Lab Sessions (Feb-Mar)</strong>.
                            </div>
                        </div>
                        <div className="fw-prereq-item">
                            <span className="fw-prereq-num">2</span>
                            <div>
                                <strong>Version Control:</strong> Basic knowledge of <strong>Git/GitHub</strong> is expected. Don't worry if you're still learning — we'll figure it out together!
                            </div>
                        </div>
                        <div className="fw-prereq-item">
                            <span className="fw-prereq-num">3</span>
                            <div>
                                <strong>A Curious Mindset:</strong> You'll be working with simulated data and experimental hardware. Things might break — but that's part of the fun! We're looking for people who enjoy figuring things out.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="fw-cta-section" id="contact">
                <div className="fw-container fw-cta-final">
                    <div className="fw-icon-wrapper" style={{ marginBottom: '24px' }}>
                        <Users className="w-12 h-12 text-teal-400" />
                    </div>
                    <h2>Ready to Explore Brain-Computer Interfaces?</h2>
                    <p>Join us for an exciting research journey at the intersection of neuroscience and technology.</p>
                    <div className="fw-cta-group">
                        <a href="https://forms.google.com/your-form" target="_blank" rel="noopener noreferrer" className="fw-btn fw-btn-primary fw-btn-lg">
                            Apply Now
                        </a>
                    </div>
                    <p style={{ marginTop: '16px', fontSize: '0.9rem', opacity: 0.7 }}>
                        Open to 2nd & 3rd Year CSE and Biotech Students
                    </p>
                </div>
            </section>
        </div>
    );
}

export default NeuroComputingPage;
