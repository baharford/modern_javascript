// constructor functions

// this is the same thing as the class below
function User(username, email){ 
    this.username = username;
    this.email = email;
    this.login = function() {
        console.log(`${this.username} has logged in.`);
    }
}

// this is the new way to create objects (syntatical sugar)
// class User { 
//     constructor(username, email){ 
//         // set up properties
//         this.username = username;
//         this.email = email;
//     }
// }

const userOne = new User('mario', 'mario@thenetninja.co.uk'); // an 'instance' of the object
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
userOne.login();

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

