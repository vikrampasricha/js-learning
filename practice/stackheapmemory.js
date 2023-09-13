console.log("hello world");


/*
 2 types of memory in js
 stack(Primitive data-type) copy is shared
 Heap (Non-Primitive data-type) address is shared

*/

let name="vikram"

let name2=name
//changing value
name2="abcd"

console.log(name);
//name value is not changed because it passes copy 
console.log(name2);

let user={
    email:"abcd@gmail.com",
    upi:"ybl@icic"
}
let user2=user

user2.email="vp@gmail.com"
//both value changes
// because address reference is shared and not the copy
// so both value changes
console.log(user.email);
console.log(user2.email);