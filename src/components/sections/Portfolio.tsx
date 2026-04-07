import { ExternalLink } from 'lucide-react';

export const Portfolio = () => {
    const projects = [
        {
            title: "New Generation Academy",
            cat: "Urban Transformation Platform",
            img: "/project_1.png",
            tags: ["React", "Next.js", "Sustainability"],
            align: "start",
            link: "https://nextgen-academy.org",
            desc: "Gestione eventi e programmi formativi internazionali."
        },
        {
            title: "Late Night Hoop Shop",
            cat: "E-commerce & Analytics",
            img: "/project_2.png",
            tags: ["React", "Vercel", "Tailwind"],
            align: "end",
            link: "https://late-night-hoop-shop.vercel.app/",
            desc: "Store digitale ad alte prestazioni con visualizzazione dinamica dei prodotti."
        },
        {
            title: "Reverse Wind Portal",
            cat: "B2B SaaS & Referral System",
            img: "/project_3.png",
            tags: ["Auth Systems", "Node.js", "Referral Logic"],
            align: "start", // Questo lo sposta leggermente in basso creando il look asimmetrico
            link: "https://app.reversewind.it/login",
            note: "Original Architecture (V1.0)", // Specifica il tuo ruolo storico
            desc: "Progettazione integrale dell'architettura iniziale, area riservata e logiche di sconti per referral."
        },
    ];

    return (
        <section id="work" className="py-32 px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[5px] mb-4">The Deployments</p>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none text-white">
                        Proven <br/>Solutions.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`group space-y-6 ${project.align === 'end' ? 'md:mt-32' : ''}`}
                        >
                            <div
                                className="relative aspect-video bg-zinc-900 rounded-[40px] overflow-hidden border border-white/5 shadow-2xl transition-all group-hover:border-emerald-500/30">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                                <div
                                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div
                                        className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                                           aria-label="Apri sito esterno"
                                           className="inline-flex items-center justify-center w-full h-full">
                                            <ExternalLink size={20} className="animate-pulse"/>
                                        </a></div>
                                </div>
                            </div>

                            <div className="flex justify-between items-start px-4">
                                <div>
                                    <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mt-1">
                                            {project.cat}
                                        </p>
                                        {/* AGGIUNTA: Badge per la versione originale */}
                                        {project.note && (
                                            <span
                                                className="text-[7px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-black uppercase tracking-tighter mt-1">
                    {project.note}
                </span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag}
                                              className="text-[8px] font-black px-2 py-1 rounded bg-white/5 text-white/40 border border-white/10 uppercase">
                {tag}
            </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};