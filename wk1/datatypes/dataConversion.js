let val1 = "5";
let val2 = "5.5";

console.log(`The type of val1: ${typeof(val1)}`);
console.log(`The type of val2: ${typeof(val2)}`);

// Convert a string to number
// let numVal1 = parseInt(val1);
// let numVal2 = parseFloat(val2);

// unary plus
numVal1 = +val1;
numVal2 = +val2;

console.log(`The type of val1: ${typeof(numVal1)}, and the value: ${numVal1}`); // number
console.log(`The type of val2: ${typeof(numVal2)}, and the value: ${numVal2}`); //number