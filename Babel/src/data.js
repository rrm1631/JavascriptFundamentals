const users = [
    {name : 'mario', premium : true},
    {name : 'luigi', premium : false},
    {name : 'yoshi', premium : false},
    {name : 'link', premium : true}
];

const getPremiumUser = () =>{
    return users.filter(user => user.premium);
};

export {users, getPremiumUser};