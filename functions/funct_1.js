console.log("hello world");

function addTwoNumbers(nums1,nums2){
    return nums1+nums2
}

console.log(addTwoNumbers(1,2));

//default parameter
function name(name="vikram"){
    return name;
}
console.log(name("abcd"))
console.log(name())



///<------(...)Rest operator
// it is used when the no of arguments are variable
function calculateCartPrice(val1,val2 ,...num1){
    return num1
}

console.log(calculateCartPrice(1,2,3,4))

const user={
    name:"vikram",
    price:100,
    age:21
}
function handleObject(obj){
    console.log(`username is ${obj.name} and age is ${obj.age}`);
}

handleObject(user)