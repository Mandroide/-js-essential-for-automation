"use strict";

/**
 * Named function
 * @definition
 * Function that has a name/identifier
 * 
 * @scenario
 * 1. function that returns a value
 * 2. function that does an action
 * 3. Calling function
 * 4. Any type of data can be provided and no type checking is done
 * 5. More or less args can be provided and -
 *    no check if performed on # number of parameter(s) Vs Number of args received
 * 6. Function name and typeof Operator
 * 
 */

// 1. function that returns a value
function addTwoNum(num1, num2) {
    if (arguments.length === 2 && typeof(num1) === "number" && "number" === typeof(num2)) {
        return num1 + num2;
    } else {
        throw Error("Not valid");
    }
}

// 2. function that does an action
function click(ele) {
    console.log(`Clicking the given ele: ${ele}`)
    // ele.click()
}

// 3. calling
// let total = addTwoNum(5,5);
// console.log(total);
// click("loginBtn")

// 4. Any type of data can be provided and no type checking is done
// let total = addTwoNum("five", |five");
// let total = addTwoNum();
let total = addTwoNum(5, 5);

console.log(typeof addTwoNum)
console.log(typeof addTwoNum(2, 2))