const scores = [10, 20, 60, 40, 70, 90, 30];

const result = scores.reduce((acc, curr)=>{ //parameters accumulator, current item
    if(curr > 50){
        acc++;
    }

    return acc;
}, 0); //initial value of acc

console.log(result);

//will return 3, since there 3 values greater than 50




const scorelist = [
    { name: 'Mario', score: 50 },
    { name: 'Luigi', score: 30 },
    { name: 'Mario', score: 70 },
    { name: 'Bowser', score: 60 }
]

const marioScore = scorelist.reduce((acc, curr)=>{
    if(curr.name === 'Mario'){
        acc += curr.score;
    }

    return acc;
}, 0);


console.log(marioScore); //will return 120 since 2 mario has occured