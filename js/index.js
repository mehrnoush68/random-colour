/* APPROACHING TO PROBLEM SOLVING A CODE CHALLENGE

**Goal:** Design an interface with a button that when clicked, will randomly set a background colour to the document's body. Remember there are >16M colours available on the standard RGB scale, with each colour consisting of an R, G and B in 256 different shades (0 to 255, in decimal).

The best way to solve a challenge/goal like this is to think of this as a design challenge first. Remove the "code" from the equation. Code is the implementation of the solution; The problem must be analyzed, dissected, planned and proven/tested before becoming a viable solution. 

Start by determining the major (macro) steps that will work toward solving the goal. Then, break down the macro steps into smaller (micro) steps that are more manageable. The micro steps will be solved with code and will come together to solve the macro steps. 

Test each micro solution in isolation and independent of the macro solution when possible. The more often you test, the less likely something can break and be difficult to track down.

Let's start with one of the macro steps...
*/


// MACRO STEP: 
//   Generate a random RGB number
// MICRO STEPS:
//   1. Use the browser's "Inspect" tool to ensure that applying an rgb() style to the body will 
//   2. Randomize a number between 0-255 (this will be red)
//   3. Test by putting the number in the console and refreshing repeatedly
//   4. Randomize 2 more numbers for green and blue
//   5. Put them in the console to ensure they're not the same, refresh repeatedly
//   6. Format the number into a string and test in the console: rgb(#, #, #)


//STEP one: Randomize 3 colours (0-255)
// let colourRed =   Math.floor(Math.random() * 256);
// let colourGreen = Math.floor(Math.random() * 256);
// let colourBlue =  Math.floor(Math.random() * 256);

// console.log(`rgb(${colourRed}, ${colourGreen}, ${colourBlue})`);

/*  Breakdown of the random number code (the right side of = assignment):
- Math.random()
    Generates a random decimal number between 0 and 1 (aka, a percentage! 0.5 == 50%)
- Math.random() * 256
    Multiplies the random percentage by 256 (aka, a percent of 256 possible options)
- Math.floor(Math.random() * 256)
    Round the resulting number down (aka, floor! Note: "ceil" will round up) to create options 0-255
*/




// NEXT STEPS
// - Determine the remaining macro steps, write them out!
// - Once determined, break each step down into micro steps
// - Test each macro solution in isolation (console output helps)
// - Begin to combine the steps together to create a final solution (test as you go!)

//STEP two: Make a button clickable (and do something!)

//A: Find the button
// let randomBtn = document.querySelector('.randomize')
//------
//B: Assign a click listener to the button
//C: Output a message to test

// randomBtn.addEventListener('click', (event) => {
//     console.log('Click!')
// })

//you can add (mouseenter , mouseleave, mousemove,...) to the randomBtn.addEventListener

//-----------
//STEP three: Change the background colour of the body
// A: Find the body
// let bodyElement = document.querySelector('body')

// B: Assign a color to the backgroundColor property 
// bodyElement.style.backgroundColor = 'tomato'






//now we should combine all steps first combine step1, 2 and 3.
let randomBtn = document.querySelector('.randomize')
randomBtn.addEventListener('click', (event) => {
    let colourRed =   Math.floor(Math.random() * 256);
    let colourGreen = Math.floor(Math.random() * 256);
    let colourBlue =  Math.floor(Math.random() * 256);

    console.log(`rgb(${colourRed}, ${colourGreen}, ${colourBlue})`);

    //assign the rgb (#,#,#) string to the background colour of the body
    let bodyElement = document.querySelector('body')
    bodyElement.style.backgroundColor = `rgb(${colourRed}, ${colourGreen}, ${colourBlue})`
})