from database import Database


def validate_login(username, password):
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()

    cursor.execute("SELECT * FROM USERS WHERE USERNAME=? AND PASSWORD=?", username, password)
    row = cursor.fetchone()
    with connection:
        if row:
            data = {
                "id": row.id,
                "role": row.role
            }
            return data
        else:
            error = "Invalid username/password"
            return error
