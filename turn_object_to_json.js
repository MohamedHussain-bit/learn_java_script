// turn object to json
const myJson = '{"userName" : "Mohamed","age": 19}'

const myobject = JSON.parse(myJson)
console.log(myJson)
console.log(myobject)

myobject["userName"] = "Mena"
myobject["age"] = 20

const myJsonToServer = JSON.stringify(myobject)
console.log(myJsonToServer)
