"use strict";

const process = require('process');
const helper = require('./throwDemo');

/**
 * try... catch
 * 
 */
let filepath = `${process.cwd()}/data/sampleData.json`;
try {
    let data = helper.readFile(filepath);
    let dataObj = JSON.parse(data);
    console.log(dataObj);
} catch (error) {
    console.log(`I can handle the error...`);
    
    /**
     * Retry
     * Log the error msg move
     * Custom error
     */
    console.log(typeof(error));
    console.log(error.name);
    console.log(error.message);
    let customErr = `Error reading the file: ${filepath}. ${error}`;
    throw customErr
}

