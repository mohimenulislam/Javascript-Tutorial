let text
let rollNumber = 2;

if (rollNumber == 1) {
    text = "Congratulations" ;
} else if (rollNumber == 2) {
    text = "Congratulations but you can do batter";
} else if (rollNumber == 3) {
    text = "not bad";
}
console.log(text)


switch(rollNumber) {
    case 1:
        text = "Congratulations" ;
    break;
    case 2:
        text = "Congratulations but you can do batter";
    break;
    case 3:
        text = "not bad";
    break;
    default: 
        text = "try to better"
}
console.log(text);



let color = "red";

switch (color) {
    case "red":
    case "green":
    case "blue":
        console.log("you have selected RGB coolor");
    break;

    case "cyan":
    case "megenta":
    case "black":
        console.log("you have selected CYAN");
    break;
}