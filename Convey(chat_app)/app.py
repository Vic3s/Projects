from flask import Flask, url_for, request
from flask_socketio import join_room, leave_room, send, SocketIO
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager, current_user
from flask_bcrypt import Bcrypt
from string import ascii_uppercase
import random
import json

db = SQLAlchemy()
app = Flask(__name__, template_folder='templates', static_folder='static')

socket = SocketIO(app)

bcrypt = Bcrypt()

# the read json file of the rooms
with open('static/json/rooms.json', 'r') as f:
    rooms = json.load(f)

def list_room_codes(object_data):
    # create a list of the kyes(room_codes) inside the json file
    list_rooms = list()
    
    for i in object_data['rooms']:
        list_rooms.append(list(i.keys())[0])

    return list_rooms

# the fucntion to create a unique code for a room
def generate_unique_code(l, rooms):
    while True:
        code = ''

        for _ in range(l):
            code += random.choice(ascii_uppercase)

        if code not in rooms:
            break
    return code

# the fucntion to write a new room between people 

def write_room(user1, user2, room_code):

    def write_json(data, filename='static/json/rooms.json'):
        with open(filename, 'w') as f:
            json.dump(data, f, indent=4)

# here it dumps the data of the code the name of user1, the name of user2 and the room code between the users
    with open('static/json/rooms.json', 'r') as f:
        object_data = json.load(f)
        appended_room = object_data['rooms']
        data_jsonified = {
                room_code: {
                    "user1": user1,
                    "user2": user2,
                    "messages": ""
                }
            }
        appended_room.append(data_jsonified)
        
    write_json(object_data)



def app_dec():

    app.secret_key = '177805'

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./testbd.db'

    db.init_app(app)

    login_manager = LoginManager()
    login_manager.init_app(app)

    from models import Account

    @login_manager.user_loader
    def load_user(pid):
        return Account.query.get(pid)

    bcrypt = Bcrypt(app)

    from routes import routes_create

    routes_create(app, db, bcrypt)

        
    migrate = Migrate(app, db)

    return app



