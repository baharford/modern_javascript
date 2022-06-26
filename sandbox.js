// adding and changing page content

const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome';

const paras = document.querySelectorAll('p');

// change the text of something
// paras.forEach(para => { 
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });


// change the html of something
const content = document.querySelector('.content');

// //console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';


const people = ['mario', 'luigi', 'yoshi']; 

// cycle through the people and generate some html template
people.forEach(person => { 
    content.innerHTML += `<p>${person}</p>`;
});

