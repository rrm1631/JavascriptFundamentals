//How to fetch multiple JSON data in order
const getTodos = (resource, callback)=>{  //added resource param
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }

        else if(request.readyState === 4){
            callback('could not fetch the data', undefined);
        }
    });

    request.open('GET', resource); //used resource param to make request
    request.send();
}


//Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
//Callback hell, makes it harder to maintain if it follows the same procedure
//created a nested callback functions in order to display multiple json objects
getTodos("todos/raph.json", (err, data)=>{ //added json path
    console.log(data);

    getTodos("todos/mario.json", (err, data)=>{ 
        console.log(data);

        getTodos("todos/luigi.json", (err, data)=>{ 
            console.log(data);
        });
    });
});
