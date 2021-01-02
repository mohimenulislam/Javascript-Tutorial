//Array Declar
const numbers = [12,34,4,53,42,5,45,23];
// Another way to declare Array  
const numbers2 = new Array(12,21,43,64,74,23,77,34)
const color = ["red", "green", "Yellow"]
const mixed = [17, "Faisal", true, {a:1, b:2}, new Date()];

value = numbers.length
value = Array.isArray(numbers);
value = numbers[1]
value = numbers.indexOf(53)
//numbers addes in last 
numbers.push(25);
//numbers added in first
numbers.unshift(100)
value = numbers.length

console.log(numbers);
console.log(value)

//pop method (pop last number)
numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

//splice the array 1 index to 3 index
numbers.splice(1,3);
console.log(numbers);

//reverse the number
numbers.reverse();
console.log(numbers);

//concat 
value = numbers.concat(numbers2);
console.log(value);

//sorting 
numbers.sort()
console.log(numbers)

//compare
value = numbers.sort(function(x,y){
    return x-y;
});


function over20(num){
    return num > 20;
}
value = numbers.find(over20);