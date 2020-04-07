from flask import Flask
from flask import request
import user_logic as ul

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/login', methods=['POST'])
def login():
    response = ul.validate_login(request.json['username'], request.json['password'])
    if response:
        return response
    else:
        error = "Invalid username/password"
        return error
