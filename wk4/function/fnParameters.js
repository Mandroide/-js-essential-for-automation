"use strict";

/**
 * Function parameter
 * 
 * @scenario
 * 1. Default param
 * 2. Passing undefined/any falsy values if not known
 * 3. Passing primitives, object types as arg
 */

// 1. Default param
/* function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}`)
}

greet("Rob", "Hi") */

// 2. Passing undefined/any falsy values if not known
/* function printFullName(fname, mname, lname) {
    if (mname) {
        console.log(`The fullname is: ${fname} ${mname} ${lname}`);
    } else {
        console.log(`The fullname is: ${fname} ${lname}`);
    }
}

printFullName("Rob", undefined, "Bob") */

// 3. Passing primitives, object types as arg
function printFullName(personObj) {
    console.log(`${personObj.firstname} ${personObj.lastname}`);
}

printFullName({
    firstname: "Rob",
    lastname: "Bob"
})