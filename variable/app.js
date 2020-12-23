//Variable can be declaring by var, let, const  

//Camel Case
let firstName
//underscore
let first_name
//Pascal Case (Object, Constructor, function)
let FistName 


//var -- function scoped
var a = "Hello world";
console.log(a);

var x = "Hello";
x = "Hi !";  // can be reassign
console.log(x);

//let --global scoped
let num = 50;
console.log(num);

//can't reassign
const city = "NewYork";
console.log(city);

//it can be modified
const bigCity = ['NewYork', 'Florida', 'MeryLand'];
bigCity.push('Arizona');
console.log(bigCity);



var studentName = "Faisal";
console.log('Students name is ' + studentName);

