let str1 = "First Name is: ";
let str2 = "Mohimenul ";

//charAt
console.log("CharAt: " + str1.charAt(0));

//charCodeAt
console.log("charCodeAt: " + str1.charCodeAt(2));

//fromCharCode()
console.log("fromCharCode: " + String.fromCharCode(110));

//concat
console.log("concat: " + str1.concat(str2));

//endsWith
console.log("endsWith: " + str1.endsWith(name));

//indexOf
console.log("indexOf: " + str1.indexOf("r"));

//lastIndexOf
//concat.log("lastIndexOf: " + str1.lastIndexOf("Name"));

//match()
console.log(str1.match(/i/g))

//repeat()
console.log("repeat: " + str2.repeat(5));

//replace()
console.log("replace: " + str1.replace(/First/g, "Last"));

//search()
console.log("search: " + str1.search("is"));

//slice()
console.log("slice: " + str1.slice(6,10));

//split()
console.log(str1.split(" "))

//upprCase
console.log("toUpprCase: " + str1.toUpperCase());

//lowerCase
console.log("toLowerCase: " + str1.toLowerCase());


//################################################################################
// First latter Uppercase and then lowercase

input
let userName = prompt("What Is Your Name");
//to upper case
let userNameUpparCase = userName.toUpperCase();
// to lower case 
let userNameLowerCase = userName.toLowerCase();
//slice the first latter
let firstLatter = userNameUpparCase.slice(0,1);
//total lenght
let totalLength = userName.length;
//to get charecter after first latter 
let afterFirstLatter = userNameLowerCase.slice(1, totalLength);
//get alart
alert("Hello: " + firstLatter + afterFirstLatter);


