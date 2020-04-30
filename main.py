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


@app.route('/all-articles/<user_id>', methods=['GET'])
def all_user_articles(user_id):
    return al.get_user_articles(user_id)


@app.route('/all-articles', methods=['GET'])
def all_articles():
    return al.get_all_articles()


@app.route('/article', methods=['DELETE'])
def delete_article():
    al.delete_article(request.args.get('id'))
    return '', 200


@app.route('/add-article', methods=['POST'])
def add_article():
    al.add_article(request.json)
    return '', 200


@app.route('/article', methods=['GET'])
def get_article():
    return al.get_article(request.json["id"], request.json["page_type"])
