# Read the given file and store them in a list of dictionaries
fn = open('new.txt', 'r')

disctionary = {}
with fn as f:
    for line in fn:
        keys, description =line.split(" ", 1)
        newKey = keys.replace(":" , "")
        disctionary[newKey] = description.strip()

print([disctionary])