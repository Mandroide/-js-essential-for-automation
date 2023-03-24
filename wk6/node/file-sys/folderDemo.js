/**
 * Folder operations
 * 
 * @rule
 * fs modules expects a full path (not relative)
 * @methods
 * 1. existsSync
 * 2. mkdirSync
 * 3. rmdirSync
 * 4. readdirSync
 * 
 * @scenario
 * 1. Check if dir exist
 * 2. If exist, delete (old results). If not exist, create (screenshot)
 * 3. Get files and sub folder of a dir.
 */

const fs = require('fs');
const process = require('process');

const allureReportsPath = `${process.cwd()}/allure-reports`;
const screenshotsPath = `${process.cwd()}/screenshots`;
let reportExists = fs.existsSync(allureReportsPath)
let resultExists = fs.existsSync(screenshotsPath)

console.log(`Report exists? :${reportExists}`);
console.log(`Result exist? :${resultExists}`);

// delete
if (reportExists) {
    fs.rmdirSync(allureReportsPath)
}

// Create
if (!resultExists) {
    fs.mkdirSync(screenshotsPath)
}

// Read sub-dir/files 
let resArr = fs.readdirSync(`${process.cwd()}/data`)
console.log(resArr);