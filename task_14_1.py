# Read the given file and store them in a list of dictionaries
try:
    fn = open('new.txt', 'r')
    dictionary = []

    for line in fn:
        keys, description = line.split(" ", 1)
        newKey = keys.replace(":", "")
        dictionary.append({"id": newKey, "data": description.strip()})

    print(dictionary)
except:
    print("Hey , Something went wrong! Possibely check the file name")




