from db import *

class VaildateUser:
    def __init__(self, username, password):
        self.username = username
        self.password = password

    def validate_user(self):
        user = getCredentials(self.username)
        print("user", user)
        if user:
            if user['password'] == self.password:
                return True
            else:
                return False
        else:
            return False

    def check_user_exist(self):
        user = getCredentials(self.username)
        if user:
            return True
        else:
            return False

    def get_user_id(self):
        user = getCredentials(self.username)
        if user:
            return user['id']
        else:
            return False

    def get_user_name(self):
        user = getCredentials(self.username)
        if user:
            return user['fname']
        else:
            return False

    # forgot password