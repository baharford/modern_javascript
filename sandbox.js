// filter method
const scores = [10, 30, 15, 25, 50, 40, 5];

// simple example
// console.log(scores);

// .filter() is non-destructive, so it doesn't change the orginal array.  have to set new array to filtered values
// const filteredScores = scores.filter((score) => { 
//     return score >= 20;
// })

// console.log(filteredScores);



// more complex example
const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true},
]

const premiumUsers = users.filter(user => {
    return user.premium;
});

console.log(premiumUsers);