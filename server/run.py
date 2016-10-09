import json
import settings
from flask import request, session
from requests import HTTPError
from requests_oauthlib import OAuth2Session
from eve import Eve
from flask_login import LoginManager


app = Eve()

login_manager = LoginManager(app)
login_manager.login_view = "login"
login_manager.session_protection = "strong"

app.secret_key = settings.APP_SECRET_KEY


def get_google_auth(state=None, token=None):
    if token:
        return OAuth2Session(settings.OAUTH_CLIENT_ID, token=token)
    if state:
        return OAuth2Session(
            settings.OAUTH_CLIENT_ID,
            state=state,
            redirect_uri=settings.OAUTH_REDIRECT_URI
        )

    return OAuth2Session(
        settings.OAUTH_CLIENT_ID,
        redirect_uri=settings.OAUTH_REDIRECT_URI,
        scope=settings.OAUTH_SCOPE
    )


@app.route('/login')
def login():
    google = get_google_auth()
    auth_url, state = google.authorization_url(
        settings.OAUTH_AUTH_URI,
        access_type='online'
    )
    session['oauth_state'] = state
    return json.dumps({
        "auth_url": auth_url,
    })


@app.route('/oauth2callback')
def callback():
    if 'error' in request.args:
        if request.args.get('error') == 'access_denied':
            return json.dumps({
                "error": "Access denied",
            })
        return json.dumps({
            "error": "Other error",
        })
    if 'code' not in request.args and 'state' not in request.args:
        return json.dumps({})
    else:
        google = get_google_auth(state=session['oauth_state'])
        try:
            token = google.fetch_token(
                settings.OAUTH_TOKEN_URI,
                client_secret=settings.OAUTH_CLIENT_SECRET,
                authorization_response=request.url)
        except HTTPError:
            return json.dumps({"error": "Failed to get google login."})
        google = get_google_auth(token=token)
        resp = google.get(settings.OAUTH_USER_INFO)
        if resp.status_code == 200:
            user_data = resp.json()
            # email = user_data['email']
            print(user_data)
            return json.dumps({
                "status": "ok",
                "user_data": user_data,
            })
        return json.dumps({
            "error": "Failed to get user data",
        })

if __name__ == '__main__':
    app.run()
