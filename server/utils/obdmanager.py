from .databasemanager import DatabaseManager
import obd
import time
import json

class ObdManager(DatabaseManager):

    column_map = {
        'FUEL_STATUS': 'CHAR(255)',
        'ENGINE_LOAD': 'FLOAT',
        'COOLANT_TEMP': 'INTEGER',
        'FUEL_PRESSURE': 'INTEGER',
        'INTAKE_PRESSURE': 'INTEGER',
        'RPM': 'INTEGER',
        'SPEED': 'INTEGER',
        'TIMING_ADVANCE': 'INTEGER',
        'INTAKE_TEMP': 'INTEGER',
        'MAF': 'INTEGER',
        'THROTTLE_POS': 'FLOAT',
        'RUN_TIME': 'INTEGER',
        'FUEL_RAIL_PRESSURE_VAC': 'INTEGER',
        'FUEL_RAIL_PRESSURE_DIRECT': 'INTEGER',
        'FUEL_LEVEL': 'FLOAT',
        'AMBIANT_AIR_TEMP': 'INTEGER',
        'FUEL_TYPE': 'CHAR(255)',
        'ETHANOL_PERCENT': 'FLOAT',
        'OIL_TEMP': 'INTEGER',
        'FUEL_INJECT_TIMING': 'INTEGER'
    }

    def __init__(self):
        super(ObdManager, self).__init__()

    def start(self):
        self.create_table('obd', self.column_map)

    def get_last_row(self):
        cursor = self.run('SELECT * FROM obd')
        return self.get_column_value_map_list(cursor)[0]

    def get_rows(self, limit):
        cursor =self.run('SELECT * from obd')
        return self.get_column_value_map_list(cursor, size=limit)

    def get_all_rows(self):
        cursor = self.run('SELECT * from obd')
        return self.get_column_value_map_list(cursor, all=True)
