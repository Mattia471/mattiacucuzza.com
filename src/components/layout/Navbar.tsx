import {Terminal} from 'lucide-react';
import {useTranslation} from 'react-i18next';

export const Navbar = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    // Rilevamento lingua corrente (gestisce 'it', 'it-IT', 'en', 'en-US')
    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'en';

    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-black/10 border border-white/5 px-8 py-4 rounded-full">

                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Terminal size={18} className="text-emerald-500" />
                    <span className="text-white font-black uppercase tracking-tighter text-sm italic">
                        MATTIA_CUCUZZA
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {['About', 'Work', 'Pricing'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-zinc-400 text-[10px] font-bold uppercase tracking-[3px] hover:text-emerald-400 transition-colors"
                        >
                            {t(`nav.${item.toLowerCase()}`)}
                        </a>
                    ))}
                </div>

                {/* Right Side: Language + CTA */}
                <div className="flex items-center gap-6">
                    {/* Language Switcher con Bandiere */}
                    <div className="flex items-center gap-3 border-r border-white/10 pr-6">
                        <div className="flex gap-4">
                            <button
                                onClick={() => changeLanguage('it')}
                                className={`flex items-center gap-2 text-[10px] font-black tracking-widest transition-all ${currentLang === 'it' ? 'text-emerald-500 opacity-100' : 'text-zinc-600 opacity-50 hover:opacity-80'}`}
                            >
                                <span className="text-base">🇮🇹</span> IT
                            </button>

                            <button
                                onClick={() => changeLanguage('en')}
                                className={`flex items-center gap-2 text-[10px] font-black tracking-widest transition-all ${currentLang === 'en' ? 'text-emerald-500 opacity-100' : 'text-zinc-600 opacity-50 hover:opacity-80'}`}
                            >
                                <span className="text-base">🇬🇧</span> EN
                            </button>
                        </div>
                    </div>

                    <a
                        href="mailto:cucuzzamattia47@gmail.com"
                        className="text-emerald-400 text-[10px] font-black uppercase tracking-[2px] border-b border-emerald-500/30 hover:border-emerald-500 transition-all whitespace-nowrap"
                    >
                        {t('nav.contact')}
                    </a>
                </div>
            </div>
        </nav>
    );
};