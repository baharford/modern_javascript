// variables and block scope
let age = 30; // variable defined in root has global scope

if(true) { 
    let age = 40; // "local scope" - allowed to redefine in code block even though declared globally elsewhere
    let name = 'shaun';
    console.log('inside first code block: ', age, name);

    if(true) { 
        let age = 50; // creating another new local scope inside this code block
        console.log('inside second code block', age); 
    }
}

console.log('outside code block: ', age, name); // name doesn't appear in output because it was defined inside the code block

