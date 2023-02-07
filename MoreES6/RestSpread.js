//rest parameter
const double = (...nums) => {
    console.log(nums);

    return nums.map( num => num*2 );
}

const result = double(1,2,3,4,5);
console.log(result);





//spread parameter (Array)
const people = ['Raph', 'Mario', 'Luigi'];
console.log(...people);


const member = ['Yoshi', 'Peach', ...people];
console.log(member);

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);


//spread parameter (Objects)
const person = {
    name : 'Raph',
    age : 23,
    job : 'WebDev'
}

const person2 = {...person, location: 'Dasmarinas'}
console.log(person2);