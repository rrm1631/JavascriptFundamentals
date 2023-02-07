const getTodos = (callback)=>{ 
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
        //console.log(request, request.readyState);

        if(request.readyState === 4 && request.status === 200){
            // console.log(request.responseText);
            callback(undefined, request.responseText);
        }

        else if(request.readyState === 4){
            // console.log('could not fetch the data');
            callback('could not fetch the data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

getTodos((err, data)=>{
    console.log("callback fired");
    // console.log(err, data);
    if(err){
        console.log(error);
    }

    else{
        console.log(data);
    }
});


// const xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//         const data = JSON.parse(this.responseText);

//         data.forEach(element => {
//             console.log(element.userId);
//         });
//     }
//     else if(this.readyState == 4){
//         console.log('404');
//     }
// };
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
// xhttp.send();
  