//sorting strings
const names = ['mario', 'luigi', 'yoshi', 'bowser', 'wario'];

names.sort();
console.log(names);









//sorting numbers
const scores = [10, 15, 20, 0, 40, 5, 50, 60, 70];
//NOTE: sort only looks at the first digit/character to sort the element.

scores.sort();
console.log(scores);

scores.sort((a,b)=> { //this will help solve the problem in the NOTE
    return b-a;
    //return a-b; //if you want ASC
});
scores.reverse(); //basically reverse the order in the array
console.log(scores);








//sorting objects
const players = [
    { name: 'Mario', score: 50 }, //a
    { name: 'Luigi', score: 30 }, //b will be the next a after it iterates
    { name: 'Yoshi', score: 70 }, 
    { name: 'Bowser', score: 60 }
];

players.sort((a,b)=>{ //a represent the 1st/current element, b represent the next element as it iterates the array
    if(a.score > b.score){
        return -1; //return -1 if 'a' is greater than 'b', thus 'a' will be the first to display in the array
    }

    else if(b.score > a.score){
        return 1; //return +1 if 'b' is greater than 'a',  thus 'b' will be the first to display in the array
    }

    else{
        return 0; //if neither is true, it will simply kept the way they are.
    }

});

//alternate/shorter vr.
players.sort((a,b)=>{ 
    return b.score - a.score; //it will either, return + or - 
    //return a.score - b.score; //if you want ASC
});

console.log(players);