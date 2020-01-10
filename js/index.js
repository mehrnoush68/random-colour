// Example of a random number (0-255), stored into a variable
let colourRed =   Math.floor(Math.random() * 256);
let colourGreen = Math.floor(Math.random() * 256);
let colourBlue =  Math.floor(Math.random() * 256);

/* Breakdown:
Math.random()
    Generates a random number between 0 and 1 (aka, a percentage!)
Math.random() * 256
    Multiplies a percentage by 256 (aka, a percent of 256)
Math.floor(Math.random() * 256)
    Round the resulting number down (aka, floor! "ceil" will round up)
*/


// GENERATE AN RGB NUMBER AS A STRING
// 1. Randomize a number between 0-255 for red
// 2. Test by putting the number in the console
// 3. Randomize 2 more numbers for green and blue
// 4. Put them in the console to ensure they're not the same
// 5. Format the number as follows into the console: rgb(#, #, #)

console.log(`rgb(${colourRed}, ${colourGreen}, ${colourBlue})`);

// 
