// const Arr =[0,1,2,3,4,5,true,"sarthak"]

// const Arr1 =[1,2,3,4,5]

// const arr1 = new Array(1,2,3,4,5)

//  ❤️Shallow copy (same refernece) & ❤️deep copy (diff reference)


// console.log(Arr1);

// Arr1.unshift(2) //add element at start 
// console.log(Arr1);

// Arr1.shift(3) //remove element at start 
// console.log(Arr1);
// console.log(typeof Arr1.join()); //make it string

// splice ❤️
//[same working as slice to print a portion of array]
// [change the original array ]
// [as given range element dissapear from original array]
// [bot range include]
 
// slice ❤️
// [not chnge on orignal array]
// [start range include]

//**********push / conacet / spread /flat ***********/

// const a =[1,2,3]
// const b =['x','y','z']

// push ❤️
// a.push(b) //push dont merger element ,it push whole array as element into another 
// console.log(a);

// concat ❤️
// const c=a.concat(b) //concate return a new array with both array elements 
// console.log(c);

//spread '...' operator ❤️
// const d = [...a,...b] // return new array as manny possiple array elements
// console.log(d);

//flat ❤️

// const ar=[1,2,[3,4,['x','c','v','h',[21,32,65,45,8],'b','n'],'s','d'],55,65] //contain 3-level of subarray
// //  const ans = ar.flat(1) //merge 1 level subarray
// const ans = ar.flat(3) //merge 3 level subarray
// const ans = ar.flat(infinity) //merge to all level subarray
// console.log(ans);

//from ❤️
// console.log(Array.from("sarthak")); //make character of given string

// 🙅‍♂️console.log(Array.from({name:"sarthak"})); //make character of key : value >>not possible here no kew define so gave >> [] 'empty object'


//of ❤️

// let a=1;
// let b=2;
// let c=3;
// let d=Array.of(a,b,c); //merge all variable into array

// console.log(d);







