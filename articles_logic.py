from database import Database


def get_all_articles(user_id):
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
