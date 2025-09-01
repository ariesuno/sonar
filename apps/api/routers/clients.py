from fastapi import APIRouter, Request
from .utils import decode_scope, users, clients

router = APIRouter(prefix="", tags=["clients"])


@router.get("/clients")
async def get_clients(request: Request):
    scope = decode_scope(request.state.scope_header)
    if scope and scope.get("role") == "CONSULTOR":
        return [c for c in clients if c["ownerId"] == scope.get("userId")]
    if scope and scope.get("role") == "TEAM_LEADER":
        team = scope.get("teamId")
        team_owners = [u["id"] for u in users if u.get("role") == "CONSULTOR" and u.get("teamId") == team]
        return [c for c in clients if c["ownerId"] in team_owners]
    return clients


