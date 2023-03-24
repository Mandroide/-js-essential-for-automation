/**
 * Conditional statements use cases:
 * 1. Just if statement
 * 
 */

// Use case 1: Just if - handling a random popup
/* let popupExist = true
if (popupExist) {
    console.log(">>> Perform click action...")
} */

// Use case 2: Just if (NOT) - Checking for falsy value
/* let data
if(!data) throw Error(">>> No valid data provider") */

// Use case 3: if...else: If file exist read the file, else create the file
/* let fileExist = "Y"

if (fileExist === "Y") {
    console.log(">>> Reading the file");   
} else {
    console.log(">> Creating the file");
} */

// Use case 4: if else if ... Nested conditions... Act based on list of conditions
/* let err = ""

if (err === "Error") {
    console.log(">> Retry...")
} else if (err === "AssertionError") {
    console.log(">> Fail the test");
} else if (err === "DataValidation") {
    console.log(">> Read the test data file...");
} else {
    console.log(">> Print the error message");
} */

// Use case 5: If else [Inner conditions]: Quering a database for test data
/* let isSuccess = true;

if (isSuccess) {
    console.log(">> Storomg tje db values..")
} else {
    console.log("No data received");
    let errorCode = "ACCEPT"
    if (errorCode == "ACCEPT") {
        console.log(">> Fail the test...")
    }
} */

// Use case 6: if in loops
for (let i = 0; i <= 10; i++) {
    if (i === 6) break
    console.log(i);
}

console.log(`>> After the for loop...`);