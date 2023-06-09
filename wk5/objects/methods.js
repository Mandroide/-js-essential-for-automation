"use strict";

/**
 * Adding method to object
 * different ways of creating a method
 * 1. Anonymous function with key
 * 2. Arrow function with key
 * 3. method without a key
 * 
 */

let reportData = {
    testID: 12345,
    status: "PASS",
    "PASS/FAIL Flag": "PASS",
    totalTest: 100,
    totalPass: 80,
    isInScope: true,
    passRate: function () {
        const TO_PERCENTAGE = 100;
        return (this.totalPass/this.totalTest) * TO_PERCENTAGE
    }
}

// Call a method from an object
console.log(reportData.passRate());