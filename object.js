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
