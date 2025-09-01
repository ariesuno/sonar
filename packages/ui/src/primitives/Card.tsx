import React from 'react';

export type CardProps = React.PropsWithChildren<{
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}>;

export function Card({ title, children, className, style }: CardProps) {
    return (
        <section
            className={className}
            style={{
                background: '#fff',
                borderRadius: 8,
                border: '1px solid #E6E6E6',
                boxShadow: '0 1px 2px rgba(16, 24, 40, 0.04)',
                padding: 12,
                ...style,
            }}
            aria-label={title}
        >
            {title && (
                <header style={{ marginBottom: 8, fontSize: 14, color: '#4B4B4B', fontWeight: 600 }}>
                    {title}
                </header>
            )}
            <div>{children}</div>
        </section>
    );
}


