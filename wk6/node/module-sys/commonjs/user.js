"use strict";

/**
 * Importing
 * 1. Own code
 * 2. npm package
 */

const data = require('./helper'); // default import everything as data
const {obj} = require('./helper'); // named import

// check
console.log(typeof(data));
console.log(data);
console.log(data.greet());
console.log(obj);