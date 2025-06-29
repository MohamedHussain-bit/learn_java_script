// inheratence
class User{
    constructor(id , email , nameUser){
        this.id = id
        this.email = email
        this.nameUser = nameUser
    }
     sayHello() {
        return `Hello ${this.nameUser}`
    }
}

class Admin extends User{
    constructor(id , nameUser , age){
        super(id , nameUser)
        this.age = age
    }
}
