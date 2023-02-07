//async & await
const getTodos = async () =>{ //adding async will always return a promise
    const response = await fetch('todos/mario.json');
    //await stops it from assigning a value to the variable until promise has been resolved
    if(response.status  !== 200){
        throw new Error('cannot fetch data'); //will throw an error, to the promise. If it throws an error it will be rejected
    }

    const data = await response.json();
    return data;
};

getTodos().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error.message);
});




// fetch('todos/mario.json').then((response)=>{//fetch() method returns a promise, therefor you can use then & catch
//     console.log('resolved', response);
//     return response.json(); 
//     //fetches the response data and parse into a javascript obj, similar to "const data = JSON.parse(data);"
//     //if response is return in a promise, it will chain into the promise as data
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log('rejected', error);
// });
