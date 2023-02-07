const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        const data = JSON.parse(this.responseText);

        data.forEach(element => {
            console.log(element.userId);
        });
    }
    else if(this.readyState == 4){
        console.log('404');
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
xhttp.send();
  

