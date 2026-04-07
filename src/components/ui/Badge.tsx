import {type ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    icon?: ReactNode;
}

export const Badge = ({ children, icon }: BadgeProps) => (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8">
        {icon && <div className="text-emerald-400">{icon}</div>}
        <span className="text-[9px] font-black uppercase tracking-[4px] text-emerald-400">
      {children}
    </span>
    </div>
);