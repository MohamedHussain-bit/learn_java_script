// constructor function in js
function User(id , userName , salary) {
this.id = id
this.userName = userName
this.salary = salary
}
let userOne = new User(100 , "Ali" , 5000)
let userTwo = new User(101 , "Ahmed" , 6000)
let userThree = new User(102 , "Maohamed" , 7000)

console.log(userOne.id)
console.log(userOne.userName)
console.log(userOne.salary) 
console.log("*".repeat(15)) 

console.log(userTwo.id)
console.log(userTwo.userName)
console.log(userTwo.salary)
console.log("*".repeat(15)) 

console.log(userThree.id)
console.log(userThree.userName)
console.log(userThree.salary)
