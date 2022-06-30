// prototype model (if not using Class -- don't use this, just an example of how things worked before class keyword existed in javascript)

// every object in JavaScript has a prototype
// prototypes contain al lthe methods for that object type (like a toolbelt for the object)

// this is the same thing as the class below
function User(username, email){ 
    this.username = username;
    this.email = email;
}

// store the login method from the class to the prototype
User.prototype.login = function() {
    console.log(`${this.username} has logged in`);
    return this;
}

User.prototype.logout = function() {
    console.log(`${this.username} has logged out`);
    return this;
}

const userOne = new User('mario', 'mario@thenetninja.co.uk'); // an 'instance' of the object
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
userOne.login().logout();

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

