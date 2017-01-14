# Typer
[![Build Status](https://travis-ci.org/mattiaslundberg/typer.svg?branch=master)](https://travis-ci.org/mattiaslundberg/typer)

Practice your typing skills with an in-browser app.

# Development

1. Run `yarn install`
2. Run `yarn start`
3. Change directory to server
4. Create python3 virtualenv
5. Run `pip install -r requirements.txt`
6. Run `. ./devenv.sh` (add real oauth settings if needed)
7. Run `python run.py`
8. Navigate to http://localhost:8080 to test and start hacking.

# Production deployment

1. Setup an Ubuntu 16.04 server with SSH access.
2. Install [`ansible`](https://www.ansible.com/) version 2.2 or later.
3. Change `ansible/inventory.cfg` to contain the host you wish to use.
```
[typer]
example.com
```
4. Create `ansible/custom.yml` vault containing all required variables. and `~/.vault_pass.txt` containing the vauld password.
5. Run `cd ansible && ansible-playbook -e @custom.yml playbook.yml` to install everything needed on the server
6. Start typing on real server.

# Attributions
Based on [RoselPadilla/React-ES6-Boilerplate](https://github.com/RoselPadilla/React-ES6-Boilerplate).
