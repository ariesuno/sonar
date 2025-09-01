from fastapi import APIRouter, Request
from .utils import decode_scope

router = APIRouter(prefix="", tags=["kpis"])


@router.get("/kpis")
async def get_kpis(request: Request):
    scope = decode_scope(request.state.scope_header)
    base = 1 if scope and scope.get("role") == "CONSULTOR" else 3 if scope and scope.get("role") == "TEAM_LEADER" else 6
    return {"nps": 70 + base, "csat": 82 + base, "auc": 65 + base}


