import { ArrowRight } from 'lucide-react';

export const Footer = () => (
    <footer className="py-32 px-6 text-center bg-[#050505]">
        <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[5px] mb-8 italic">Ready to start?</p>
        <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none text-white">
            Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 italic font-light">Vision.</span>
        </h2>
        <a href="mailto:hello@tuonome.it" className="group text-2xl md:text-5xl font-black tracking-tighter text-white hover:text-emerald-400 transition-colors border-b-4 border-emerald-500/20">
            HELLO@TUONOME.IT <ArrowRight className="inline-block group-hover:translate-x-4 transition-transform" />
        </a>
    </footer>
);