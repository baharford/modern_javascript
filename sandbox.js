// creating an object literal

let user = { 
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'Berlin',
    blogs: ['why mac and cheese rules', '10 things to make with marmite']
};

// using dot notation
console.log(user);
console.log(user.name);

// how to update property on an object
user.age = 35;
console.log(user.age);

// can use square bracket notation
console.log(user['name']);
console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name']);
