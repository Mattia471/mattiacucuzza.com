import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../ui/Reveal';

export const Capabilities = () => {
  const { t } = useTranslation();
  const items = ['digital', 'apps', 'frontend', 'performance'] as const;

  return (
    <section id="capabilities" className="section-shell border-t border-white/10">
      <div className="page-shell py-24 md:py-36">
        <Reveal className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
          <div>
            <p className="section-index">03 / Capabilities</p>
          </div>
          <div>
            <p className="max-w-3xl text-2xl font-medium leading-tight text-white md:text-4xl">
              {t('capabilities.intro')}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-white/10 md:mt-24">
          {items.map((item, index) => (
            <Reveal key={item} delay={index * 70}>
              <div className="capability-row group grid gap-4 py-7 md:grid-cols-[0.72fr_1.28fr] md:gap-16 md:py-9">
                <div className="flex items-start gap-6">
                  <span className="mono-label text-white/30">0{index + 1}</span>
                  <h3 className="text-2xl font-semibold uppercase tracking-[-0.04em] text-white md:text-4xl">
                    {t(`capabilities.items.${item}.title`)}
                  </h3>
                </div>
                <div className="flex items-start justify-between gap-8">
                  <p className="max-w-xl text-sm leading-7 text-white/55 md:text-base">
                    {t(`capabilities.items.${item}.description`)}
                  </p>
                  <ArrowUpRight className="mt-1 shrink-0 text-lime transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
