// arguments & parameters

const speak = function(name = 'luigi', time = 'night') { 
    console.log(`good ${time} ${name} !`);
}

speak(); // function will use default values if we don't assign
speak('mario', 'morning');