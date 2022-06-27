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
    
        request.open('GET', resource);
        request.send();
    });
}

// promise chaining (no callback hell)
getTodos('todos/luigi.json').then(data => {
    console.log('promise resolved: ', data);
    return getTodos('todos/mario.json'); // returns a promise
}).then(data => { // can use this to tack on new promises
    console.log('promise 2 resolved', data);
    return getTodos('todos/shaun.json'); // returns a promise
}).then(data => { 
    console.log('promise 3 resolved', data);
}).catch(err => {
    console.log('promise rejected:', err);
});