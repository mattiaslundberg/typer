import os

DOMAIN = {
    "texts": {
        "public_methods": ["GET"],
        "public_item_methods": ["GET"],
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
PUBLIC_METHODS = ["GET"]
PUBLIC_ITEM_METHODS = ["GET"]

DEBUG = os.environ.get("EVE_DEBUG", False)

if DEBUG:
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

APP_SECRET_KEY = os.environ["APP_SECRET_KEY"]
OAUTH_CLIENT_ID = (os.environ["OAUTH_CLIENT_ID"])
OAUTH_CLIENT_SECRET = os.environ["OAUTH_CLIENT_SECRET"]
OAUTH_REDIRECT_URI = os.environ["OAUTH_REDIRECT_URI"]
OAUTH_AUTH_URI = "https://accounts.google.com/o/oauth2/auth"
OAUTH_TOKEN_URI = "https://accounts.google.com/o/oauth2/token"
OAUTH_USER_INFO = "https://www.googleapis.com/userinfo/v2/me"
OAUTH_SCOPE = "email"
