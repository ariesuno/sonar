'use client';
import { useRoleGuard } from '@/lib/role-guard';
import { Card } from '@sonar/ui';

export default function ManagementDashboard() {
  useRoleGuard(['GESTAO']);
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <Card title="Gestão - KPIs">Conteúdo placeholder</Card>
    </div>
  );
}
