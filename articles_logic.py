from database import Database
from datetime import date
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


def add_simple_page(cursor, request_data):
    content = request_data["content"]
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]
    image = content["image"]
    paragraph = content["paragraph"]
    params = (user_id, page_type, short_title, short_description, creation_date, preview_image, image, paragraph)
    cursor.execute(
        "INSERT INTO ARTICLES_PROD (user_id, page_type, short_title, short_description, creation_date, preview_image, image1, paragraph1) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        params)
    cursor.commit()
    logger.info(f"Article: {request_data['page_type']} added successfully to database.")


def add_gallery_page(cursor, request_data):
    content = request_data["content"]
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]

    hero_img = content['hero_img']
    header = content["header"]
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
    params = (user_id, page_type, short_title,
              short_description, creation_date, preview_image,
              hero_img, header, paragraph,
              image1, image2, image3,
              image4, image5, image6,
              image7, image8, image9)
    cursor.execute("""
        INSERT INTO ARTICLES_PROD 
        (user_id, page_type, short_title,
        short_description, creation_date, preview_image,
        hero_img, header, paragraph1,
        image1, image2, image3, 
        image4, image5, image6, 
        image7, image8, image9) 
        VALUES (?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?)""", params)
    cursor.commit()
    logger.info(f"Article: {request_data['page_type']} added successfully to database.")


def add_hero_page(cursor, request_data):
    content = request_data["content"]
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]

    hero_img = content['hero_img']
    paragraph1 = content['paragraph1']
    paragraph2 = content['paragraph2']
    paragraph3 = content['paragraph3']
    image1 = content['image1']
    image2 = content['image2']
    image3 = content['image3']
    params = (user_id, page_type, short_title,
              short_description, creation_date, preview_image,
              hero_img, paragraph1, paragraph2,
              paragraph3, image1, image2, image3)
    cursor.execute("""
        INSERT INTO ARTICLES_PROD 
        (user_id, page_type, short_title,
        short_description, creation_date, preview_image,
        hero_img, paragraph1, paragraph2,
        paragraph3, image1, image2, image3) 
        VALUES (?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?, ?)""", params)
    cursor.commit()
    logger.info(f"Article: {request_data['page_type']} added successfully to database.")


def add_ilustrated_page(cursor, request_data):
    content = request_data["content"]
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]

    image = content['image']
    paragraph1 = content['paragraph1']
    paragraph2 = content['paragraph2']
    paragraph3 = content['paragraph3']
    paragraph4 = content['quote']
    params = (user_id, page_type, short_title,
              short_description, creation_date, preview_image,
              image, paragraph1, paragraph2,
              paragraph3, paragraph4)
    cursor.execute("""
            INSERT INTO ARTICLES_PROD 
            (user_id, page_type, short_title,
            short_description, creation_date, preview_image,
            image1, paragraph1, paragraph2, 
            paragraph3, paragraph4)
            VALUES (?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?)""", params)
    cursor.commit()
    logger.info(f"Article: {request_data['page_type']} added successfully to database.")


def add_article_page(cursor, request_data):
    content = request_data["content"]
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]

    image1 = content['image1']
    image2 = content['image2']
    image3 = content['image3']
    paragraph1 = content['paragraph1']
    paragraph2 = content['paragraph2']
    paragraph3 = content['paragraph3']
    paragraph4 = content['paragraph4']
    params = (user_id, page_type, short_title,
              short_description, creation_date, preview_image,
              image1, image2, image3, paragraph1,
              paragraph2, paragraph3, paragraph4)
    cursor.execute("""
        INSERT INTO ARTICLES_PROD 
        (user_id, page_type, short_title,
        short_description, creation_date, preview_image,
        image1, image2, image3, paragraph1,
        paragraph2, paragraph3, paragraph4)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""", params)
    cursor.commit()
    logger.info(f"Article: {request_data['page_type']} added successfully to database.")


def add_big_slider_page(cursor, request_data):
    content = request_data["content"]
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]

    header = content['header']
    image1 = content['image']
    image2 = content['slider_image1']
    image3 = content['slider_image2']
    image4 = content['slider_image3']
    image5 = content['slider_image4']
    image6 = content['slider_image5']
    image7 = content['slider_image6']
    paragraph1 = content['paragraph']
    paragraph2 = content['slider_title1']
    paragraph3 = content['slider_title2']
    paragraph4 = content['slider_title3']
    paragraph5 = content['slider_title4']
    paragraph6 = content['slider_title5']
    paragraph7 = content['slider_title6']
    params = (user_id, page_type, short_title, short_description, creation_date,
              preview_image, image1, image2, image3, image4,
              image5, image6, image7, paragraph1, paragraph2,
              paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, header)
    cursor.execute("""
            INSERT INTO ARTICLES_PROD 
            (user_id, page_type, short_title, short_description, creation_date,
            preview_image, image1, image2, image3, image4,
            image5, image6, image7, paragraph1, paragraph2,
            paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, header)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""", params)
    cursor.commit()
    logger.info(f"Article: {request_data['page_type']} added successfully to database.")


def add_tiled_article_page(cursor, request_data):
    content = request_data["content"]
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]

    image1 = content['image']
    image2 = content['tile_image1']
    image3 = content['tile_image2']
    image4 = content['tile_image3']
    paragraph1 = content['tile_paragraph1']
    paragraph2 = content['tile_paragraph2']
    paragraph3 = content['tile_paragraph3']
    paragraph4 = content['tile_title1']
    paragraph5 = content['tile_title2']
    paragraph6 = content['tile_title3']

    params = (user_id, page_type, short_title, short_description, creation_date,
              preview_image, image1, image2, image3, image4, paragraph1, paragraph2,
              paragraph3, paragraph4, paragraph5, paragraph6)
    cursor.execute("""
            INSERT INTO ARTICLES_PROD 
            (user_id, page_type, short_title, short_description, creation_date,
            preview_image, image1, image2, image3, image4, 
            paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""", params)
    cursor.commit()
    logger.info(f"Article: {request_data['page_type']} added successfully to database.")


def add_bottom_tiled_page(cursor, request_data):
    content = request_data["content"]
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]

    paragraph1 = content['paragraph1']
    paragraph2 = content['paragraph2']
    paragraph3 = content['paragraph3']
    paragraph4 = content['title1']
    image1 = content['image1']
    image2 = content['image2']
    header = content['title2']
    params = (user_id, page_type, short_title,
              short_description, creation_date, preview_image,
              paragraph1, paragraph2, paragraph3,
              paragraph4, image1, image2, header)
    cursor.execute("""
        INSERT INTO ARTICLES_PROD 
        (user_id, page_type, short_title,
        short_description, creation_date, preview_image,
        paragraph1, paragraph2, paragraph3, 
        paragraph4, image1, image2, header) 
        VALUES (?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?, ?)""", params)
    cursor.commit()
    logger.info(f"Article: {request_data['page_type']} added successfully to database.")


def add_about_us_page(cursor, request_data):
    content = request_data["content"]
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]

    hero_img = content['hero_img1']
    image = content['hero_img2']
    header = content['title2']
    paragraph1 = content['paragraph']
    paragraph2 = content['email']
    paragraph3 = content['street']
    paragraph4 = content['city']
    paragraph5 = content['zip_code']
    paragraph6 = content['phone']
    latitude = content['latitude']
    longitude = content['longitude']
    params = (user_id, page_type, short_title,
              short_description, creation_date, preview_image,
              paragraph1, paragraph2, paragraph3,
              paragraph4, paragraph5, paragraph6,
              hero_img, image, header, latitude, longitude)
    cursor.execute("""
        INSERT INTO ARTICLES_PROD 
        (user_id, page_type, short_title,
        short_description, creation_date, preview_image, 
        paragraph1, paragraph2, paragraph3, 
        paragraph4, paragraph5, paragraph6, 
        hero_img, image1, header, latitude, longitude) 
        VALUES (?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?)""", params)
    cursor.commit()
    logger.info(f"Article added successfully to database.")
