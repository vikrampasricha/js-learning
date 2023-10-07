const arr=[1,2,3,4,5]


//map is used if we want to do some operation on each element of array 
//map returns a new array as compared to for each
//1 syntax
//const nums1=arr.map((curr)=> curr+1)

//console.log(arr.map((curr)=> curr+1));
//2 syntax if we use {} brackets then we have to write return because of scope
let nums2=arr.map((curr) =>{
    return curr+1
})
//console.log(nums2);

//filter is used to filter the values on particular condition
let nums3=arr.filter( (curr)=>curr>2)
//2 syntax if we use {} brackets then we have to write return because of scope
nums3=arr.filter((curr)=>{
    return curr>2
})
//console.log(nums3);
//reduce is used when we want to do some operation on each element and save its value in a variable
//it take 3 parameter total,curr
// variable in which value is to be stored
// curr each element of array
//and the inital value of total at start of array as given below it is 0
let nums4=arr.reduce( (total,curr)=>total+curr ,0)
//console.log(nums4);


const arr2=[
    {name:"vp",age:19,address:"sector-59"},
    {name:"JTD",age:21,address:"sector-67"},
    {name:"vp",age:21,address:"sector-124"}
]

//we can use multiple functionality on same array
const nums5=arr2.filter( (val)=>val.age==21 ).reduce( (total,curr)=> total+curr.age,0)
//console.log(nums5);

//2 syntax if we use {} brackets then we have to write return because of scope
const nums6=arr2.filter((nums)=>{
    return nums.age>20
}).reduce((total,curr) =>{
   return  total+curr.age
},0)
//console.log(nums6);

const nums7 = arr2
  .map((person) => person.age * 2) // Double the age
  .filter((age) => age > 40) // Filter ages greater than 20
  .reduce((total, age) => total + age, 0); // Sum the ages

console.log(nums7); // This will give you the sum of ages that meet the criteria