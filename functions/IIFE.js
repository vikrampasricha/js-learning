
//IIFE-immediately invoked function expression
//(functionhere())();
// ; is put after it to tell the end of execution

(function chai(){
    console.log('chai peelo');
})();
//arrow function IIFE
((name) =>{
    console.log(`chai peelo ${name}2`);
})('vikram');
