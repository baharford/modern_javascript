// classes
class User { 
    constructor(username, email){ 
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login() { 
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout() { 
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore() { 
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User { 
    deleteUser(userToDelete) { 
        users = users.filter(currentUser => currentUser.username !== userToDelete.username);
    }
}

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

const userOne = new User('mario', 'mario@thenetninja.co.uk'); // an 'instance' of the object
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk');

console.log('userOne', userOne);
console.log('userTwo', userTwo);

// userOne.login();
// userTwo.login();

// userOne.logout();
// userTwo.logout();

userOne.login().incScore().incScore().incScore().logout(); // method chaining possible when you return this
console.log(userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

