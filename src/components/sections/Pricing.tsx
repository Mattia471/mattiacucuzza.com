import {Zap} from 'lucide-react';
import {Button} from '../ui/Button';

export const Pricing = () => {
    const plans = [
        {
            name: "Essential",
            price: "500",
            features: ["Sito Vetrina 5 Sezioni", "SEO & Performance Ready", "Mobile First Design", "Contact Form diretto"],
        },
        {
            name: "Management",
            price: "900",
            features: ["Database SQL Integrato", "Iscrizioni & Slot Online", "Automazione Email Email", "Admin Dashboard Custom"],
            popular: true,
        },
        {
            name: "Custom Lab",
            price: "Quote",
            features: ["Sviluppo Logiche Ad-hoc", "Integrazioni API complesse", "App Mobile Web (PWA)", "Maintenance Priority"],
        }
    ];

    return (
        <section id="pricing" className="py-32 px-6 border-t border-white/5 bg-[#050505]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic text-white">The Lab Plans</h2>
                    <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold italic">Investimento chiaro. Risultati scalabili.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[48px] overflow-hidden">
                    {plans.map((pkg, i) => (
                        <div
                            key={i}
                            className={`p-12 flex flex-col bg-[#050505] transition-all duration-500 ${pkg.popular ? 'relative bg-zinc-900/30 shadow-[inset_0_0_80px_rgba(16,185,129,0.05)]' : ''}`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                            )}

                            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-8 text-white">{pkg.name}</h3>

                            <div className="flex items-baseline gap-2 mb-10 text-white">
                <span className="text-6xl font-black tracking-tighter">
                  {pkg.price === 'Quote' ? '' : '€'}{pkg.price}
                </span>
                                {pkg.price !== 'Quote' && <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Base</span>}
                            </div>

                            <ul className="space-y-5 mb-12 flex-grow">
                                {pkg.features.map(f => (
                                    <li key={f} className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest flex items-center gap-3">
                                        <Zap size={14} className="text-emerald-500" /> {f}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={pkg.popular ? 'primary' : 'outline'}
                                className="w-full text-[10px]"
                            >
                                {pkg.price === 'Quote' ? 'Request Quote' : 'Prenota Consulenza'}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};