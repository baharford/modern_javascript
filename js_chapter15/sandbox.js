// classes
class User { 
    constructor(username, email){ 
        // set up properties
        this.username = username;
        this.email = email;
    }
}

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

const userOne = new User('mario', 'mario@thenetninja.co.uk'); // an 'instance' of the object
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

console.log('userOne', userOne);
console.log('userTwo', userTwo);

