from fastapi import APIRouter, Request
from .utils import decode_scope, users

router = APIRouter(prefix="", tags=["me"])


@router.get("/me")
async def get_me(request: Request):
    scope = decode_scope(request.state.scope_header)
    if scope and scope.get("userId"):
        for u in users:
            if u["id"] == scope["userId"]:
                return u
    return users[0]


