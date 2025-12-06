import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Google colors
const GOOGLE_COLORS = {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC05',
    green: '#34A853',
};

const loadingStates = [
    { text: "INITIALIZING NEXUS CORE", color: GOOGLE_COLORS.blue },
    { text: "DEPLOYING TACTICAL SYSTEMS", color: GOOGLE_COLORS.red },
    { text: "SYNCING NEURAL NETWORKS", color: GOOGLE_COLORS.yellow },
    { text: "CALIBRATING PROTOCOLS", color: GOOGLE_COLORS.green },
    { text: "ESTABLISHING SECURE LINK", color: GOOGLE_COLORS.blue },
    { text: "LOADING AGENT PROFILES", color: GOOGLE_COLORS.red },
    { text: "SYSTEM READY", color: GOOGLE_COLORS.green },
];

interface InitialLoaderProps {
    onFinish: () => void;
    pageName?: string;
}

// Glitch text effect component
function GlitchText({ text, isActive }: { text: string; isActive: boolean }) {
    const [glitchText, setGlitchText] = useState(text);

    useEffect(() => {
        if (!isActive) return;

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';
        let iterations = 0;

        const interval = setInterval(() => {
            setGlitchText(
                text
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return ' ';
                        if (index < iterations) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            iterations += 1;
            if (iterations > text.length) {
                clearInterval(interval);
                setGlitchText(text);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [text, isActive]);

    return <span>{glitchText}</span>;
}

function InitialLoader({ onFinish, pageName = 'HOME' }: InitialLoaderProps) {
    const [loading, setLoading] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const progress = useMemo(() => ((currentStep + 1) / loadingStates.length) * 100, [currentStep]);

    useEffect(() => {
        const stepDuration = 500;
        const totalDuration = stepDuration * loadingStates.length;

        const stepInterval = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev >= loadingStates.length - 1) {
                    clearInterval(stepInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, stepDuration);

        const finishTimeout = setTimeout(() => {
            setLoading(false);
            setTimeout(onFinish, 500);
        }, totalDuration + 400);

        return () => {
            clearInterval(stepInterval);
            clearTimeout(finishTimeout);
        };
    }, [onFinish]);

    // Animate percentage counter
    useEffect(() => {
        const targetPercentage = Math.round(progress);
        const step = targetPercentage > percentage ? 1 : -1;

        if (percentage !== targetPercentage) {
            const timer = setTimeout(() => {
                setPercentage((prev) => prev + step);
            }, 15);
            return () => clearTimeout(timer);
        }
    }, [percentage, progress]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)' }}
                >
                    {/* Animated Scanlines */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.03]"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
                        }}
                    />

                    {/* Moving Scan Line */}
                    <motion.div
                        className="absolute left-0 right-0 h-[2px] pointer-events-none"
                        style={{
                            background: `linear-gradient(90deg, transparent, ${GOOGLE_COLORS.blue}40, ${GOOGLE_COLORS.red}40, transparent)`,
                            boxShadow: `0 0 20px ${GOOGLE_COLORS.blue}40`,
                        }}
                        animate={{
                            top: ['0%', '100%'],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />

                    {/* Angular Corner Decorations - Valorant Style */}
                    <div className="absolute top-8 left-8">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <motion.path
                                d="M0 30V0H30"
                                stroke={GOOGLE_COLORS.blue}
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            />
                            <motion.path
                                d="M0 50V40H10"
                                stroke={GOOGLE_COLORS.red}
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </svg>
                    </div>

                    <div className="absolute top-8 right-8" style={{ transform: 'scaleX(-1)' }}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <motion.path
                                d="M0 30V0H30"
                                stroke={GOOGLE_COLORS.red}
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            />
                            <motion.path
                                d="M0 50V40H10"
                                stroke={GOOGLE_COLORS.yellow}
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </svg>
                    </div>

                    <div className="absolute bottom-8 left-8" style={{ transform: 'scaleY(-1)' }}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <motion.path
                                d="M0 30V0H30"
                                stroke={GOOGLE_COLORS.yellow}
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            />
                            <motion.path
                                d="M0 50V40H10"
                                stroke={GOOGLE_COLORS.green}
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </svg>
                    </div>

                    <div className="absolute bottom-8 right-8" style={{ transform: 'scale(-1)' }}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <motion.path
                                d="M0 30V0H30"
                                stroke={GOOGLE_COLORS.green}
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            />
                            <motion.path
                                d="M0 50V40H10"
                                stroke={GOOGLE_COLORS.blue}
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </svg>
                    </div>

                    {/* Floating Geometric Elements */}
                    <motion.div
                        className="absolute top-1/4 left-16 w-1 h-20"
                        style={{ background: `linear-gradient(180deg, ${GOOGLE_COLORS.blue}, transparent)` }}
                        animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-16 w-1 h-20"
                        style={{ background: `linear-gradient(0deg, ${GOOGLE_COLORS.red}, transparent)` }}
                        animate={{ opacity: [0.3, 0.7, 0.3], y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />

                    {/* Diamond Shape in Background */}
                    <motion.div
                        className="absolute"
                        style={{
                            width: '300px',
                            height: '300px',
                            border: `1px solid ${GOOGLE_COLORS.blue}15`,
                            transform: 'rotate(45deg)',
                        }}
                        animate={{
                            rotate: [45, 135],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />

                    {/* Main Content Container */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo/Title Area */}
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Animated Google-colored Dots */}
                            <div className="flex gap-3 mb-6 justify-center">
                                {[GOOGLE_COLORS.blue, GOOGLE_COLORS.red, GOOGLE_COLORS.yellow, GOOGLE_COLORS.green].map((color, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: color }}
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            opacity: [0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.15,
                                        }}
                                    />
                                ))}
                            </div>

                            <h1
                                className="text-4xl font-bold tracking-[0.3em] text-white"
                                style={{
                                    fontFamily: 'system-ui, -apple-system, sans-serif',
                                    textShadow: `0 0 30px ${GOOGLE_COLORS.blue}40`,
                                }}
                            >
                                NEXUS
                            </h1>
                        </motion.div>

                        {/* Loading Steps - Valorant Terminal Style */}
                        <div className="w-full max-w-lg px-6 mb-8">
                            <motion.div
                                className="relative p-6 backdrop-blur-sm"
                                style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {/* Terminal Header */}
                                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span className="ml-3 text-xs text-white/40 font-mono tracking-widest">{pageName.toUpperCase()}.page</span>
                                </div>

                                {loadingStates.map((state, index) => {
                                    const isComplete = index < currentStep;
                                    const isCurrent = index === currentStep;
                                    const isPending = index > currentStep;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{
                                                opacity: isPending ? 0.15 : 1,
                                                x: 0,
                                            }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="flex items-center gap-3 mb-2 py-1"
                                        >
                                            {/* Status Indicator */}
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                {isComplete ? (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                                    >
                                                        <svg
                                                            className="w-4 h-4"
                                                            style={{ color: state.color }}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </motion.div>
                                                ) : isCurrent ? (
                                                    <motion.div
                                                        className="w-4 h-4 border-2 rounded-sm"
                                                        style={{ borderColor: state.color }}
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                    />
                                                ) : (
                                                    <div className="w-4 h-4 border border-white/20 rounded-sm" />
                                                )}
                                            </div>

                                            {/* Status Text */}
                                            <span
                                                className={`text-xs font-mono tracking-wider ${isCurrent ? 'text-white' : isComplete ? 'text-white/50' : 'text-white/20'
                                                    }`}
                                            >
                                                {isCurrent ? (
                                                    <GlitchText text={state.text} isActive={true} />
                                                ) : (
                                                    state.text
                                                )}
                                            </span>

                                            {/* Status Tag */}
                                            {isCurrent && (
                                                <motion.span
                                                    className="ml-auto text-[10px] font-mono px-2 py-0.5"
                                                    style={{
                                                        color: state.color,
                                                        border: `1px solid ${state.color}`,
                                                        background: `${state.color}15`,
                                                    }}
                                                    animate={{ opacity: [1, 0.5, 1] }}
                                                    transition={{ duration: 0.8, repeat: Infinity }}
                                                >
                                                    ACTIVE
                                                </motion.span>
                                            )}
                                            {isComplete && (
                                                <span
                                                    className="ml-auto text-[10px] font-mono px-2 py-0.5"
                                                    style={{
                                                        color: state.color,
                                                        opacity: 0.6,
                                                    }}
                                                >
                                                    DONE
                                                </span>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>

                        {/* Progress Bar - Google Gradient */}
                        <motion.div
                            className="w-full max-w-lg px-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex-1 h-1 bg-white/10 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }}>
                                    <motion.div
                                        className="h-full"
                                        style={{
                                            background: `linear-gradient(90deg, ${GOOGLE_COLORS.blue}, ${GOOGLE_COLORS.red}, ${GOOGLE_COLORS.yellow}, ${GOOGLE_COLORS.green})`,
                                            boxShadow: `0 0 20px ${GOOGLE_COLORS.blue}80`,
                                        }}
                                        initial={{ width: '0%' }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                    />
                                </div>

                                {/* Percentage Counter */}
                                <motion.span
                                    className="text-2xl font-mono font-bold tabular-nums"
                                    style={{
                                        background: `linear-gradient(90deg, ${GOOGLE_COLORS.blue}, ${GOOGLE_COLORS.green})`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        minWidth: '4ch',
                                        textAlign: 'right',
                                    }}
                                >
                                    {percentage}%
                                </motion.span>
                            </div>
                        </motion.div>

                        {/* Bottom HUD Elements */}
                        <motion.div
                            className="mt-8 flex items-center gap-6 text-[10px] font-mono text-white/30 tracking-widest"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <span>SYS.v2.0.1</span>
                            <span className="w-1 h-1 rounded-full bg-green-500" />
                            <span>SECURE_CONNECTION</span>
                            <span className="w-1 h-1 rounded-full bg-blue-500" />
                            <span>NODE_ACTIVE</span>
                        </motion.div>
                    </div>

                    {/* Glitch Overlay Effect */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `linear-gradient(90deg, transparent 0%, ${GOOGLE_COLORS.red}05 50%, transparent 100%)`,
                        }}
                        animate={{
                            x: ['-100%', '100%'],
                        }}
                        transition={{
                            duration: 0.1,
                            repeat: Infinity,
                            repeatDelay: 3,
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default InitialLoader;
