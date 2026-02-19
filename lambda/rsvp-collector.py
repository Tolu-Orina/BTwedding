import boto3
import json
import uuid
from datetime import datetime

def lambda_handler(event, context):
    # # Enable CORS for all origins
    headers = {
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
    }
    
    # Handle preflight OPTIONS request
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': ''
        }
    
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('WeddingGuestsRSVP')
    
    # 1. Grab the full request body
    body = {}
    if event.get('body'):
        try:
            body = json.loads(event.get('body'))
        except:
            pass
    
    # 2. Get name from request body (not query params)
    name_value = body.get('name') or 'Anonymous'
    
    # 3. Get other fields from body
    attending = body.get('attending')
    guest_count = body.get('guestCount', 1)
    events = body.get('events', {})
    choice = body.get('choice', 'NO_CHOICE')

    # 4. Generate a random unique ID for Partition Key
    item_id = str(uuid.uuid4())

    # Generate a proper ISO timestamp
    current_time = datetime.utcnow().isoformat()

    # 5. Store in DynamoDB
    table.put_item(
        Item={
            'pk': item_id,
            'id': item_id,
            'name': name_value,
            'attending': attending,
            'guestCount': guest_count,
            'events': events,
            'choice': choice,
            'timestamp': context.aws_request_id,
            'createdAt': current_time  # Use the generated string here
        }
    )

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({
            'message': 'RSVP submitted successfully!',
            'id_created': item_id,
            'name_stored': name_value,
            'attending': attending,
            'choice': choice,
            'timestamp': current_time # Also update the return body
        })
    }

    