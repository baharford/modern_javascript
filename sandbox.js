// Testing RexEx Patterns
const form = document.querySelector('.signup-form');

form.addEventListener('submit', e => {
    e.preventDefault(); // submit action refershed page by default unless you have this
    // console.log(username.value);
    console.log(form.username.value); // another way to get a field from a form

});


// testing RegEx
const username = 'shaunp';
const pattern = /^[a-z]{6,}$/

// let result = pattern.test(username);

// if(result) {
//     console.log('regex test passed :)');
// } else {
//     console.log('regex test failed :(');
// }


// returns the index of where the start of the pattern is found
// const username = '123shaunp55';
// const pattern = /[a-z]{6,}/
let result = username.search(pattern);
console.log(result);

