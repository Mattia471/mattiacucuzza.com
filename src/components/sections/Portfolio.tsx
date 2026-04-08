import {ArrowUpRight, ExternalLink} from 'lucide-react';
import {useTranslation} from "react-i18next";

export const Portfolio = () => {
    const {t} = useTranslation();
    const projects = [
        {
            title: "New Generation Academy",
            cat: t('portfolio.projects.nga.cat'),
            img: "/project_1.png",
            tags: ["React", "Next.js"],
            align: "start",
            link: "https://nextgen-academy.org",
            desc: t('portfolio.projects.nga.desc')
        },
        {
            title: "Reverse Wind Portal",
            cat: t('portfolio.projects.reverse.cat'),
            img: "/project_3.png",
            tags: ["Auth", "Node.js"],
            align: "end",
            link: "https://app.reversewind.it/login",
            note: t('portfolio.projects.reverse.note'),
            desc: t('portfolio.projects.reverse.desc')
        },
        {
            title: "Late Night Hoop Shop",
            cat: t('portfolio.projects.hoop.cat'),
            img: "/project_2.png",
            tags: ["React", "Vercel"],
            align: "start",
            link: "https://late-night-hoop-shop.vercel.app/",
            desc: t('portfolio.projects.hoop.desc')
        },
    ];

    return (
        <section id="work" className="py-24 md:py-32 px-4 md:px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[5px] mb-4">{t('portfolio.badge')}</p>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.8] text-white">
                        {t('portfolio.title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-32">
                    {projects.map((project, i) => (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={i}
                            className={`group block relative ${project.align === 'end' ? 'md:mt-40' : ''}`}
                        >
                            {/* Card Immagine con Effetto Hover */}
                            <div className="relative aspect-[16/10] bg-zinc-900 rounded-2xl md:rounded-[40px] overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 scale-[1.01] group-hover:scale-110 blur-0 group-hover:blur-[2px] opacity-80 group-hover:opacity-40"
                                />

                                {/* Overlay Content (visibile bene al passaggio mouse o focus) */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20 backdrop-blur-sm">
                                    <p className="text-white text-center px-8 text-sm md:text-base font-medium max-w-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {project.desc}
                                    </p>
                                    <div className="mt-6 w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        <ArrowUpRight size={24} strokeWidth={3} />
                                    </div>
                                </div>

                                {/* Label Mobile (Sempre visibile solo su mobile per aiutare l'utente) */}
                                <div className="absolute bottom-4 right-4 md:hidden bg-emerald-500 p-2 rounded-full text-black">
                                    <ExternalLink size={16} />
                                </div>
                            </div>

                            {/* Info Sotto l'immagine */}
                            <div className="mt-6 md:mt-8 flex justify-between items-end px-2">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white group-hover:text-emerald-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        {project.note && (
                                            <span className="hidden md:block text-[7px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">
                                                {project.note}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-zinc-500 text-[10px] md:text-xs uppercase font-bold tracking-[3px]">
                                        {project.cat}
                                    </p>
                                </div>

                                <div className="flex gap-1.5 mb-1">
                                    {project.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-[8px] md:text-[9px] font-black px-2 py-1 rounded bg-white/5 text-white/40 border border-white/10 uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};