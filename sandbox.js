// Submit Events

const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault(); // submit action refershed page by default unless you have this
    // console.log(username.value);
    console.log(form.username.value); // another way to get a field from a form

});
