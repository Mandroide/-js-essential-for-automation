"use strict";

/**
 * process.cwd()
 * 
 * @usecase
 * 1. Get the current working dir
 * 
 * @scenario
 * 1. Return value of cwd()
 * 2. Different between __dirname
 * 3. Get a path of file in project dir
 * 
 * @rule
 * Wherever you issue the node command, that becomes the cwd
 */
const process = require('process');
console.log(process.cwd());
console.log(__dirname);

// Use case of getting a file path
console.log(`${process.cwd()}/data/sample`);
console.log(`${__dirname}/data/sample`);