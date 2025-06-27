// Array.from() turn iterable from array
let string = "Hello"
let array = Array.from(string)
console.log(array)

let pwor = "12345"
let pwo = Array.from(pwor , x => x * 2)
console.log(pwo)
