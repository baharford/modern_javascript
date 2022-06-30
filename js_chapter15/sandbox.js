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
 
function Admin(username, email, title) { 
    User.call(this, username, email); // pass in the call object and then the call parameters
    this.title = title;
}

Admin.prototype = Object.create(User.prototype); // create a copy of the user prototype inside the admin prototype

const userOne = new User('mario', 'mario@thenetninja.co.uk'); // an 'instance' of the object
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenextninja.co.uk', 'black-belt,ninja');


console.log(userOne, userTwo, userThree);
