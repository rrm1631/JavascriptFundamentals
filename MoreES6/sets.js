const numbers = [1,2,3,3,4,5,6,5];

const numSet = new Set(numbers);
console.log(numSet);

//convert back to array using spread
const newNums = [...numSet];
console.log(newNums);


//empty set
const ages = new Set();
ages.add(18);
ages.add(23);
ages.add(24).add(26); //can be chained

ages.delete(18);

console.log(ages);
console.log(ages.size);