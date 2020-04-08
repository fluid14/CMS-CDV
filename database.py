import pyodbc
import logging


class Database:
    def __init__(self):
        self.connection = None
        self.server = 'cms-cdv.database.windows.net'
        self.database = 'CMS'
        self.username = 'cms-cdv'
        self.password = 'Projekt123!'
        self.driver = '{ODBC Driver 17 for SQL Server}'
        logging.basicConfig(level=logging.INFO)
        self.logger = logging.getLogger(__name__)

    def connect(self):
        try:
            connection = pyodbc.connect('DRIVER=' + self.driver + ';SERVER=' + self.server + ';PORT=1433;DATABASE=' + self.database + ';UID=' + self.username + ';PWD=' + self.password)
            self.connection = connection
            self.logger.info('Connection to database successful')
            return connection
        except (Exception, pyodbc.Error) as error:
            self.logger.error("Failed to connect to database", error)
