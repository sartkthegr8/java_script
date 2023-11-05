// const promiseOne = new Promise(function (resolve,reject) {
//         // Do an async task
//         //DB calls , cryptography ,network calls

//         setTimeout(function(){
//             console.log('Async task complete');
//             resolve(); //it triggered .then
//         },2000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed"); //only work when resolve() call;
// })


// const promiseTwo = new Promise(function (resolve,reject) {   
//     setTimeout(function(){
//         console.log('Async task 2 ');
//         resolve(); 
//     },2000)
// }).then(()=>{
//     console.log("Async 2 resolver");
// })



// const promiseThree = new Promise(function (resolve,reject) {   
//     setTimeout(function(){
//         resolve({username:"chai",email:"chai@email.com"}); 
//     },2000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function (resolve,reject) {   
//     setTimeout(function(){
//         let error =false //or true
//         if(!error){
//              resolve({username:"sartk",email:"sartk@email.com"}); 
//         }else{
//              reject('ERROR : Something Wrong 😭😭😭')
//         }
//     },2000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Finally promise is resolved or rejected👉👈");
// })


const promiseFive = new Promise(function (resolve,reject) {   
    setTimeout(function(){
        // let error =false
        let error =true
        if(!error){
             resolve({username:"sartk",email:"sartk@email.com"}); 
        }else{
             reject('ERROR : Something Wrong 😭😭😭')
        }
    },2000)
})
//use asysnc await  🔥
// async function consumedPromiseFive(){
//    const response = await promiseFive 
//    console.log(response);
// }
// consumedPromiseFive()  
//async & await cant handel the errors directly like then & catch
//It handel error gracefully

async function consumedPromiseFive(){
    try{
        const response = await promiseFive 
        console.log(response);
    }catch(error){
        console.log(error);
    }
 }
 consumedPromiseFive()  

 async function getAllUsers(){
    // const requestUrl = 'https://api.github.com/users/mojombo'
    const response = await fetch('https://api.github.com/users/mojombo')
    const date = response.json()
 }

