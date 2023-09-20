
const arr=[0,1,2,3,4,5]
//in js array all elements type can be different
const myarr=[1,2,3,"vp",true]
//array size is not fixed in js it can be refixed

const myarr2=new Array(3,2,1)

//console.log(myarr);

//arr.push(6)

//unshift is used to add element in front
//it shifts all other value one step forward
//arr.unshift(-1)
//console.log(arr);

// it is used to remove first element
//arr.shift()
//console.log(arr)

//console.log(arr.includes(3));
//console.log(arr.indexOf(2));

// join coverts array to string 
const newArr=arr.join()
//console.log(arr);
//console.log(newArr);
//console.log(typeof newArr);

//slice ,splice 

// slice return sub array from start to end-1 index
// it does not have effect on original array
console.log(arr);
console.log(arr.slice(0,2));
console.log(arr);

// splice return sub-array from start(1 parameter) to no of elements to be removed in number(2 perimeter)
// it changes the original array ,it removes that elements from original array
 
console.log(arr);
console.log(arr.splice(0,3));
console.log(arr);


