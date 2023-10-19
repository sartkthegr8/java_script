//❤️ this

// const user ={
//     username:"sarthak",
//     price:999,
//     welcome:function () { //want to display same name of user which inside same object >>we use [this] here
//         // console.log(`${this.username} is a boy`);  // >> to use current context we use 'this' keyword
//         console.log(this); 
//         // >> gave u the current contex
//         // >>'this' mainly use inside objects
//         // >> inside function 'this' gave turbulants or undefined values 
//     }
// }
// user.welcome();
// user.username="badola";
// user.welcome();

// console.log(this); 
// >> it show empty context by node engine her
// >> but if we ' console.log(this) ' in brower its engine don't empty obejct , those many objects are  given by browser engine

//❤️
// function chai() {
//     let username="rahul"
//     // console.log(this); //>> gave so much objects and values
//     console.log(this.username) //>> it show undefined and all above obects and value
//     // our 'this' context only shows in objects not in functions
// }

//❤️
// const chai = function () {
//     let username="rahul"
//     console.log(this.username) // undefined showd in this function also
// }

//❤️
// const chai = ()=> {
//     let username="rahul"
//     console.log(this.username) // in arrow function same undefined showd
// }
// chai()

// 🙅‍♂️🙅‍♂️ NOTE so 'this' dont show context in any type of functions 

// ===================================================================================
//❤️ Arrow Function

// 🙅‍♂️EXPLICIT RETURN OF ARROW FUNCTION '{return ...}' >>use 'return' keyword

// const add=(n1,n2) => {
//     return n1+n2
// }

// 🙅‍♂️IMPLICIT RETURN OF ARROW FUNCTION '(...)' >>dont use 'return' keyword 

// const add=(n1,n2) =>(n1+n2)

// ❤️IIFE >>Immediately Invoked Function Expression
//to avoid  the global scope pollution we use IIFE

// (function tea() {
//     console.log("hello");
// })();


(function tea(name) {
    console.log('${name}');
})('sarthak');







 