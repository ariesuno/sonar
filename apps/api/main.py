from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from routers import me, kpis, clients, renewals, alerts

app = FastAPI(title="Sonar API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.middleware("http")
async def read_scope_header(request: Request, call_next):
    # x-scope is base64 json; here we just forward it for routers if needed
    request.state.scope_header = request.headers.get("x-scope")
    response = await call_next(request)
    return response


app.include_router(me.router)
app.include_router(kpis.router)
app.include_router(clients.router)
app.include_router(renewals.router)
app.include_router(alerts.router)


