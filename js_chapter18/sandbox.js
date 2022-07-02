// symbols - can be used as keys or property names in objects

const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne, symbolTwo, typeof symbolOne);

console.log(symbolOne === symbolTwo); // false , symbols are always unique


const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';

console.log(ninja);


