let people = ['mario', 'luigi', 'yoshi', 'ryu', 'wario'];

// people.forEach(function(person){
//     console.log(person);
// });



//using arrow function
// people.forEach((person)=>{ //forEach methods expects a function w/ the args(value,index)
//     console.log(person);
// });




//using callback functions   
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson)






//Example 2
let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(sum)





//Callback function in Action
const ul = document.querySelector('.people');

let html = ``;
people.forEach((person) => {
    html += `<li> ${person} </li>`;
});

ul.innerHTML = html;
