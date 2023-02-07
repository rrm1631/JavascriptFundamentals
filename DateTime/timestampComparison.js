const now = new Date(); //date today is december 6, 2022
const before = new Date('December 1 2022 7:30:59');


const diff = now.getTime() - before.getTime(); //gets the difference of both date in miliseconds

const mins = Math.round(diff / 1000 / 60); //Formula to get minute, (miliseconds/1000 for 1 sec/ 60 for minutes)
const hrs = Math.round(mins/60);
const days = Math.round(hrs/24);

console.log(`the blog was written ${days} days ago.`); 


//converting timestamps into dates
const timestamp = now.getTime();
console.log(new Date(timestamp)); //this will convert timestamp into a date object
