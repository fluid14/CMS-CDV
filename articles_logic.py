from database import Database
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def get_user_articles(user_id):
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()
    cursor.execute("SELECT ID, TITLE, CREATION_DATE FROM ARTICLES WHERE USER_ID=?", user_id)
    rows = cursor.fetchall()
    articles = []
    for row in rows:
        articles.append(
            {
                "id": row[0],
                "title": row[1],
                "date": row[2]
            }
        )
    cursor.close()
    connection.close()
    return {
        "articles": articles
    }


def get_all_articles():
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM ARTICLES")
    rows = cursor.fetchall()
    articles = []
    for row in rows:
        articles.append(
            {
                "id": row[0],
                "title": row[1],
                "date": row[2]
            }
        )
    cursor.close()
    connection.close()
    return {
        "articles": articles
    }


def delete_article(article_id):
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()
    cursor.execute("DELETE FROM ARTICLES WHERE ID=?", article_id)
    cursor.commit()
    logger.info(f"Article id:{article_id} deleted")

