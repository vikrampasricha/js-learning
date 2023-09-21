//singleton
//Object.create();


//object literal
const altemailSymbol=Symbol("Alt-email")
//Jsuser[altemailSymbol]="abcd@gmail.com"
const Jsuser={
    name:"vikram",
    "fullname":"vikram pasricha",
    age:18,
    location:'mohali',
    email:"vikram@google.com",[altemailSymbol]:"abcd@gmail.com",
    isLoggedIn:false,

}

//to access object
//console.log(Jsuser.email);


//good way of accesing elements
// it will help access elements whose keys are defined with string datatype which is not possible using .method
//console.log(Jsuser["email"]);


//using symbol in object
//symbol is used where we want to have unique property/key
// to define and access symbol we use [] as done above

//console.log(Jsuser[altemailSymbol]);


Jsuser.email="vikram@chatgpt.com"
//console.log(Jsuser["email"]);

// if we want to lock/freeze ojbect so no one can change value
//<<-----freeze---->
//Object.freeze(Jsuser)
Jsuser.email="dfgbh"
// values will not change because object is freezed

//console.log(Jsuser["email"]);
//console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("hello js user");
}
// this is used to refer to current object
Jsuser.greeting2=function(){
    console.log(`hello ${this.name}`);
}
Jsuser.greeting()
Jsuser.greeting2()