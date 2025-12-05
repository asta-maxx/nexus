import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const loadingStates = [
    { text: "Initializing compute cluster…" },
    { text: "Spinning up containerized services…" },
    { text: "Optimizing compilation pipeline…" },
    { text: "Resolving dependencies…" },
    { text: "Indexing source repositories…" },
    { text: "Training lightweight models…" },
    { text: "Bootstrapping runtime environment…" },
    { text: "Launching systems…" },
];

interface InitialLoaderProps {
    onFinish: () => void;
}

function InitialLoader({ onFinish }: InitialLoaderProps) {
    const [loading, setLoading] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const stepDuration = 600;
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
            setTimeout(onFinish, 400);
        }, totalDuration + 300);

        return () => {
            clearInterval(stepInterval);
            clearTimeout(finishTimeout);
        };
    }, [onFinish]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                >
                    {/* Loading Steps */}
                    <div className="w-full max-w-md px-6">
                        {loadingStates.map((state, index) => {
                            const isComplete = index < currentStep;
                            const isCurrent = index === currentStep;
                            const isPending = index > currentStep;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{
                                        opacity: isPending ? 0.2 : 1,
                                        x: 0,
                                    }}
                                    transition={{ duration: 0.3, delay: index * 0.08 }}
                                    className="flex items-center gap-3 mb-3"
                                >
                                    {/* Status Icon */}
                                    <div className="w-5 h-5 flex items-center justify-center">
                                        {isComplete ? (
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                            </svg>
                                        ) : isCurrent ? (
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        )}
                                    </div>

                                    {/* Text */}
                                    <span className={`text-sm font-mono ${isCurrent ? 'text-white' : isComplete ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {state.text}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Progress Bar */}
                    <motion.div
                        className="w-full max-w-md mt-8 px-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="h-[2px] bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: '0%' }}
                                animate={{ width: `${((currentStep + 1) / loadingStates.length) * 100}%` }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default InitialLoader;
