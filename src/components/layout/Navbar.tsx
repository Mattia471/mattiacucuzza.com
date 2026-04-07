import { Terminal } from 'lucide-react';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-black/10 border border-white/5 px-8 py-4 rounded-full">
                <div className="flex items-center gap-2">
                    <Terminal size={18} className="text-emerald-500" />
                    <span className="text-white font-black uppercase tracking-tighter text-sm italic">YOUR_LAB</span>
                </div>

                <div className="hidden md:flex gap-8">
                    {['About', 'Work', 'Pricing'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-zinc-400 text-[10px] font-bold uppercase tracking-[3px] hover:text-emerald-400 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <a
                    href="mailto:hello@tuolab.it"
                    className="text-emerald-400 text-[10px] font-black uppercase tracking-[2px] border-b border-emerald-500/30 hover:border-emerald-500 transition-all"
                >
                    Contact Me
                </a>
            </div>
        </nav>
    );
};