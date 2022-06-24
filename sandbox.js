// using 'this' keyword with an object

const blogs = [
    { title: 'why mac and cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 },
];

let user = { 
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'Berlin',
    blogs: blogs,
    login() {
        console.log('the user logged in');
    },
    logout() { 
        console.log('user logged out');
    },
    logBlogs() { 
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(`title: ${blog.title} , likes: ${blog.likes}`);
        });
    }
};

user.logBlogs();