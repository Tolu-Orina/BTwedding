# RSVP Lambda (`rsvp-collector.py`)

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ADMIN_TOKEN` | **Yes** (for GET) | Secret string. Admin sends it as `Authorization: Bearer <ADMIN_TOKEN>`. |

## IAM

The Lambda execution role needs `dynamodb:PutItem` and `dynamodb:Scan` on table `WeddingGuestsRSVP`.

## API

- **POST** `/` — Submit RSVP (unchanged body).
- **GET** `/` — List all RSVPs. Requires `Authorization: Bearer <ADMIN_TOKEN>`.

If you use a Function URL, set CORS allowed headers to include `Authorization` and `Content-Type` (no email header needed).

## Deploy

After changing code, redeploy this function and ensure env vars are set in the Lambda console (or IaC).
