// async and await (best way to do non-blocking calls in javascript)
const getTodos = async () => { // adding 'async' always returns a promise
    const response = await fetch('todos/luigi.json'); // do this fetch and wait for the promise to resolve

    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();

    return data;
};

// const test = getTodos(); // returns a promise
// console.log(test); // outputs a promise - not what we want... so we have to use .then()

console.log(1);
console.log(2);
getTodos()
    .then(data => { console.log('resolved', data)})
    .catch(err => console.log('rejected:', err.message));
console.log(3);
console.log(4);


// fetch('todos/luigi.json').then((response) => {
//     if(response.status === 200) { 
//         console.log('resolved', response);
//         return response.json(); // returns a promise
//     } else { 
//         console.log('error: ' + response.status);
//     }
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err); // promise only ever rejected if you get some kind of network error
// });

