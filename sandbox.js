
// function expression (hoisting doesn't work)
const speak = function(){
    console.log('good day!');
};

speak();

greet(); // works because of "hoisting" with function declaration

// function declaration
function greet() { 
    console.log('hello there');
}
