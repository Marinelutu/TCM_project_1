import { Play, ShoppingCart, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RitualVideo() {
    return (
        <section className="py-24 bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Video Player Mockup */}
                    <div className="relative w-full md:w-1/2 aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80"
                            alt="Ritual Tutorial"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-20 h-20 rounded-full bg-soft-gold/90 flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(253,230,138,0.5)]">
                                <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                            </button>
                        </div>

                        {/* Shop the Look Hotspots */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute top-1/4 right-1/4"
                        >
                            <div className="relative group/hotspot">
                                <div className="w-4 h-4 rounded-full bg-soft-gold animate-ping absolute" />
                                <div className="w-4 h-4 rounded-full bg-soft-gold relative z-10 cursor-pointer" />

                                {/* Floating Product Card */}
                                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-48 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 opacity-0 group-hover/hotspot:opacity-100 transition-all duration-500 transform translate-x-4 group-hover/hotspot:translate-x-0 pointer-events-none group-hover/hotspot:pointer-events-auto">
                                    <p className="text-[10px] text-soft-gold uppercase tracking-widest mb-1">Ritual Tool</p>
                                    <p className="text-white text-sm font-medium mb-3">Jade Gua Sha Stone</p>
                                    <button className="w-full py-2 bg-soft-gold text-primary text-[10px] uppercase font-bold tracking-widest rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2">
                                        <ShoppingCart className="w-3 h-3" /> Add to Cart — $45
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="font-display text-4xl md:text-6xl text-beige mb-8 font-thin leading-tight">
                            Master the Art of <br />
                            <span className="italic">Yang Sheng</span>.
                        </h2>
                        <p className="text-stone-400 text-lg md:text-xl font-light mb-12 leading-relaxed">
                            Traditional Chinese Medicine is more than medicine—it is a ritual for longevity. Watch our guided sequences and bring the sanctuary into your home.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: 'Morning Qi Activation', duration: '5 min' },
                                { title: 'Nightly Yin Restoration', duration: '12 min' },
                                { title: 'Gua Sha Sculpting Masterclass', duration: '8 min' }
                            ].map((ritual, i) => (
                                <button key={i} className="w-full flex items-center justify-between p-6 rounded-2xl border border-stone-800 hover:border-soft-gold/30 transition-all duration-500 group">
                                    <div className="flex items-center gap-6">
                                        <span className="text-stone-600 font-display text-2xl group-hover:text-soft-gold transition-colors italic">0{i + 1}</span>
                                        <span className="text-beige text-lg font-light tracking-wide">{ritual.title}</span>
                                    </div>
                                    <span className="text-soft-gold/50 text-xs tracking-widest uppercase flex items-center gap-2">
                                        <Info className="w-3 h-3" /> {ritual.duration}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
