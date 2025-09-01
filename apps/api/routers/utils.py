import base64
import json
import os
from pathlib import Path


def decode_scope(header: str | None):
    if not header:
        return None
    try:
        decoded = base64.b64decode(header).decode("utf-8")
        return json.loads(decoded)
    except Exception:
        return None


def load_json_data(filename: str):
    """Load data from storage JSON files"""
    storage_path = Path(__file__).parent.parent / "storage" / filename
    try:
        with open(storage_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return []


# Load data from JSON files
users = load_json_data("users.json")
clients = load_json_data("clients.json")


