// when we create object using new or create object singleton object is created
//const tinderUser=new Object()

const tinderUser={}

tinderUser.id="abc123"
tinderUser.name="abcd"
tinderUser.loggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"abcd@gmailc.com",
    fullname:{
        userFullname:{
            firstname:"vikram",
            lastname:"pasricha"
        }
    }
}
//console.log(regularUser.fullname.userFullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//to combine two objects(<----assign---->)
// the first parameter is target object
//rest all parameters are source objects
const obj3=Object.assign({},obj1,obj2)
//console.log(obj3);


// it can also be done using (...)Spread operator
const obj4={...obj1,...obj2}
//console.log(obj4);

//console.log(tinderUser);

//<--to get keys/value separtely in the form of array

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

//<--to get key/value in form of array

console.log(Object.entries(tinderUser));


// to see if object has the following property or not<----hasOwnProperty
console.log(tinderUser.hasOwnProperty('isLoggedIn'));