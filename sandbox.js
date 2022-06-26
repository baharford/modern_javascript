// Changing CSS Styles

const title = document.querySelector('h1');

// overwrites existing style
// title.setAttribute('style', 'margin: 50px;');

// how to add to existing style
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';

// delete a style
title.style.margin = '';