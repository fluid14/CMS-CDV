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
    cursor.execute("SELECT * FROM TEST_ARTICLES")
    rows = cursor.fetchall()
    articles = []
    for row in rows:
        print(row.title)
        #articles.append(
         #   {
          #      "id": row[0],
          #      "title": row[1],
          #      "date": row[2]
          #  }
        #)
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
    # page_content = request['content']
    # user_id = request['user_id']
    # title = request['title']
    # page_type = request['page_type']


    #insert_article_to_articles_table(cursor, title, user_id)
    #article_id = fetch_max_id_from_articles_table(cursor)
    #add_simple_page(request_data=request, cursor=cursor)
    add_gallery_page(cursor, request)

    cursor.close()
    connection.close()
    #logger.info(f"Article id:{article_id} added")

#
# def insert_article_to_articles_table(cursor, title, user_id):
#     creation_date = date.today()
#     cursor.execute("INSERT INTO TEST_ARTICLES (id, title) VALUES (?, ?)", user_id, title)
#     cursor.commit()
#     logger.info(f"Article: title: {title}, creation_date: {creation_date}, user_id: {user_id} added successfully to database.")


# def old_insert_article_to_articles_table(cursor, title, user_id):
#     creation_date = date.today()
#     cursor.execute("INSERT INTO ARTICLES (title, creation_date, user_id) VALUES (?, ?, ?)", title, creation_date, user_id)
#     cursor.commit()
#     logger.info(f"Article: title: {title}, creation_date: {creation_date}, user_id: {user_id} added successfully to database.")


def fetch_max_id_from_articles_table(cursor):
    cursor.execute("SELECT MAX(ID) as MAX_ID FROM ARTICLES")
    article_id = cursor.fetchone()
    article_id = article_id[0]
    return article_id


def add_simple_page(cursor, request_data):
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    content = request_data["content"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]
    image = content["image"]
    paragraph = content["paragraph"]
    params = (user_id, page_type, short_title, short_description, creation_date, preview_image, image, paragraph)
    cursor.execute("INSERT INTO ARTICLES_PROD (user_id, page_type, short_title, short_description, creation_date, preview_image, image1, paragraph1) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", params)
    cursor.commit()
    logger.info(f"Article added successfully to database.")


def add_gallery_page(cursor, request_data):
    #TODO:
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    content = request_data["content"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]

    header = content["header"]
    hero_img = content['hero_img']
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
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""", params)
    cursor.commit()
    logger.info(f"Article added successfully to database.")


def add_hero_page(cursor, request_data):
    #TODO:
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    content = request_data["content"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]

    hero_image = content['hero_image']
    title = content['title']
    column1 = content['column1']
    column2 = content['column2']
    column3 = content['column3']
    icon1 = content['icon1']
    icon2 = content['icon2']
    icon3 = content['icon3']
    params = (hero_image, title,
              column1, column2,
              column3, icon1,
              icon2, icon3)
    cursor.execute("INSERT INTO ARTICLES_PROD VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", params)
    cursor.commit()
    logger.info(f"Article added successfully to database.")


def add_ilustrated_page(cursor, request_data):
    #TODO:
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    content = request_data["content"]
    short_title = content["short_title"]
    short_description = content["short_description"]
    creation_date = date.today()
    preview_image = content["preview_image"]

    image = content['image']
    title = content['title']
    paragraph1 = content['paragraph1']
    paragraph2 = content['paragraph2']
    quote = content['quote']
    paragraph3 = content['paragraph3']
    params = (image, title,
              paragraph1, paragraph2,
              quote, paragraph3)
    cursor.execute("INSERT INTO ARTICLES_PROD VALUES (?, ?, ?, ?, ?, ?, ?)", params)
    cursor.commit()
    logger.info(f"Article: added successfully to database.")


def add_article_page(cursor, request_data):
    #TODO:
    user_id = request_data["user_id"]
    page_type = request_data["page_type"]
    content = request_data["content"]
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
    title = content['title']
    params = (image1, title,
              paragraph1, paragraph2, image2,
              paragraph3, image3, paragraph4)
    cursor.execute("INSERT INTO ARTICLES_PROD VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", params)
    cursor.commit()
    logger.info(f"Article added successfully to database.")


#def check_page_type_and_call_add_function(page_type, cursor, request_data):
#TODO: