// callbacks & foreach

const myFunc = (callbackFunc) => { 
    // do something
    let value = 50;
    callbackFunc(value);
};

// for argument we pass in function - this is a "callback"
myFunc(function(value){
    // do something
    console.log(value);
});

// we can turn the callback into an arrow function as well
myFunc(value => {
    // do something
    console.log(value);
});


// foreach to loop through an array with a callback
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach(function(person) {
//     console.log(person);
// });

// can convert this into arrow function too
// people.forEach((person,index) => {
//     console.log(index,person);
// });

// can use arrow function with callback as well 
const logPerson = (person, index) => { 
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);
