from flask import Flask
from flask import request
import user_logic as ul
import articles_logic as al

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
        return '', 403


@app.route('/all-articles', methods=['GET'])
def all_articles():
    return al.get_all_articles(request.args.get('id'))
