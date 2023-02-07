let name = "Raph";
let GPA = 93.5;
let school = "DLSUD";

//Using Concatenation
console.log(name + " Graduated from " + school + " with an average grade of " + GPA);

//Using Template String
console.log(`${name} Graduated from ${school} with an average grade of ${GPA}`);// uses backticks ``


//creating html templates
let html = `
    <h2> ${title} </h2>
    <p> Author: ${name} <p>
`;