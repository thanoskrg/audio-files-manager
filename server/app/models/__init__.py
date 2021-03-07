from datetime import datetime
from app.db import db

class SoundFile(db.Model):
  __tablename__ = 'soundFile'
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.Unicode)
  type = db.Column(db.Unicode)
  size = db.Column(db.BigInteger)
  path = db.Column(db.String)
  uploadedAt = db.Column(db.DateTime, default=datetime.utcnow())
  uploadedBy = db.Column(db.Unicode)

# db.drop_all()
db.create_all()