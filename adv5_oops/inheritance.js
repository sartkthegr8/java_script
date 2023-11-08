class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)  //super keyword
        this.email = email
        this.password = password        
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai","chai@teacher.com","123")
const tea = new User("cofee")

// chai.addCourse()
// chai.logMe()

tea.addCourse()
// tea.logMe()