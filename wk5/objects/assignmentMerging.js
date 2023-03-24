"use strict";

/**
 * Setting up values through assignment operator
 * 1. Top level property
 * 2. Inner property
 * 3. Assignment to other obj
 */

let reportData = {
    status: "PASS",
    scope: ["smoke", "reg", "e2e"],
    previousRun: {
        status: "FAIL",
        runID: 6789
    }
};

// Assignments
reportData.status = "FAIL";
reportData.previousRun.status = "PASS";
reportData["previousRun"]["status"] = "PASS";
console.log(reportData);

let obj = {}
obj = reportData;
console.log(obj);