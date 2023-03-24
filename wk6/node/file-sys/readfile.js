"use strict";

/**
 * File operations - Read file
 * 
 * @method
 * fs.readFileSync()
 */
const fs = require('fs');
const filepath = `${process.cwd()}/data/sampleData.json`
let data = fs.readFileSync(filepath, "utf-8")
console.log(data);