// else if statements

const password = 'p@ssword1234';

if(password.length >= 12) { 
    console.log('that password is mighty strong');
}
else if(password.length >= 8){ 
    console.log('that password is long enough!');
} else { 
    console.log('that password is NOT long enough!');
}