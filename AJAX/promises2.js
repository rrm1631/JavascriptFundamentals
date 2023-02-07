//Basically a simpler way  to understand promises, NOT NET NINJA

// Syntax:
var promise1 = new Promise(function(resolve, reject){
    //do something
});


// Example
var promise = new Promise(function(resolve, reject) {
    const x = "you are a master";
    const y = "you are a master";
    if(x === y) {
      resolve(x); //you can pass in data here for the then() method
    } else {
      reject('pass error');
    }
  });
     
promise.then(function (data) {
    console.log('Success', data);
}).catch(function (error) {
    console.log('Some error has occurred', error);
});