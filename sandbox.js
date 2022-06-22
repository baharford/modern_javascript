// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) { 
    if(scores[i] === 0) { 
        continue; // exit current part of loop and continue on
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100) { 
        console.log('congrats, you got the top score!');
        break; // breaks us out of the loop
    }
}

