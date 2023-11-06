// 💓 constructor function -> new : make new context/instances

//Ex 1: const promiseOne = new Promise()

//Ex 2: 
function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = User("hitesh",12,true)
console.log(userOne);
 
