from database import Database
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def get_simple_page(cursor, article_id):
    logger.info(f"Fetching article number {article_id}")
    cursor.execute(
        "SELECT id, user_id, page_type, short_title, short_description, creation_date, preview_image, image1, paragraph1 FROM ARTICLES_PROD WHERE id=?",
        article_id)
    row = cursor.fetchone()
    if row:
        return {
            "article_id": row.id,
            "user_id": row.user_id,
            "page_type": row.page_type,
            "creation_date": row.creation_date,
            "content": {
                "short_title": row.short_title,
                "short_description": row.short_description,
                "preview_image": row.preview_image,
                "image": row.image1,
                "paragraph": row.paragraph1
            }
        }


def get_gallery_page(cursor, article_id):
    logger.info(f"Fetching article number {article_id}")
    cursor.execute("""
        SELECT id, user_id, page_type, short_title,
        short_description, creation_date, preview_image,
        hero_img, header, paragraph1,
        image1, image2, image3, 
        image4, image5, image6, 
        image7, image8, image9 FROM ARTICLES_PROD WHERE id=?""", article_id)
    row = cursor.fetchone()
    if row:
        return {
            "article_id": row.id,
            "user_id": row.user_id,
            "page_type": row.page_type,
            "creation_date": row.creation_date,
            "content": {
                "short_title": row.short_title,
                "short_description": row.short_description,
                "preview_image": row.preview_image,
                "hero_img": row.hero_img,
                "header": row.header,
                "paragraph": row.paragraph1,
                "image1": row.image1,
                "image2": row.image2,
                "image3": row.image3,
                "image4": row.image4,
                "image5": row.image5,
                "image6": row.image6,
                "image7": row.image7,
                "image8": row.image8,
                "image9": row.image9
              }
        }


def get_hero_page(cursor, article_id):
    cursor.execute("""
        SELECT id, user_id, page_type, short_title,
        short_description, creation_date, preview_image,
        hero_img, paragraph1, paragraph2,
        paragraph3, image1, image2, image3 FROM ARTICLES_PROD WHERE id=?""", article_id)
    row = cursor.fetchone()
    if row:
        return {
            "article_id": row.id,
            "user_id": row.user_id,
            "page_type": row.page_type,
            "creation_date": row.creation_date,
            "content": {
                "short_title": row.short_title,
                "short_description": row.short_description,
                "preview_image": row.preview_image,
                "hero_img": row.hero_img,
                "paragraph1": row.paragraph1,
                "paragraph2": row.paragraph2,
                "paragraph3": row.paragraph3,
                "image1": row.image1,
                "image2": row.image2,
                "image3": row.image3,
            }
        }


def get_ilustrated_page(cursor, article_id):
    cursor.execute("""
            SELECT id, user_id, page_type, short_title,
            short_description, creation_date, preview_image,
            image1, paragraph1, paragraph2, 
            paragraph3, paragraph4 FROM ARTICLES_PROD WHERE id=?""", article_id)
    row = cursor.fetchone()
    if row:
        return {
            "article_id": row.id,
            "user_id": row.user_id,
            "page_type": row.page_type,
            "creation_date": row.creation_date,
            "content": {
                "short_title": row.short_title,
                "short_description": row.short_description,
                "preview_image": row.preview_image,
                "paragraph1": row.paragraph1,
                "paragraph2": row.paragraph2,
                "paragraph3": row.paragraph3,
                "quote": row.paragraph4,
                "image": row.image1
            }
        }


def get_article_page(cursor, article_id):
    cursor.execute("""
        SELECT id, user_id, page_type, short_title,
        short_description, creation_date, preview_image,
        image1, image2, image3, paragraph1,
        paragraph2, paragraph3, paragraph4 FROM ARTICLES_PROD WHERE id=?""", article_id)
    row = cursor.fetchone()
    if row:
        return {
            "article_id": row.id,
            "user_id": row.user_id,
            "page_type": row.page_type,
            "creation_date": row.creation_date,
            "content": {
                "short_title": row.short_title,
                "short_description": row.short_description,
                "preview_image": row.preview_image,
                "paragraph1": row.paragraph1,
                "paragraph2": row.paragraph2,
                "paragraph3": row.paragraph3,
                "paragraph4": row.paragraph4,
                "image1": row.image1,
                "image2": row.image2,
                "image3": row.image3,
            }
        }


def get_big_slider_page(cursor, article_id):
    cursor.execute("""
            SELECT id, user_id, page_type, short_title, short_description, creation_date,
            preview_image, image1, image2, image3, image4,
            image5, image6, image7, paragraph1, paragraph2,
            paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, header FROM ARTICLES_PROD WHERE id=?""", article_id)
    row = cursor.fetchone()
    if row:
        return {
            "article_id": row.id,
            "user_id": row.user_id,
            "page_type": row.page_type,
            "creation_date": row.creation_date,
            "content": {
                "short_title": row.short_title,
                "short_description": row.short_description,
                "preview_image": row.preview_image,
                "header": row.header,
                "paragraph": row.paragraph1,
                "slider_title1": row.paragraph2,
                "slider_title2": row.paragraph3,
                "slider_title3": row.paragraph4,
                "slider_title4": row.paragraph5,
                "slider_title5": row.paragraph6,
                "slider_title6": row.paragraph7,
                "image": row.image1,
                "slider_image1": row.image2,
                "slider_image2": row.image3,
                "slider_image3": row.image4,
                "slider_image4": row.image5,
                "slider_image5": row.image6,
                "slider_image6": row.image7
            }
        }


def get_tiled_article_page(cursor, article_id):
    cursor.execute("""
            SELECT id, user_id, page_type, short_title, short_description, creation_date,
            preview_image, image1, image2, image3, image4, 
            paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6 FROM ARTICLES_PROD WHERE id=?""", article_id)
    row = cursor.fetchone()
    if row:
        return {
            "article_id": row.id,
            "user_id": row.user_id,
            "page_type": row.page_type,
            "creation_date": row.creation_date,
            "content": {
                "short_title": row.short_title,
                "short_description": row.short_description,
                "preview_image": row.preview_image,
                "image": row.image1,
                "tile_image1": row.image2,
                "tile_image2": row.image3,
                "tile_image3": row.image4,
                "tile_paragraph1": row.paragraph1,
                "tile_paragraph2": row.paragraph2,
                "tile_paragraph3": row.paragraph3,
                "tile_title1": row.paragraph4,
                "tile_title2": row.paragraph5,
                "tile_title3": row.paragraph6
            }
        }


def get_bottom_tiled_page(cursor, article_id):
    cursor.execute("""
        SELECT id, user_id, page_type, short_title,
        short_description, creation_date, preview_image,
        paragraph1, paragraph2, paragraph3, 
        paragraph4, image1, image2, header FROM ARTICLES_PROD WHERE id=?""", article_id)
    row = cursor.fetchone()
    if row:
        return {
            "article_id": row.id,
            "user_id": row.user_id,
            "page_type": row.page_type,
            "creation_date": row.creation_date,
            "content": {
                "short_title": row.short_title,
                "short_description": row.short_description,
                "preview_image": row.preview_image,
                "paragraph1": row.paragraph1,
                "paragraph2": row.paragraph2,
                "paragraph3": row.paragraph3,
                "image1": row.image1,
                "image2": row.image2,
                "title1": row.paragraph4,
                "title2": row.header
            }
        }


def get_about_us_page(cursor, article_id):
    cursor.execute("""
        SELECT id, user_id, page_type, short_title,
        short_description, creation_date, preview_image, 
        paragraph1, paragraph2, paragraph3, 
        paragraph4, paragraph5, paragraph6, 
        hero_img, image1, header, latitude, longitude FROM ARTICLES_PROD WHERE id=?""", article_id)
    row = cursor.fetchone()
    if row:
        return {
            "article_id": row.id,
            "user_id": row.user_id,
            "page_type": row.page_type,
            "creation_date": row.creation_date,
            "content": {
                "short_title": row.short_title,
                "short_description": row.short_description,
                "preview_image": row.preview_image,
                "hero_img1": row.hero_img,
                "hero_img2": row.image1,
                "title2": row.header,
                "paragraph": row.paragraph1,
                "email": row.paragraph2,
                "street": row.paragraph3,
                "city": row.paragraph4,
                "zip_code": row.paragraph5,
                "phone": row.paragraph6,
                "latitude": str(row.latitude),
                "longitude": str(row.longitude),
            }
        }
