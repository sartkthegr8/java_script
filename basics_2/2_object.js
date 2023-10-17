//single object   ❤️
//object.create >> made by constructor

//object literals ❤️


// const user={
//     name:"sarthak",
//     age:24,
//     loc:"New-Delhi",
//     email:"sartk@gmail.com",
//     mob:9646544565
// }
  
// console.log(user.name); //1st method
// console.log(user["name"]); //2nd method

//symbol use ❤️
const symb = Symbol("key1")

const user={
    // symb:"mykey1", >> it give string type key
    [symb]:"mykey1",  //>> here key type is symbol not string
    name:"sarthak",
    age:24,
    loc:"New-Delhi",
    email:"sartk@gmail.com",
    mob:9646544565
}
  
// console.log(user.symb); //1st method >>undefine
// console.log(user[symb]); //2nd method >> mykey1

user.loc="chandiagrh";
console.log(user.loc); 
 


 

