# add_friends, remove_friends, friends_request, rooms_with_friends
from models import Account, Acc_Friends, Pending_Fr_Request, Acc_Rooms
from app import generate_unique_code, write_room
from flask_login import current_user
from flask import render_template, redirect, url_for, flash
from app import db, rooms, generate_unique_code, list_room_codes

def add_friend(friend_name_str):

    friend_receiver = Account.query.filter(Account.name == friend_name_str).first()
    curr_user_sender = Acc_Friends.query.filter(Acc_Friends.name == current_user.name).first()

    receiver_list = list(db.session.execute(db.select(Pending_Fr_Request.receiver)).scalars())
    sender_list = list(db.session.execute(db.select(Pending_Fr_Request.sender)).scalars())
    all_list = sender_list + receiver_list


    if curr_user_sender.name in all_list and friend_receiver.name in all_list:
        return redirect(url_for('invalid_friend_request'))

    elif curr_user_sender.name not in all_list or friend_receiver.name not in all_list:
        friend_request = Pending_Fr_Request(sender=curr_user_sender.name, receiver=friend_receiver.name)

        db.session.add(friend_request)
        db.session.commit()

def remove_friend(friend_name_str, fr_list, from_where):
    
        string_friends = ''
        spl_list = fr_list.split(', ')
        if friend_name_str in spl_list:
            spl_list.remove(friend_name_str)
            acc = Acc_Friends.query.filter(Acc_Friends.name == from_where).first()
            for i in spl_list:
                string_friends += (i + ', ')
            acc.friends = string_friends
            db.session.commit()
        else:
            return   
    
def accept_friend_request(sender, receiver):
    sender = Acc_Friends.query.filter(Acc_Friends.name == sender).first()
    receiver = Acc_Friends.query.filter(Acc_Friends.name == receiver).first()

    list_rooms = list_room_codes(rooms)

    # use that list of room_codes in the fucntion for creating a code so that it can check if it exists
    # if yes it creates a new unique code
    room_code = generate_unique_code(4, list_rooms)

    created_room = Acc_Rooms(user1=sender.name, user2=receiver.name, room_code=room_code)

    sender_friends_list = str(sender.friends)
    receiver_frinds_list = str(receiver.friends)
    db.session.add(created_room)
    db.session.commit()
    write_room(sender.name, receiver.name, room_code)
    
    def add_to_fr_list(fr_list, new_friend, acc):
        spl_list = fr_list.split(', ')

        if(len(spl_list) == 0):
            spl_list.append(new_friend.name)
            acc.friends = fr_list
            db.session.commit()
        else:
            updated_fr_string = ''
            if new_friend.name not in spl_list:
                spl_list.append(new_friend.name)
            for i in spl_list:
                if i == '':
                    continue
                else:
                    updated_fr_string += (i + ', ') 
            acc.friends = updated_fr_string
            db.session.commit()

        return
    add_to_fr_list(sender_friends_list, receiver, sender)
    add_to_fr_list(receiver_frinds_list, sender, receiver)

def decline_friend_request(sender, receiver):
    db.session.execute(db.delete(Pending_Fr_Request).where(Pending_Fr_Request.sender == sender).where(Pending_Fr_Request.receiver == current_user.name))
    db.session.commit()

