export const Marquee = () => {
    return (
        <div className="overflow-hidden py-10 md:py-24 border-y border-white/5 bg-[#050505] relative">
            {/* Sfumature ai lati per l'effetto dissolvenza */}
            <div
                className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
            <div
                className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

            <div className="marquee-container">
                {/* Blocco 1 */}
                <div className="marquee-text">
                    <h2 className="text-[12vw] font-black leading-none tracking-tighter text-zinc-300/40 uppercase select-none flex items-center">
                        SCALABILITY <span className="mx-10 text-emerald-500">•</span>
                        AUTOMATION <span className="mx-10 text-emerald-500">•</span>
                        PERFORMANCE <span className="mx-10 text-emerald-500">•</span>&nbsp;
                    </h2>
                </div>

                {/* Blocco 2 (Necessario per il loop infinito senza scatti) */}
                <div className="marquee-text">
                    <h2 className="text-[12vw] font-black leading-none tracking-tighter text-zinc-300/40 uppercase select-none flex items-center">
                        SCALABILITY <span className="mx-10 text-emerald-500">•</span>
                        AUTOMATION <span className="mx-10 text-emerald-500">•</span>
                        PERFORMANCE <span className="mx-10 text-emerald-500">•</span>&nbsp;
                    </h2>
                </div>
            </div>
        </div>
    )
}