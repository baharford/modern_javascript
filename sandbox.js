// reduce method -- returns a value based on an array
//const scores = [10, 20, 60, 40, 70, 90, 30];

// simple example -- get a count of scores > 50
// const result = scores.reduce((acc, curr) => { // acc is like a running total, curr is current value
//     if(curr > 50) {
//         acc++;
//     }
//     return acc;
// }, 0); // this argument is the initial value of acc

// console.log(result);


// a more complex example -- use reduce to add up total score of mario
const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
]

const marioTotal = scores.reduce((acc, curr) => {
    if(curr.player === 'mario') {
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioTotal);