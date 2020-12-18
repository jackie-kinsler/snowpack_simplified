# STANDARD LIBRARIES 
import json
import os 
import smtplib
import ssl
from datetime import datetime, timedelta 
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# THIRD-PARTY LIBRARIES  
from flask import (
    Flask, 
    render_template, 
    request, 
    flash, 
    session, 
    redirect, 
    jsonify, 
    url_for)

from jinja2 import StrictUndefined
# from werkzeug.utils import secure_filename
import requests

# # INTERNAL IMPORTS
# from model import connect_to_db
# import crud

##########################
# This file contains four sections: 
# 1. Configuration
# 2. Routes that render pages
# 3. API routes
# 4. Helper functions 
##########################


##########################
# CONFIGURATION 
##########################

# Configure flask app 
app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", None)
app.jinja_env.undefined = StrictUndefined

# Google Maps JS API Key
GOOGLE_MAP_API = os.environ.get("GOOGLE_MAP_API")

# OAuth 2 client setup
# client = WebApplicationClient(GOOGLE_CLIENT_ID)

##########################
# ROUTES THAT RENDER PAGES 
##########################

@app.route('/')
def homepage():
    """Render root of website"""

    try_date = datetime.date(datetime.now())

    latest_date = find_usable_date(try_date)
    return render_template('homepage.html', latest_date = latest_date, GOOGLE_MAP_API=GOOGLE_MAP_API)
    

@app.route("/api/latest-date")
def latest_date():
    """Returns the latest date with usable information from NOAA"""
    
    # start by trying today's date
    try_date = datetime.date(datetime.now())
    
    # the function will iterate until it finds a date with information 
    date = find_usable_date(try_date)
    
    return jsonify(str(date))


@app.route('/map-details', methods = ['GET','POST'])
def store_map_details():
    """Store map details for use later."""

    if request.method == 'POST':
        zoom = request.form.get('zoom')
        center_lat = request.form.get('center_lat')
        center_long = request.form.get('center_long')

        session['zoom'] = zoom
        session['center_lat'] = center_lat
        session['center_long'] = center_long

        return ('success')
    
    if request.method == 'GET':
        map_params = {'zoom' : session.get('zoom'), 
                      'center_lat' : session.get('center_lat'), 
                      'center_long' : session.get('center_long')
                     }
        return jsonify(map_params)


def find_usable_date(try_date):
    """Takes a datetime object. Returns a datetime object of the latest
    date with usable data."""

    str_date = str(try_date).replace("-", "")

    url = f'https://www.nohrsc.noaa.gov/snow_model/GE/{str_date}/'
    page = requests.get(url, verify=False)

    # If the resource for the requested date is not found, try 
    # requesting for the day before. 
    # Will recursively call function until a viable date is determined.
    if b"Not Found" in page.content:
        try_date = try_date - timedelta(days = 1)
        return find_usable_date(try_date)
    else: 
        return(try_date)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
