// js is prototype behavior language ->it search above to above level 
// Array ,Function and defined_objects -> everything is object in lower level 

function mult5(num){
    return num*5
}
console.log(mult5(5));

mult5.power=2; //function use as object
console.log(mult5.power);


