//console.log("hello world")
let score=33
let score1="33a"
let score2=null
let score3=undefined
let score4=true
//console.log(typeof(score))

let valueInNumber=Number(score)
// if a string or other type is converted
//which cannot be it shows NaN(not a number)
// console.table([typeof(score),typeof(score1),typeof(score2),typeof(score3),score4])
// if we try tp convert diff data types to Number
//"33"->33
//"33abc"->NaN
// true =>1
//undefined=>NaN
// NULL=>0


let bool1=true
let bool2=""   // empty"" => to false
let bool3=123   // number => true
let bool4=undefined//undefined=> false
let bool5="vikram"  //string =>true
let booleanValue=Boolean(bool5)

console.log(booleanValue);