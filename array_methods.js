// array methods
let user = ["Ahmed" , "Mohamed" , "Osama" , "Marawan" , "Ali"]
console.log(user)
// unshift() add element to the first
user.unshift("Amir" , "Nabile")
console.log(user)
// push() add element to the end
user.push("Mena" , "Yassmen")
console.log(user)
//  shift() remove first element to the array
user.shift()
console.log(user)
// pop() remove last element to the array
user.pop()
console.log(user)
// indexOf() sarch to the array
console.log(user.indexOf("Mena"))
// lastIndexOf() sarch to the array
console.log(user.lastIndexOf("Mena"))
// includes() cheack if the array include element
console.log(user.includes("Mena"))
// sort() sorting to the array
console.log(user.sort())
// reverse() reversed to the array
console.log(user.reverse())
// slice() cut the array
console.log(user.slice(1 , 5))
// splice() delete and add to the array
console.log(user.splice(1,0,"Mai"))
// concat() concat to the arrays 
let user2 = ["Tqwa" , "Fareda"]
console.log(user.concat(user2))