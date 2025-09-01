import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
    title: 'Sonar',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-BR">
            <body style={{ background: '#F9F9F9', color: '#4B4B4B', fontSize: 14, fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}


