const person = {
    firstName: "Mohimenul",
    lastName: "Islam",
    age: 26,
    email: "mohimenul.faisal@gmail.com",
    address: {
        city: "Rajshahi",
        zipCode: 62111,
    },
    getBirtYear:function (){
        return 2020  - this.age;
    }
}

let value;
value = person;
console.log(value);

//to get information from person (recommanded)
value  = person.firstName;
console.log(value);
//another way
value = person['firstName']
console.log(value);

value = person.address.city;
console.log(value);

value = person.getBirtYear();
console.log(value);


const people = [
    {name: "Faisal",age: 27},
    {name: "Tomal", age: 29},
    {name: "Tanvir", age: 30}
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name)
    // console.log(people[i].age)
}