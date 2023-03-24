/**
 * While loop
 * @when to use?
 *      - Until a condition is met (or when the end condition is not known)
 *      - e.g. Retry until you get a response
 * Scenario:
 *      Qaiting for an API response, retry max of 10 times
 */

// Syntax
let count = 1;
let isDataReturned = false;
while (isDataReturned) {
    console.log(count);
    if (count == 5) break;
    count++;
}