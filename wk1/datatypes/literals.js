/**
 * 1. string
 * 2. number
 * 3. boolean
 * 4. Object
 * 5. Array
 * 6. Regexp
 * 7. undefined and null
 * 
 */

// string
let str = 'Hello' // Single quote
let str1 = "Hello" // Double quote
let str3 = `${str}, World!` // Template literal
console.log(str3)

// number
let num = 5 // integer
let num2 = 5.5 // floating point

// boolean
let bool = true

// Object
let obj = {}

// Array
let arr = []

// Regexp
let re = /abc/

// undefined, null
let val1
let tempObj = null

console.log(`The type of str is: ${typeof str}`);
console.log(`The type of number is: ${typeof num}`);
console.log(`The type of boolean is: ${typeof bool}`);
console.log(`The type of Object is: ${typeof obj}`);
console.log(`The type of Array is: ${typeof arr}`);
console.log(`The type of Regexp is: ${typeof re}`);
console.log(`The type of undefined is: ${typeof val1}`);
console.log(`The type of null is: ${typeof tempObj}`);