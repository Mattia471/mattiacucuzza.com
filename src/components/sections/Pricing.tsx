import {CheckCircle2, Zap} from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {Button} from '../ui/Button';
import {useReferral} from "../../context/ReferralContext.tsx";

export const Pricing = () => {
    const { t } = useTranslation();
    const { discount, hasDiscount, referralCode } = useReferral(); // Assicurati di passare anche il codice dal context

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

    const generateMailLink = (planName: string, originalPrice: string) => {
        const email = "cucuzzamattia47@gmail.com";
        const finalPrice = calculatePrice(originalPrice);
        const referralNote = hasDiscount
            ? `\n(Codice Referral Usato: ${referralCode?.toUpperCase()} | Sconto: -${discount * 100}% | Prezzo Finale: €${finalPrice})`
            : "";

        const subject = encodeURIComponent(`Richiesta Progetto: ${planName}`);
        const body = encodeURIComponent(
            `Ciao Mattia,\n\nsono interessato al piano ${planName}.${referralNote}\nVorrei iniziare a lavorare alla mia visione.\n\nGrazie!`
        );
        return `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="pricing" className="py-32 px-6 border-t border-white/5 bg-[#050505]">
            <div className="max-w-6xl mx-auto">

                {/* Header Sezione */}
                <div className="text-center mb-20 relative">
                    {hasDiscount && (
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-black uppercase tracking-[3px] mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
                            <CheckCircle2 size={14} className="text-emerald-500" />
                            Sconto Referral "{referralCode?.toUpperCase()}" Attivato (-{discount * 100}%)
                        </div>
                    )}

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
                            className={`p-12 flex flex-col bg-[#050505] transition-all duration-500 group relative ${pkg.popular ? 'bg-zinc-900/30 shadow-[inset_0_0_80px_rgba(16,185,129,0.05)]' : ''}`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white group-hover:text-emerald-400 transition-colors">
                                    {pkg.name}
                                </h3>
                                {hasDiscount && pkg.price !== 'Quote' && (
                                    <span className="text-emerald-500 text-[9px] font-black uppercase tracking-widest mt-2 block">
                                        {t('pricing.discount_applied')}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col mb-10 min-h-[90px] justify-end">
                                {hasDiscount && pkg.price !== 'Quote' && (
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-zinc-600 line-through text-xl font-bold italic">
                                            €{pkg.price}
                                        </span>
                                        <span className="bg-emerald-500 text-black text-[9px] font-black px-2 py-0.5 rounded-sm uppercase">
                                            -{(discount * 100)}%
                                        </span>
                                    </div>
                                )}

                                <div className="flex items-baseline gap-2 text-white">
                                    <span className="text-7xl font-black tracking-tighter leading-none">
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
                                        <Zap size={14} className="text-emerald-500 group-hover:rotate-12 transition-transform" /> {f}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={pkg.popular ? 'primary' : 'outline'}
                                className="w-full text-[10px] tracking-[3px] font-black uppercase py-6"
                                href={generateMailLink(pkg.name, pkg.price)}
                            >
                                {pkg.price === 'Quote' ? t('pricing.cta_quote') : t('pricing.cta_standard')}
                            </Button>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-12 text-zinc-600 text-[9px] uppercase tracking-[4px] font-medium opacity-50">
                    * {t('pricing.disclaimer')}
                </p>
            </div>
        </section>
    );
};