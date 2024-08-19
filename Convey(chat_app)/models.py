from app import db
from flask_login import UserMixin

class Account(db.Model):
    __tablename__ = 'accounts'

    pid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    password = db.Column(db.Text, nullable=False)
    bio = db.Column(db.Text)

    def __repr__(self):
        return f'{self.name}, {self.password}, {self.bio}'

    def get_id(self):
        return self.pid
    
    def is_active(self):
        return True


class Acc_Rooms(db.Model):
    __tablename__ = 'acc_rooms'

    pk = db.Column(db.Integer, primary_key=True)
    user1 = db.Column(db.Text, nullable=False)
    user2 = db.Column(db.Text, nullable=False)
    room_code = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f'{self.user1}, {self.user2}, {self.room_code}'

    def get_code(self):
        return f'{self.room_code}'
    
    def is_active(self):
       return True

class Acc_Friends(db.Model):
    __tablename__ = 'acc_friends'

    pk = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    friends = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f'{self.name}, {self.friends}'
    
    def is_active(self):
       return True
    
class Pending_Fr_Request(db.Model):
    __tablename__ = 'pending_fr_request'

    pk = db.Column(db.Integer, primary_key=True)
    sender = db.Column(db.Text, nullable=False)
    receiver = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f'{self.sender}, {self.receiver}'
    
    def is_active(self):
       return True 