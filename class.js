// class in js
class User{
    constructor(id , userName , age){
        this.id = id
        this.userName = userName
        this.age = age
    }
}
let userOne = new User(100 , "Ali" , 50)
let userTwo = new User(101 , "Ahmed" , 60)
let userThree = new User(102 , "Maohamed" , 70)

console.log(userOne.id)
console.log(userOne.userName)
console.log(userOne.age) 
console.log("*".repeat(15)) 

console.log(userTwo.id)
console.log(userTwo.userName)
console.log(userTwo.age)
console.log("*".repeat(15)) 

console.log(userThree.id)
console.log(userThree.userName)
console.log(userThree.age)
