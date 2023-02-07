//regular function
// const calcArea = function(radius){
//     return (3.14 * radius**2);
// }


//arrow function
const calcArea = (radius) => {
    return (3.14 * radius**2);
}

const area = calcArea(5);
console.log("The area is: ", area);

//NOTE:
// 1. using a arrow function, you can remove the () if there is only 1 argument being passed.
// 2. it automatically returns a value if it has only one line of code, no need to use a return method 
// Ex. const greet = (greeting) => `you said ${greeting}`; - will return the string




//practice
const bill = (products, tax) => {
    let total = 0;
    
    for(let i=0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }

    return total;
}

let price = bill([10,15,30], 0.2);
console.log(price);
