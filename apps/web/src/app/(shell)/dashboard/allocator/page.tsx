'use client';
import { useRoleGuard } from '@/lib/role-guard';
import { Card } from '@sonar/ui';

export default function AllocatorDashboard() {
  useRoleGuard(['ALOCADOR']);
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <Card title="Alocador - KPIs">Conteúdo placeholder</Card>
    </div>
  );
}
