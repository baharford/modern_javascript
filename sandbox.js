// using 'this' keyword with an object

let user = { 
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'Berlin',
    blogs: ['why mac and cheese rules', '10 things to make with marmite'],
    login: function() {
        console.log('the user logged in');
    },
    logout: function() { 
        console.log('user logged out');
    },
    logBlogs: function() { 
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

user.logBlogs();