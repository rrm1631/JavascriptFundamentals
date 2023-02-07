
//Typical Format in real situations
// const blogs = [
//     {
//         title : 'Greenwhich Pizza',
//         likes : 30
//     },

//     {
//         title : 'Pizzahut Pizza',
//         likes : 24
//     },

//     {
//         title : 'Shakeys Pizza',
//         likes : 12
//     }
// ]


let users = {
    name : "Mario",
    age : 23,
    email : "mario@gmail.com",
    location : "Bowser Castle",
    // blog : ["I love burgers", "how to beat the last stage"],
    blogs : [ 
        { title : 'Greenwhich Pizza', likes : 30 },
        { title : 'Pizzahut Pizza', likes : 24 },
        { title : 'Shakeys Pizza', likes : 18 }
    ],
    login : function(){
        console.log('User logged in');
    },
    logout : function(){
        console.log('User logged out');
    },
    logBlog : function(){
        console.log("This user likes to talk about:");
        this.blogs.forEach((blog)=>{
            // console.log(blog);
            console.log(blog.title, blog.likes);
        });
    }
};

console.log(users.name);

//display/change values using sqrbracket notation
console.log(users['name'] = 'Armstrong' ); //class['keyname'];

//NOTE:
// using sqrbracket notations allows users to use variable to define keys
// example: 
//  let key = location;
//  users[key]; - is the same as users['location'];

users.login();
users.logout();

users.logBlog();

