// var index =200;
// for (var index = 0; index < 10; index++) {
//     // const element = array[index];
//     console.log(index);    
// }
// // index =200;
// console.log(index);

// let i=0;
// while (i<5) {
//     console.log(i);
//     i++;
// }

// ❤️ direct loop  ==>high order loop

// let arr =[1,2,3,4,5]

//🙅‍♂️for of loop

// for (const i of arr) {
//     console.log(i);
// }

//🙅‍♂️for in loop

// let arr =[10,22,53,64,85]
//  for (const key in arr) {
// //    console.log(key); //print the key of array >> key in array are indexes
//     // console.log(arr[key]); // print element of array
// }

//🙅‍♂️for each loop => high order function

// let arr =[10,22,53,64,85]

// arr.forEach(function (i){
//     console.log(i);
// });

// arr.forEach( i => {
//     console.log(i);
// });

// arr.forEach( (element,index,array) => {
//         console.log(element,index,array);
// });

// function print(i) {
//     console.log(i);
// }
// arr.forEach( print) 

// let array =[
//     {
//         name :"sartk",
//         num:9643,
//         mail:"sar@123"
//     },
//     {
//         name :"ram",
//         num:5463,
//         mail:"ram@123"
//     },
//     {
//         name :"yath",
//         num:1234,
//         mail:"yath@123"
//     }
// ]
// array.forEach( i => {
//     console.log(i["1"]);
// });

//>>there is callback in for-each loop


// let array =[1,2,3,4,5]

// let arr= array.forEach( i => {
//     // console.log(i);
//     // i*2;
//     return i*2;
// })

// console.log(arr[0]); //gave undefined >> this callback return nothing


// =============❤️❤️ to return value from loop we use these method================//

// ❤️ fliter function >> return value to new array

// let array =[1,2,3,4,5]

// let arr=array.filter((i)=>  i*2) //implicit return ,not using '{}' 

// let arr=array.filter((i)=> {i*2}) //gave empty arr value

// let arr=array.filter((i)=> { return i*2})  //explicit return ,using return keyword inside '{ }'
// console.log(arr);

// let arr=array.filter((i)=> { return i>2})  // retun value which are true
// console.log(arr);


//❤️ map function >>return value

// const myNum=[1,2,3,4,5,6]

// let num = myNum.map((i)=> i>2) //return true / false array for this condition 
// console.log(num);

//  let num = myNum.map((i)=> i*2).map((i)=> i+10)  //chaining
//  console.log(num);

//  let num = myNum.map((i)=> i*3).filter((i)=> i>10) 
//  console.log(num);

 //❤️ reduce function 

//  const myNum=[1,2,3,4,5,6] 
// //  let total = myNum.reduce(function(acc,curr){return acc+=curr},0)

// let total = myNum.reduce((acc,curr)=>acc+=curr,0)
// console.log(total);