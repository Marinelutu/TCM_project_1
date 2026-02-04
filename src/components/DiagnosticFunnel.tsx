import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Camera, Check, RefreshCw } from 'lucide-react';

interface Question {
    id: string;
    text: string;
    subtext?: string;
    type: 'choice' | 'upload';
    options?: { value: string; label: string; nextId?: string }[];
}

const QUESTIONS: Record<string, Question> = {
    start: {
        id: 'start',
        text: "Welcome to your Digital Sensei consultation.",
        subtext: "To find your balance, we must first understand your Flow. What is your primary concern today?",
        type: 'choice',
        options: [
            { value: 'sleep', label: 'Impaired Sleep', nextId: 'sleep_detail' },
            { value: 'energy', label: 'Low Energy/Fatigue', nextId: 'energy_detail' },
            { value: 'stress', label: 'Stress & Tension', nextId: 'tongue_step' },
            { value: 'digestion', label: 'Digestive Burnout', nextId: 'tongue_step' },
        ]
    },
    sleep_detail: {
        id: 'sleep_detail',
        text: "Tell me about your nights...",
        subtext: "The quality of rest reveals the depth of your Yin.",
        type: 'choice',
        options: [
            { value: 'sweats', label: 'Frequent Night Sweats', nextId: 'tongue_step' },
            { value: 'racing', label: 'Racing Thoughts at Night', nextId: 'tongue_step' },
            { value: 'restless', label: 'Restless Legs or Body', nextId: 'tongue_step' },
        ]
    },
    energy_detail: {
        id: 'energy_detail',
        text: "When does your energy dip?",
        subtext: "Understanding the rhythmic flow of your Qi.",
        type: 'choice',
        options: [
            { value: 'morning', label: 'Heavy Morning Fatigue', nextId: 'tongue_step' },
            { value: 'afternoon', label: 'Sudden Afternoon Crash', nextId: 'tongue_step' },
            { value: 'constant', label: 'Constant Heavy Feeling', nextId: 'tongue_step' },
        ]
    },
    tongue_step: {
        id: 'tongue_step',
        text: "The Final Vital Sign: The Tongue.",
        subtext: "In TCM, the tongue is the map of your internal organs. Please upload a clear photo of your tongue in natural light.",
        type: 'upload'
    }
};

export default function DiagnosticFunnel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [currentId, setCurrentId] = useState('start');
    const [history, setHistory] = useState<string[]>([]);
    const [isScanning, setIsScanning] = useState(false);
    const [result, setResult] = useState<any>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const currentQuestion = QUESTIONS[currentId];

    const handleNext = (nextId: string) => {
        setHistory([...history, currentId]);
        setCurrentId(nextId);
    };

    const handleBack = () => {
        const prev = history.pop();
        if (prev) {
            setHistory([...history]);
            setCurrentId(prev);
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setIsScanning(true);
            // Simulate analysis
            setTimeout(() => {
                setIsScanning(false);
                setResult({
                    diagnosis: "Yin Deficiency with Heat Signs",
                    recommendation: "Reishi & Astragalus Formula",
                    explanation: "Your tongue shows a 'Red Body' with 'Thin Yellow Coating', suggesting internal heat and depletion of cooling Yin fluids."
                });
            }, 3000);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-xl transition-all duration-700">
            <button
                onClick={onClose}
                className="absolute top-8 right-10 text-beige/50 hover:text-soft-gold transition-colors text-xs tracking-widest uppercase"
            >
                Close [Esc]
            </button>

            <div className="max-w-4xl w-full px-6">
                <AnimatePresence mode="wait">
                    {!result ? (
                        <motion.div
                            key={currentId}
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center"
                        >
                            <p className="text-soft-gold text-[10px] tracking-[0.4em] uppercase mb-4 opacity-70">
                                AI Diagnostic Funnel — Question {history.length + 1}
                            </p>

                            <h2 className="font-display text-4xl md:text-6xl text-beige mb-6 font-thin leading-tight">
                                {currentQuestion.text}
                            </h2>
                            <p className="text-stone-400 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto tracking-wide italic leading-relaxed">
                                {currentQuestion.subtext}
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                {currentQuestion.type === 'choice' && currentQuestion.options?.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => opt.nextId && handleNext(opt.nextId)}
                                        className="group relative px-8 py-4 w-full md:w-auto min-w-[200px] border border-stone-800 hover:border-soft-gold/40 transition-all duration-500 rounded-full"
                                    >
                                        <span className="relative z-10 text-beige group-hover:text-soft-gold text-sm tracking-widest uppercase transition-colors">
                                            {opt.label}
                                        </span>
                                        <div className="absolute inset-x-0 bottom-0 h-0 bg-soft-gold/5 group-hover:h-full transition-all duration-500 rounded-full" />
                                    </button>
                                ))}

                                {currentQuestion.type === 'upload' && (
                                    <div className="relative group">
                                        <input
                                            type="file"
                                            className="hidden"
                                            ref={fileInputRef}
                                            onChange={handleFileUpload}
                                            accept="image/*"
                                        />

                                        {isScanning ? (
                                            <div className="flex flex-col items-center gap-6">
                                                <div className="relative w-32 h-32">
                                                    <div className="absolute inset-0 border-2 border-soft-gold rounded-full animate-ping opacity-25" />
                                                    <div className="absolute inset-2 border border-soft-gold/40 rounded-full animate-spin-slow" />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <RefreshCw className="w-8 h-8 text-soft-gold animate-spin" />
                                                    </div>
                                                </div>
                                                <p className="text-soft-gold animate-pulse tracking-[0.3em] uppercase text-xs">Analyzing Biometric Data...</p>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => fileInputRef.current?.click()}
                                                className="flex flex-col items-center gap-6 group"
                                            >
                                                <div className="w-24 h-24 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-soft-gold/50 transition-all duration-500 group-hover:scale-110">
                                                    <Camera className="w-8 h-8 text-stone-500 group-hover:text-soft-gold transition-colors" />
                                                </div>
                                                <span className="text-stone-500 group-hover:text-soft-gold tracking-widest uppercase text-xs">Click to Capture / Upload</span>
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>

                            {history.length > 0 && !isScanning && (
                                <button
                                    onClick={handleBack}
                                    className="mt-12 text-stone-600 hover:text-stone-400 flex items-center gap-2 mx-auto transition-colors text-[10px] tracking-[0.2em] uppercase"
                                >
                                    <ChevronLeft className="w-3 h-3" />
                                    Previous Question
                                </button>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-xl mx-auto text-center"
                        >
                            <div className="w-20 h-20 bg-soft-gold/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-soft-gold/30">
                                <Check className="w-10 h-10 text-soft-gold" />
                            </div>
                            <h3 className="font-display text-4xl text-beige mb-6 font-thin">Diagnosis Complete</h3>

                            <div className="p-1 w-full bg-gradient-to-r from-transparent via-soft-gold/20 to-transparent my-10" />

                            <div className="space-y-8 text-left">
                                <div>
                                    <h4 className="text-soft-gold text-[10px] tracking-[0.3em] uppercase mb-2 opacity-70 font-medium">Core Condition</h4>
                                    <p className="text-2xl text-beige font-light">{result.diagnosis}</p>
                                </div>
                                <div>
                                    <h4 className="text-soft-gold text-[10px] tracking-[0.3em] uppercase mb-2 opacity-70 font-medium">Sensei's Insight</h4>
                                    <p className="text-stone-400 font-light leading-relaxed">{result.explanation}</p>
                                </div>
                                <div className="bg-stone-900/50 p-6 rounded-2xl border border-stone-800">
                                    <h4 className="text-soft-gold text-[10px] tracking-[0.3em] uppercase mb-4 opacity-70 font-medium">Recommended Ritual</h4>
                                    <div className="flex items-center justify-between">
                                        <span className="text-beige text-lg">{result.recommendation}</span>
                                        <button className="bg-soft-gold text-primary px-6 py-2 rounded-full text-xs font-bold tracking-widest hover:bg-beige transition-colors uppercase">
                                            Add to Shop
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="mt-16 text-stone-500 hover:text-beige transition-colors text-[10px] tracking-[0.3em] uppercase"
                            >
                                Return to Sanctuary
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Progress Line */}
            {!result && (
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900">
                    <motion.div
                        className="h-full bg-soft-gold"
                        initial={{ width: 0 }}
                        animate={{ width: `${((history.length + 1) / Object.keys(QUESTIONS).length) * 100}%` }}
                        transition={{ duration: 0.8 }}
                    />
                </div>
            )}
        </div>
    );
}
