
const a=[1,2,3,4]

const b=[5,6,7,9]

// if we try to join a with b using push
// it will push argument as a whole array rather than each single element

// a.push(b)
// console.log(a);


//When we use concat it combines 2 array each element as single element
// const c=a.concat(b)
// console.log(c);


//<----spread(...)----->
// spread is used to expand array into elements
//it can be also used to concat/join many arrays into single array
const c=[...a,...b]
console.log(c);

//<----flat------->
// it gives a new array withh sub array elements concatenated into it
// its parameter its depth i.e upto how deep a nested array should be flattened
const arr=[1,2,3,[4,5],6,7,[8,9,[10,11]]]
const arr2=arr.flat(Infinity)
console.log(arr2);

const str="abcd"
//<-------isArray()---->
//to check if its array or not
console.log(Array.isArray(str));

//<----from()---->
//it is used to make array from str,objects
console.log(Array.from(str));
const obj={1:'a',2:'b'}
console.log(Array.from(Object.keys(obj)));

let sc1=100
let sc2=200
let sc3=300
//<----of()------>
//make array from numbers of single elements
console.log(Array.of(sc1,sc2,sc3));
