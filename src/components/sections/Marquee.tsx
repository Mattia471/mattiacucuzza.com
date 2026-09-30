import { useTranslation } from 'react-i18next';

export const Marquee = () => {
  const { t } = useTranslation();
  const words = [t('marquee.item1'), t('marquee.item2'), t('marquee.item3'), t('marquee.item4')];
  const repeated = [...words, ...words];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-lime py-5 text-black md:py-7">
      <div className="marquee-container">
        {repeated.map((word, index) => (
          <div key={`${word}-${index}`} className="marquee-text px-5 md:px-8">
            <span className="text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">{word}</span>
            <span className="ml-8 text-xl md:ml-12 md:text-3xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
