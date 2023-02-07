const todos = [
    {text: 'play games', author: 'mario'},
    {text: 'sleep all day', author: 'luigi'},
    {text: 'do nothing', author: 'yoshi'}
];

//STRINGIFY
localStorage.setItem('todos', JSON.stringify(todos));

//PARSE back into JS object
const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));