'use client';
import { useRoleGuard } from '@/lib/role-guard';
import { Card } from '@sonar/ui';

export default function DailyBankerDashboard() {
    useRoleGuard(['DAILY_BANKER']);
    return (
        <div style={{ display: 'grid', gap: 8 }}>
            <Card title="Daily Banker - KPIs">Conteúdo placeholder</Card>
        </div>
    );
}
