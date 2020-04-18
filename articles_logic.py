from database import Database
from datetime import date
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
    cursor.close()
    connection.close()


def add_article(request):
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()
    page_content = request['content']
    user_id = request['user_id']
    title = request['title']

    insert_article_to_articles_table(cursor, title, user_id)
    article_id = fetch_max_id_from_articles_table(cursor)
    add_simple_page(cursor, page_content, article_id)

    cursor.close()
    connection.close()
    logger.info(f"Article id:{article_id} added")


def insert_article_to_articles_table(cursor, title, user_id):
    creation_date = date.today()
    cursor.execute("INSERT INTO ARTICLES (title, creation_date, user_id) VALUES (?, ?, ?)", title, creation_date, user_id)
    cursor.commit()
    logger.info(f"Article: title: {title}, creation_date: {creation_date}, user_id: {user_id} added successfully to database.")


def fetch_max_id_from_articles_table(cursor):
    cursor.execute("SELECT MAX(ID) as MAX_ID FROM ARTICLES")
    article_id = cursor.fetchone()
    article_id = article_id[0]
    return article_id


def add_simple_page(cursor, content, article_id):
    image = content['image']
    title = content['title']
    paragraph = content['paragraph']
    params = (article_id, image, title, paragraph)
    cursor.execute("INSERT INTO ARTICLE_SIMPLE_PAGE VALUES (?, ?, ?, ?)", params)
    cursor.commit()
    logger.info(f"Article: id:{article_id}, added successfully to database.")


def add_gallery_page(cursor, content, article_id):
    hero_image = content['hero_image']
    hero_image_title = content['hero_image_title']
    title = content['title']
    paragraph = content['paragraph']
    image1 = content['image1']
    image2 = content['image2']
    image3 = content['image3']
    image4 = content['image4']
    image5 = content['image5']
    image6 = content['image6']
    image7 = content['image7']
    image8 = content['image8']
    image9 = content['image9']
    params = (article_id, hero_image, hero_image_title,
              title, paragraph,
              image1, image2, image3,
              image4, image5, image6,
              image7, image8, image9)
    cursor.execute("INSERT INTO ARTICLE_GALLERY_PAGE VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", params)
    #TODO: zrobic tabele w bazie danych
    cursor.commit()
    logger.info(f"Article: id:{article_id}, added successfully to database.")


def add_hero_page(cursor, content, article_id):
    hero_image = content['hero_image']
    title = content['title']
    column1 = content['column1']
    column2 = content['column2']
    column3 = content['column3']
    icon1 = content['icon1']
    icon2 = content['icon2']
    icon3 = content['icon3']
    params = (article_id, hero_image, title,
              column1, column2,
              column3, icon1,
              icon2, icon3)
    cursor.execute("INSERT INTO ARTICLE_HERO_PAGE VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", params)
    # TODO: zrobic tabele w bazie danych
    cursor.commit()
    logger.info(f"Article: id:{article_id}, added successfully to database.")


def add_ilustrated_page(cursor, content, article_id):
    image = content['image']
    title = content['title']
    paragraph1 = content['paragraph1']
    paragraph2 = content['paragraph2']
    quote = content['quote']
    paragraph3 = content['paragraph3']
    params = (article_id, image, title,
              paragraph1, paragraph2,
              quote, paragraph3)
    cursor.execute("INSERT INTO ARTICLE_ILUSTRATED_PAGE VALUES (?, ?, ?, ?, ?, ?, ?)", params)
    # TODO: zrobic tabele w bazie danych
    cursor.commit()
    logger.info(f"Article: id:{article_id}, added successfully to database.")


def add_article_page(cursor, content, article_id):
    image1 = content['image1']
    image2 = content['image2']
    image3 = content['image3']
    paragraph1 = content['paragraph1']
    paragraph2 = content['paragraph2']
    paragraph3 = content['paragraph3']
    paragraph4 = content['paragraph4']
    title = content['title']
    params = (article_id, image1, title,
              paragraph1, paragraph2, image2,
              paragraph3, image3, paragraph4)
    cursor.execute("INSERT INTO ARTICLE_ARTICLE_PAGE VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", params)
    # TODO: zrobic tabele w bazie danych
    cursor.commit()
    logger.info(f"Article: id:{article_id}, added successfully to database.")