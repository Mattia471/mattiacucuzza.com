import {Zap} from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {Button} from '../ui/Button';
import {useReferral} from "../../context/ReferralContext.tsx";

export const Pricing = () => {
    const { t } = useTranslation();
    const { discount, hasDiscount,referralCode } = useReferral();

    // Calcola il prezzo finale o restituisce 'Quote'
    const calculatePrice = (basePrice: string) => {
        if (basePrice === 'Quote') return 'Quote';
        const price = parseInt(basePrice);
        if (hasDiscount) {
            return (price * (1 - discount)).toFixed(0);
        }
        return basePrice;
    };

    const plans = [
        {
            id: "essential",
            name: t('pricing.plans.essential.name'),
            price: "500",
            features: [
                t('pricing.plans.essential.f1'),
                t('pricing.plans.essential.f2'),
                t('pricing.plans.essential.f3'),
                t('pricing.plans.essential.f4'),
                t('pricing.plans.essential.f5')
            ],
        },
        {
            id: "management",
            name: t('pricing.plans.management.name'),
            price: "900",
            features: [
                t('pricing.plans.management.f1'),
                t('pricing.plans.management.f2'),
                t('pricing.plans.management.f3'),
                t('pricing.plans.management.f4'),
                t('pricing.plans.management.f5'),
            ],
            popular: true,
        },
        {
            id: "custom",
            name: t('pricing.plans.custom.name'),
            price: "Quote",
            features: [
                t('pricing.plans.custom.f1'),
                t('pricing.plans.custom.f2'),
                t('pricing.plans.custom.f3'),
                t('pricing.plans.custom.f4'),
                t('pricing.plans.custom.f5'),
            ],
        }
    ];

    // Funzione per generare il link mail dinamico con info sullo sconto
    const generateMailLink = (planName: string) => {
        const email = "cucuzzamattia47@gmail.com";

        const referralNote = hasDiscount
            ? `\n(Applicato codice sconto : ${referralCode?.toUpperCase()})`
            : "";

        const subject = encodeURIComponent(`Richiesta Progetto: ${planName}`);
        const body = encodeURIComponent(
            `Ciao Mattia,\n\nsono interessato al piano ${planName}.${referralNote}\nVorrei ricevere maggiori informazioni per iniziare a lavorare alla mia visione.\n\nGrazie!`
        );

        return `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="pricing" className="py-32 px-6 border-t border-white/5 bg-[#050505]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 relative">

                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic text-white">
                        {t('pricing.title')}
                    </h2>
                    <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold italic">
                        {t('pricing.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[48px] overflow-hidden">
                    {plans.map((pkg, i) => (
                        <div
                            key={i}
                            className={`p-12 flex flex-col bg-[#050505] transition-all duration-500 group ${pkg.popular ? 'relative bg-zinc-900/30 shadow-[inset_0_0_80px_rgba(16,185,129,0.05)]' : ''}`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                            )}

                            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-8 text-white group-hover:text-emerald-400 transition-colors">
                                {pkg.name}
                            </h3>

                            <div className="flex flex-col mb-10 min-h-[80px] justify-end">
                                {/* Prezzo Originale (Barrato se c'è sconto) */}
                                {hasDiscount && pkg.price !== 'Quote' && (
                                    <span className="text-zinc-600 line-through text-lg font-bold mb-1 ml-1">
                                        €{pkg.price}
                                    </span>
                                )}

                                <div className="flex items-baseline gap-2 text-white">
                                    <span className="text-6xl font-black tracking-tighter">
                                        {pkg.price === 'Quote' ? '' : '€'}{calculatePrice(pkg.price)}
                                    </span>
                                    {pkg.price !== 'Quote' && (
                                        <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">
                                            {t('pricing.base')}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <ul className="space-y-5 mb-12 flex-grow">
                                {pkg.features.map((f, idx) => (
                                    <li key={idx} className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest flex items-center gap-3">
                                        <Zap size={14} className="text-emerald-500 group-hover:scale-125 transition-transform" /> {f}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={pkg.popular ? 'primary' : 'outline'}
                                className="w-full text-[10px] tracking-[2px] font-black uppercase"
                                href={generateMailLink(pkg.name)}
                            >
                                {pkg.price === 'Quote' ? t('pricing.cta_quote') : t('pricing.cta_standard')}
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Footer disclaimer per i prezzi */}
                <p className="text-center mt-12 text-zinc-600 text-[9px] uppercase tracking-widest font-medium">
                    * {t('pricing.disclaimer') || "Prices may vary based on specific requirements."}
                </p>
            </div>
        </section>
    );
};