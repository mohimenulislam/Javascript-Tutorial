let result;
let num1 = 25;
let num2 = 10;

result = num1 + num2;
console.log(result)

result = num1 - num2;
console.log(result);


result = num1 * num2;
console.log(result);

result = num1 / num2;
console.log(result);

result = num1 % num2;
console.log(result);

//math Object
value = Math.PI;
console.log("PI " + value);

// round the value if tha fraction part of number greater then .50
value = Math.round(5.64);
console.log("round " + value);

//ceil means it would be the next number
//result 8
value = Math.ceil(7.4)
console.log("ceil " + value);

//it just remove the fraction part
//result 2
value = Math.floor(2.9);
console.log("floor " + value);

value = Math.sqrt(16);
console.log("sqrt " + value);

value = Math.pow(5,2);
console.log("pow " + value);

//it would be the positive value
//result 10 
value = Math.abs(-10);
console.log("abs " + value);

value = Math.min(1,2,3,4,5);
console.log("min " + value);

value = Math.max(1,2,3,4,5);
console.log("max " + value);

value = Math.random();
console.log("random " + value);

value = Math.random()*10;
value = Math.floor(value)+1;
console.log("random number" + value);

//another way
value = Math.floor(Math.random()*10)+1;
console.log("random number" + value);