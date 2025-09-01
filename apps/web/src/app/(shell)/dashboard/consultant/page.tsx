'use client';
import { useRoleGuard } from '@/lib/role-guard';
import { Card } from '@sonar/ui';

export default function ConsultantDashboard() {
    useRoleGuard(['CONSULTOR']);
    return (
        <div style={{ display: 'grid', gap: 8 }}>
            <Card title="Consultor - KPIs">Conteúdo placeholder</Card>
        </div>
    );
}


