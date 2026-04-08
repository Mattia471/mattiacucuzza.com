import { Code, Music } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-32 px-6 border-y border-white/5 bg-[#080808]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Immagine con Badge Esperienza */}
                <div className="relative group">
                    <div className="aspect-[4/5] bg-zinc-900 rounded-[40px] overflow-hidden border border-white/10 relative shadow-2xl">
                        <img src="/about.png" alt="Me" className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    </div>

                    <div className="absolute -bottom-6 -right-6 bg-emerald-500 p-8 rounded-3xl text-black shadow-[0_20px_50px_rgba(16,185,129,0.3)] z-10">
                        <p className="text-4xl font-black leading-none">{t('about.experience_years')}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest leading-tight mt-1"
                           dangerouslySetInnerHTML={{ __html: t('about.experience_label') }} />
                    </div>
                </div>

                {/* Testi e Card */}
                <div className="space-y-8">
                    <div>
                        <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[5px] mb-6 italic">{t('about.badge')}</p>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-[0.9] text-white"
                            dangerouslySetInnerHTML={{ __html: t('about.title') }} />
                    </div>

                    <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed uppercase tracking-wider">
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>

                        {/* Grid delle Card */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                            <div className="p-6 border border-white/5 rounded-2xl bg-white/5 hover:border-emerald-500/20 transition-all group">
                                <Code size={20} className="text-emerald-400 mb-3" />
                                <p className="text-[10px] font-black uppercase text-white tracking-widest">{t('about.card_1')}</p>
                            </div>

                            {/* Card IG / Bachata: Questa attira l'attenzione */}
                            <a
                                href="https://www.instagram.com/mattiacucuzza_/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-6 border border-emerald-500/30 rounded-2xl bg-emerald-500/5 hover:bg-emerald-500/10 transition-all group relative overflow-hidden"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <Music size={20} className="text-emerald-400" />
                                     <img src={"/instagram.png"} alt="Instagram" className="w-8 h-8" />
                                </div>
                                <p className="text-[10px] font-black uppercase text-white tracking-widest mb-1">{t('about.card_3')}</p>
                                <p className="text-[8px] text-zinc-500 font-bold leading-tight">{t('about.card_3_desc')}</p>

                                {/* Effetto luce soffusa interna */}
                                <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};