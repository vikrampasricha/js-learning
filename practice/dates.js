

let myDate=new Date()
// differnt methods of getting time,day in different formats
//console.log(myDate);
/*
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());
*/

//let myCreateDate=new Date(2023,0,6)
let myCreateDate=new Date("06-01-2002")
//console.log(myCreateDate.toLocaleString());

console.log(`today day is ${myDate.getDate()} and time is ${myDate.getTime().toString()}`);