console.log(this);
// in browser this refers to window inside a function
// in VS Code it refers to empty object
function add(num1,num2){
    console.log(this);
    return num1 +num2
}

// in object this refers to current object
const obj={
    name:"vikram",2:"b",
    greet:function(){
        console.log(`${this.name} good morning`)
    }
}
//console.log(add(1,2))
//obj.greet();


//this cannot be used in function 
//it will give undefined value 
function chai(){
    let username="abcd"
    console.log(this.username);
}
chai()
//arrow function 
 // syntax()=>{} 
const chai2= () => {
    let username="efgh"
    console.log(this.username);
}
chai2()
//implict arrow function
// if are function execution is of 1 line only

const addtwo= (num1,num2) =>  num1+num2
// we can use () brackets also for implicit arrow function
// if we {} then we have to write return keyword also
const addtwon= (num1,num2) =>  (num1+num2)
// if we want to define object in implicit =>function
// we have to use() outside object{} brackets
const addThree=(num1,num2,num3)=> ({name:"vikram"})

console.log(addThree(1,2,3));
