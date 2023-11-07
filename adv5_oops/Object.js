// js is prototype behavior language ->it search above to above level 
// Array ,String ,Function and defined_objects -> everything is object in lower level 

// function mult5(num){
//     return num*5
// }
// console.log(mult5(5));

// mult5.power=2; //function use as object
// console.log(mult5.power);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++ //this matlab jis >>jisne bhi bulaya h uspe this lgao
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}


// const chai = createUser("chai",25)  //>>error
// const tea = createUser("tea",50)     //>>error


const chai = new createUser("chai",25) 
const tea = new createUser("tea",50) 
chai.printMe();

