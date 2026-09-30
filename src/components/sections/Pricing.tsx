import { ArrowUpRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useReferral } from '../../context/ReferralContext';
import { Reveal } from '../ui/Reveal';

type Plan = {
  id: 'essential' | 'management' | 'custom';
  price: string;
};

export const Pricing = () => {
  const { t } = useTranslation();
  const { discount, hasDiscount, referralCode } = useReferral();

  const plans: Plan[] = [
    { id: 'essential', price: '500' },
    { id: 'management', price: '900' },
    { id: 'custom', price: 'Quote' },
  ];

  const calculatePrice = (basePrice: string) => {
    if (basePrice === 'Quote') return null;
    const price = Number(basePrice);
    return hasDiscount ? Math.round(price * (1 - discount)).toString() : basePrice;
  };

  const generateMailLink = (planName: string) => {
    const referralNote = hasDiscount
      ? `\nCodice referral applicato: ${referralCode?.toUpperCase()}`
      : '';

    const subject = encodeURIComponent(`Richiesta Progetto: ${planName}`);
    const body = encodeURIComponent(
      `Ciao Mattia,\n\nsono interessato al servizio ${planName}.${referralNote}\nVorrei raccontarti il mio progetto e capire come possiamo lavorare insieme.\n\nGrazie!`,
    );

    return `mailto:cucuzzamattia47@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="pricing" className="section-shell border-t border-white/10">
      <div className="page-shell py-24 md:py-36">
        <Reveal className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
          <div>
            <p className="section-index">04 / Services</p>
          </div>
          <div>
            <h2 className="section-title text-white">{t('pricing.title')}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/50 md:text-lg">{t('pricing.subtitle')}</p>
          </div>
        </Reveal>

        {hasDiscount && (
          <Reveal delay={80} className="mt-12 md:ml-[36%] md:mt-16">
            <div className="inline-flex items-center gap-3 rounded-full border border-lime/35 bg-lime/10 px-4 py-2 text-lime">
              <span className="h-2 w-2 rounded-full bg-lime" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em]">
                {t('pricing.discount', { discount: Math.round(discount * 100), code: referralCode?.toUpperCase() })}
              </span>
            </div>
          </Reveal>
        )}

        <div className="mt-16 border-t border-white/10 md:mt-24">
          {plans.map((plan, index) => {
            const planName = t(`pricing.plans.${plan.id}.name`);
            const finalPrice = calculatePrice(plan.price);
            const features = [1, 2, 3, 4, 5].map((feature) => t(`pricing.plans.${plan.id}.f${feature}`));

            return (
              <Reveal key={plan.id} delay={index * 70}>
                <article className="service-row group grid gap-8 py-8 md:grid-cols-[0.72fr_1.28fr] md:gap-16 md:py-10">
                  <div className="flex items-start gap-6">
                    <span className="mono-label text-white/30">0{index + 1}</span>
                    <div>
                      <h3 className="text-3xl font-semibold uppercase tracking-[-0.045em] text-white md:text-5xl">{planName}</h3>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                        {t(`pricing.plans.${plan.id}.label`)}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
                    <div>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/55">
                            <Check size={15} className="mt-1 shrink-0 text-lime" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="min-w-[190px] md:text-right">
                      {plan.price === 'Quote' ? (
                        <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{t('pricing.on_request')}</p>
                      ) : (
                        <div>
                          {hasDiscount && (
                            <p className="mb-1 text-sm font-semibold text-white/30 line-through">€{plan.price}</p>
                          )}
                          <p className="text-4xl font-semibold tracking-[-0.06em] text-white md:text-5xl">€{finalPrice}</p>
                          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">{t('pricing.from')}</p>
                        </div>
                      )}

                      <a
                        href={generateMailLink(planName)}
                        className="mt-6 inline-flex items-center gap-2 border-b border-white/30 pb-1 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-lime hover:text-lime"
                        data-cursor="MAIL"
                      >
                        {t('pricing.cta')}
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-10 max-w-xl font-mono text-[9px] uppercase leading-5 tracking-[0.13em] text-white/25">
          {t('pricing.disclaimer')}
        </p>
      </div>
    </section>
  );
};
