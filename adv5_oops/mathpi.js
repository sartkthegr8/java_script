// console.log(Math.PI);

//can we change the value of PI 
//lets try :>
// Math.PI=5;
// console.log(Math.PI); //cant change by this way

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);

//output :-
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

// highly hard coded hence we cant change their value

// lets try to make other variables hardcoded

 const chai ={
    name:'ginger chai',
    price:250,
    isAvailable:true
 }
//  console.log(Object.getOwnPropertyDescriptor(chai,"name"));

 //now chnge proprty

 Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
 })

 console.log(Object.getOwnPropertyDescriptor(chai,"name"));
