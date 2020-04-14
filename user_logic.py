from database import Database


def validate_login(username, password):
    try:
        database = Database()
        connection = database.connect()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM USERS WHERE USERNAME=? AND PASSWORD=?", username, password)
        row = cursor.fetchone()
        if row:
            data = {
                "id": row.id,
                "role": row.role
            }
            return data
        else:
            return None

    finally:
        cursor.close()
        connection.close()
