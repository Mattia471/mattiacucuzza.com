import {useReferral} from '../../context/ReferralContext';
import {Zap} from 'lucide-react';
import {useTranslation} from "react-i18next";

export const ReferralBanner = () => {
    const { hasDiscount, referralCode, discount } = useReferral();
    const {t} = useTranslation();

    // Se non c'è sconto o l'utente lo ha chiuso, non renderizzare nulla
    if (!hasDiscount) return null;

    return (
        <div className="fixed bottom-6 left-0 right-0 px-6 z-[200] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="max-w-md mx-auto bg-emerald-500 rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.4)] overflow-hidden border border-white/20">
                <div className="px-6 py-4 flex items-center justify-between gap-4">

                    {/* Icona e Testo */}
                    <div className="flex items-center gap-4">
                        <div className="bg-black/10 p-2 rounded-xl">
                            <Zap size={18} className="text-black fill-black" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[2px] text-black italic leading-none mb-1">
                                {t('referral.banner_title')}
                            </p>
                            <p className="text-[12px] font-bold text-black/80">
                                {t('referral.banner_text', { discount: discount * 100, code: referralCode?.toUpperCase() })}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};