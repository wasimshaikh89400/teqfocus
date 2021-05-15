import  pymongo

myConnection = pymongo.MongoClient("mongodb://localhost:27017/") #Create connection to mongoDB

myDB = myConnection["StudentDatabase"] #create database for student data

myTable = myDB["studentData"] # Create collection For student

query = {"Roll_no" : "3"}

x = myTable.delete_one(query)

print(x)