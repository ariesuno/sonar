# Segurança e Acesso – RBAC + ABAC + RLS

## Keycloak
- **Roles**: gestor, team_leader, consultant, allocator, daily_banker, onboarding_coordinator, onboarding_analyst, customer.
- **Claims**: `tenant_id`, `team_id`, `consultant_id`, `phase` (Onboarding I/II, Maturação, Renovação).

## API (NestJS)
- Guards aplicam RBAC/ABAC antes de executar handlers.
- Interceptor injeta `SET app.tenant_id`, `SET app.user_id`, `SET app.roles` no Postgres.

## PostgreSQL RLS (exemplo)
```sql
-- Por tenant
create policy p_tenant on customers
  for select using (tenant_id = current_setting('app.tenant_id')::uuid);

-- Vínculo consultor → cliente
create policy p_consultant_scope on customers
  for select using (
    exists (
      select 1 from consultant_customers cc
      where cc.customer_id = customers.id
        and cc.consultant_id = current_setting('app.user_id')::uuid
    )
  );
```
## Proteções Adicionais
- WAF, Shield, TLS 1.2+, CSP, rate-limit.
- Segredos em AWS Secrets Manager, chaves em KMS.