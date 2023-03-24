/**
 * Standard for loop
 * Remember these points(!):
 * 1. Define the starting point
 * 2. Define end/exit condition
 * 3. Decide increment/decrement
 */

/* for (let i = 0; i>= 10; i++) {
    console.log(i);
} */

// Advanced use case with an Array
let arr = ["Apple", 10, "Orange", 20, "Grapes", 30];
let sum = 0
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    if (typeof arr === "number") {
        // sum = sum + arr
        sum += arr
    }
}

console.log(sum);