from flask_restless import APIManager
from flask_cors import CORS

from app import app
from app.db import db
from app import models

CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/')
def root():
  return app.send_static_file('index.html')

from . import audio

# audo generate REST endpoints from the models
manager = APIManager(app, flask_sqlalchemy_db=db)

manager.create_api(
  models.SoundFile,
  methods=['GET', 'POST', 'DELETE'],
  preprocessors={
    'DELETE_SINGLE': [audio.delete_audio_file]
  }
)