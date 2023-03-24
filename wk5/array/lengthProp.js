"use strict";

/**
 * length property rules
 * 
 * @rules
 * 1. length property returns total index + 1. This does not mean there are
 * that many elements in that object.
 * 2. length property can be set manually
 */

// Rule 1
/* let arr = []
arr[4] = "kiwi"
console.log(arr);
console.log(`Total elements: ${arr.length}`); // 5

let count = 0;
arr.forEach(e => {
    if (e) {
        count++;
    }
});

console.log(`The actual count is: ${count}`); */

// Rule 2
let arr = []
arr.length = 10
console.log(arr);
console.log(`The total elements: ${arr.length}`)