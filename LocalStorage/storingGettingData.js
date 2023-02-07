//Store data in Local Storage
localStorage.setItem('name', 'mario'); //param(key, value)
localStorage.setItem('age', 50);

//Get data from Local Storage
let name = localStorage.getItem('name'); //param(key)
let age = localStorage.getItem('age');
console.log(name, age);

//Update data from local storage
localStorage.setItem('name', 'luigi'); //checks if it exist it will replace it, else will create new
localStorage.age = '40'; //update item using dot notation, as an alternative

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);


//Delete data from local storage
localStorage.removeItem('name'); //param(key)
name = localStorage.getItem('name');
console.log(name);


//CLEAR ALL DATA from local storage
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);