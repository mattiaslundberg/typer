import os
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
import json
import settings
from flask import request, session, redirect
from requests import HTTPError
from requests_oauthlib import OAuth2Session
from eve import Eve
from flask_login import LoginManager, login_user, current_user

app = Eve()

login_manager = LoginManager(app)
login_manager.login_view = "oauth"
login_manager.session_protection = "strong"

app.secret_key = settings.APP_SECRET_KEY


class User:
    is_active = True

    def __init__(self, user_data):
        self.data = user_data

    def get_id(self):
        return self.data['user_id']

    @property
    def is_authenticated(self):
        return bool(self.data.get('user_id'))

    @property
    def client_data(self):
        return {
            "name": self.data["name"],
            "email": self.data["email"],
        }


@login_manager.user_loader
def get_user_from_id(user_id):
    users = app.data.driver.db['users']
    user_data = users.find_one({'user_id': user_id})
    return User(user_data)


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


@app.route('/oauth')
def oauth():
    if current_user and current_user.is_authenticated:
        return json.dumps(current_user.client_data)
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
            return "Access denied"
        return "Other error"
    if 'code' not in request.args and 'state' not in request.args:
        return "Not possible to login."
    else:
        google = get_google_auth(state=session['oauth_state'])
        try:
            token = google.fetch_token(
                settings.OAUTH_TOKEN_URI,
                client_secret=settings.OAUTH_CLIENT_SECRET,
                authorization_response=request.url)
        except HTTPError:
            return "Failed to get google login."
        google = get_google_auth(token=token)
        resp = google.get(settings.OAUTH_USER_INFO)

        if resp.status_code == 200:
            user_data = resp.json()
            normalized_user_data = {
                "user_id": user_data['id'],
                "name": user_data['name'],
                "email": user_data['email'],
                "avatar": user_data['picture'],
            }

            users = app.data.driver.db['users']
            users.insert(normalized_user_data)
            user = get_user_from_id(user_data['id'])
            login_user(user)
            return redirect("/")

        return "Failed to get user data"

if __name__ == '__main__':
    app.run()
