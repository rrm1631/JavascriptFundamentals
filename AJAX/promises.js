//How to use promises instead of callback Hell
const getTodos = (resource)=>{  
   
   return new Promise((resolve, reject)=>{ 
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=>{
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }

            else if(request.readyState === 4){
                reject('error getting resource');
            }
        });

        request.open('GET', resource); //used resource param to make request
        request.send();
    });
}

getTodos('todos/mario.json').then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

//refer to the buttom for better understanding of promises








//DUMMY PROMISE EXAMPLE:


//promises example 
//its use to either resolve or reject something and fires either of the two functions depending on that

/*
const getSomething = () =>{
    return new Promise((resolve, reject)=>{ //parameters resolve and reject are built in functions for promises
        //fetch something

        let x = 0;

        if (x == 0) {
            resolve('some data');
        } else {
            reject('some error')
        }
    });
};


//Promise.then() takes two arguments, a callback for success and another for failure.
getSomething().then( (data)=>{ //when there is a resolve it fires the .then() method
    console.log(data);
}, (error)=>{ //else if there is a reject it fires the second callback function for the error
    console.log(error);
});


//Alternate Way using .catch()
getSomething().then( (data)=>{ //when there is a resolve it fires the .then() method
    console.log(data);
}).catch( (error)=>{
    console.log(error);
});
*/

