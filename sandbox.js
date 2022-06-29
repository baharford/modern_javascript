// sort method - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

//names.sort(); // automatically sorts names alphabetically, directly changes the array (destructive method)
//names.reverse();
names.sort().reverse(); // can chain them together to get rever alphabetial order
console.log(names);

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];
//scores.sort(); // <- this only sorts by first number, so 5 appears greater than 20
scores.sort((a, b) => {
    return b - a;
});
console.log(scores);

// example 3 - sorting objects
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70},
]

// sort by score descending (complex way)
// players.sort((a,b) => { 
//     if(a.score > b.score) { // is score of 1st one greater than score of 2nd one?
//         return -1; // if true, then -1 means a will come first
//     } else if (b.score > a.score) {
//         return 1; // if false, then swap them (by returning the -1)
//     } else {
//         return 0; // if no change is needed
//     }
// });

// console.log(players);

// simpler way
players.sort((a, b) => { 
    return b.score - a.score;
});

console.log(players);