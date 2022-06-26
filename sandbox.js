// Adding & Removing Classes

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');


// loop through each p tag
// if it contains text 'error' then update class to have 'error'
// if it contains text 'success' then update class to have 'success'
const paras = document.querySelectorAll('p');

paras.forEach(para => { 
    if(para.textContent.includes('error')) {
        para.classList.add('error');
    }
    if(para.textContent.includes('success')) { 
        para.classList.add('success');
    }
});


// how to toggle classes
const title = document.querySelector('.title');

// will add or remove a class from the list depending on what's already there
title.classList.toggle('test');
title.classList.toggle('test');
