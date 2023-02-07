//How to fetch JSON Data as a javascript obj
const getTodos = (callback)=>{ 
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText); //parse JSON data as javascript obj
            callback(undefined, data);
        }

        else if(request.readyState === 4){
            callback('could not fetch the data', undefined);
        }
    });

    request.open('GET', 'todos.json');
    request.send();
}

getTodos((err, data)=>{
    console.log("callback fired");
    if(err){
        console.log(error);
    }

    else{
        console.log(data);
    }
});
