const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id) => { 
    let time = recipe.created_at.toDate();
    let html = ` 
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `
    list.innerHTML += html; // append to list element
};

db.collection('recipes').get().then((snapshot) => {
    // when we have the data
    // console.log(snapshot);
    // console.log(snapshot.docs);
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => { 
        console.log(doc.data());
        addRecipe(doc.data(), doc.id);
    });
}).catch(err => { 
    console.log(err);
});

// add documents
form.addEventListener('submit', e => { 
    e.preventDefault();

    const now = new Date();
    const recipe = { 
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now) // have to use firebase timestamp object
    };

    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
    }).catch(err => {
        console.log(err);
    })

});

// deleting data 
list.addEventListener('click', e => { 
    if(e.target.tagName === 'BUTTON') { 
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() => { 
            console.log('recipe deleted!');
        });
    }
});