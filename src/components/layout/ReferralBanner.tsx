import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useReferral } from '../../context/ReferralContext';

export const ReferralBanner = () => {
  const { hasDiscount, referralCode, discount } = useReferral();
  const { t } = useTranslation();

  if (!hasDiscount) return null;

  return (
    <div className="referral-chip" role="status">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-black">
        <Sparkles size={14} />
      </span>
      <div>
        <p className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-lime">{t('referral.title')}</p>
        <p className="mt-0.5 text-xs font-semibold text-white">
          {t('referral.copy', { discount: Math.round(discount * 100), code: referralCode?.toUpperCase() })}
        </p>
      </div>
    </div>
  );
};
