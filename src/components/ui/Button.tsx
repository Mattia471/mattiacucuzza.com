import type {ReactNode} from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'outline';
    href?: string;
    className?: string;
}

export const Button = ({ children, variant = 'primary', href, className = '' }: ButtonProps) => {
    const baseStyles = "px-10 py-5 rounded-full font-black uppercase text-[11px] tracking-widest transition-all inline-flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-emerald-500 text-black hover:bg-cyan-400 shadow-lg shadow-emerald-500/10 hover:scale-105 active:scale-95",
        outline: "text-white border border-white/10 hover:bg-white/5"
    };

    const content = (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
    );

    return href ? <a href={href}>{content}</a> : <button>{content}</button>;
};