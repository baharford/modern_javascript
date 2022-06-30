// lots of duplication this way (object literals)... :(
const userOne = { 
    username: 'ryu',
    email: 'ryu@thenetninja.co.uk',
    login() { 
        console.log('the user logged in');
    },
    logout() { 
        console.log('the user logged out');
    }
}

const userTwo = { 
    username: 'chun-li',
    email: 'chun-li@thenetninja.co.uk',
    login() { 
        console.log('the user logged in');
    },
    logout() { 
        console.log('the user logged out');
    }
}

console.log(userOne.email, userOne.email);
userOne.login();

console.log(userTwo.email, userTwo.email);
userTwo.login();


// would be nice to be able to do something like this ... (in next chapter)
const userThree = new User('shaun@thenetninja.co.uk', 'shaun');

