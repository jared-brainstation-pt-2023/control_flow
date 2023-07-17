//study the code and understand ALL of the console logs

/*

======================================================
#1          if/else logic example #1
======================================================

*/

//creating a variable named 'isRaining' as a boolean datatype with a value of false
let isRaining = false;
//creating a variable named 'temp' as a number datatype with a value of 13
let temp = 13;
//if the 'isRaining' variable value is false AND (&&) the 'temp' variable value is less than 15 ...
if(!isRaining && temp < 15){
    // ... then log "it is not raining and it's really cold" to the console
    console.log("it is not raining and it's really cold")
//if the 'isRaining' variable value is true OR the 'temp' variable value is greater than or equal to 15 ...
} else {
    // ... then log "it is either not raining or it is not really cold" to the console
    console.log("it is either not raining or it is not really cold")
}

/*

======================================================
#2          if/else logic example #2
======================================================

*/

//creating a variable named 'isRaining' as a boolean datatype with a value of false
let isSomeoneGettingMarried = false;
//creating a variable named 'isRaining' as a boolean datatype with a value of false
let isGoingSomewhereFancy = false;
//if the 'isSomeoneGettingMarried' variable value is true OR (||) the 'isGoingSomewhereFancy' variable value is true ...
if(isSomeoneGettingMarried || isGoingSomewhereFancy){
    // ... then log "wear a suit" to the console
    console.log("wear a suit")
//if the 'isSomeoneGettingMarried' variable value is false AND the 'isGoingSomewhereFancy' variable value is false ...
} else {
    console.log("do not wear a suit")
}

/*

======================================================
#3          if/else if/else logic example
======================================================

*/

//creating a variable named 'hour' as a number datatype with a value of 8
let hour = 8
//creating a variable named 'greeting' as an undefined datatype with no value
let greeting;
//if the 'hour' variable value is less than 8 ...
if(hour < 8){
    // ... then assign the value of the 'greeting' variable to be "good morning"
    greeting = "good morning"
//if the 'hour' variable value is less than 12 ...
} else if (hour < 12){
    // ... then assign the value of the 'greeting' variable to be "good mid-morning"
    greeting = "good mid-morning"
//if the 'hour' variable value is less than 16 ...
} else if (hour < 16){
    // ... then assign the value of the 'greeting' variable to be "good afternoon"
    greeting = "good afternoon"
//if all the 'if' and 'else if' statements are false ...
} else {
    // ... then set the greeting variable value to "good evening"
    greeting = "good evening"
}

//log the value of the 'greeting' variable to the console
console.log("greeting value: " + greeting)

//separate 'if' statement from the one right above
//if the 'greeting' variable value is equal to undefined
if(greeting == undefined){
    //then log "sorry, not greeting you" to the console
    console.log("sorry, not greeting you")
}

/*

======================================================
#4          switch statement example #1
======================================================

*/

//using the 'hour' variable from example #3
//if the 'hour' variable value is ...
switch(hour){
    //... 1, then ...
    case 1:
        //... set the 'greeting' variable value from example #3 to "good morning" and ...
        greeting = "good morning"
        //... stop the switch statement here
        break;
    //... 2, then ...
    case 2:
        //... set the 'greeting' variable value from example #3 to "good morning" and ...
        greeting = "good morning"
        //... stop the switch statement here
        break;
    //... 3, then ...
    case 3:
        //... set the 'greeting' variable value from example #3 to "good morning" and ...
        greeting = "good morning"
        //... stop the switch statement here
        break;
    //... 4, then ...
    case 4:
        //... set the 'greeting' variable value from example #3 to "good morning" and ...
        greeting = "good morning"
        //... stop the switch statement here
        break;
    //... 5, then ...
    case 5:
        //... set the 'greeting' variable value from example #3 to "good morning" and ...
        greeting = "good morning"
        //... stop the switch statement here
        break;
    //... 6, then ...
    case 6:
        //... set the 'greeting' variable value from example #3 to "good morning" and ...
        greeting = "good morning"
        //... stop the switch statement here
        break;
    //... 7, then ...
    case 7:
        //... set the 'greeting' variable value from example #3 to "good morning" and ...
        greeting = "good morning"
        //... stop the switch statement here
        break;
    //... 8, then ...
    case 8:
        //... set the 'greeting' variable value from example #3 to "good morning" and ...
        greeting = "good morning"
        //... stop the switch statement here
        break;
    //... 9, then ...
    case 9:
        //... set the 'greeting' variable value from example #3 to "good mid-morning" and ...
        greeting = "good mid-morning"
        //... stop the switch statement here
        break;
    //... 10, then ...
    case 10:
        //... set the 'greeting' variable value from example #3 to "good mid-morning" and ...
        greeting = "good mid-morning"
        //... stop the switch statement here
        break;
    //... 11, then ... 
    case 11:
        //... set the 'greeting' variable value from example #3 to "good mid-morning" and ...
        greeting = "good mid-morning"
        //... stop the switch statement here
        break;
    //... 12, then ... 
    case 12:
        //... set the 'greeting' variable value from example #3 to "good mid-morning" and ...
        greeting = "good mid-morning"
        //... stop the switch statement here
        break;
    //... 13, then ...
    case 13:
        //... set the 'greeting' variable value from example #3 to "good afternoon" and ...
        greeting = "good afternoon"
        //... stop the switch statement here
        break;
    //... 14, then ...
    case 14:
        //... set the 'greeting' variable value from example #3 to "good afternoon" and ...
        greeting = "good afternoon"
        //... stop the switch statement here
        break;
    //... 15, then ...
    case 15:
        //... set the 'greeting' variable value from example #3 to "good afternoon" and ...
        greeting = "good afternoon"
        //... stop the switch statement here
        break;
    //... 16, then ...
    case 16:
        //... set the 'greeting' variable value from example #3 to "good afternoon" and ...
        greeting = "good afternoon"
        //... stop the switch statement here
        break;
    //... not 1-16, then ...
    default:
        //... set the 'greeting' variable value from example #3 to "good evening"
        greeting = "good evening"
        //no break needed since this is the end of the switch statement
}

//log the value of the 'greeting' variable to the console
console.log("greeting: " + greeting)

/*

======================================================
#5         switch statement example #2
======================================================

*/

//creating a variable named 'color' as a string datatype with a value of "blue"
let color = "blue";
//if the 'color' variable value is ...
switch(color){
    // ... red ...
    case "red":
        // ... then log "color is red" to the console and ...
        console.log("color is red");
        // ... stop the switch statement here
        break;
    // ... blue ...
    case "blue":
        // ... then log "color is blue" to the console and ...
        console.log("color is blue");
        // ... stop the switch statement here
        break;
    // ... not red or blue ... 
    default:
        // ... then log "no color" to the console
        console.log("no color")
        //no break needed since this is the end of the switch statement

}

/*

======================================================
#6         for loop example #1
======================================================

*/

//in the first required section of the loop, i am creating a variable named 'i' as an integer datatype with a value of 0
//in the second required section of the loop, i am stating to stop the loop once the variable value of 'i' is greater than 9, because the loop is going to keep going while the variable value of 'i' is less than or equal to 9
//in the third required section of the loop, i am stating to change the variable value of 'i' by 1 + 1 each time through the loop
//overall, this for loop is saying to loop 10 times, with 'i' being +1 every time through the loop while the variable value of 'i' is less than or equal to 9, and to stop the loop once the variable value of 'i' is greater than 9
for(let i = 0; i <= 9; i = i + 1){
    //log the value of 'i' to the console for every single time we go through the loop
    //in this case, the variable value of 'i' will change from 0 to 1 to 2 to 3 to 4 to 5 to 6 to 7 to 8 to 9, and will stop at 9 because we're telling the for loop to keep going while 'i' is less than or equal to 9
    console.log(i)
}

//log "loop is done" to the console once the for loop right above is finished
console.log("loop is done")

/*

======================================================
#7         for loop example #2
======================================================

*/

//creating a variable named 'dogs' as an array datatype with a value of an array of string with types of dogs
let dogs = ["pug", "poodle", "lab", "pomeranean chihuahua"];

//logging the value of the 0 index of the 'dogs' array
console.log(dogs[0])

//in the first required section of the loop, i am creating a variable named 'i' as an integer datatype with a value of 0
//in the second required section of the loop, i am stating to stop the loop once the variable value of 'i' is greater than or equal to the length (4) of the dogs array, because the loop is going to keep going while the variable value of 'i' is less than the length (4) of the dogs array
//in the third required section of the loop, i am stating to change the variable value of 'i' by +1 each time through the loop
//overall, this for loop is saying to loop 4 times (0 index to 3 index), with 'i' being +1 every time through the loop while the variable value of 'i' is less than the length (4) of the dogs array, and stop the loop once is greater than or equal to 4
for(let i = 0; i < dogs.length; ++i){
    //in this case, the variable value of 'i' will change from 0 to 1 to 2 to 3, and will stop at 3 because we're telling the for loop to keep going while 'i' is less than 4

    //every time through the lop, log the value of the variable value of 'i' index of the 'dogs' array to the console
    console.log(dogs[i] + "s are awesome")
    //if 'i' index in 'dogs' array is equal to the string "poodle" ...
    if(dogs[i] === "poodle"){
        // ... then log "all i want is a poodle" to the console and ...
        console.log("all i want is a poodle");
        // ... kill the for loop
        break;
    }
}

/*

======================================================
#8         while loop example #1
======================================================

*/

//creating a variable named 'number' as an integer datatype with a value of 0
let number = 0;
//while the variable value of 'number' is less than 100 ...
while(number < 100){
    //... log the variable value of 'number' to the console and ...
    console.log("number: " + number);
    // ... increment the value of the 'number' variable by 10
    // if we dont increment the value of the 'number' variable, then this while loop will go on forever
    number += 10;
}
//the while loop will end once the variable value of 'number' is greater than or equal to 100
//meaning the while loop will keep going while the variable value of 'number' is less than 100 

/*

======================================================
#9         while loop example #2
======================================================

*/

//creating a variable named 'shouldShovel' as a boolean datatype with a value of false
let shouldShovel = false;
//creating a variable named 'inchesOfSnow' as an integer datatype with a value of 0
let inchesOfSnow = 0;
//while should shovel is equal to false (you should not shovel)
while(!shouldShovel){
    //if the variable value of 'inchesOfSnow' is less than 4
    if(inchesOfSnow < 4){
        //logging to the console that there is no need to shovel since inches of snow is less than 4 inches
        console.log("no need to shovel since there's only " + inchesOfSnow + " inches of snow")
        //incrementing the variable value of 'inchesOfSnow' by 1 each time through the while loop
        inchesOfSnow++;
    //if the variable value of 'inchesOfSnow' is great than or equal to 4
    } else {
        //logging to the console that it's time to shovel
        console.log("time to start shoveling since there are 4 or more inches of snow")
        //setting the variable value of 'shouldShovel' to true in order to stop the while loop, meaning that you should now shovel
        shouldShovel = true;
    }
}









