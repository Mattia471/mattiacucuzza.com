import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../ui/Reveal';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-shell">
      <div className="page-shell py-24 md:py-36">
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="section-index">01 / About</p>
          </div>
          <div>
            <h2 className="section-title max-w-5xl text-white">
              {t('about.title_before')} <span className="text-lime">{t('about.title_accent')}</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="about-image-wrap group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
              <img
                src="/about.png"
                alt="Mattia Cucuzza"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="mono-label text-white/45">{t('about.image_label')}</p>
                  <p className="mt-1 text-sm font-medium text-white">MATTIA CUCuzza®</p>
                </div>
                <span className="rounded-full bg-lime px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black">
                  {t('about.experience')}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col justify-between">
            <div className="space-y-7">
              <p className="max-w-3xl text-xl leading-9 text-white/78 md:text-2xl md:leading-10">{t('about.p1')}</p>
              <p className="max-w-3xl text-base leading-8 text-white/45 md:text-lg">{t('about.p2')}</p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:mt-16">
              {['code', 'design', 'movement'].map((item) => (
                <div key={item} className="bg-[#0a0a0a] p-5 md:p-6">
                  <p className="mono-label text-lime">{t(`about.pillars.${item}.label`)}</p>
                  <p className="mt-3 text-sm leading-6 text-white/60">{t(`about.pillars.${item}.copy`)}</p>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/mattiacucuzza_/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:text-lime"
              data-cursor="IG"
            >
              {t('about.instagram')}
              <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
