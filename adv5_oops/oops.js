// 💓 constructor function -> new : make new context/instances

//Ex 1: const promiseOne = new Promise()

//Ex 2: 
function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

// const userOne = User("hitesh",12,true)
// const userTwo = User("sarthak",222,true)
// console.log(userOne); //overwrite by userTwo , ie: we use 'new'->constructor
 
const userOne = new User("hitesh",12,true)
const userTwo = new User("sarthak",222,true)
// console.log(userOne); //overwrite by userTwo , ie: we use 'new'->constructor
// console.log(userOne.constructor);
