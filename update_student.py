myConnection = pymongo.MongoClient("mongodb://localhost:27017/") #Create connection to mongoDB

myDB = myConnection["StudentDatabase"] #create database for student data

myTable = myDB["studentData"] # Create collection For student

query = {"Roll_no" : "4"}


x = myTable.find(query)

for y in x:
  print("Before update " + str(y))


updateQuery = {"$set" : {"DOB" : "20 December 1996"}}

x = myTable.update_one( query , updateQuery)

x = myTable.find(query)

for y in x:
  print("After update " + str(y))
