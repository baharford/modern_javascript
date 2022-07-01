// rest parameter
const double = (...nums) => {  // <-- this ... in the rest parameter
    console.log(nums);
    return nums.map(num => num*2);
}

const result = double(1,3,5,7,9,2,4,6,8);
console.log(result);

// spread syntax (arrays)
const people = [ 'shaun', 'ryu', 'crystal'];
const members = ['mario', 'chun-li', ...people];
console.log(...people);
console.log(...members);

// spread syntax (objects)
const person = {name: 'shaun', age: 30, job: 'net ninja'};
const personClone = {...person, location: 'manchester'};

console.log(personClone);
