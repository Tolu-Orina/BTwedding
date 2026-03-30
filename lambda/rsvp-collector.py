import boto3
import json
import os
import uuid
from datetime import datetime
from decimal import Decimal
from typing import Tuple

ADMIN_TOKEN = os.environ.get("ADMIN_TOKEN", "")


def _cors_headers(allow_methods: str = "GET, POST, OPTIONS"):
    return {
        "Access-Control-Allow-Methods": allow_methods,
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        # "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }


def _get_header(event, name: str) -> str | None:
    headers = event.get("headers") or {}
    # API Gateway / Lambda URL may use different casing
    lower = {k.lower(): v for k, v in headers.items()}
    return lower.get(name.lower())


def _admin_authorized(event) -> Tuple[bool, str]:
    if not ADMIN_TOKEN:
        return False, "Server missing ADMIN_TOKEN configuration"

    auth = _get_header(event, "Authorization") or ""
    token = ""
    if auth.lower().startswith("bearer "):
        token = auth[7:].strip()

    if token != ADMIN_TOKEN:
        return False, "Invalid or missing admin token"

    return True, ""


def _json_default(value):
    """Convert DynamoDB Decimal values to JSON-safe numbers."""
    if isinstance(value, Decimal):
        if value % 1 == 0:
            return int(value)
        return float(value)
    raise TypeError(f"Object of type {value.__class__.__name__} is not JSON serializable")


def lambda_handler(event, context):
    method = (
        event.get("httpMethod")
        or (event.get("requestContext") or {}).get("http", {}).get("method")
        or "GET"
    )

    if method == "OPTIONS":
        return {"statusCode": 200, "headers": _cors_headers(), "body": ""}

    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table("WeddingGuestsRSVP")

    # --- GET: list RSVPs (admin only) ---
    if method == "GET":
        ok, err = _admin_authorized(event)
        if not ok:
            return {
                "statusCode": 401,
                "headers": _cors_headers(),
                "body": json.dumps({"error": err}),
            }

        scan_kwargs = {}
        items = []
        while True:
            resp = table.scan(**scan_kwargs)
            items.extend(resp.get("Items", []))
            lek = resp.get("LastEvaluatedKey")
            if not lek:
                break
            scan_kwargs["ExclusiveStartKey"] = lek

        # Newest first when createdAt exists
        def sort_key(it):
            return it.get("createdAt") or ""

        items.sort(key=sort_key, reverse=True)

        return {
            "statusCode": 200,
            "headers": _cors_headers(),
            "body": json.dumps({"count": len(items), "items": items}, default=_json_default),
        }

    # --- POST: submit RSVP ---
    body = {}
    if event.get("body"):
        try:
            body = json.loads(event.get("body"))
        except Exception:
            pass

    name_value = body.get("name") or "Anonymous"
    attending = body.get("attending")
    guest_count = body.get("guestCount", 1)
    events = body.get("events", {})
    choice = body.get("choice", "NO_CHOICE")

    item_id = str(uuid.uuid4())
    current_time = datetime.utcnow().isoformat()

    table.put_item(
        Item={
            "pk": item_id,
            "id": item_id,
            "name": name_value,
            "attending": attending,
            "guestCount": guest_count,
            "events": events,
            "choice": choice,
            "timestamp": context.aws_request_id,
            "createdAt": current_time,
        }
    )

    return {
        "statusCode": 200,
        "headers": _cors_headers(),
        "body": json.dumps(
            {
                "message": "RSVP submitted successfully!",
                "id_created": item_id,
                "name_stored": name_value,
                "attending": attending,
                "choice": choice,
                "timestamp": current_time,
            }
        ),
    }
