const scores = [10, 30, 15, 25, 50, 40, 5];

const newScores = scores.filter((score)=>{
    return score > 20;
});

console.log(scores);
console.log(newScores);

//Check if user is premium using filter
const users = [
    { name: 'Mario', premium: true },
    { name: 'Luigi', premium: false },
    { name: 'Yoshi', premium: false },
    { name: 'Bowser', premium: true }
];

const premiumUsers = users.filter((user)=>{
    return user.premium == true;
    //Or simply return user.premium xD
});

console.log(premiumUsers);