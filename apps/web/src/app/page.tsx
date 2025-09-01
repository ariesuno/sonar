import Image from 'next/image';

export default function HomePage() {
    return (
        <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: '#F9F9F9' 
        }}>
            <div style={{ textAlign: 'center', padding: '32px' }}>
                <Image src="/logo.svg" alt="Suno" width={120} height={28} />
                <h1 style={{ 
                    fontSize: '24px', 
                    fontWeight: 600, 
                    color: '#4B4B4B', 
                    marginTop: '24px' 
                }}>
                    Suno
                </h1>
                <p style={{ 
                    color: '#6D6D6D', 
                    marginTop: '16px', 
                    maxWidth: '400px' 
                }}>
                    Sistema interno de gestão
                </p>
            </div>
        </div>
    );
}