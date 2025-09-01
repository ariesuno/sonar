from fastapi import APIRouter

router = APIRouter(prefix="", tags=["renewals"])


@router.get("/renewals")
async def get_renewals():
    return [
        {"id": "r-1", "clientId": "c-1", "dueInDays": 15},
        {"id": "r-2", "clientId": "c-2", "dueInDays": 35},
    ]


