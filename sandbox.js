// getting & setting attributes

const link = document.querySelector('a');

// get the attribute
console.log(link.getAttribute('href'));

// set the attribute
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const message = document.querySelector('p');
console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');

message.setAttribute('style', 'color: green');