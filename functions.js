
greet(); //works just fine
//function declaration - can be called on or before the function is declared 
function greet(){
    console.log('hello there');
}


//speak(); //will prompt an error, speak() is not defined
//function expressions - must be declared first before calling the function
const speak = function(){
    console.log('Good day');
}

speak(); // works if called after the function expression is declared

