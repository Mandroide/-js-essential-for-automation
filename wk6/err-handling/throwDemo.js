"use strict";
const fs = require('fs');
// const process = require('process');
/**
 * throw
 * 
 * @syntax
 * throw expression
 * 
 */

// Definition
function readFile(filepath) {
    if (!fs.existsSync(filepath)) {
        throw Error(`Given path: ${filepath} does not exist`)
    }
    let data = fs.readFileSync(filepath, "utf-8");
    return data;
}

// Invoking
/* let filepath = `${process.cwd()}/data/sampleData.json`;
let data = readFile(filepath)
console.log(data); */

module.exports = {
    readFile
}