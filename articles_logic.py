from database import Database
from datetime import date
from add_articles_logic import add_tiled_article_page
from add_articles_logic import add_ilustrated_page
from add_articles_logic import add_hero_page
from add_articles_logic import add_bottom_tiled_page
from add_articles_logic import add_big_slider_page
from add_articles_logic import add_article_page
from add_articles_logic import add_about_us_page
from add_articles_logic import add_simple_page
from add_articles_logic import add_gallery_page
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def get_user_articles(user_id):
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()
    cursor.execute("SELECT id, short_title, creation_date, page_type FROM ARTICLES_PROD WHERE USER_ID=?", user_id)
    rows = cursor.fetchall()
    articles = []
    for row in rows:
        articles.append(
            {
                "id": row.id,
                "title": row.short_title,
                "date": row.creation_date,
                "page_type": row.page_type
            }
        )
    cursor.close()
    connection.close()
    return {
        "articles": articles
    }


def get_all_articles():
    """
    SELECT ARTICLES DATA TO DISPLAY SHORT FORMS OF THEM ON THE BLOG PAGE
    :return:
    """
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()
    cursor.execute(
        "SELECT id, short_title, short_description, creation_date, preview_image, user_id FROM ARTICLES_prod")
    rows = cursor.fetchall()
    articles = []
    for row in rows:
        articles.append(
            {
                "id": row.id,
                "title": row.short_title,
                "description": row.short_description,
                "date": row.creation_date,
                "preview_image": row.preview_image,
                "user_id": row.user_id
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
    cursor.execute("DELETE FROM ARTICLES_PROD WHERE ID=?", article_id)
    cursor.commit()
    logger.info(f"Article id:{article_id} deleted")
    cursor.close()
    connection.close()


def add_article(request):
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()
    page_type = request['page_type']
    check_page_type_and_call_add_function(page_type, cursor, request)
    cursor.close()
    connection.close()


def check_page_type_and_call_add_function(page_type, cursor, request_data):
    switch = {
        'simple_page': add_simple_page,
        'gallery_page': add_gallery_page,
        'hero_page': add_hero_page,
        'ilustrated_page': add_ilustrated_page,
        'big_slider_page': add_big_slider_page,
        'article_page': add_article_page,
        'tiled_article_page': add_tiled_article_page,
        'bottom_tiled_page': add_bottom_tiled_page,
        'about_us_page': add_about_us_page
    }
    switch[page_type](cursor, request_data)


def fetch_max_id_from_articles_table(cursor):
    cursor.execute("SELECT MAX(ID) as MAX_ID FROM ARTICLES")
    article_id = cursor.fetchone()
    article_id = article_id[0]
    return article_id


