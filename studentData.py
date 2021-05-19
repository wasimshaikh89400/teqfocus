import pymongo
from flask import Flask, Response
import json
app = Flask(__name__)

try:
    myConnection = pymongo.MongoClient("mongodb://localhost:27017/")
except:
    print('database are not connected')

myDB = myConnection["StudentDatabase"] #create database for student data

myData = myDB["studentData"]


#return data of all student

@app.route('/getData', methods=["GET"])
def getDataAll():
    try:
        data = list(myData.find())
        for x in data:
            x["_id"] = str(x["_id"])
        return  Response(
            response=json.dumps({"student data" : data}),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response= json.dumps({"message":" Sorry something goes wrong"}),
            status = 500
        )

#return the data of specific student based on name

@app.route('/getData/<name>', methods=["GET"])
def getdata(name):
    try:
        data = list(myData.find({'firstName': name}))
        for x in data:
            x["_id"] = str(x["_id"])
        return  Response(
            response=json.dumps({"student data" : data}),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response= json.dumps({"message":" Sorry something goes wrong"}),
            status = 500
        )

if __name__ == '__main__':
    app.run(debug=True)
