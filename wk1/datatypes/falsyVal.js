/**
 * Falsy values in boolean context:
 * 1. false
 * 2. undefined -> NaN in numeric context
 * 3. null -> numeric context is 0
 * 4. 0.
 * 5. NaN
 * 6. "" (empty string)
 */

let val  = NaN

if (val) {
    console.log('Condition met...');
} else {
    console.log(`Given ${val} is a falsy val`);
}

let val2 = 5 + undefined;
console.log(val2);

let val3 = 5 + null;
console.log(val3);