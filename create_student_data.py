import pymongo

myConnection = pymongo.MongoClient("mongodb://localhost:27017/") #Create connection to mongoDB

myDB = myConnection["StudentDatabase"] #create database for student data

myTable = myDB["studentData"] # Create collection For student

dictionary = [{ "firstName" : "wasim" ,  "lastname" : "shaikh" , "DOB" : "26 November 1998" , "class" : "MCA II" , "Roll_no" : "51"} ,
              { "firstName" : "vishal" ,  "lastname" : "nangare" , "DOB" : "13 June 1998" , "class" : "MCA III" , "Roll_no" : "21"},
              { "firstName" : "krishna" ,  "lastname" : "attal" , "DOB" : "26 March 1997" , "class" : "MCA I" , "Roll_no" : "36"},
              { "firstName" : "swapnil" ,  "lastname" : "jadhav" , "DOB" : "21 May 1999" , "class" : "MCA II" , "Roll_no" : "11"},
              {"firstName" : "ajay" ,  "lastname" : "kanade" , "DOB" : "26 may 1998" , "class" : "MCA II" , "Roll_no" : "3"},
              {"firstName" : "ajay" ,  "lastname" : "kanade" , "DOB" : "26 may 1998" , "class" : "MCA II" , "Roll_no" : "4"}]

x = myTable.insert_many(dictionary)  # add data into collection

for x in myTable.find():
    print(x)