'use client';
import { useRoleGuard } from '@/lib/role-guard';
import { Card } from '@sonar/ui';

export default function TeamLeaderDashboard() {
    useRoleGuard(['TEAM_LEADER']);
    return (
        <div style={{ display: 'grid', gap: 8 }}>
            <Card title="Team Leader - KPIs">Conteúdo placeholder</Card>
        </div>
    );
}


