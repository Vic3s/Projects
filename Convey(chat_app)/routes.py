from flask import render_template, request, session, redirect, url_for, jsonify
from models import Account, Acc_Friends, Pending_Fr_Request, Acc_Rooms
from sqlalchemy import select, delete
from app import db, socket, send, join_room, leave_room
import json
from flask_login import login_user, logout_user, current_user, login_required


def routes_create(app, db, bcrypt):

    

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/signup', methods=['GET', 'POST'])
    def signup():
            
        if request.method == "POST":
            name = request.form.get('name-singin')
            password = request.form.get('password-singin')
            bio = request.form.get('bio')

            hashed_pass = bcrypt.generate_password_hash(password)

            account = Account(name=name, password=hashed_pass, bio=bio)
            friends_add_functionality = Acc_Friends(name=name, friends='')

            db.session.add(friends_add_functionality)
            if name not in Acc_Friends.query.all():
                db.session.add(account)
            db.session.commit()
            
            return redirect(url_for('success'))

        return render_template('signup.html')

    @app.route('/login', methods=['GET', 'POST'])
    def login():
        if request.method == 'POST':
            name = request.form.get('name-login')
            password = request.form.get('password-login')

            account = Account.query.filter(Account.name == name).first()

            if account == None:
                return redirect(url_for('not_exist'))
            
            if bcrypt.check_password_hash(account.password, password):
                login_user(account)
                return redirect(url_for('loged_in'))
            else:
                return redirect(url_for('incorrect_password'))
            
        return render_template('login.html')
    
    @app.route('/search-people', methods=['POST', 'GET'])
    def search_people():
        try:
            user = current_user.name
        except AttributeError:
            return render_template('search_people.html', link_here= url_for('index'))
        
        
        searched = str(request.args.get('search'))
        returned_list = list()
        account_names = list(db.session.execute(db.select(Account.name)).scalars())
        
        for account_name in account_names:
            if searched in account_name:
                returned_list.append(account_name)
       
        if request.is_json:

            return jsonify({'list_names': returned_list})

        if request.method == 'POST':
            friend_name = request.form.get('get_friend_name')
            from friends import add_friend
            add_friend(str(friend_name))

        return render_template('search_people.html', link_here= url_for('loged_in'), account_name_str=current_user.name)        

    @app.route('/loged')
    def loged_in():
        return render_template('loged_in.html', loged_name=current_user.name)
    
    @app.route('/log_out')
    def log_out():
        logout_user()
        return redirect(url_for('index'))   
    
    @app.route('/profile-details', methods=['POST', 'GET'])
    def details():

        if request.is_json:
            f = open("static/text/get_name.txt", "w")
            f.write(request.args.get('user2_name'))
            f.close()
            user1 = current_user.name
            f = open("static/text/get_name.txt", "r")
            user2 = f.read()
            room = list(db.session.execute(db.select(Acc_Rooms.room_code)
            .where(Acc_Rooms.user1 == user1)
            .where(Acc_Rooms.user2 == user2)).scalars())
            if(len(room) == 0):
                room = list(db.session.execute(db.select(Acc_Rooms.room_code)
                .where(Acc_Rooms.user1 == user2)
                .where(Acc_Rooms.user2 == user1)).scalars())
        
            session['room'] = room[0]
            
            href = '/chat-room'
            return jsonify({'href': href})

        if request.method == 'POST':
            curr_fr_list = Acc_Friends.query.filter(Acc_Friends.name == current_user.name).first()
            curr_fr_list_friend = Acc_Friends.query.filter(Acc_Friends.name == request.form.get('fr_name')).first()
                
            from friends import remove_friend
            remove_friend(request.form.get('fr_name'), curr_fr_list.friends, current_user.name)
            remove_friend(current_user.name, curr_fr_list_friend.friends, request.form.get('fr_name'))
        person_friends_obj = Acc_Friends.query.filter(Acc_Friends.name == current_user.name).first()
        friends = person_friends_obj.friends.split(', ')      
        return render_template('profile_details.html', acc_name=current_user.name, friends=friends)

    @app.route("/change_info", methods=['POST', 'GET'])
    def change_info():
        if request.method == 'POST':
            new_info = request.form.get('new-info')

            current_user.bio = new_info
            db.session.commit()

        return render_template('change_info.html')

    @app.route('/success!')
    def success():
        return render_template('successful.html')

    @app.route('/does-not-exist')
    def not_exist():
        return render_template('does_not_exist.html')
    
    @app.route('/incorrect-assword')
    def incorrect_password():
        return render_template('incorrect-assword.html')
    
    @app.route('/friends_request_inbox', methods=['POST', 'GET'])
    def fr_request_inbox():
        from friends import accept_friend_request, decline_friend_request
        raw_requests = list(db.session.execute(db.select(Pending_Fr_Request.sender).where(Pending_Fr_Request.receiver == current_user.name)).scalars())
        if request.method == 'POST':
            sender = request.form.get('name_request_accepted')
            if 'Declined' in sender:
                removed = sender.split(" ").pop(0)
                decline_friend_request(sender=removed, receiver=current_user.name)
            else:
                accept_friend_request(sender, current_user.name)
                db.session.execute(db.delete(Pending_Fr_Request).where(Pending_Fr_Request.sender == sender).where(Pending_Fr_Request.receiver == current_user.name))
                db.session.commit()
        return render_template('fr_request_inbox.html', acc_name=current_user.name, fr_requests=raw_requests)
    
    @app.route('/chat-room')
    def chat_room():
        f = open("static/text/get_name.txt", "r")
        chat_name = f.read()
        
        return render_template('chat_room.html', chat_name=chat_name)
    
    @socket.on('connect')
    def connect(auth):
        room = session.get('room')
        print(room)

        join_room(room)
        send({"name": current_user.name, "message": "has joined the chat!"}, to=room)
        print('Connected')

    @socket.on("disconnect")
    def disconnect():

        room = session.get('room')

        leave_room(room)

        send({"name": current_user.name, "message": "has left the chat. :("}, to=room[0])
        print('Disconnected')

    @socket.on("message")
    def message(data):

        room = session.get('room')

        content = {
            "name": current_user.name,
            "message": data["data"]
        }
        send(content, to=room)

    
    

    
   