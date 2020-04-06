from database import Database


def validate_login(username, password):
    database = Database()
    connection = database.connect()
    cursor = connection.cursor()
    row = cursor.execute("SELECT * FROM USERS WHERE USERNAME=? AND PASSWORD=?", (username, password)).fetchone
    if row:
        data = (row.user_id, row.role_id)
        return data
    else:
        return False
