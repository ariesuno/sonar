import React from 'react';

export interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    actions?: React.ReactNode;
    className?: string;
}

export function SectionHeader({ title, subtitle, actions, className }: SectionHeaderProps) {
    return (
        <div className={className} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 8 }}>
            <div>
                <h2 style={{ fontSize: 14, margin: 0, color: '#4B4B4B' }}>{title}</h2>
                {subtitle && (
                    <p style={{ fontSize: 12, margin: 0, color: '#737373' }}>{subtitle}</p>
                )}
            </div>
            <div>{actions}</div>
        </div>
    );
}


