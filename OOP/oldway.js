//Without Using Class
function User(username, email){
    this.username = username;
    this.email = email;
}


//Prototypes - contains all the methods for that object type

//Adding prototypes
User.prototype.userLogin = function(){
    console.log(`${this.username} just logged in`);
    return this;
}

User.prototype.userLogout = function(){
    console.log(`${this.username} just logged out`);
    return this;
}

//Inheritance
function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype); //will inherits the prototype methods of User


//Instances
const userOne = new User("Mario", "mario@gmail.com");
const userTwo = new User("Luigi", "luigi@gmail.com");
const userThree = new Admin("Yoshi", "yoshi@gmail.com", "VIP");