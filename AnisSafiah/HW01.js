//The World Translator
let language = "Japanese";
if (language === "English") console.log("Hello World");
else if (language === "French") console.log("Bonjour le monde");
else if (language === "Malay") console.log("Hai dunia");
else if (language === "Korean") console.log("annyeonghaseyo segye");
else if (language === "Japanese") console.log("Kon'nichiwa sekai");

let testScore = 78;
if (testScore >= 75) console.log("A");
else if (testScore >= 60) console.log("B"); //60-74
else if (testScore >= 50) console.log("C"); //50-59
else if (testScore >= 40) console.log("D"); //40-49
else console.log("F"); //39-0

//Air Conditioning
let curTmp = 23;
let acFunc = false;
let desiredTmp = 25; 

if (acFunc == true && (curTmp > desiredTmp)){
    console.log("Turn on the A/C Please");
}else if (acFunc == false && (curTmp > desiredTmp)){
    console.log("Fix the A/C now! It's hot!")
}else if (acFunc == false && (curTmp < desiredTmp)){
    console.log("Fix the A/C whenever you have the chance... It's cool...");
}

//You and Your Government
let userAge = 22;
if (userAge >= 35) console.log("You can vote AND hold any place in government!");
else if (userAge >= 25)  console.log("You can vote AND run for the Senate!");
else if (userAge >= 18)  console.log("You can vote!");
else console.log("You can't vote yet");

//Golf
let userScore = 2;
let par = 7;
if (userScore == 1){
    console.log("Hole in one");
}else if (userScore <= par - 2 ){
    console.log("Eagle");
}else if (userScore == par - 1){
    console.log("Birdie");
}else if (userScore == par){
    console.log("Par");
}else if (userScore == par + 1){
    console.log("Bogey");
}else if (userScore == par + 2){
    console.log("Double Bogey");
}else if (userScore >= par + 3){
    console.log("Not sure");
}

//Serge Says
// let userMsg = "How are you?"
let userMsg = "DON'T GO THERE. SERIOUSLY."
if (userMsg.trim() == ""){
    console.log("Fine. Be that way!");
}else if (userMsg.includes("?") == true){
    console.log("Sure.");
}else if (userMsg.toUpperCase() === userMsg){
    console.log("Woah, chill out!");
}else{
    console.log("Whatever.");
}

//The Pluralizer
let noun = "kitten";
let vowel = "aeiou";
if (noun.endsWith("s") || noun.endsWith("x") || noun.endsWith("ch") || noun.endsWith("sh")){
    console.log("singular: " + noun + "\nplural: " + noun+ "es");
}else if (noun.endsWith("y")){
        if (vowel.includes(noun[noun.length -2])){
            console.log("singular: " + noun + "\nplural: " + noun+ "s");
        }else{
            console.log("singular: " + noun + "\nplural: " + noun.slice(0,-1) + "ies");
        }
}else if (noun.endsWith("o")){
    console.log("singular: " + noun + "\nplural: " + noun + "s or " + noun + "es");
}else if (noun.endsWith("f")){
    console.log("singular: " + noun + "\nplural: " + noun + "s or " + noun.slice(0,-1) + "ves");
}else if (noun.endsWith("fe")){
    console.log("singular: " + noun + "\nplural: " + noun + "s or " + noun.slice(0,-2) + "ves");
}else if (noun.endsWith("us")){
    console.log("singular: " + noun + "\nplural: " + noun.slice(0,-2) + "i");
}else if (noun.endsWith("is")){
    console.log("singular: " + noun + "\nplural: " + noun.slice(0,-2) + "es");
}else if (noun.endsWith("ix") || noun.endsWith("ex")){
    console.log("singular: " + noun + "\nplural: " + noun.slice(0,-2) + "ices");
}else if (noun.endsWith("eau")){
    console.log("singular: " + noun + "\nplural: " + noun.slice(0,-3) + "eaux");
}else if (noun.endsWith("oo")){
    console.log("singular: " + noun + "\nplural: " + noun.slice(0,-2) + "ee");
}else if (noun.endsWith("a")){
    console.log("singular: " + noun + "\nplural: " + noun.slice(0,-1) + "ae");
}else if (noun.endsWith("ouse")){
    console.log("singular: " + noun + "\nplural: " + noun.slice(0,4) + "ice");
}else{
    console.log("singular: " + noun + "\nplural: " + noun + "s");
}

//The Rest 

let userInp = "Rock";
let game = ["Rock","Paper","Scissors"];
let random = game[Math.floor(Math.random()*game.length)];

//single game
// if (userInp == "Rock" && random == "Rock"){
//     console.log("Tie!");
// } else if (userInp == "Rock"){
//     if (random == "Scissors") console.log("Rock smashes scissors! You win!");
//     else console.log("Paper covers rock! You lose.");
// }else if (userInp == "Paper"){
//     if (random == "Rock") console.log("Paper covers rock! You win!");
//     else console.log("Scissors cuts paper! You lose.");
// }else if (userInp == "Scissors"){
//     if (random == "Paper") console.log("Scissors cuts paper! You win!");
//     else console.log("Rock smashes scissors! You lose.");
// }

//best of three games

let userInpBestOf3 = ["Paper","Paper","Rock"];
let userTotalWin =0;
let pcTotalWin = 0;

for (let i = 0; i < 3 ;i ++){
    let randomBestOf3 = game[Math.floor(Math.random()*game.length)];
    if (userInpBestOf3[i] == "Rock" && randomBestOf3 == "Rock"){
        console.log("Tie!");
    } else if (userInpBestOf3[i] == "Rock"){
        if (randomBestOf3 == "Scissors") {
            console.log("Rock smashes scissors! You win!");
            userTotalWin +=1;
        }else{
            console.log("Paper covers rock! You lose.");
            pcTotalWin +=1;
        } 
    }else if (userInpBestOf3[i] == "Paper"){
        if (randomBestOf3 == "Rock"){
            console.log("Paper covers rock! You win!");
            userTotalWin +=1;
        }else{
            console.log("Scissors cuts paper! You lose.");
            pcTotalWin +=1;
        } 
    }else if (userInpBestOf3[i] == "Scissors"){
        if (randomBestOf3 == "Paper"){
            console.log("Scissors cuts paper! You win!");  
            userTotalWin +=1;
        }else{
            console.log("Rock smashes scissors! You lose.");
            pcTotalWin +=1;
        } 
    }     
}

if (userTotalWin == pcTotalWin){
    console.log("Final score: Tie!");
}else if (userTotalWin > pcTotalWin){
    console.log("Final score: "+ userTotalWin +"-" + pcTotalWin + "\n\nYou win! ");
}else{
    console.log("Final score: "+ userTotalWin +"-" + pcTotalWin + "\n\nYou Lose! ");
}