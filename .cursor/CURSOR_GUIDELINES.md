# Diretrizes para o Cursor – Monorepo Sonar

## Estrutura do Repositório
```
/apps
  /web         # Next.js 14 + Chakra (console interno + rota Journey Book)
  /api         # NestJS (REST) + Prisma (Postgres RLS)
/packages
  /shared-types # DTOs/Types compartilhados
  /config       # eslint, prettier, tsconfig base, etc.
/infra
  /terraform    # IaC AWS (Fargate, RDS, Redis, etc.)
```

## Regras de Ouro
- **KISS**: implemente o mínimo necessário para funcionar com segurança.
- **Segurança**: RBAC/ABAC via Keycloak + **RLS no Postgres** sempre ativo.
- **Contratos tipados**: Types/DTOs em `/packages/shared-types` para front e back.
- **Nada de lógica de negócio no front** – o front só orquestra UI e chamadas de API.
- **Jobs assíncronos**: use SQS + EventBridge só para integrações críticas.
- **Logs/Auditoria**: aprovar, publicar, devolver, exportar e integrações → sempre logar.

## Front-end (/apps/web)
- **Stack**: Next.js 14, Chakra UI, TanStack Query, Zod, i18next.
- **Auth**: OIDC via Keycloak (Next middleware).
- **Data fetching**: Query hooks com invalidação pós-mutações.
- **UI**: Chakra (tokens); loading skeleton, empty, error por padrão.
- **Journey Book**: área web (não-PDF); cliente só vê status `Publicado`.

## Back-end (/apps/api)
- **Stack**: NestJS + Prisma (Postgres).
- **Camadas**: Controller → Service → Repository (Prisma) → Adapter (integrações).
- **Guards**: RBAC + ABAC (claims do token) em nível de rota/método.
- **RLS**: Interceptor global injeta `tenant_id`, `user_id`, `roles` nas variáveis de sessão do Postgres.
- **Módulos**: `customers`, `reports`, `content`, `agenda`, `integrations`.
- **Integrações**: Outbox + SQS, retries/backoff, idempotência, logs mínimos.

## Testes & Qualidade
- **Unit** (jest), **E2E** (Playwright, Pact), **lint/format** obrigatórios.
- **CI/CD**: build, test, lint como gates.
- **PRs**: incluir checklist de segurança (guards + RLS aplicados).

## Definition of Done (DoD)
- Guard + RLS configurados na rota/tabela.
- Logs/auditoria nas ações sensíveis.
- DTOs atualizados em `shared-types`.
- Documentação curta no PR (endpoints/telas tocados).