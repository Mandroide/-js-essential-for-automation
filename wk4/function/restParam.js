"use strict";

/**
 * Rest parameter and arguments object
 * 
 * @definition
 * 1. The rest param is denoted by ...<paramName>
 * The rest parameter syntax allows us to represent an indefinite number of arguments as an array
 * 
 * 2. arguments object made available within the function body
 * 3. The arguments can be access by array-like notation arguments[i]
 * 4. It has a length property
 * 
 */

function addTwoNum(...nums) {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
}

console.log(addTwoNum(1,2,3,4,5,6));