const course={
    coursename:"js-hc",
    price:"999",
    courseInstructor:"hitsh"

}

// if we want to access value of a object again and again 
// rather than using . or[]to access it 
// we can use {}brackets
// const {propertytobeaccessed}=object
const {courseInstructor}=course
console.log(courseInstructor);
// if we want to access it using name of personal choice than property name
// const {propertytobeaccessed:nameofourchoice}=object
const {courseInstructor:teacher}=course
console.log(teacher);
// all API data is in JSON format

//how api sends data
//randomuser api-  for random API
//jsonformatter-- to understand API code in easy form

//sample JSON api file format
// {
//     "name":"hit",
//     "coursename":"js"
// }

