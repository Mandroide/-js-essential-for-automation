"use strict";

/**
 * How callback functions works?
 */

// Simple function that prints the given message
function printMsg(msg) {
    console.log("Calling the callback function...")
    console.log(msg);
}

function greet(name, greeter) {
    console.log("Calling the main function...")
    let greetMsg = `Hello, ${name}`; // Action of async operations
    greeter(greetMsg) // The process value will be ATTACHED to the callback function
}

// Invoking

// Option 1:
// greet("Rob", printMsg);

// Option 2:
/* greet("Rib", function (val) {
    console.log(`The received value from the main function: ${val}`);
}) */

// Option 3:
let res = greet("Rib", (val) => {
    return `The received value from the main function: ${val}`;
})

console.log(res);

/**
 * Understanding return statement in callback functions
 */
