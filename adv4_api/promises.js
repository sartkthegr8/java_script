const promiseOne = new Promise(function (resolve,reject) {
        // Do an async task
        //DB calls , cryptography ,network calls

        setTimeout(function(){
            console.log('Async task complete');
        },1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
})