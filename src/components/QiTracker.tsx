import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, Award, ChevronRight } from 'lucide-react';

export default function QiTracker() {
    const [points, setPoints] = useState(1250);
    const [checkedIn, setCheckedIn] = useState(false);

    const handleCheckIn = () => {
        if (!checkedIn) {
            setPoints(points + 50);
            setCheckedIn(true);
        }
    };

    return (
        <section className="py-24 bg-beige relative overflow-hidden">
            {/* Background Zen Pattern */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-soft-gold/5 rounded-full blur-[120px] -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="font-display text-4xl md:text-6xl text-primary mb-4 font-thin">The Inner Circle</h2>
                        <p className="text-primary/60 text-lg font-light tracking-wide max-w-xl">
                            Consistency is the mother of healing. Track your daily rituals and elevate your soul's constitution.
                        </p>
                    </div>
                    <div className="flex items-center gap-6 bg-white/50 backdrop-blur-md p-4 rounded-3xl border border-primary/5">
                        <div className="flex flex-col items-center px-4 border-r border-primary/10">
                            <span className="text-[10px] text-primary/40 uppercase tracking-[0.2em] mb-1">Tier</span>
                            <span className="text-primary font-display text-xl">Silver Dragon</span>
                        </div>
                        <div className="flex flex-col items-center px-4">
                            <span className="text-[10px] text-primary/40 uppercase tracking-[0.2em] mb-1">Qi Points</span>
                            <span className="text-soft-gold font-display text-2xl drop-shadow-sm">{points}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Daily Check-in Card */}
                    <div className="md:col-span-2 bg-primary rounded-[2.5rem] p-10 text-beige flex flex-col justify-between group overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 transition-transform duration-1000 group-hover:scale-[1.7] group-hover:rotate-12">
                            <Flame className="w-32 h-32" />
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-2 h-2 rounded-full bg-soft-gold animate-pulse" />
                                <span className="text-[10px] tracking-[0.3em] uppercase text-soft-gold font-medium">Daily Enlightenment Activation</span>
                            </div>
                            <h3 className="font-display text-4xl mb-6 font-thin leading-tight">
                                Have you completed your <br />
                                <span className="italic">herbal ritual</span> today?
                            </h3>
                        </div>

                        <button
                            onClick={handleCheckIn}
                            disabled={checkedIn}
                            className={`group relative px-10 py-5 rounded-full transition-all duration-500 overflow-hidden flex items-center justify-center gap-4 ${checkedIn ? 'bg-stone-800 text-stone-500 cursor-default' : 'bg-soft-gold text-primary hover:bg-beige'
                                }`}
                        >
                            {checkedIn ? (
                                <>
                                    <Award className="w-5 h-5" />
                                    <span className="uppercase tracking-[0.2em] text-xs font-bold">Ritual Complete +50 Qi</span>
                                </>
                            ) : (
                                <>
                                    <Flame className="w-5 h-5 text-primary group-hover:animate-bounce" />
                                    <span className="uppercase tracking-[0.2em] text-xs font-bold">I have found my balance</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Reward Progress Card */}
                    <div className="bg-white rounded-[2.5rem] p-10 border border-primary/5 flex flex-col justify-between">
                        <div>
                            <Star className="w-8 h-8 text-soft-gold mb-8" />
                            <h3 className="font-display text-3xl text-primary mb-4 font-thin">Next Milestone</h3>
                            <p className="text-primary/60 text-sm font-light leading-relaxed mb-10">
                                Unlock the <span className="text-primary font-medium">Gold Phoenix</span> tier to receive personalized herbal prescriptions quarterly.
                            </p>
                        </div>

                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-[10px] uppercase tracking-widest text-primary/40">Progress</span>
                                <span className="text-primary font-medium">75%</span>
                            </div>
                            <div className="w-full h-1.5 bg-primary/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '75%' }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-soft-gold"
                                />
                            </div>
                            <button className="w-full mt-10 text-primary/40 hover:text-primary transition-colors flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold">
                                View Rewards <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
