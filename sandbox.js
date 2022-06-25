// primitive values (changes value on the stack so they can be different)

let scoreOne = 50
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);


// reference values (changes pointer on the heap so both values are updated)

const userOne = { name: 'ryu', age: 30 };
userTwo = userOne;

console.log(userOne,userTwo);

userTwo.age = 50

console.log(userOne,userTwo);
