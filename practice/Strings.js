//console.log("abcd");

const first="Vikram"
const second="Pasricha"
//old way of concating two strings
//console.log(first+second);

//modern way using   `(back tick) and ${}
//console.log(`my first naeme is ${first}and last name is${second}`);
//another way of creating string using object
const gname=new String('abcde')

//console.log(gname.length)
//console.log(gname.charAt(1));

//console.log(gname.indexOf('b'));
const str2=gname.substring(0,2)
//console.log(str2);

// it has 2 parameter start and end
// both are optional
// if - given it starts from end/back side
const str3=gname.slice(-5,5)
console.log(str3);

const str4="     vikram  "
//trim is used to remove spaces from  front and back
console.log(str4);
console.log(str4.trim())
// it is used to replace 1 char to another
const str5="abcd@-chitkara.edu.in"
console.log(str5.replace('-','1'));

// to split string on basis of some char
const str6="abc-def-ghi-234"
console.log(str6.split('-'));