import { Code, Coffee } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-32 px-6 border-y border-white/5 bg-[#080808]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative group">
                    {/* Foto Placeholder - Sostituisci il src con la tua immagine */}
                    <div className="aspect-[4/5] bg-zinc-900 rounded-[40px] overflow-hidden border border-white/10 relative shadow-2xl">
                        <img
                            src="/about.png"
                            alt="Me"
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Esperienza Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-emerald-500 p-8 rounded-3xl text-black shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
                        <p className="text-4xl font-black leading-none">5+</p>
                        <p className="text-[10px] font-black uppercase tracking-widest leading-tight mt-1">Anni di<br/>Sviluppo</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[5px] mb-6 italic">Behind the code</p>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none text-white">
                            Non sono <br/>un'agenzia.
                        </h2>
                    </div>

                    <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed uppercase tracking-wider">
                        <p>
                            Mentre le agenzie vendono pacchetti standardizzati, io costruisco **soluzioni sartoriali**.
                            Ogni riga di codice è scritta per rispondere a un'esigenza specifica della tua attività.
                        </p>
                        <p>
                            Il mio approccio è diretto: analizzi il tuo business con me, rispondo io al telefono.
                            Questo garantisce una velocità di esecuzione e una cura dei dettagli estrema.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="p-6 border border-white/5 rounded-2xl bg-white/5 hover:border-emerald-500/20 transition-colors group">
                                <Code size={20} className="text-emerald-400 mb-3" />
                                <p className="text-[10px] font-black uppercase text-white tracking-widest">Clean Architecture</p>
                            </div>
                            <div className="p-6 border border-white/5 rounded-2xl bg-white/5 hover:border-emerald-500/20 transition-colors">
                                <Coffee size={20} className="text-emerald-400 mb-3" />
                                <p className="text-[10px] font-black uppercase text-white tracking-widest">Direct Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};