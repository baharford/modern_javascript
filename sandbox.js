// query selector (returns a single element)

// by element
// const para = document.querySelector('p');

// by class name
// const para = document.querySelector('.error');

// by class name
// const para = document.querySelector('body > h1');

// by element and class name
const para = document.querySelector('div.error');

console.log(para);


// select multiple elements (returns a node list)

const paras = document.querySelectorAll('p');

paras.forEach(para => { 
    console.log(para);
});

console.log(paras);
console.log(paras[0]);

const errors = document.querySelectorAll('.error');
console.log(errors);