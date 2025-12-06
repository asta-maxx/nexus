import { useState, useEffect } from 'react';
import { Zap, Trophy, Flame, Target, ChevronRight } from 'lucide-react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

// Glitch text effect component - Valorant style
function GlitchText({ text, className = '' }: { text: string; className?: string }) {
    const [displayText, setDisplayText] = useState(text);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const glitchChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

        const triggerGlitch = () => {
            setIsGlitching(true);
            let iterations = 0;

            const glitchInterval = setInterval(() => {
                setDisplayText(
                    text
                        .split('')
                        .map((char, index) => {
                            if (char === ' ') return ' ';
                            if (index < iterations) return text[index];
                            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                        })
                        .join('')
                );

                iterations += 1;
                if (iterations > text.length) {
                    clearInterval(glitchInterval);
                    setDisplayText(text);
                    setIsGlitching(false);
                }
            }, 40);
        };

        // Initial glitch
        triggerGlitch();

        // Random glitch every 4-8 seconds
        const randomGlitch = setInterval(() => {
            if (Math.random() > 0.5) {
                triggerGlitch();
            }
        }, 4000 + Math.random() * 4000);

        return () => clearInterval(randomGlitch);
    }, [text]);

    return (
        <span className={`${className} ${isGlitching ? 'glitch-active' : ''}`}>
            {displayText}
        </span>
    );
}

// Fake leaderboard data for the blurred background
const mockLeaderboard = [
    { rank: 1, player: 'ShadowKill3r', points: 2847, streak: 15, kd: '3.2' },
    { rank: 2, player: 'NightHawk_X', points: 2651, streak: 12, kd: '2.8' },
    { rank: 3, player: 'CyberPhantom', points: 2489, streak: 11, kd: '2.6' },
    { rank: 4, player: 'xVortex99', points: 2234, streak: 9, kd: '2.4' },
    { rank: 5, player: 'BlitzCoder', points: 2156, streak: 8, kd: '2.3' },
    { rank: 6, player: 'DarkMatter_', points: 2034, streak: 7, kd: '2.1' },
    { rank: 7, player: 'PixelStorm', points: 1987, streak: 6, kd: '2.0' },
    { rank: 8, player: 'ZeroGravity', points: 1876, streak: 5, kd: '1.9' },
    { rank: 9, player: 'TurboNinja', points: 1765, streak: 4, kd: '1.8' },
    { rank: 10, player: 'GhostRunner', points: 1654, streak: 3, kd: '1.7' },
];

function CodeSprintPage() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isLive, setIsLive] = useState(false);
    const [showGlitchOverlay, setShowGlitchOverlay] = useState(false);

    // Target date: January 1, 2026
    const targetDate = new Date('2026-01-01T00:00:00').getTime();

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                setIsLive(true);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Random glitch overlay effect
    useEffect(() => {
        const glitchInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                setShowGlitchOverlay(true);
                setTimeout(() => setShowGlitchOverlay(false), 150);
            }
        }, 3000);

        return () => clearInterval(glitchInterval);
    }, []);

    // Registration form URL - replace with your Google Form
    const registrationFormUrl = 'https://forms.google.com/your-form-id';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #050812 0%, #0a1628 50%, #050812 100%)' }}>
            {/* Glitch CSS Styles */}
            <style>{`
                @keyframes scanline {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }
                
                @keyframes glitch-anim {
                    0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
                    20% { clip-path: inset(92% 0 1% 0); transform: translate(2px, -2px); }
                    40% { clip-path: inset(43% 0 1% 0); transform: translate(-2px, 2px); }
                    60% { clip-path: inset(25% 0 58% 0); transform: translate(2px, -2px); }
                    80% { clip-path: inset(54% 0 7% 0); transform: translate(-2px, 2px); }
                    100% { clip-path: inset(58% 0 43% 0); transform: translate(2px, -2px); }
                }
                
                @keyframes glitch-anim-2 {
                    0% { clip-path: inset(65% 0 25% 0); transform: translate(2px, -2px); }
                    20% { clip-path: inset(10% 0 85% 0); transform: translate(-2px, 2px); }
                    40% { clip-path: inset(50% 0 30% 0); transform: translate(2px, -2px); }
                    60% { clip-path: inset(70% 0 15% 0); transform: translate(-2px, 2px); }
                    80% { clip-path: inset(20% 0 65% 0); transform: translate(2px, -2px); }
                    100% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
                }
                
                @keyframes chromatic-shift {
                    0%, 100% { text-shadow: -2px 0 #ff4655, 2px 0 #00f0ff; }
                    25% { text-shadow: 2px 0 #ff4655, -2px 0 #00f0ff; }
                    50% { text-shadow: -1px 0 #ff4655, 1px 0 #00f0ff; }
                    75% { text-shadow: 1px 0 #ff4655, -1px 0 #00f0ff; }
                }
                
                @keyframes flicker {
                    0%, 100% { opacity: 1; }
                    92% { opacity: 1; }
                    93% { opacity: 0.3; }
                    94% { opacity: 1; }
                    95% { opacity: 0.5; }
                    96% { opacity: 1; }
                }
                
                .glitch-title {
                    position: relative;
                    animation: flicker 4s infinite;
                }
                
                .glitch-title::before,
                .glitch-title::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                }
                
                .glitch-title:hover::before {
                    opacity: 0.8;
                    color: #ff4655;
                    animation: glitch-anim 0.3s infinite;
                    z-index: -1;
                }
                
                .glitch-title:hover::after {
                    opacity: 0.8;
                    color: #00f0ff;
                    animation: glitch-anim-2 0.3s infinite;
                    z-index: -1;
                }
                
                .glitch-title:hover {
                    animation: chromatic-shift 0.1s infinite;
                }
                
                .scan-glitch {
                    animation: scanline 3s linear infinite;
                }
                
                .glitch-active {
                    animation: chromatic-shift 0.1s infinite;
                }
                
                @keyframes noise {
                    0%, 100% { transform: translate(0, 0); }
                    10% { transform: translate(-5%, -5%); }
                    20% { transform: translate(5%, 5%); }
                    30% { transform: translate(-5%, 5%); }
                    40% { transform: translate(5%, -5%); }
                    50% { transform: translate(-5%, 0); }
                    60% { transform: translate(5%, 0); }
                    70% { transform: translate(0, 5%); }
                    80% { transform: translate(0, -5%); }
                    90% { transform: translate(5%, 5%); }
                }
                
                .glitch-overlay {
                    animation: noise 0.15s infinite;
                }
            `}</style>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                    }}
                />

                {/* Scanlines overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.1) 2px, rgba(0, 240, 255, 0.1) 4px)',
                    }}
                />

                {/* Moving scan line */}
                <div
                    className="absolute left-0 right-0 h-[2px] scan-glitch"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.5), rgba(255, 70, 85, 0.5), transparent)',
                        boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
                    }}
                />

                {/* Diagonal lines */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transform -rotate-12" />
                    <div className="absolute top-[40%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform rotate-6" />
                    <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transform -rotate-3" />
                </div>

                {/* Corner decorations - hide on very small screens */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-10 h-10 sm:w-16 md:w-20 sm:h-16 md:h-20 border-l-2 border-t-2 border-cyan-500/30" />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-16 md:w-20 sm:h-16 md:h-20 border-r-2 border-t-2 border-red-500/30" />
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-10 h-10 sm:w-16 md:w-20 sm:h-16 md:h-20 border-l-2 border-b-2 border-red-500/30" />
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-16 md:w-20 sm:h-16 md:h-20 border-r-2 border-b-2 border-cyan-500/30" />

                {/* Glowing orbs - smaller on mobile */}
                <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-red-500/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-cyan-500/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Glitch Overlay Effect */}
            {showGlitchOverlay && (
                <div className="fixed inset-0 z-50 pointer-events-none glitch-overlay">
                    <div className="absolute inset-0 bg-red-500/10" style={{ clipPath: 'inset(30% 0 60% 0)' }} />
                    <div className="absolute inset-0 bg-cyan-500/10" style={{ clipPath: 'inset(60% 0 20% 0)' }} />
                    <div className="absolute inset-0" style={{
                        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                    }} />
                </div>
            )}

            {/* Main content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-3 sm:px-4 py-16 sm:py-20">

                {/* Blurred Leaderboard Background - hidden on mobile for performance */}
                <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
                    <div
                        className={`w-full max-w-4xl mx-4 transition-all duration-1000 ${isLive ? 'blur-none opacity-100' : 'blur-md opacity-30'}`}
                        style={{ filter: isLive ? 'none' : 'blur(8px) saturate(0.5)' }}
                    >
                        {/* Leaderboard table */}
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
                            {/* Header */}
                            <div className="grid grid-cols-5 gap-2 px-4 py-3 bg-gradient-to-r from-red-500/20 via-transparent to-cyan-500/20 border-b border-white/10">
                                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Rank</div>
                                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider col-span-2">Player</div>
                                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider text-center">Points</div>
                                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider text-center">Streak</div>
                            </div>

                            {/* Rows */}
                            {mockLeaderboard.map((player, idx) => (
                                <div
                                    key={player.rank}
                                    className={`grid grid-cols-5 gap-2 px-4 py-3 border-b border-white/5 ${idx < 3 ? 'bg-gradient-to-r from-red-500/10 to-transparent' : ''}`}
                                >
                                    <div className={`font-bold ${player.rank <= 3 ? 'text-red-400' : 'text-gray-500'}`}>
                                        #{player.rank}
                                    </div>
                                    <div className="col-span-2 text-white font-medium flex items-center gap-2">
                                        <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-[10px] font-bold">
                                            {player.player.charAt(0)}
                                        </div>
                                        {player.player}
                                    </div>
                                    <div className="text-center text-cyan-400 font-mono">{player.points}</div>
                                    <div className="text-center flex items-center justify-center gap-1">
                                        <Flame className="w-3 h-3 text-orange-500" />
                                        <span className="text-orange-400">{player.streak}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Overlay Card */}
                <div
                    className="relative z-20 w-full max-w-[calc(100%-1rem)] sm:max-w-md md:max-w-xl mx-auto"
                    style={{
                        background: 'linear-gradient(145deg, rgba(10, 20, 40, 0.95) 0%, rgba(5, 10, 25, 0.98) 100%)',
                        clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                    }}
                >
                    {/* Card border glow */}
                    <div
                        className="absolute inset-0 opacity-60"
                        style={{
                            background: 'linear-gradient(145deg, rgba(255, 70, 85, 0.3) 0%, transparent 30%, transparent 70%, rgba(0, 240, 255, 0.3) 100%)',
                            clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                        }}
                    />

                    {/* Border */}
                    <div
                        className="absolute inset-[1px]"
                        style={{
                            background: 'linear-gradient(145deg, #0a1428 0%, #050812 100%)',
                            clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                        }}
                    />

                    {/* Content */}
                    <div className="relative p-5 sm:p-6 md:p-8 lg:p-10">
                        {/* Corner accents - smaller on mobile */}
                        <div className="absolute top-0 left-0 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-l-2 border-t-2 border-red-500/50" style={{ transform: 'translate(-1px, -1px)' }} />
                        <div className="absolute top-0 right-0 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-r-2 border-t-2 border-cyan-500/50" style={{ transform: 'translate(1px, -1px)' }} />
                        <div className="absolute bottom-0 left-0 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-l-2 border-b-2 border-cyan-500/50" style={{ transform: 'translate(-1px, 1px)' }} />
                        <div className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-r-2 border-b-2 border-red-500/50" style={{ transform: 'translate(1px, 1px)' }} />

                        {/* Status badge */}
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <div
                                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest ${isLive
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                                    }`}
                                style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}
                            >
                                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-red-400 animate-pulse'}`} />
                                <GlitchText text={isLive ? 'LIVE NOW' : 'STARTING SOON'} />
                            </div>
                        </div>

                        {/* Title */}
                        <div className="text-center mb-2">
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2">
                                <div className="w-8 sm:w-10 md:w-12 h-[2px] bg-gradient-to-r from-transparent to-red-500" />
                                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                                <div className="w-8 sm:w-10 md:w-12 h-[2px] bg-gradient-to-l from-transparent to-cyan-500" />
                            </div>
                            <h1
                                className="glitch-title text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight"
                                data-text="#NexusCodeSprint"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-cyan-400">
                                    #NexusCodeSprint
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg text-cyan-400 font-semibold mt-1">
                                <GlitchText text="LEADERBOARD" className="tracking-wider sm:tracking-widest" />
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-center text-gray-400 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed px-2">
                            The 30-day Git challenge is almost live. Track your rank, streaks, and daily progress once we launch.
                        </p>

                        {/* Countdown Timer */}
                        <div className="mb-6 sm:mb-8">
                            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-4">
                                {[
                                    { value: timeLeft.days, label: 'DAYS' },
                                    { value: timeLeft.hours, label: 'HRS' },
                                    { value: timeLeft.minutes, label: 'MIN' },
                                    { value: timeLeft.seconds, label: 'SEC' },
                                ].map((unit, idx) => (
                                    <div key={unit.label} className="relative">
                                        <div
                                            className="bg-slate-900/80 border border-cyan-500/30 p-2 sm:p-3 md:p-4 text-center"
                                            style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}
                                        >
                                            <div className="text-xl sm:text-2xl md:text-4xl font-mono font-black text-white">
                                                {String(unit.value).padStart(2, '0')}
                                            </div>
                                            <div className="text-[8px] sm:text-[10px] md:text-xs text-cyan-400 font-bold tracking-wider mt-0.5 sm:mt-1">
                                                {unit.label}
                                            </div>
                                        </div>
                                        {/* Separator - hidden on very small screens */}
                                        {idx < 3 && (
                                            <div className="absolute top-1/2 -right-0.5 sm:-right-1 md:-right-2 transform -translate-y-1/2 text-red-500 font-bold text-sm sm:text-lg md:text-2xl">
                                                :
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <a
                                href={registrationFormUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 active:scale-100"
                                style={{
                                    background: isLive
                                        ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                                        : 'linear-gradient(135deg, #ff4655 0%, #bd3341 100%)',
                                    clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)',
                                }}
                            >
                                {/* Glow effect */}
                                <div
                                    className={`absolute inset-0 blur-lg sm:blur-xl opacity-50 group-hover:opacity-75 transition-opacity ${isLive ? 'bg-green-500' : 'bg-red-500'}`}
                                    style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
                                />
                                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                                    {isLive ? (
                                        <>
                                            <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <GlitchText text="VIEW LEADERBOARD" />
                                        </>
                                    ) : (
                                        <>
                                            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <GlitchText text="REGISTER NOW" />
                                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                            </a>

                            <p className="text-gray-500 text-xs mt-4">
                                {isLive
                                    ? 'The challenge is now active. Good luck!'
                                    : 'Leaderboard unlocks when the challenge goes live.'
                                }
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom decorative element */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-4">
                    <div className="w-8 sm:w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-red-500/50" />
                    <div className="text-gray-600 text-[10px] sm:text-xs font-mono uppercase tracking-widest whitespace-nowrap">
                        <GlitchText text="NEXUS // 2026" />
                    </div>
                    <div className="w-8 sm:w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-cyan-500/50" />
                </div>
            </div>
        </div>
    );
}

export default CodeSprintPage;

