import requests

url = "http://192.168.1.40:5000/login"

res_data = {"username":"nitish.ns378@gmail.com", "password":"admin"}

res = requests.post(url, data=res_data)
print(res.text)
print(res.status_code)