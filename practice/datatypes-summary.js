/*1-primitive
// primitive are call by value
// 7 types
String,Number,Boolean,null,undefined,Symbol(to make value unique),BigInt

2-refernce type(Non primitive)
Arrays,Objects,function  

js is dynamically typed lang because data type is automatically allocated
*/


const id=Symbol('123')
const anotherid=Symbol('123')
//symbol is used to uniquelly identify
console.log(id==anotherid);

//Refernce(non primitive) data types

//array
const names=["a","b","c"];

// object
// it is always in{}brackets
let myObj={
    name:"vp",
    age:22
}
//function 
const myFunc=function(){
    console.log("Hello World ");
}

console.log(typeof(names));