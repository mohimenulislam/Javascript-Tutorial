console.log(`one line
two line`)

const name = "Faisal"
const age = 28;
const job = "Web Developer";
const city = "Rajshahi";

let html;

//without templete string (es5)
// html = "<ul>" +
//         "<li> Name: " + name + "</li>" +
//         "<li> Age: " + age + "</li>" +
//         "<li> city: " + city + "</li>" +
//         "</ul>"
//  document.body.innerHTML = html

//  with templete string (es6)

html = `<ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City: ${city} </li>
        <ul>
`
document.body.innerHTML = html