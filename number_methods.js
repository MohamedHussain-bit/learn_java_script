// number methods 
// toString() bucause turn number to string
let number = 100;
let string = number.toString();
console.log(string);
console.log(typeof string);
// toFixed() bucause return lemeted number after .
let visetor = 1000.123456789;
console.log(visetor.toFixed(2));
// parseInt() return number
let age = "19 from Mohamed";
console.log(parseInt(age));
// parseFloot() because return number float
let salary = "10000.500 from Mohamed";
console.log(parseFloat(salary).toFixed(3));
// Number.isInteger() check if the number integer
let theNum = 100.5
console.log(Number.isInteger(theNum))
// Number.isNan() check if the number is number
let name1 = "Mohamed"
console.log(Number.isNaN(name1))