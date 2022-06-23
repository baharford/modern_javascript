// regular function
// const calcArea = function(radius) { 
//     return 3.14 * radius**2;
// }

// arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// shortened - when you have only 1 parameter you can remove the brackets ()
// const calcArea = radius => {
//     return 3.14 * radius**2;
// };

// shortened - when you only have 1 return value, you don't need the curly braces or the return word
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log(area);

const greet = () => 'hello, world';
const result = greet();
console.log(result);

const bill = (products, tax) => { 
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

const actualBill = bill([10, 20], 1.07);
console.log(bill([10, 20], 0.07));

