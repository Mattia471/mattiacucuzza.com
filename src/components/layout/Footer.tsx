import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../ui/Reveal';

export const Footer = () => {
  const { t } = useTranslation();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const value = new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date());
      setTime(value);
    };

    updateTime();
    const interval = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="border-t border-white/10 bg-lime text-black">
      <div className="page-shell py-16 md:py-24">
        <Reveal>
          <img
            src="/logo-dark.png"
            alt="Mattia Cucuzza"
            className="site-logo site-logo--footer"
          />
          <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/55">05 / Contact</p>
          <a
            href="mailto:cucuzzamattia47@gmail.com"
            className="footer-cta group mt-8 block border-b border-black/25 pb-8 md:mt-12 md:pb-12"
            data-cursor="MAIL"
          >
            <span className="block">{t('footer.line1')}</span>
            <span className="flex items-end justify-between gap-6">
              <span>{t('footer.line2')}</span>
              <ArrowUpRight className="mb-2 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" size={48} strokeWidth={1.3} />
            </span>
          </a>
        </Reveal>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3">
          <div>
            <p className="footer-label">Email</p>
            <a href="mailto:cucuzzamattia47@gmail.com" className="footer-link">cucuzzamattia47@gmail.com</a>
          </div>
          <div>
            <p className="footer-label">Social</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="https://www.instagram.com/mattiacucuzza_/" target="_blank" rel="noreferrer" className="footer-link">Instagram ↗</a>
              <a href="https://www.linkedin.com/in/mattia-cucuzza/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn ↗</a>
            </div>
          </div>
          <div className="md:text-right">
            <p className="footer-label">{t('footer.local_time')}</p>
            <p className="footer-link">Italy {time && `· ${time}`}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-black/20 pt-5 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Mattia Cucuzza</span>
          <span>{t('footer.signature')}</span>
        </div>
      </div>
    </footer>
  );
};
