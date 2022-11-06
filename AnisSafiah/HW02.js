//The even/odd reporter
for (let i = 0; i <=20; i ++){
    if(i % 2 == 0) {
        console.log(i + " is even");
    }else {
        console.log(i + " is odd");
    }
}

//Multiplication Tables
for (let j =1; j <= 12; j ++){
    for (let k=1;k<=9;k++){
        console.log(j + "*" + k + "="+ (j*k));
    }
}

//The Grade Assigner
for (let testScore=60; testScore<=100; testScore++){
    if (testScore >= 75) console.log("For " + testScore +", you got an A");
    else if (testScore >= 60) console.log("For " + testScore +", you got a B"); //60-74
    else if (testScore >= 50) console.log("For " + testScore +", you got a C"); //50-59
    else if (testScore >= 40) console.log("For " + testScore +", you got a D"); //40-49
    else console.log("For " + testScore +", you got a F"); //39-0
}

//Golf
for (let userScore = 1; userScore <=8; userScore++){
    for (let par=3; par <=5; par++){
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
    }
}

//99 Bottles of Beer
let noun = "bottle"
for (let b =99; b>=0; b--){
    if (b == 0){
        console.log("No more " + noun +"s of beer on the wall, no more " + noun +"s of beer.\nGo to the store and buy some more, 99 " +noun +"s of beer on the wall.")
    }else if (b == 1){
        console.log(b + " " + noun +" of beer on the wall, " + b + " " +noun +" of beer.\nTake one down and pass it around, no more " +noun +"s of beer on the wall.")
    }else{
        console.log(b + " " + noun + "s of beer on the wall, " + b + " " +noun +"s of beer.\nTake one down and pass it around, " + (b-1) + " " + noun +"s of beer on the wall." )
    }
}
