//it is used where value cannot be updted or changed
const accountId=13

let accountEmail="abcd@gmail.com"

//it is used less because of its scope problem
var accountPassword="abcd"

// if variable is defined and given no value it will have unddefined value
let city;
console.log(city)
// if we want to print multiple values together rather than using log statement again and again
console.table([accountId,accountEmail,accountPassword])