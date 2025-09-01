from fastapi import APIRouter

router = APIRouter(prefix="", tags=["alerts"])


@router.get("/alerts")
async def get_alerts():
    return [
        {"id": "a-1", "message": "Cliente 3 com risco elevado"},
        {"id": "a-2", "message": "Renovação atrasada para Cliente 5"},
    ]


