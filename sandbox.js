// Basic Form Validation
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e => {
    e.preventDefault(); // submit action refershed page by default unless you have this
    
    // validation
    const username = form.username.value;
    //const usernamePattern = /^[a-zA-Z]{6,12}$/
    if(usernamePattern.test(username)) {
        // feedback good info
        feedback.textContent = 'that username is valid!';
    } else {
        // feedback help info
        feedback.textContent = 'username must contain letters only and be between 6 and 12 characters';
    }

    console.log(form.username.value); // another way to get a field from a form
});




// live feedback - add class to element depending on regex which will highlight text file
form.username.addEventListener('keyup', e => {
    console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)) { 
        // passed
        form.username.setAttribute('class', 'success');
    }
    else {
        // failed
        form.username.setAttribute('class', 'error');
    }
});

