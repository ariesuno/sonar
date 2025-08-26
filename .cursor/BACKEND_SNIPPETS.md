# Snippets Back-end (NestJS)

## Guard ABAC (exemplo)
```ts
@Injectable()
export class AbacGuard implements CanActivate {
  canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user; // token OIDC já validado
    if (!user?.tenant_id) return false;
    return true;
  }
}
```

## Interceptor para RLS (Nest + Postgres)
```ts
@Injectable()
export class RlsInterceptor implements NestInterceptor {
  constructor(private readonly prisma: PrismaService) {}
  async intercept(ctx: ExecutionContext, next: CallHandler) {
    const req = ctx.switchToHttp().getRequest();
    const { sub, tenant_id, roles } = req.user ?? {};
    await this.prisma.$executeRawUnsafe(
      `select set_config('app.user_id', $1, true)`,
      String(sub || '')
    );
    await this.prisma.$executeRawUnsafe(
      `select set_config('app.tenant_id', $1, true)`,
      String(tenant_id || '')
    );
    await this.prisma.$executeRawUnsafe(
      `select set_config('app.roles', $1, true)`,
      JSON.stringify(roles || [])
    );
    return next.handle();
  }
}
```