from app import app_dec
from app import db
from app import socket
from flask_migrate import Migrate

app = app_dec()
migrate = Migrate(app, db)

if __name__ == '__main__':
    socket.run(app, debug=True, host='0.0.0.0')