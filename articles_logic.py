import logging
from database import Database

from add_articles_logic import add_tiled_article_page
from add_articles_logic import add_ilustrated_page
from add_articles_logic import add_hero_page
from add_articles_logic import add_bottom_tiled_page
from add_articles_logic import add_big_slider_page
from add_articles_logic import add_article_page
from add_articles_logic import add_about_us_page
from add_articles_logic import add_simple_page
from add_articles_logic import add_gallery_page

from get_articles_logic import get_tiled_article_page
from get_articles_logic import get_ilustrated_page
from get_articles_logic import get_hero_page
from get_articles_logic import get_bottom_tiled_page
from get_articles_logic import get_big_slider_page
from get_articles_logic import get_article_page
from get_articles_logic import get_about_us_page
from get_articles_logic import get_simple_page
from get_articles_logic import get_gallery_page

from update_articles_logic import update_tiled_article_page
from update_articles_logic import update_ilustrated_page
from update_articles_logic import update_hero_page
from update_articles_logic import update_bottom_tiled_page
from update_articles_logic import update_big_slider_page
from update_articles_logic import update_article_page
from update_articles_logic import update_about_us_page
from update_articles_logic import update_simple_page
from update_articles_logic import update_gallery_page

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def get_article(article_id):
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()
    page_type = fetch_page_type(article_id)
    result = check_page_type_and_call_get_function(page_type, cursor, article_id)
    cursor.close()
    connection.close()
    return result


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
        "SELECT id, page_type, short_title, short_description, creation_date, preview_image, user_id FROM ARTICLES_prod")
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
                "user_id": row.user_id,
                "page_type": row.page_type
            }
        )
    cursor.close()
    connection.close()
    return {
        "articles": articles
    }


def update_article(request):
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()
    page_type = request['page_type']
    check_page_type_and_call_update_function(page_type, cursor, request)
    cursor.close()
    connection.close()


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


def check_page_type_and_call_get_function(page_type, cursor, article_id):
    switch = {
        'simple_page': get_simple_page,
        'gallery_page': get_gallery_page,
        'hero_page': get_hero_page,
        'ilustrated_page': get_ilustrated_page,
        'big_slider_page': get_big_slider_page,
        'article_page': get_article_page,
        'tiled_article_page': get_tiled_article_page,
        'bottom_tiled_page': get_bottom_tiled_page,
        'about_us_page': get_about_us_page
    }
    return switch[page_type](cursor, article_id)


def check_page_type_and_call_update_function(page_type, cursor, request_data):
    switch = {
        'simple_page': update_simple_page,
        'gallery_page': update_gallery_page,
        'hero_page': update_hero_page,
        'ilustrated_page': update_ilustrated_page,
        'big_slider_page': update_big_slider_page,
        'article_page': update_article_page,
        'tiled_article_page': update_tiled_article_page,
        'bottom_tiled_page': update_bottom_tiled_page,
        'about_us_page': update_about_us_page
    }
    switch[page_type](cursor, request_data)


def fetch_page_type(article_id):
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()
    cursor.execute(
        "SELECT page_type FROM ARTICLES_PROD WHERE id=?",
        article_id)
    row = cursor.fetchone()
    if row:
        logger.info(f"Fetching article number: {article_id}, page type: {row.page_type}")
        return row.page_type
    else:
        logger.info(f"Error while fetching article number: {article_id}, no article in database")
