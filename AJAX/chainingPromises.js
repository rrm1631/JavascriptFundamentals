//How to chain promises, refer to promises.js for better understanding
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
 

 //Compare w/ callbackHellResource.js 
 getTodos('todos/mario.json').then((data)=>{ //fires when resolve
    console.log('promise 1 resolved', data);
    return getTodos('todos/luigi.json');
}).then( (data) =>{
    console.log('promise 2 resolved', data);
    return getTodos('todos/raph.json');
}).then( (data) =>{
    console.log('promise 3 resolved', data);
}).catch((error)=>{ // fires when reject, no need to rewrite for every sequencial request
    console.log('promise rejected',error);
});
 
 
 
 
 