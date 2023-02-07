class User {

    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    introduce() {
        console.log(`Hello, ${this.username}`);
        return this;
    }

    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }

    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
}


class Admin extends User{ //inheritance

    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }

    deleteUser(user){
        users = users.filter((u)=>{
            return u.username !== user.username;
        });
    }
}

//Instances
const userOne = new User("Mario", "mario@gmail.com");
const userTwo = new User("Luigi", "luigi@gmail.com");
const userThree = new Admin("Yoshi", "yoshi@gmail.com", "VIP");

userOne.login().introduce().logout(); //method chaining, only useable when the previous method return this

let users = [userOne, userTwo, userThree];

userThree.deleteUser(userTwo);
console.log(users);





