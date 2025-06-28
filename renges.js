// renges in regular expretion
// | => or 
let tld = "Com info Web li"
let tldRe = /com|li|web/ig
console.log(tld.match(tldRe))
// [] => renge to from
let num = "12345678910"
let numRe = /[0-5]/g
console.log(num.match(numRe))
// ^ => not
let num2 = "12345678910"
let numRe2 = /[^0-5]/g
console.log(num2.match(numRe2))
