import type { ReactNode } from 'react';

export default function ShellLayout({ children }: { children: ReactNode }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', minHeight: '100vh' }}>
            <aside style={{ borderRight: '1px solid #E6E6E6', background: '#FFFFFF' }}>
                <div style={{ padding: 12, fontWeight: 700, color: '#4B4B4B' }}>(Suno) Principal</div>
                <nav style={{ padding: 8, display: 'grid', gap: 4 }}>
                    <a href="/dashboard" style={{ fontSize: 14, color: '#4B4B4B' }}>Dashboard</a>
                    <a href="#" style={{ fontSize: 14, color: '#9E9E9E' }}>Clientes</a>
                    <a href="#" style={{ fontSize: 14, color: '#9E9E9E' }}>Renovações</a>
                </nav>
            </aside>
            <main>
                <header style={{ padding: 12, borderBottom: '1px solid #E6E6E6', background: '#FFFFFF' }}>
                    <div style={{ fontSize: 12, color: '#737373' }}>Home / Dashboard</div>
                </header>
                <div style={{ padding: 12 }}>{children}</div>
            </main>
        </div>
    );
}


