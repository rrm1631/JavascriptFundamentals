const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'red shell', price: 10 },
    { name: 'feather', price: 30 },
    { name: 'flower', price: 50 }
];

//Typhical use of array Methods
// const filtered = products.filter((product)=>{
//     return product.price > 20;
// });

// console.log(filtered);

// const promos = filtered.map((product)=>{
//     return `the ${product.name} is currently ${product.price/2}$`;
// });

// console.log(promos);




//Chaining Array Methods
const promos = products
    .filter( (product)=> product.price > 20 )
    .map((product)=> `the ${product.name} is currently ${product.price/2}$`);

console.log(promos);

//NOTE: you can remove 'return' and '{}' if it is only a oneline block of codes