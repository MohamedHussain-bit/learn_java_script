// praivet proberte
class Car{
    // priavet proberte
        #price;
    constructor(color , price , type){
        
        this.color = color
        this.#price = price
        this.type = type
    }
    getPrice(){
        return parseInt(this.#price)
    }
}

let car1 = new Car("white" , "1000000 genah" , "PMW")
console.log(car1.getPrice() * 2)
