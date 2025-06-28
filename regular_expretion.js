// regular expretion
//! / patern / modefires
let cong = "Hello Elzero welcom to elzero"
// i => ignor case latter
let search = /elzero/i
console.log(cong.match(search))
// match() match tow string
// g => global
let cong2 = "Hello Elzero welcom to elzero"
let search2 = /elzero/ig
console.log(cong2.match(search2))