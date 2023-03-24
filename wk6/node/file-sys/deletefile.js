"use strict";

/**
 * File operations - Delete file
 * 
 * @method
 * fs.unlinkSync()
 * 
 */

const fs = require('fs');
const process = require('process');
let filepath = `${process.cwd()}/data/err.json`
fs.unlinkSync(filepath)