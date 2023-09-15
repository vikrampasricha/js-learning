const nums1=400

//js automatically defines data type
// but if we want to explicitly decide data type then we can create it using 
// object ie new keyword
const balance=new Number(100.1634)

console.log(nums1);
// if we check its data-types it will be object

//console.log(balance);

// ig
console.log(balance.toFixed(2));
// it gives precison answer upto no of digits mentioned in parameter
//for good practices it should be used where values are in decimal and want accurate ans upto some place
console.log(balance.toPrecision(4));

// sometimes values have large number of same number
// using this , are put ,by default it follows us standard but we can change also
const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++Maths+++++++++++
const nums2=12.5
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
//it gives random val btw o-1
console.log(Math.random())
//but if we want value grater than 0 and 1
// *is given to make value greater
//+1 is done if value is0.5 it will give 0 to avoid it
console.log((Math.random())*10+1)

const min=10
const max=20
//  this will give random btw 10 and 20
//(max-min+1) is done so value is greater than 0
// +min is done so value is greater than min ie 10
// floor is done so if value is 20.6 it should give btw range and should not go outside of range
console.log(Math.floor(Math.random()*(max-min+1))+min);
