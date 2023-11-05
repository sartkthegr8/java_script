// const promiseOne = new Promise(function (resolve,reject) {
//         // Do an async task
//         //DB calls , cryptography ,network calls

//         setTimeout(function(){
//             console.log('Async task complete');
//             resolve(); //it triggered .then
//         },2000)
// });

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

const promiseFour = new Promise(function (resolve,reject) {   
    setTimeout(function(){
        let error =true
        if(!error){
             resolve({username:"sartk",email:"sartk@email.com"}); 
        }else{
             reject('ERROR : Something Wrong')
        }
    },2000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{

})
