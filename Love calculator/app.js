// input name
let yourName = prompt ("What is your first name");
//slice a large name to 20 charecter
let sliceYourName = yourName.slice(0, 20);
// input name
let partnerName = prompt ("What is your partner name");
//slice a large name to 20 charecter
let slicePartnerName = partnerName.slice(0, 20)

//calculation part
let number = Math.random()*100;
number = Math.floor(number) + 1;

//show result
alert(sliceYourName + " and " + slicePartnerName + "'s love percentage is: " + number + "%");
alert("Original size of Your Name was " + yourName.length + "\n Original size of Partner Name was " + partnerName.length);


