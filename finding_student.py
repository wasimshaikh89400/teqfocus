import  pymongo

myConnection = pymongo.MongoClient("mongodb://localhost:27017/") #Create connection to mongoDB

myDB = myConnection["StudentDatabase"] #create database for student data

myTable = myDB["studentData"] # Create collection For student

x = myTable.find_one({}, {"Roll_no" : "51" , "firstName":1 , "lastname" :1 , "DOB" : 1 , "class" : 1 })

print(x)