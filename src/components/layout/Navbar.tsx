import {useEffect, useState} from 'react';
import {ChevronRight, Menu, Terminal, X} from 'lucide-react';
import {useTranslation} from 'react-i18next';

export const Navbar = () => {
    const { i18n, t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'en';
    const menuItems = ['About', 'Work', 'Pricing'];

    // Blocca lo scroll quando il menu è aperto (Proprio come in NGA)
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-6 md:py-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-black/10 border border-white/5 px-6 md:px-8 py-4 rounded-full relative z-[110]">

                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Terminal size={18} className="text-emerald-500" />
                    <span className="text-white font-black uppercase tracking-tighter text-sm italic">
                        MATTIA_CUCUZZA
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-zinc-400 text-[10px] font-bold uppercase tracking-[3px] hover:text-emerald-400 transition-colors"
                        >
                            {t(`nav.${item.toLowerCase()}`)}
                        </a>
                    ))}
                </div>

                {/* Right Side: Lingua + Toggle */}
                <div className="flex items-center gap-4 md:gap-8">
                    {/* Selettore Lingua SEMPRE visibile */}
                    <div className="flex items-center gap-3 border-r border-white/10 pr-4 md:pr-8">
                        {['it', 'en'].map((lng) => (
                            <button
                                key={lng}
                                onClick={() => changeLanguage(lng)}
                                className={`text-[10px] font-black tracking-widest transition-all ${currentLang === lng ? 'text-emerald-500' : 'text-zinc-600'}`}
                            >
                                {lng.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2 bg-white/5 rounded-xl border border-white/10 active:scale-90 transition-all"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <a href="mailto:cucuzzamattia47@gmail.com" className="hidden md:block text-emerald-400 text-[10px] font-black uppercase tracking-[2px] border-b border-emerald-500/30">
                        {t('nav.contact')}
                    </a>
                </div>
            </div>

            {/* --- FULLSCREEN MOBILE MENU (STYLE NGA) --- */}
            <div className={`fixed inset-0 bg-[#050505] z-[105] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

                {/* Decorative Glows */}
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-emerald-500/10 blur-[120px]" />

                <div className="relative h-full flex flex-col justify-center px-10">
                    <p className="text-[10px] font-black uppercase tracking-[6px] text-emerald-500 mb-12 opacity-60 italic">
                        {t('nav.menu_label') || 'Navigation'}
                    </p>

                    <nav className="flex flex-col gap-8">
                        {menuItems.map((item, i) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMenuOpen(false)}
                                className={`group flex items-center justify-between transition-all duration-700 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="flex items-center gap-6">
                                    <span className="text-emerald-500/30 text-sm font-black italic">0{i + 1}</span>
                                    <span className="text-5xl font-black uppercase tracking-tighter text-white group-hover:text-emerald-400 transition-colors">
                                        {t(`nav.${item.toLowerCase()}`)}
                                    </span>
                                </div>
                                <ChevronRight className="text-emerald-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" size={32} />
                            </a>
                        ))}
                    </nav>

                    <div className={`mt-20 transition-all duration-700 delay-400 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <a
                            href="mailto:cucuzzamattia47@gmail.com"
                            className="block w-full bg-white text-black py-6 rounded-2xl text-center text-xs font-black uppercase tracking-[4px]"
                        >
                            {t('nav.contact')}
                        </a>

                        <div className="flex justify-center gap-8 mt-12">
                            <a href="https://instagram.com/mattiacucuzza_" target="_blank" rel="noreferrer" className="text-white/40 hover:text-emerald-400 transition-colors">
                                <img src="/instagram.png" alt="Instagram" className="w-15 w-15" />
                            </a>
                            <a href="https://www.linkedin.com/in/mattia-cucuzza/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-emerald-400 transition-colors">
                                <img src="/linkedin.png" alt="LinkedIn" className="w-15 w-15" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};