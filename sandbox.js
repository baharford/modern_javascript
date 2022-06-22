// type conversion

let score = '100';

console.log(score + 1); // 1001 because score is a string
console.log(typeof score);

score = Number(score);
console.log(score + 1); // 101 because score has been converted to a number
console.log(typeof score);


// let result = Number('hello');
// console.log(result); // NaN

// let result = String(500);
// console.log(result, typeof result);

// let result = Boolean(100); // positive and negative numbers are truthy
let result = Boolean(0); // 0 numbers are falsey
console.log(result, typeof result);
