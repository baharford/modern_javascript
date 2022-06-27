// fetch api

fetch('todos/luigi.json').then((response) => {
    if(response.status === 200) { 
        console.log('resolved', response);
        return response.json(); // returns a promise
    } else { 
        console.log('error: ' + response.status);
    }
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err); // promise only ever rejected if you get some kind of network error
});


// first fetch the data
// then return response.json
// then use the data