let x ;
//number to string
x = String(150);
x = String(5 + 5);
//date to string
x = String(new Date()); 
//bolean to string
x = String(true); 
//array to string
x = String([1,2,3,4,5]);
//another way to convert string
x = (150).toString();

console.log(x);
console.log(typeof x);
console.log(x.length);

let y;
//string to number
y = Number("250");
//bollean to number
y = Number(true);
//text to number
y = Number("Hello World");
//another way to convert number
y = parseInt("350.651651");
y = parseFloat("350.651651");

console.log(y);
console.log(typeof y);
console.log(y.length);
console.log(y.toFixed(2));

let result;
let var1 = "5";
let var2 = 9;
result = var1 + var2; 
console.log(result)
console.log(typeof result);
console.log(result.length);
console.log(result.toFixed(2));