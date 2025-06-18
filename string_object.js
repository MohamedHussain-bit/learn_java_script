// string object
// trim() remove the space from the string
let name1 = "  Mohamed  ";
console.log(name1.trim());
// toUpperCase() turn the alphbet caracrters to upper case
console.log(name1.toUpperCase());
// toLowerCase() turn the alphbet caracrters to lower case
console.log(name1.toLowerCase());
// charAt() return the posetion element in string
console.log(name1.trim().charAt(5).toUpperCase());
// indexOf() sarch the element in the string
console.log(name1.indexOf("e"));
// lastIndexOf() sarch the element in the string in the end
console.log(name1.lastIndexOf("M"));
// slice(start , end) cut the string
console.log(name1.slice(2 , 8));
// repete() to repeat string
console.log(name1.repeat(5));
// split() turn the string to array
console.log(name1.split(""));
// substring(start , end) cut the string
let nameUser = "Mohanad Hesham";
console.log(nameUser.substring(8 , 14));
// substr(start , numChar) cut string
console.log(nameUser.substr(-6 ,6));
// includes() cheack if the string contain element
console.log(nameUser.includes("jv"));
// startWith() cheack the string start whith element
console.log(nameUser.startsWith("M"));
