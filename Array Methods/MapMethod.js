const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map((price)=>{
    return price/2;
});

console.log(prices);
console.log(salePrices);

const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'red shell', price: 10 },
    { name: 'flower', price: 50 }
];

const onSaleProducts = products.map((product)=>{
    if(product.price > 30){
        return {name: product.name, price: product.price/2 };
    }
    else{
        return product;
    }
});
console.log(products);
console.log(onSaleProducts);