"use strict";

/**
 * Arrow functions
 * 
 * @scenario
 * 1. Convert a normal function to arrow function
 * 2. No param
 * 3. Single param
 * 4. More than one param (single and more than one statements)
 * 5. forEach() method example
 */

// 1. Convert a normal function to arrow function
let sum = (num1, num2) => {
    if (arguments.length === 2 && typeof(num1) === "number" && "number" === typeof(num2)) {
        return num1 + num2;
    } else {
        throw Error("Not valid");
    }
}