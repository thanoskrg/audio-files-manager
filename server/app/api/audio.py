import os, logging
from flask import jsonify, abort, send_from_directory, request
from flask_cors import cross_origin
from werkzeug.utils import secure_filename
from app import app
from app.config import UPLOAD_FOLDER, ALLOWED_FILE_EXTENSIONS

from app.models import SoundFile

logging.basicConfig(level=logging.DEBUG)


def allowed_file(filename):
  return '.' in filename and \
    filename.rsplit('.', 1)[1].lower() in ALLOWED_FILE_EXTENSIONS


@app.route('/api/audio/<int:fileId>', methods=['GET'])
@cross_origin()
def get_audio_file(fileId):
  filename = SoundFile.query.get(fileId).name
  return send_from_directory(UPLOAD_FOLDER, filename)


@app.route('/api/audio/upload', methods=['POST'])
@cross_origin()
def upload_audio_file():
  if 'file' not in request.files:
    abort(400)
  file = request.files['file']
  if file.filename == '':
    abort(400)
  exists = SoundFile.query.filter(
    SoundFile.name == file.filename
  ).first()
  if exists:
    abort(400)
  if file and allowed_file(file.filename):
    filename = secure_filename(file.filename)
    destination = os.path.join(UPLOAD_FOLDER, filename)
    file.save(destination)
  else:
    abort(400)
  return jsonify(dict(
    name=filename,
    size=os.stat(destination).st_size,
    type=file.content_type
  ))


def delete_audio_file(instance_id, **kw):
  try:
    filename = SoundFile.query.get(instance_id).name
    os.remove(os.path.join(UPLOAD_FOLDER, filename))
  except Exception as ex:
    logging.error(ex)
