const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

// add recipe to ui
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

// delete recipe from UI
const deleteRecipe = (id) => { 
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => { 
        if(recipe.getAttribute('data-id') === id) { 
            recipe.remove();
        }
    });
};

// get documents in real time
const unsub = db.collection('recipes').onSnapshot(snapshot => { // on 'snapshot' means everytimes there's a change in the db
    snapshot.docChanges().forEach(change => { 
        const doc = change.doc;
        if(change.type === 'added') { 
            addRecipe(doc.data(), doc.id);
        } else if (change.type === 'removed') { 
            deleteRecipe(doc.id);
        }
    });
});



// add documents to db
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

// deleting data from db
list.addEventListener('click', e => { 
    if(e.target.tagName === 'BUTTON') { 
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() => { 
            console.log('recipe deleted!');
        });
    }
});

// unsub from databse changes
button.addEventListener('click', () => { 
    unsub();
    console.log('unsubscribed from collection changes');
});