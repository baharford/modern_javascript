// sets -- like arrays but with unique values 
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

// const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);  // <- does same thing as below
// const namesSet = new Set(namesArray);
// console.log(namesSet);

// const uniqueNames = [...namesSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);


// sets also have their own unique set of methods (different than arrays)
const ages = new Set();
ages.add(20);
ages.add(25);
console.log(ages);
ages.delete(25, ages.size); // sets use *.size rather than *.length to get size

console.log(ages.has(30)); // returns boolean

ages.clear();
console.log(ages);


