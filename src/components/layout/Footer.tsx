import {ArrowRight} from 'lucide-react';
import {useTranslation} from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="py-32 px-6 text-center bg-[#050505]">
            <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[5px] mb-8 italic">
                {t('footer.ready')}
            </p>

            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none text-white">
                {t('footer.title')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 italic font-light">
                    {t('footer.vision')}
                </span>
            </h2>

            <a
                href="mailto:cucuzzamattia47@gmail.com"
                className="group text-2xl md:text-5xl font-black tracking-tighter text-white hover:text-emerald-400 transition-colors border-b-4 border-emerald-500/20"
            >
                {t('footer.cta')}{' '}
                <ArrowRight className="inline-block group-hover:translate-x-4 transition-transform" />
            </a>
        </footer>
    );
};