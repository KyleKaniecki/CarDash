#!/usr/bin/env python

from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from utils import ObdManager
import json

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/obd/latest/')
@cross_origin(origin='localhost')
def get_latest_obd_data():
    obd = ObdManager()
    return json.dumps(obd.get_last_row())

@app.route('/obd/')
@cross_origin(origin='localhost')
def get_obd_data():
    obd = ObdManager()
    limit = request.args.get('limit', 1)
    return json.dumps(obd.get_rows(int(limit)))

@app.route('/obd/all/')
@cross_origin(origin='localhost')
def get_all_obd_data():
    obd = ObdManager()
    return json.dumps(obd.get_all_rows())