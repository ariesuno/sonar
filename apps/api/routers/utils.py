import base64
import json


def decode_scope(header: str | None):
    if not header:
        return None
    try:
        decoded = base64.b64decode(header).decode("utf-8")
        return json.loads(decoded)
    except Exception:
        return None


users = [
    {"id": "u-mgmt", "name": "Gestora", "role": "GESTAO"},
    {"id": "u-tl-1", "name": "TL Norte", "role": "TEAM_LEADER", "teamId": "t-norte"},
    {"id": "u-tl-2", "name": "TL Sul", "role": "TEAM_LEADER", "teamId": "t-sul"},
    *[{"id": f"u-cons-{i+1}", "name": f"Consultor {i+1}", "role": "CONSULTOR", "teamId": "t-norte" if i < 3 else "t-sul"} for i in range(6)],
]


clients = [
    {"id": f"c-{i+1}", "name": f"Cliente {i+1}", "ownerId": f"u-cons-{(i % 6) + 1}"}
    for i in range(30)
]


