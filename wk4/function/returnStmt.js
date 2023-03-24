"use strict";

/**
 * Return statement
 * 
 * @scenario
 * 1. Return a single primitive value
 * 2. Returns an expression (that evaluates to a value)
 * 3. Return an object type
 * 4. Return a function itself
 * 5. Return statement in conditional statement
 */

/* function addTwoNum(num1, num2) {
    if (arguments.length === 2 && typeof(num1) === "number" && "number" === typeof(num2)) {
        return num1 + num2;
    } else {
        throw Error("Not valid");
    }
} */

// Returning a function
/* function addTwoNum(num1, num2) {
    return function() {
        return num1+num2
    }
} */

// Invoking the function
let total = addTwoNum(2,2 )
console.log(total);