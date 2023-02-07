const scores = [10, 15, 20, 0, 40, 60, 70];

const firstHighScore = scores.find((score)=>{
    return score > 50;
});

console.log(firstHighScore);