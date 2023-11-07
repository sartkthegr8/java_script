function SetUsername(username){
    this.username = username
    console.log("called");
}

// function createUser(username,email,password){
//     SetUsername(username) //it doenst hold the reference
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai","chai@fb.com","123")
// console.log(chai); // createUser { email: 'chai@fb.com', password: '123' }
// //not showing username



function createUser(username,email,password){
        SetUsername.call(this,username) //default parameter this 
        this.email = email
        this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);

