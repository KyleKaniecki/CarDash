import sqlite3

class DatabaseManager(object):

    connection = None

    def __init__(self, path: str = None):
        if not path:
            self.connection = sqlite3.connect('./cardash.db')
        else:
            self.connection = sqlite3.connect(path)


    def create_table(self, table_name, column_map):
        sql = 'CREATE TABLE IF NOT EXISTS {} (id INTEGER PRIMARY KEY AUTOINCREMENT, '.format(table_name)

        for name, type in column_map.items():
            sql += '{} {},'.format(name, type)

        sql = sql[:-1]
        sql += ')'

        return self.run(sql)

    def run(self, sql: str):
        cursor = self.connection.cursor()
        result = cursor.execute(sql)
        return result

    def get_column_value_map_list(self, cursor, size = 0, all = False):
        columns = list(map(lambda x: x[0], cursor.description))

        if all:
            rows = cursor.fetchall()
        elif size != 0:
            rows = cursor.fetchmany(size)
        else:
            rows = [cursor.fetchone()]

        results_list = list()
        for row in rows:
            results_list.append(dict(zip(columns, row)))

        return results_list




    


