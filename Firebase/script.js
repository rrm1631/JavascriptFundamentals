const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id)=>{
    let time = recipe.created_at.toDate();

    let html = `
        <li data-id="${id}"> 
            <div> ${recipe.title} </div>
            <div> ${time} </div> 
            <button class="btn btn-danger btn-sm my-2"> delete </button>
        </li> 
           
    `;

    list.innerHTML += html;
};

const deleteRecipe = (id) =>{
    const recipes = document.querySelectorAll('li');
    recipes.forEach((recipe)=>{
        if(recipe.getAttribute('data-id') ===  id){
            recipe.remove();
        }
    });
};



// GET DOCUMENTS
// db.collection('recipes').get().then((snapshot)=>{//reference to the collection, that returns a promise
    
//     //fetch data from each documents
//     // console.log(snapshot.docs[0].data());   

//     //cycle thru each docs
//     snapshot.docs.forEach(doc => {
//         addRecipe(doc.data(), doc.id); 
//     });

// }).catch((error)=>{
//     console.log(error);
// }); 

//REALTIME LISTENER to fetch data
db.collection('recipes').onSnapshot((snapshot) =>{
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;

        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        }

        else if(change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    });
});


// ADD DOCUMENTS
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }

    db.collection('recipes').add(recipe).then(()=>{
        console.log('Successfully Added');
    }).catch((error)=>{
        console.log(error);
    });
});


//DELETE DOCUMENTS
list.addEventListener('click', (e)=>{
    if(e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete();
        console.log(id);
    }
});
