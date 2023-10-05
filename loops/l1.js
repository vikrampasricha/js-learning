const arr=[1,2,3,4,5]
const str="abcd"
const obj={1:"a",2:"b"}
//  for of loop
// in this we have to give the arr/string/map we want to iterate
//it cannot iterate over js object

// for(const num of obj){
//     //console.log(num);
// }



// for in loop is used to iterate over js object
// when we try to iterate on string it returns index
// for (const num in str){
//     console.log(str[num]);
// }
const coding=["c++","js","java","python"]
function printme(item){
    console.log(item+1);
}

// for each is used if we want to do some operation on each element of array
// arrname.forEach((sample iterator name)=>{function syntax value})
// coding.forEach( (val)=>{
//     console.log(val);
// })
// arr.forEach(printme,index)


// it can return value ,index and full array also but we need to mention it
// arr.forEach( (val,index,arr)=>{
//     console.log(val,index,arr);
// })

const myCoding=[
    {
        name:"vp",
        age:21
    },
    {
        name:"psr",
        age:22
    },
    {
        name:"jtd",
        age:21
    }
]
//iterating array of objects
// it is useful because when we get api files it is in array of object form
myCoding.forEach( (val)=>{
    console.log(`name is ${val.name} and age is ${val.age}`);
})