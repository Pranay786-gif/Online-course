from flask import Flask , render_template , request , redirect , url_for , flash, jsonify
from db import *
app = Flask(__name__)

@app.route('/')
def index():
    return {'status':'success', 'message':'welcome to the api'}

@app.route('/get_home_page', methods=['GET', 'POST'])
def Login():
    books = get_all_cource_data()
        
    return jsonify({'responseMessage':'success', 'responseCode': 1, 'data':books})
    
    
    
if __name__ == "__main__":
    app.run(debug=True)