# from flask import Flask, url_for, request, render_template, redirect
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# from flask_login import LoginManager, login_user, logout_user, current_user, login_required
# from flask_bcrypt import Bcrypt
# from flask_socketio import SocketIO
# import random
# from string import ascii_uppercase

# rooms = dict()

# bcrypt = Bcrypt()

# def generate_unique_code(l):
#     while True:
#         code = ''
#         for _ in range(l):
#             code += random.choice(ascii_uppercase)

#         if code not in rooms:
#             break
#     return code

# db = SQLAlchemy()
# app = Flask(__name__, template_folder='templates', static_folder='static')
# socket = SocketIO(app)

# app.secret_key = '177805'

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./testbd.db'

# db.init_app(app)

# login_manager = LoginManager()
# login_manager.init_app(app)

# @login_manager.user_loader
# def load_user(pid):
#     return Account.query.get(pid)

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/signup', methods=['GET', 'POST'])
# def signup():
            
#     if request.method == "POST":
#         name = request.form.get('name-singin')
#         password = request.form.get('password-singin')

#         hashed_pass = bcrypt.generate_password_hash(password)

#         account = Account(name=name, password=hashed_pass)

#         db.session.add(account)
#         db.session.commit()

#         return render_template('signup.html')

#     return render_template('signup.html')

# @app.route('/login', methods=['GET', 'POST'])
# def login():
        
#         if request.method == 'POST':
#             name = request.form.get('name-login')
#             password = request.form.get('password-login')

#             account = Account.query.filter(Account.name == name).first()

#             if account == None:
#                 return "This Account Does Not Exist :("
#             if bcrypt.check_password_hash(account.password, password):
#                 login_user(account)
#                 # print(login_user(account))
#                 return redirect(url_for('index'))


#             return render_template('login.html')

#         return render_template('login.html')
    
# @app.route('/search-rooms')
# def search_rooms():
#         return render_template('search_rooms.html')

# migrate = Migrate(app, db)


# class Account(db.Model):
#     __tablename__ = 'accounts'

#     pid = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.Text, nullable=False)
#     password = db.Column(db.Text, nullable=False)
#     bio = db.Column(db.Text)

#     def __repr__(self):
#         return f'{self.name}, {self.password}, {self.bio}'

#     def get_id(self):
#         return self.pid
    
#     def is_active(self):
#         return True


# class Acc_Rooms(db.Model):
#     __tablename__ = 'acc_rooms'

#     pk = db.Column(db.Integer, primary_key=True)
#     user1 = db.Column(db.Text, nullable=False)
#     user2 = db.Column(db.Text, nullable=False)
#     room_code = db.Column(db.Text, nullable=False)

#     def __repr__(self):
#         return f'{self.name}, {self.password}'
    
#     def is_active(self):
#        return True

# class Acc_Friends(db.Model):
#     __tablename__ = 'acc_friends'

#     pk = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.Text, nullable=False)
#     friends = db.Column(db.Text, nullable=False)

#     def __repr__(self):
#         return f'{self.name}, {self.friends}'
    
#     def is_active(self):
#        return True
    
# class Pending_Fr_Request(db.Model):
#     __tablename__ = 'pending_fr_request'

#     pk = db.Column(db.Integer, primary_key=True)
#     sender = db.Column(db.Text, nullable=False)
#     receiver = db.Column(db.Text, nullable=False)

#     def __repr__(self):
#         return f'{self.sender}, {self.receiver}'
    
#     def is_active(self):
#        return True 

  

# if __name__ == '__main__':
#     socket.run(app, debug=True, host='0.0.0.0')