let score = '100';

score = Number(score); //converts string into number
console.log(score);
console.log(typeof(score));

//let result =  Number('hello'); //returns NaN, not a number
//let result =  String(50); //converts number into string
//let result =  Boolean(0);  //0 is false, + or - numbers are true
// let result =  Boolean('0'); //strings of any lenth is true
let result =  Boolean(''); //empty strings are false

console.log(result ,typeof(score));