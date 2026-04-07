import {User} from 'lucide-react';
import {Button} from '../ui/Button';
import {Badge} from '../ui/Badge';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-[#050505]">

            {/* --- VIDEO BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90"
                >
                    <source src="/bg.mp4" type="video/mp4" />
                    {/* Fallback se il video non carica */}
                    Your browser does not support the video tag.
                </video>

                {/* Overlay per garantire la leggibilità del testo */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-80"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* --- CONTENT LAYER --- */}
            <div className="relative z-10 text-center">
                <Badge icon={<User size={12} className="animate-pulse" />}>
                    Independent Developer & Architect
                </Badge>

                <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mb-8 text-white">
                    I Build <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 italic font-light">The Engine.</span>
                </h1>

                <p className="max-w-xl mx-auto text-zinc-300 text-xs md:text-sm tracking-[2px] uppercase leading-relaxed mb-12 drop-shadow-md">
                    Sviluppo infrastrutture digitali ad alte prestazioni. <br />
                    Design millimetrico. Codice indistruttibile. Automazione Totale.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button href="#about">Chi Sono</Button>
                    <Button href="#work" variant="outline">Vedi i miei Lavori</Button>
                </div>
            </div>

            {/* Scroll Hint Animato */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-30">
                <span className="text-[8px] font-black uppercase tracking-[4px] text-white">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
            </div>
        </section>
    );
};