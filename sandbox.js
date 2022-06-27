// async code in action
const getTodos = (resource) => { 
    return new Promise((resolve, reject) => { 
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            //console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200) { 
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting resource');
            }
        });
    
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
        // request.open('GET', 'todos.json');
        request.open('GET', resource);
        request.send();
    });
}

console.log(1);
console.log(2);

// promise example
const getSomething = () => {

    return new Promise((resolve, reject) => { // something that's going to take some time to do.  Will either be 'resolved' = get the data you want, or 'rejected' = don't get data you want
        // fetch something
        resolve('some data');
        reject('some error');
    }); 
};


// one way to use promises
// getSomething().then((data) => { 
//     console.log(data); // first callback function fires if we resolve
// }, (err) => { 
//     console.log(err); // second callback function fires if we reject
// });

console.log(3);
console.log(4);

// second way to use promises using 'catch'
// getSomething().then(data => { 
//     console.log(data);
// }).catch(err => { 
//     console.log(err);
// });

//resolved 
getTodos('todos/luigi.json').then(data => {
    console.log('promise resolved: ', data);
}).catch(err => {
    console.log('promise rejected:', err);
});

// rejected
getTodos('todos/luigi_notexisting.json').then(data => {
    console.log('promise resolved: ', data);
}).catch(err => {
    console.log('promise rejected:', err);
});