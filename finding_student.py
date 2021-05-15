import  pymongo

myConnection = pymongo.MongoClient("mongodb://localhost:27017/") #Create connection to mongoDB

myDB = myConnection["StudentDatabase"] #create database for student data

myTable = myDB["studentData"] # Create collection For student

query = {"Roll_no" : "51"}

x = myTable.find(query)

for y in x:
  print(y)
