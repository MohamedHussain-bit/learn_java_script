// dustructuring 
let nameUser = ["Mohamed" , "Ali" , "Omer" , "Mena" , "Mai"]
let [a , b , c , d , e] = nameUser

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
// dustricturing from object
let user = {
    name1 : "Mena",
    age : 19,
    frinds : ["Mohamed" , "Osama" , "Mai" ,"Marwa" , "Farida"],
    addres : {
        egypt : "Cairo",
        kas : "Alriad"
    }
}
let {   
    name1 : n ,
     age : g ,
     frinds : [one , ,three , , five ] ,
     addres : {egypt : eg}
    } = user
console.log(n)
console.log(g)
console.log(one)
console.log(three)
console.log(five)
console.log(eg)