// map method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// simple example
// console.log(prices);

// // .map() is non-destructive, so it doesn't change the orginal array.  have to set new array to map values
// const salePrices = prices.map(price => {
//     return price / 2;
// });

// console.log(salePrices);



// more complex example
const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

const salePrices = products.map(product => {
    if(product.price > 30) {
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
    }
});

console.log(salePrices);