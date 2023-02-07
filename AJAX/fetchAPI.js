//Modern Way of getting API
fetch('todos/mario.json').then((response)=>{//fetch() method returns a promise, therefor you can use then & catch
    console.log('resolved', response);
    return response.json(); 
    //fetches the response data and parse into a javascript obj, similar to "const data = JSON.parse(data);"
    //if response is return in a promise, it will chain into the promise as data
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('rejected', error);
});





//OLDER WAY using httprequest
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
 
 getTodos('todos/mario.json').then((data)=>{ //fires resolve
    console.log('promise resolved', data);
}).catch((error)=>{
    console.log('promise rejected',error); //fires reject
});
 