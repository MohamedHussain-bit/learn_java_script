// object
let User = {
    // propertes
    nameUser : "Mohamed",
    age : 19,
    // methodes
    sayHello : function(){
        return `Hello ${this.nameUser}`
    }
}

console.log(User.nameUser)
console.log(User.age)
console.log(User.sayHello())
// nested object
let User2 = {
    // propertes
    nameUser2 : "Ali",
    age : 20,
    // methodes
    sayHello : function(){
        return `Hello ${this.nameUser}`
    },
    // nested object
    addres : {
        egypt : "ALshai5 Zaied",
        kas : "ALriade"
    }
}
// new Object()
let User3 = new Object({
    nameUser3 : "Mena"
}) 
// assign()
let all = Object.assign({} , User , User2 , User3)
console.log(all)
