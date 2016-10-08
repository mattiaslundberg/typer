import os

DOMAIN = {
    "texts": {
        "schema": {
            "name": {
                "type": "string",
                "required": True,
                "unique": True,
            },
            "fulltext": {
                "type": "string",
                "required": True,
            },
        }
    }
}

RESOURCE_METHODS = ["GET", "POST"]
ITEM_METHODS = ["GET"]

if os.environ.get("PRODUCTION"):
    MONGO_PASSWORD = '{{ mongo_password }}'
