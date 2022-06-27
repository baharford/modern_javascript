// async code in action
console.log(1);
console.log(2);

setTimeout(() => { 
    console.log('callback funtion fired');
}, 2000);

console.log(3);
console.log(4);
