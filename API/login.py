from flask import Flask , render_template , request , redirect , url_for , flash, jsonify
from db import *
from user import *
app = Flask(__name__)

@app.route('/')
def index():
    return {'status':'success', 'message':'welcome to the api'}

@app.route('/get_home_page', methods=['GET', 'POST'])
def home_page():
    books = get_all_cource_data()
        
    return jsonify({'responseMessage':'success', 'responseCode': 1, 'data':books})
    
@app.route("/login", methods=['GET', 'POST'])
def Login():
    if request.method == 'POST':
        print(request.form['username'])
        print(request.form['password'])
        user = VaildateUser(request.form['username'], request.form['password'])
        if user.check_user_exist():
            if user.validate_user():
                return jsonify({'responseMessage':'success', 'responseCode': 1, 'userId':user.get_user_id()})
            else:
                return jsonify({'responseMessage':'failed! Incorect Password', 'responseCode': 0})
        else:
            return jsonify({'responseMessage':'failed! User not found', 'responseCode': 0})
    else:
        return jsonify({'responseMessage':'get method not alow', 'responseCode': 0})
    
    
if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0', port=5000)