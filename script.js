let isRaining = false;
let temp = 13;

if(!isRaining && temp < 15){
    console.log("it is not raining and it's really cold")
} else {
    console.log("it is either not raining or it is not really cold")
}

let isSomeoneGettingMarried = false;
let isGoingSomewhereFancy = false;

if(isSomeoneGettingMarried || isGoingSomewhereFancy){
    console.log("wear a suit")
} else {
    console.log("do not wear a suit")
}

let hour = 8
let greeting;

if(hour < 8){
    greeting = "good morning"
} else if (hour < 12){
    greeting = "good mid-morning"
} else if (hour < 16){
    greeting = "good afternoon"
}

if(greeting == undefined){
    console.log("sorry, not greeting you")
}

switch(hour){
    case 8:
        greeting = "good morning"
        break;
    case 12:
        greeting = "good mid-morning"
        break;
    case 16:
        greeting = "good afternoon"
        break;
    default:
        greeting = "good evening"
        break;
}

console.log("greeting: " + greeting)

let color = "blue";
switch(color){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("no color")
}

for(let i = 0; i <= 9; i = i + 1){
    console.log(i)
}

console.log("loop is done")

let dogs = ["pug", "poodle", "lab", "pomeranean chihuahua"];

//directly using index number
console.log(dogs[0])

//loop using all index numbers
for(let i = 0; i < dogs.length; ++i){
    // if(dogs[i] === "poodle"){
        console.log(dogs[i] + "s are awesome")
    //     console.log("all i want is a poodle");
    //     break;
    // }
}

let number = 0;
while(number < 100){
    console.log(number);
    number += 10;
}

let isSnowing = true;
let inchesOfSnow = 0;
//while it is snowing, then continue to run the logic
while(isSnowing){
    console.log("it is snowing until it is 10 inches")
    inchesOfSnow++;
    console.log("inches of snow: " + inchesOfSnow)
    if(inchesOfSnow >= 10){
        isSnowing = false;
        console.log("the world is 10 inches, it cant snow more than that")
    }
}









