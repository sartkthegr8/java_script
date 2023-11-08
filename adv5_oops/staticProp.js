class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
    // createId(){       //access 
    //     return `123`
    // }
    static createId(){  //acccess denied
        return `123`
    }
} 

// const hitesh = new User("hitesh")
// console.log(hitesh.createId()); 

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone11","i@phone.com")
console.log(iphone.createId()); //even child cant access the parent propeertty with the help of 'static'