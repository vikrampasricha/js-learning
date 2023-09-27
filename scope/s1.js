

// let a=1
// const b=2
// var c=3


// let and const have local scope
//var has global scope
{
    let a=1
    const b=2
    var c=3
}

// console.log(a);
// console.log(b);
console.log(c);

// this below concepts are <------closures----->
//child function can access parent function 
// parent function cannot access child func and variables
function one(){

    const username="vikram"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
two()
}

//one()



//when we create function singly and call it before function created it will run

//when we create function inside a variable and call it before function call it will not run
console.log(add1(4));
console.log(addone(4));
function add1(num){
    return num+1
}

const addone=function(num){
    return num+1
}

// console.log(add1(4));
// console.log(addone(4));