from flask import Flask
from flask import request
import user_logic as ul

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/login', methods=['POST'])
def login():
    result = ul.validate_login(request.username, request.password)
    if result:
        return result