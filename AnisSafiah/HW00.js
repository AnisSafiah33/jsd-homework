//The Age Calculator
alert("Forgot how old someone is? Calculate it!");
let birthYear = prompt("Please enter Birth Year");
birthYear = parseInt(birthYear);
if (birthYear!=NaN){
    let curYear = new Date().getFullYear();
    let age = curYear-birthYear;
    alert("They are either " + (age-1) + " or " + age);
}


//The Lifetime Supply Calculator
alert("Ever wonder how much a \"lifetime supply\" of your favorite snack is? Wonder no more!");
let curAge = prompt("Please enter current age");
let maxAge = prompt("Please enter maximum age");
let amtPerDay = prompt("Please enter estimated amount per day");
curAge = parseInt(curAge);
maxAge = parseInt(maxAge);
amtPerDay = parseInt(amtPerDay);
if (curAge!=NaN && maxAge != NaN && amtPerDay != NaN){
    let snackAmt = (maxAge - curAge)*365*amtPerDay;
    alert("You will need " + snackAmt +  " to last you until the ripe old age of " + maxAge);
}

// The Geometrizer : C=2πr, A=πr(squared)
let radius = 70;
console.log("The circumference is " + (2 * Math.PI * radius));
console.log("The area is " + (Math.PI * Math.pow(radius,2)));

//The Temperature Converter
let temperature = 26; //celcius
console.log(temperature + "°C is " + ((temperature * 9 / 5) + 32) + "°F");
temperature = 75; //fahrenheit
console.log(temperature + "°F is " + ((temperature -32) * 5 / 9) + "°C");