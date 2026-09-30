import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../ui/Reveal';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section relative min-h-screen overflow-hidden border-b border-white/10">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="page-shell relative z-10 flex min-h-screen flex-col justify-between pb-8 pt-32 md:pb-10 md:pt-40">
        <Reveal className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <div className="mb-8 flex flex-wrap items-center gap-3 md:mb-10">
              <span className="status-pill">
                <span className="status-dot" />
                {t('hero.availability')}
              </span>
              <span className="mono-label text-white/45">{t('hero.location')}</span>
            </div>

            <h1 className="hero-title text-white">
              <span className="block">{t('hero.line1')}</span>
              <span className="block text-outline">{t('hero.line2')}</span>
              <span className="block text-lime">{t('hero.line3')}</span>
            </h1>
          </div>

          <div className="lg:pt-28">
            <p className="max-w-xl text-lg leading-8 text-white/70 md:text-xl">
              {t('hero.description')}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="button-primary" data-cursor="GO">
                {t('hero.cta_work')}
                <ArrowDownRight size={18} />
              </a>
              <a href="mailto:cucuzzamattia47@gmail.com" className="button-ghost" data-cursor="MAIL">
                {t('hero.cta_contact')}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-14 md:mt-20">
          <div className="hero-media group relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-black md:rounded-[2rem]">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.025] group-hover:opacity-100">
              <source src="/bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 md:p-8">
              <div>
                <p className="mono-label text-white/45">{t('hero.media_label')}</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/75 md:text-base">{t('hero.media_copy')}</p>
              </div>
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lime backdrop-blur md:flex">
                <ArrowDownRight size={22} />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="mono-label text-white/35">© 2026</span>
          <a href="#about" className="mono-label flex items-center gap-2 text-white/55 transition hover:text-lime">
            {t('hero.scroll')}
            <ArrowDownRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
