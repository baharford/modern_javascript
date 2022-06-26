// Parents, Children & Siblings

const article = document.querySelector('article');

// cant use forEach on HTMLCollection, so need to make it an array
// console.log(article.children);
// console.log(Array.from(article.children));

// parent-child relationship
Array.from(article.children).forEach(child => { 
    child.classList.add('article-element');
});

// child-parent relationship
const title = document.querySelector('h2');
console.log(title.parentElement);

// can chain them togethter
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);