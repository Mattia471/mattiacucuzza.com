import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentLang = i18n.language?.split('-')[0] ?? 'en';
  const menuItems = [
    { href: '#work', key: 'work' },
    { href: '#about', key: 'about' },
    { href: '#capabilities', key: 'capabilities' },
    { href: '#pricing', key: 'pricing' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (isMenuOpen) {
      root.classList.add('menu-open');
    } else {
      root.classList.remove('menu-open');
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      root.classList.remove('menu-open');
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell page-shell flex h-[74px] items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3" aria-label="Mattia Cucuzza home">
          <span className="brand-mark">MC</span>
          <div className="hidden leading-none sm:block">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white">Mattia Cucuzza</p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">Creative developer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {menuItems.map((item) => (
            <a key={item.key} href={item.href} className="nav-link">
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="language-switch hidden items-center gap-1 sm:flex">
            {['it', 'en'].map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => i18n.changeLanguage(language)}
                className={currentLang === language ? 'is-active' : ''}
                aria-label={`Switch to ${language.toUpperCase()}`}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>

          <a href="mailto:cucuzzamattia47@gmail.com" className="nav-contact hidden md:inline-flex" data-cursor="MAIL">
            {t('nav.contact')}
            <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="menu-button lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {createPortal(
        <div
          className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
          aria-hidden={!isMenuOpen}
        >
        <div className="page-shell flex h-full flex-col justify-between pb-10 pt-28">
          <div>
            <p className="mono-label text-lime">{t('nav.menu_label')}</p>
            <nav className="mt-10 flex flex-col" aria-label="Mobile navigation">
              {menuItems.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  <span className="font-mono text-[10px] text-white/30">0{index + 1}</span>
                  <span>{t(`nav.${item.key}`)}</span>
                  <ArrowUpRight size={22} />
                </a>
              ))}
            </nav>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="mb-8 flex items-center gap-2 sm:hidden">
              {['it', 'en'].map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => i18n.changeLanguage(language)}
                  className={`mobile-language ${currentLang === language ? 'is-active' : ''}`}
                >
                  {language.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="mailto:cucuzzamattia47@gmail.com" className="button-primary w-full justify-between" onClick={() => setIsMenuOpen(false)}>
              {t('nav.contact')}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>,
        document.body,
      )}
    </header>
  );
};
