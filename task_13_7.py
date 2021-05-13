import codecs

f = codecs.open('chinese.txt','r+',encoding='utf-8')
content = f.read()
print(content)
f.close()
