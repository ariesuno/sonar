# Sonar Monorepo (SIM Mode primeiro)

Monorepo com pnpm, contendo:
- `apps/web`: Next.js 14 App Router, React Query, Axios, MSW (SIM)
- `apps/api`: FastAPI mínima com endpoints compatíveis
- `packages/ui`: componentes placeholders (UI compacta)
- `packages/config`: tsconfig/eslint/prettier compartilhados

## Requisitos
- Node 20+
- pnpm 9+
- Python 3.11+ (para API)

## Variáveis de ambiente
Crie um `.env` a partir de `.env.example`.

```
NEXT_PUBLIC_SIM_MODE=true
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=Sonar
```

## Instalação
```
pnpm install
```

## Desenvolvimento
- SIM mode (MSW ativo por padrão):
```
pnpm dev:all
```
Acessos:
- Web: http://localhost:3000
- API (opcional): http://localhost:8000

Se preferir API real:
```
pnpm dev:api
```
E em outro terminal:
```
pnpm dev:web
```

## Scripts
- `pnpm dev:all` — sobe web (3000) e API (8000)
- `pnpm dev:web` — somente web
- `pnpm dev:api` — somente API
- `pnpm build:web` — build de produção do web
- `pnpm typecheck` — verificação de tipos
- `pnpm lint` — lint do web
- `pnpm test` — testes do web

## Estrutura (resumo)
```
apps/
  web/
    src/app/(shell)/dashboard/*
    src/mocks/*
  api/
    main.py
    routers/*
packages/
  ui/
  config/
```

## Próximos passos (Fase 1.2)
- Tema Chakra com tokens e componentes finalizados
- Layout e navegação aprimorados
- Ampliação dos testes e dados mock
